---
title: "4 步生成高质量视频，还能越采样越好！NVIDIA、NUS Show Lab、MIT 提出 AnyFlow：迈向“步数自由”的视频扩散生成"
date: 2026-05-18
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/ZVa4Mm3uZ3QgBQsZBnM9tw"
rss_id: "2247659873_1"
---
标题：
AnyFlow: Any-Step Video Diffusion Model with On-Policy Flow Map Distillation
作者：
Yuchao Gu, Guian Fang, Yuxin Jiang, Weijia Mao, Song Han, Han Cai, Mike Zheng Shou
单位：
NVIDIA、新加坡国立大学（NUS）、MIT
项目主页：
https://nvlabs.github.io/AnyFlow/
论文链接：
https://arxiv.org/abs/2605.13724
开源代码：
https://github.com/NVLabs/AnyFlow
1. 背景：视频生成既要快，也要能“按需变好”
视频扩散模型（Video Diffusion Model）已经能生成高质量视频，但推理通常需要较多采样步数，成本较高。为了加速生成，很多视频蒸馏方法使用一致性蒸馏（Consistency Distillation），让模型在 4 步内快速出结果。
但现有少步生成方法有一个关键限制：它们往往只针对固定少步数优化。当测试时增加采样步数，质量未必继续提升，甚至可能下降。换句话说，用户很难自由地在“快速预览”和“高质量输出”之间切换。
AnyFlow 关注的正是这个问题：能不能让一个视频生成模型既能 4 步快速生成，又能在 16 步、32 步时继续变好？
AnyFlow test-time scaling：采样步数增加时质量继续提升
图 1：AnyFlow 的测试时扩展性（test-time scaling）表现。相比 Self-Forcing 和 rCM 等一致性蒸馏（Consistency Distillation）方法，AnyFlow 在少步采样时保持高质量，并且随着采样步数增加继续提升。
2. 方法：核心思想、前向训练与反向轨迹分解
核心思想：从“终点映射”到“任意时间跃迁”
传统一致性蒸馏（Consistency Distillation）主要学习从中间状态直接到最终结果的映射，例如从
z_t
到
z_0
。这样做适合少步生成，但在流匹配（Flow Matching）预训练的模型中使用一致性蒸馏（Consistency Distillation），会改变其原始采样轨迹，导致多步采样时扩展能力变弱。如图 1 所示，基于一致性蒸馏（Consistency Distillation）的方案（如 rCM 和 Self-Forcing）随着步数增多，性能逐渐下降。
AnyFlow 的核心改变是流图蒸馏（Flow Map Distillation）：模型不只学习如何到达终点，而是学习任意两个时间点之间的转换，也就是从
z_t
到
z_r
。这样模型可以在少步采样时进行大步跳跃，也可以在更多步数下进行细粒度细化。相对于一致性蒸馏（Consistency Distillation）的特定步数优化，AnyFlow 希望优化整条采样轨迹（sampling trajectory）。
Consistency Distillation 与 Flow Map Distillation 的对比
图 2：AnyFlow 将蒸馏目标从终点一致性映射（endpoint consistency mapping）转向任意时间点之间的流图跃迁学习（flow-map transition learning），从而保留更完整的采样轨迹。
前向训练：提供任意步生成的初始化，但单独使用还不够
AnyFlow 首先进行前向流图训练（Forward Flow Map Training），让模型学习任意时间对之间的转换关系。这个阶段可以把预训练视频扩散模型转成一个流图模型（flow map model），为任意步采样（any-step sampling）提供稳定初始化。
不过，论文指出单独的前向训练不能完全解决测试时的问题。真实推理时，模型会不断使用自己前一步生成的状态继续轨迹展开（rollout）；而前向训练主要学习教师模型（teacher model）轨迹上的局部映射，训练阶段和测试阶段仍然存在不匹配（mismatch）。具体表现为：少步采样时容易出现离散化误差；在因果（causal）视频生成中，自回归轨迹展开（autoregressive rollout）还会带来暴露偏差（exposure bias）。
因此，AnyFlow 需要进一步引入在策略蒸馏（On-Policy Distillation, OPD），让模型在自己的采样轨迹上被校正。
Qualitative Ablation of On-Policy Distillation
图 3：单独的前向流图训练（Forward Flow Map Training）仍会出现少步离散化误差和因果（causal）生成中的暴露偏差（exposure bias）；加入在策略流图蒸馏（On-Policy Flow Map Distillation）后，这些测试时误差得到明显缓解。
反向轨迹分解：用流图反向模拟（Flow Map Backward Simulation）校正轨迹展开（rollout）
AnyFlow 的第二个关键设计是流图反向模拟（Flow Map Backward Simulation）。进行在策略蒸馏（On-Policy Distillation, OPD）时，模型需要通过轨迹展开（rollout）生成自己的采样状态，但完整轨迹展开的计算开销（cost）较大。在一致性蒸馏（Consistency Distillation）中，常见做法是减少步数或截断梯度，以降低不同步数（step）下的训练成本。AnyFlow 的目标是支持任意步数，因此它利用流图（Flow Map）的组合性质，将完整欧拉（Euler）轨迹分解成多个捷径跃迁（shortcut transitions），例如从
z_T
到
z_t
，再到
z_r
，最后到
z_0
。
这样做有两个好处：一方面，测试时可以沿用原模型的欧拉（Euler）采样轨迹，不需要引入额外的一致性采样（consistency sampling）；另一方面，这种分解可以适配不同步长（step size）下的轨迹展开（rollout），减少模拟多步生成带来的额外计算开销（cost）。经过流图在策略蒸馏（Flow-Map On-Policy Distillation, Flow-Map OPD）训练后，模型的测试时误差明显减少，在少步采样和自回归（autoregressive, AR）场景下都有更好的性能。
Comparison of Backward Simulation Paradigms
图 4：相比一致性反向模拟（Consistency Backward Simulation），流图反向模拟（Flow Map Backward Simulation）可以把长轨迹展开（rollout）拆成捷径片段（shortcut segments），从而更高效地模拟不同推理步数下的采样轨迹。
3. 实验结果：从 1.3B 扩展到 14B
论文在双向（bidirectional）和因果（causal）两类视频扩散架构上验证 AnyFlow，并覆盖 1.3B 到 14B 参数规模。也就是说，AnyFlow 不是只在小模型上成立，而是可以扩展（scale up）到 14B 级别的视频生成模型。
AnyFlow 文生视频 VBench 结果
文生视频（Text-to-Video, T2V）VBench 结果。表中同时包含双向（bidirectional）和因果（causal）设置，并覆盖 1.3B 与 14B 模型规模。
因果（causal）视频生成：AnyFlow-FAR-Wan2.1-14B
在因果（causal）视频生成中，AnyFlow 结合 FAR 作为因果骨干模型（causal backbone），得到 AnyFlow-FAR。一个重要优势是：同一个 AnyFlow-FAR 模型可以统一支持文生视频（Text-to-Video, T2V）、图生视频（Image-to-Video, I2V）和视频到视频（Video-to-Video, V2V）生成，而不需要为不同任务维护完全独立的生成框架。
实验中，AnyFlow-FAR-Wan2.1-14B 在 4 次函数评估（NFEs）下即可生成高质量 T2V 结果，并且在增加采样步数后仍然保持提升趋势。
从可视化结果看，AnyFlow-FAR 在运动稳定性、主体清晰度和细节一致性上优于多个少步生成基线方法（baseline）。尤其是在车辆行驶、跑步、复杂场景运动等样例中，AnyFlow-FAR 更少出现模糊、闪烁或运动不自然的问题。
AnyFlow 14B 因果视频生成对比
图 6：14B 因果（causal）文生视频（Text-to-Video, T2V）结果对比。AnyFlow-FAR-Wan2.1-14B 使用 4 次函数评估（NFEs），对比 LightX2V、FastVideo 和 Krea-Realtime 等少步生成模型。
在图生视频（Image-to-Video, I2V）任务上，AnyFlow-FAR-Wan2.1-14B 仅使用 4 次函数评估（NFEs），在 VBench-I2V 上达到 87.87，与Wan2.1-I2V-14B 使用 50×2 次函数评估（NFEs）得到 87.71接近。这说明 AnyFlow-FAR 不仅支持 I2V，而且在极少采样步数下仍能保持很强的首帧一致性和视频质量。
AnyFlow 图生视频 VBench-I2V 结果
图生视频（Image-to-Video, I2V）评测结果。AnyFlow-FAR-Wan2.1-14B 在 4 次函数评估（NFEs）下达到 87.87，接近甚至略高于 Wan2.1-I2V-14B 使用 50×2 次函数评估（NFEs）的结果。
双向（bidirectional）视频生成：AnyFlow-Wan2.1-T2V-14B
在双向（bidirectional）视频生成中，AnyFlow 也可以直接应用到 Wan2.1-T2V 骨干模型（backbone）上。14B 结果显示，AnyFlow-Wan2.1-T2V-14B 在少步采样下保持较好的画面质量和运动自然性，并且相较 rCM 基线方法（baseline）展现出更稳定的视觉细节。
这说明 AnyFlow 的流图蒸馏（Flow Map Distillation）并不依赖某一种特定视频架构：它既能用于因果视频扩散（causal video diffusion），也能用于双向视频扩散（bidirectional video diffusion），并能稳定扩展到 14B 模型规模。
AnyFlow 14B 双向视频生成对比
图 8：14B 双向（bidirectional）文生视频（Text-to-Video, T2V）结果对比。AnyFlow-Wan2.1-T2V-14B 在 4 次函数评估（NFEs）下相比 rCM-Wan2.1-T2V-14B 生成更自然、更稳定的视频结果。
4. 在任意步模型上进行微调
最后，由于流图（Flow Map）保留了不同粒度的流场（flow field），AnyFlow 蒸馏后的模型还能继续在下游数据上训练，同时保持少步采样能力。这对于垂直领域视频生成非常重要，例如机器人、自动驾驶、游戏场景中需要保持主体身份、运动轨迹或场景风格的一致性。
AnyFlow 支持下游数据继续训练
图 9：AnyFlow 支持在下游数据集上继续训练。微调（fine-tuning）后，模型在机器人主体保持、行人轨迹等专门场景中表现更稳定。
总结
AnyFlow 提出了一个面向“任意步数视频生成”的新蒸馏框架。它不再只优化固定少步数下的生成效果，而是通过流图（Flow Map）学习完整采样轨迹，并通过在策略流图蒸馏（On-Policy Flow Map Distillation）校正测试时的轨迹展开（rollout）误差。
简单来说，AnyFlow 的核心价值是：4 步足够快，更多步还能继续变好；方法同时适用于因果（causal）和双向（bidirectional）视频扩散架构；并且已经验证可扩展到 14B 参数规模。
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向