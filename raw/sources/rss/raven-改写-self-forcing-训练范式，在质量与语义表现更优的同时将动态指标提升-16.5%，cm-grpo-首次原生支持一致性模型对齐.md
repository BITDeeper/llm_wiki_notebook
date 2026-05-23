---
title: "RAVEN 改写 Self-Forcing 训练范式，在质量与语义表现更优的同时将动态指标提升 16.5%，CM-GRPO 首次原生支持一致性模型对齐"
date: 2026-05-22
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/HH0NxuwQEdKdCJgGWAwyqQ"
rss_id: "2247660091_1"
---
最近，视频生成正在从“一次性生成几秒短片”走向“像视频流一样持续生成”。这类场景对模型提出了一个很硬的要求：不能等完整视频全部生成完再展示，而要一段接一段地实时外推下去。
自回归（Autoregressive, AR）视频扩散模型正是为这个目标而生。它把视频拆成多个 chunk，每生成一个新 chunk，就把已经生成的历史内容作为上下文，继续推断后面的画面。这样做天然适合低延迟、长时长、交互式的视频生成。
但问题也随之而来：模型训练时看到的“历史”，和推理时真正依赖的“历史”，往往不是同一种东西。
针对这一核心痛点，来自 Imperial College London 的 Yanzuo Lu、Ronglai Zuo 和 Jiankang Deng 提出了
RAVEN（Real-time Autoregressive Video Extrapolation Network）
。RAVEN 通过一种 training-time test 框架，把模型自己 rollout 出来的历史重新打包进训练过程，让后续 chunk 的损失能够直接监督前面被缓存、被复用的历史表示。
在此基础上，作者还提出了
CM-GRPO（Consistency-model Group Relative Policy Optimization）
，把一致性模型的采样步骤直接写成条件高斯转移核，在真实推理使用的 consistency sampler 上做在线强化学习对齐，避免了此前 flow-model RL 中常见的 Euler-Maruyama 辅助随机过程。
论文地址: https://arxiv.org/abs/2605.15190
项目主页: https://yanzuo.lu/raven/
代码仓库: https://github.com/mvp-ai-lab/RAVEN
模型权重: https://huggingface.co/mvp-lab/RAVEN
自回归视频生成，难在“历史”
目前高质量视频生成主要依赖双向扩散模型。它们能在完整时空上下文中反复去噪，因此画质很强，但采样步数多、依赖未来上下文，不适合实时流式生成。
于是研究者开始把高保真的双向 teacher 蒸馏成 causal student，让 student 只看过去、逐块生成，并通过少量采样步实现实时生成。这样看起来解决了速度问题，却留下了一个更隐蔽的分布问题。
在训练时，很多方法会让模型看真实历史，或者看由真实视频加噪得到的历史。但在推理时，模型只能看自己前面生成出来的结果。一旦早期 chunk 出现轻微偏差，后面所有 chunk 都要在这个偏差上继续外推，误差会沿着历史缓存不断累积。
更进一步，即使用 Self Forcing 这类方法让模型在训练时看自己的 rollout，历史 cache 往往仍被当作 detached context 使用。也就是说，后续 chunk 的损失并不会反向监督前面历史表示本身。RAVEN 将这个问题概括为
history supervision gap
。
可以把这个差异理解成四种训练方式：
Teacher Forcing
：看真实历史，监督干净，但没有见过自己推理时会制造出的历史。
Diffusion Forcing / CausVid
：给真实前缀加不同噪声，训练更像扩散过程，但历史分布仍然不是推理分布。
Self Forcing
：训练时用自生成历史，但历史 cache 不接受来自后续 chunk 的端到端监督。
RAVEN
：直接把自生成 rollout 中的 clean endpoint 和 noisy state 交错打包，让后续 chunk 在训练中关注自己推理时真正会依赖的历史，并让损失回传到这些历史表示。
RAVEN：把测试时会发生的事情搬进训练
RAVEN 的核心思想很直接：既然推理时模型必须依赖自己生成的历史，那训练时也应该让模型在这种历史上学习。
具体来说，RAVEN 会先让当前的 causal student 进行一次自回归 self rollout。这个 rollout 会为每个 chunk 产生两类信息：
该 chunk 的 clean endpoint，也就是当前 chunk 最终生成出来的干净 latent。
该 chunk 在少步 consistency sampling 轨迹中的 noisy denoising states。
传统做法通常在完成 fake-score critic 的训练后，就把这些 rollout 状态丢掉。RAVEN 没有这么做，而是把它们重新组织成一个交错序列：
noisy state 1, clean endpoint 1,
noisy state 2, clean endpoint 2,
...
noisy state T
在这个序列中，clean endpoint 扮演后续 chunk 的历史上下文；noisy state 仍然作为被监督的去噪输入。随后，一个 causal forward pass 会在同一张注意力图里处理这些状态，使后续 chunk 的损失能够监督前面历史表示的形成。
这一步的价值不只是“换一种打包方式”。它实际上让训练过程对齐了推理时的依赖结构：
历史来自模型自己的 rollout，而不是真实数据或独立加噪前缀。
后续 chunk 确实会 attend 到这些历史表示。
后续损失会穿过注意力连接，更新模型如何构建历史。
不需要把整个自回归采样轨迹放进计算图里反向传播，训练开销仍然可控。
此外，RAVEN 还引入了 chunk-wise loss scaling。越靠后的 chunk 条件在更长历史上，也更容易承受误差传播的影响，因此训练时需要对不同位置的 chunk 分配不同权重。论文中采用的后段侧重权重在消融实验中带来了约 1.3 分的 Total Score 提升。
CM-GRPO：在 consistency sampler 本身上做 RL
视频生成的另一个重要方向是偏好对齐。近期 Flow-GRPO 等方法尝试把在线强化学习引入扩散/flow 模型，但它们通常要面对一个尴尬问题：模型推理时使用的是确定性 ODE sampler，而策略优化又需要随机性，于是只能额外引入 SDE 或 Euler-Maruyama 离散化。
这会带来新的 train-test mismatch：RL 优化的是一个辅助随机过程，推理时真正跑的却不是它。
RAVEN 使用的是 few-step consistency sampler。作者观察到，一致性采样本身就天然给出了一个条件高斯转移：当前 noisy latent 经过模型预测 clean endpoint，再按照下一噪声水平采样得到下一个 latent。
因此，CM-GRPO 直接把这个一致性采样步骤视为 policy kernel，在这个 kernel 上计算 group-relative advantage，并用 stop-gradient regression 实现策略更新。
这样做有两个好处：
RL 的 policy interface 和推理时的采样器一致，不再需要额外造一个 Euler-Maruyama 随机过程。
对自回归视频尤其关键，因为每一步生成都会改变后续 chunk 所依赖的历史，policy kernel 必须尽量贴近真实生成链路。
换句话说，RAVEN 解决的是“训练时应该看什么历史”，CM-GRPO 解决的是“对齐时应该优化哪个采样过程”。二者分别对齐了自回归视频生成中的上下文和策略接口。
实验结果：VBench 全维度领先
实验基于 Wan2.1-T2V-1.3B，沿用每个 chunk 3 个 latent frame 的设定，并在 causal distillation baseline 上比较 RAVEN 与 CM-GRPO 的增益。
在 VBench 上，RAVEN 相比近期 causal video distillation baselines 在 Total、Quality、Semantic 和 Dynamic Degree 四个维度全部取得更高分。加入 CM-GRPO 后，RAVEN + CM-GRPO 进一步达到：
Total Score: 85.46
Quality Score: 86.54
Semantic Score: 81.17
Dynamic Degree: 2.962
更值得注意的是，很多视频生成方法在质量、语义和动态程度之间会互相牺牲。比如提升画质可能让视频变静，提升动态又可能带来结构崩坏。RAVEN 的结果显示，监督历史表示并不是简单地把误差从一个指标转移到另一个指标，而是在整体上缓解了这个 trade-off。
定性结果也能看到类似趋势。Causal Forcing 在复杂运动中更容易出现结构拉伸、主体断裂或颜色过饱和；RAVEN 能更稳定地维持主体结构和时间连续性；结合 CM-GRPO 后，运动连贯性和视觉稳定性进一步增强。
消融实验：不是只靠 RL，也不是只靠 rollout
论文对 RAVEN 的 training-time test 进行了系统消融。所有设置共享相同的 ODE-distilled initialization 和 chunk-wise loss scaling，只改变历史如何形成、是否被监督。
结果显示：
Teacher Forcing 的动态程度很高，但质量和语义较弱。
Self Forcing 语义较好，但动态程度明显降低，因为历史 cache 不接受后续损失监督。
Diffusion Forcing with Self Rollout 能恢复部分动态，但质量和语义会掉。
RAVEN 在 Total Score 上最高，同时保持接近 Teacher Forcing 的动态水平。
Chunk-wise loss scaling 和 CM-GRPO 也分别经过消融。后段侧重的 chunk 权重优于均匀权重和早段侧重权重；CM-GRPO 相比 Euler-Maruyama policy interface 取得更好的总分、质量和动态表现。
用户研究：长提示词下偏好更明显
除了自动指标，作者还进行了用户研究。研究覆盖 100 个长而详细的 prompts，每个方法对每个 prompt 生成 4 个样本，并与 CausVid、Self Forcing、Reward Forcing 和 Causal Forcing 四个短视频 causal baselines 进行成对比较。
评估维度包括 Quality、Semantic 和 Overall。结果显示，RAVEN 在所有 baseline、所有维度上都获得更高偏好，其中语义维度的领先更明显。
这也符合 RAVEN 的方法动机：当 prompt 变长、动作和场景关系更复杂时，模型不只是要生成漂亮的单帧，还要在自己的历史上持续理解“前面发生了什么”。历史表示一旦缺少监督，长程语义和主体一致性就更容易漂移。
写在最后
RAVEN 的核心贡献，可以概括为一句话：让自回归视频模型在训练时真正面对并优化它推理时会依赖的历史。
过去的 causal video distillation 往往把注意力放在如何让模型更快、更少步、更接近 teacher。但对于流式视频生成来说，历史并不是一个被动缓存，而是未来生成的条件本身。RAVEN 把这个条件重新放回监督路径中，让“生成历史”从 detached context 变成可被后续损失塑造的表示。
CM-GRPO 则进一步指出，对 few-step consistency generator 做在线 RL 时，不必绕到辅助 SDE 上。既然 consistency sampler 本身已经定义了随机转移，就应该直接在这个推理时会使用的 kernel 上优化。
一个对齐历史，一个对齐采样器。二者合在一起，让 RAVEN 在实时自回归视频生成中同时获得更好的质量、语义和动态表现。
从更长远看，这条路线也许不只适用于当前的 clean-latent history。只要一个自回归视频模型需要生成、缓存并复用历史表示，RAVEN 的 training-time test 思路就有机会成为一种通用训练接口；只要一个 few-step 生成器使用 consistency sampling，CM-GRPO 也有机会成为一种更贴近推理过程的策略优化接口。
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向