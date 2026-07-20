---
title: "阿里 Z-Image 提出奖励模型新范式：超越 OPD，将大模型推理能力蒸馏进单 token 分数分布"
date: 2026-06-13
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/DMyHGjGCBwJY110tkheD5A"
rss_id: "2247661991_1"
---
在文生图模型的后训练阶段，
奖励模型
一直扮演着“裁判”的角色。
它不只是给生成图打一个分，更会影响后续的数据筛选、模型对齐、RL 优化方向，甚至决定一个文生图模型最终会偏向怎样的审美、真实感和指令遵循能力。
但视觉生成的评价天然很难。
同一张图，有人可能觉得“构图不错，但手部有瑕疵”；有人可能觉得“整体真实，但和 prompt 有一点偏”；还有人会在美学、真实感、物理合理性之间给出不同权重。换句话说，人类偏好并不是一个简单的确定性标量，而更像是一个带有不确定性的分布。
这正是
Z-Image Team, Alibaba
与
南开大学
在最新技术报告
Beyond Scalar Rewards by Internalizing Reasoning into Score Distributions
中想解决的问题：
如何让奖励模型既具备大模型级别的深度判断能力，又能像传统奖励模型一样高效、稳定、可部署、可优化？
Figure 1：Z-Reward 在教师优化与学生蒸馏上的 HPA 表现。
📄 论文速览
论文标题
：Beyond Scalar Rewards by Internalizing Reasoning into Score Distributions
机构
：阿里巴巴 Z-Image 团队，南开大学
一、为什么现有视觉奖励模型还不够？
目前视觉奖励模型主要有两条路线。
第一类是
标量回归式奖励模型
，例如 ImageReward、PickScore 等。这类方法通常基于
CLIP-style 表征
，直接输出一个分数，优点是高效、易部署，也方便作为优化信号。但它的问题在于：一方面，单一标量会过度压缩人类偏好的不确定性和细粒度差异；另一方面，CLIP-style 模型的世界知识和复杂视觉推理能力有限，面对物理合理性、细粒度指令遵循、复杂场景关系时，判断能力容易受限。
第二类是
分布式奖励模型
。它不再只预测一个分数，而是预测不同分数档位上的概率分布，因此更适合表达视觉偏好的主观性和模糊边界。但现有分布式方法往往主要依赖直接监督来学习分布形式，并没有充分利用大 VLM 的推理能力。也就是说，它们缓解了“标量过度压缩”的问题，但还没有真正解决“如何做出更强判断”的问题。
Z-Reward 的核心思路正是把这两点结合起来：通过引入大模型推理提升判断质量，并保留分数分布对不确定性的表达能力；同时借助新蒸馏方法内化推理能力，实现高效部署。
它先让大 VLM Teacher 基于视觉证据、世界知识和评分标准推断出高质量分数分布，再通过
RISD
将这种
reasoning-conditioned score distribution
蒸馏到小模型 Student 中。
这样，Student 推理时不需要生成长推理链，却能直接输出内化了大模型判断能力的分数分布。相比 OPD 这类蒸馏推理轨迹的方法，
Z-Reward 不仅效果明显更优，并且更适合奖励模型在后训练中的使用，实现又快又好。
Figure 2：Z-Reward 与已有分布式奖励建模范式对比。DEQA-like 依赖密集人工分布标注，RewardDance-like 没有显式基于 reasoning，而 Z-Reward 将 reasoning teacher 的判断分布蒸馏到高效 student。
二、Z-Reward 的关键：不是简单学习分布，而是用推理驱动分布建模
现有分布式奖励模型大多仍主要依赖直接监督来学习“分布形式”，并没有充分利用大 VLM 的推理能力。换句话说，它们可以告诉模型“分数应该长成一个分布”，但这个分布背后的判断过程仍然不够强。
Z-Reward 的关键区别在于：它不是让模型直接从标注中拟合分布，而是先让一个具备推理能力的大 VLM Teacher 基于视觉证据、世界知识和评分标准，推断出更可靠的 reasoning-conditioned score distribution。
在这个过程中，reasoning 不只是解释文本，而是参与了评分判断本身：它帮助模型分解图像中的关键视觉证据，理解 prompt 与图像的细粒度关系，并在相邻分数档之间更合理地分配概率质量。
具体来说，给定 prompt、image 和某个评价维度，模型不是只输出“4 分”，而是输出图像在多个分数档位上的概率分布，例如：
分数档位
概率
3.0
0.10
3.5
0.25
4.0
0.45
4.5
0.15
5.0
0.05
最终的奖励分数可以通过分布期望得到。这样既保留了一个可用于优化的标量，又保留了邻近分数之间的不确定性。
因此，Z-Reward 解决的是：
如何让分数分布不只是标注拟合结果，而是由大模型推理能力驱动的高质量判断结果。
三、标注体系：Z-Reward 的分数分布从哪里来？
为了让奖励模型真正对齐人类偏好，Z-Reward 构建了一套面向文生图生产场景的细粒度标注体系。
论文中将评价拆成四个关键维度：
Text-Image Alignment
：图像是否准确遵循文本指令；
Realism
：真实感是否足够强；
Aesthetics
：构图、审美、质感是否优秀；
Physical Plausibility
：物理结构与常识是否合理。
每个维度采用五级 rubric，但最终标注不是简单的 1-5 整数分，而是使用九档半分制：
1.0, 1.5, 2.0, …, 5.0
这样做的好处是，标注者不仅能表达“好/坏”，还可以表达“略好一点”或“略差一点”的细粒度差异。
为了让标注更稳定，每个维度、每个分数档都会配套
15-20 个带注释的示例图
。标注者在打分时不是凭感觉，而是可以参考这些样例，像最近邻对比一样校准当前图像应该落在哪个分数区间。
数据来源也覆盖了多类真实场景：包括内部 caption 改写成的生成 prompt、真实用户或社区 prompt，以及从概念拓扑中采样并经 LLM 扩展得到的组合型 prompt。评估集则采用 held-out 测试集，并且每个样本有多名标注者评分；聚合时会去掉最高分和最低分，以降低异常标注对结果的影响。
更重要的是，论文还设计了一个同 prompt 下的分数校准流程：标注者先对同一 prompt 下的多个生成候选进行 pointwise 打分，再比较同一粗粒度分数桶中的候选图，如果确实有可感知差异，就进行
±0.5
的调整，最后再进入质检流程。
这意味着 Z-Reward 学到的不只是单图分数，还包括同一 prompt 下不同候选之间的细微分差。
Figure 3：Z-Reward 的标注流程，包含 pointwise annotation、score adjustment 与 quality check。
四、Teacher 阶段：GDSO 让大模型学会“带推理的分布式打分”
Z-Reward 的第一阶段是训练一个强大的 Teacher 模型。
论文中使用
Qwen3.5-27B
作为教师模型。这个 Teacher 会先生成 reasoning trace，再输出对应的评分分布。这里的 reasoning 不是为了展示给用户看的解释，而是帮助模型分解视觉证据、应用细粒度 rubric，并在相邻分数档之间合理分配概率质量。
为此，论文提出了
GDSO：Group-wise Direct Score Optimization
。
它相比普通 GRPO 的核心改进在于：
不只是把模型最终解析出的分数当作 reward，而是直接优化“分数分布”和“同 prompt 下的分数差距”。
GDSO 里有两个非常重要的监督信号。
第一，pointwise score supervision。
它让模型输出的分布期望尽量接近人工标注分数，同时用 CE loss 直接锚定正确的分数 bin。这样模型不用完全靠采样奖励慢慢摸索评分尺度，而是能更快学会“什么叫 3 分、什么叫 4 分、什么叫 5 分”。
第二，pairwise score-gap supervision。
它不是简单地告诉模型“图 A 比图 B 好”，而是告诉模型“图 A 应该比图 B 好多少”。这点和常见 Bradley-Terry 或 DPO 式偏好优化不同。后者通常只要求 winner 分数高于 loser，容易把 margin 越拉越大；而 GDSO 直接匹配人工标注的分数差距，让模型既学会排序方向，也学会分差幅度。
换句话说，GDSO 的目标不是训练一个“只会判断谁赢”的裁判，而是训练一个能够理解评分尺度、分差大小和不确定性的裁判。
五、Student 阶段：RISD 不蒸馏推理链，而是蒸馏推理后的判断分布
如果只训练一个 27B 的 reasoning reward model，它当然强，但部署成本会很高。
因此，Z-Reward 的第二阶段训练了一个更小的 Student 模型，即
Qwen3.5-9B
，并提出
RISD：Reasoning-Internalized Score Distillation
。
这一步最巧妙的地方在于：
学生模型并不模仿教师模型的长推理链。
传统 trajectory-level distillation 或 OPD 往往让学生沿着自己的生成轨迹采样，再让教师对每个 token 或每段 reasoning 给反馈。这类方法确实能提高学生能力，但推理时学生仍然需要生成长 reasoning trace，成本并没有真正降下来。
RISD 采用的是
outcome-level distillation
。
教师模型先通过 reasoning 得到一个高质量的评分分布，学生模型直接学习这个分布本身。训练时，学生用 KL loss 对齐教师的 reasoning-conditioned score distribution；推理时，学生不再生成 reasoning，而是直接输出分数分布。
这就是“内化”的含义：
推理过程不再外显为长文本，而是被压缩进学生模型的参数和评分分布中。
最终，学生模型只需要输出一个 score token，就能给出高质量的奖励信号。
六、实验结果：9B 学生几乎追平 27B 教师，但推理成本大幅降低
论文在内部标注的 held-out 测试集上评估了 Z-Reward。
评估指标包括两类：
PLCC / SRCC
：衡量模型分数与人类分数之间的校准和排序相关性；
HPA / Margin HPA
：衡量模型在同 prompt 候选图之间的偏好判断是否与人类一致。其中 Margin HPA 只统计人工分差大于 0.5 的样本对，更关注有明显质量差异的场景。
在 27B Teacher 上，GDSO 达到了最优结果：
模型
PLCC
SRCC
HPA
Margin HPA
27B GRPO
0.7200
0.6832
0.8604
0.9827
27B GDSO
0.7620
0.7132
0.8956
0.9885
9B GDSO
0.6341
0.5665
0.8395
0.9599
9B RISD
0.7391
0.6882
0.8864
0.9801
相比 27B GRPO 的 HPA 0.8604，GDSO 明显更强；相比 RewardDance 的 0.8425，也有进一步提升。
更值得关注的是 9B Student。RISD 学生模型达到了
0.8864 HPA
和
0.9801 Margin HPA
，不仅显著超过 9B SFT、RewardDance、GRPO 和 GDSO，还非常接近 27B GDSO Teacher 的表现。
这说明：教师模型通过 reasoning 得到的判断分布，确实可以被小模型有效内化。
七、关键对比：RISD 为什么比 OPD 更适合奖励模型？
论文还专门比较了 RISD 和 OPD。结果非常直观：
方法
HPA
Margin HPA
输出 token
9B OPD
0.8311
0.9643
~750
9B SFT
0.7459
0.8401
1
9B GDSO
0.8395
0.9599
~750
9B RISD
0.8864
0.9801
1
OPD 相比 SFT 有提升，但它仍然需要生成长推理链，平均输出约
750 个 token
。GDSO 也同样需要长 reasoning trace。
而 RISD 只需要
1 个输出 token
，就取得了最高 HPA 和 Margin HPA。
这对奖励模型非常重要。因为奖励模型在真实后训练中往往会被反复调用，用于候选筛选、在线优化、RL reward 计算或数据清洗。一次调用节省几百个 token，放到大规模训练流程中就是巨大的延迟和成本差异。
Z-Reward 的核心优势就在这里：
它不是让小模型“学会说出推理过程”，而是让小模型“学会给出推理后的判断”。
八、为什么一定要用“分布”而不是解析文本分数？
论文中的消融实验也回答了一个关键问题：为什么要从 score distribution 的期望中计算 reward，而不是直接解析模型输出的文本分数？
原因很简单：
文本分数会量化掉大量细节。
例如模型内部可能认为一张图接近 3.8，另一张图接近 4.2，但如果最终都输出为“4”，那么它们在 RL 中就会得到相同 reward，也会得到相同 advantage。这样细粒度差异就被抹掉了。
而 score distribution 的期望可以保留这种边界信息。即使最终最可能的分数 bin 都是 4，分布形状也可能不同，一个更偏向 3.5，一个更偏向 4.5。这种差异能为奖励模型训练提供更密集、更连续的监督信号。
Figure 4：从 score distribution 计算 reward，相比 parsing text score 更稳定地提升 HPA 和 Margin HPA。
九、Z-Reward 不只是评测器，还能直接优化文生图模型
更进一步，论文还验证了 Z-Reward 作为可优化奖励信号的实际价值。
研究团队将 Z-Reward 应用于文生图模型的 RL 优化阶段，用它提供可微、细粒度的 reward signal，直接优化强 SFT baseline。
验证集中包含
400 个 prompts
，覆盖组合描述、属性绑定、空间关系和物理挑战场景。优化过程中，Z-Reward 在四个维度上都带来了稳定提升：
Text-Image Alignment
Realism
Aesthetics
Physical Plausibility
其中真实感和审美在早期提升更快，而文本对齐和物理合理性提升更渐进，因为它们更依赖语义结构和复杂关系理解。
Figure 5：Z-Reward 在四个维度上的验证 reward 曲线。
最终的盲测人类评估采用
GSB 指标
，即 Good-Same-Bad。标注者比较 SFT baseline 和 Z-Reward 优化模型的生成结果，并判断优化后图像是更好、相当还是更差。
结果显示，Z-Reward 优化后的模型相较强 SFT baseline 实现了
41.3% 的净人类偏好提升
。
这说明 Z-Reward 不只是一个离线排行榜指标，而是真正可以作为文生图后训练中的优化信号，推动生成模型往人类偏好方向改进。
Figure 6：Z-Reward-guided optimization 的定性对比，展示 SFT 与 RL 优化结果差异。
十、总结：奖励模型的未来，可能不是“更会解释”，而是“更会判断”
Z-Reward 的价值不只是提出了一个新的 reward model，而是提供了一种更适合视觉生成后训练的奖励建模范式。
它把问题拆成了两个阶段：
训练阶段
：让大模型充分 reasoning，理解视觉证据、rubric 和细粒度分数边界；
部署阶段
：让小模型直接输出 reasoning-internalized score distribution，避免长推理链带来的成本。
这使得 Z-Reward 同时具备三种能力：
比标量奖励更细粒度
：用分数分布表达主观偏好和评分不确定性；
比生成式 reasoning reward 更高效
：学生模型推理时只需 1 个 token；
比普通评测器更实用
：可以作为可微奖励信号，直接参与文生图模型优化。
对于文生图后训练而言，一个好的奖励模型不一定要在每次推理时长篇解释“为什么这样打分”。
它真正需要做到的是：
快速、稳定、校准良好，并能持续为生成模型提供正确的优化方向。
这正是 Z-Reward 的核心启示：
奖励模型不需要复现教师的推理过程，而要内化教师的判断能力。
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向