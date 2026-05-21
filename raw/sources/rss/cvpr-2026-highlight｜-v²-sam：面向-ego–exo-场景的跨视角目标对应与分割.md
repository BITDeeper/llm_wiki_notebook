---
title: "CVPR 2026 Highlight｜ V²-SAM：面向 Ego–Exo 场景的跨视角目标对应与分割"
date: 2026-04-10
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/rbOhQquXuNXmh4O4cMhukA"
rss_id: "2247658558_1"
---
在真实世界中，跨视角场景（例如典型的 Ego–Exo 场景，第一人称和第三人称视角）中的目标对应与分割任务（Cross-view Object Correspondence）充满挑战。由于视角变化、尺度差异、遮挡和外观变形等问题，同一目标在不同视角中的表现往往差异显著，难以直接迁移单视角分割模型的能力。
为了解决这一问题，清华大学、复旦大学和 INSAIT 等研究单位联合提出了一个统一的跨视角分割框架——V²-SAM。该框架首次引入支持多提示的专家模型，通过结合多提示专家和循环一致性选择机制，从而在复杂的跨视角场景中实现更鲁棒的目标对应与分割。
论文标题：V²-SAM: Marrying SAM2 with Multi-Prompt Experts for Cross-View Object Correspondence
论文链接：https://arxiv.org/pdf/2511.20886
代码仓库：https://github.com/jaychempan/V2-SAM
项目主页：https://jianchengpan.space/projects/V2-SAM/
目录
01 研究目标与跨视角分割的难点
02 方法概览
03 V²-Anchor：空间提示专家
04 V²-Visual：视觉提示专家
05 Multi-Prompt Experts：专家分工
06 PCCS：专家选择机制
07 训练目标
08 实验设置：数据集、指标
09 主要结果
10 消融实验
11 可视化结果
12 总结
01 研究目标与跨视角分割的难点
本工作关注跨视角视觉理解中的一个基础问题：
跨视角目标对应与（Cross-view Object Correspondence）
：给定两帧时间对齐、但视角不同的图像或视频：
查询视角：
或
目标视角：
或
查询目标掩码：
目标是在目标视角中预测对应目标的掩码：
其不依赖相机位姿、语义标签或显式 3D 几何，只基于视觉信息完成对应。
跨视角目标对应在真实环境中仍极具挑战性，主要源于场景内部的显著变异与不同视角带来的视觉模糊（如下图所示）。具体困难可归纳为四点：
场景混杂（cluttered scenes）
：大量重叠与邻近物体带来显著干扰，使得在不同视角中可靠定位同一实例变得困难。
高度动态（highly dynamic settings）
：当相机或物体发生快速运动时，目标的外观、光照与几何形态可能发生剧烈变化，削弱了基于外观或简单几何的匹配可靠性。
外观相似的物体（appearance-similar objects）
：例如形状和纹理相近的工具或物品常导致匹配歧义，使得仅凭局部外观难以判定是否为同一实例。
局部遮挡（partial occlusions）
：目标在某些视角下可能仅部分可见或短暂消失，这进一步增加了对应的不确定性。
这些因素常常同时出现，使得跨视角对应既需要粗略的空间定位，也需要鲁棒的语义/结构线索来消除歧义。
V²-SAM 不是把所有信息塞进单一分支中统一学习，而是把跨视角分割所需的线索明确拆成两类：
空间线索
：目标在另一视角里大概位于哪里；
视觉线索
：目标在另一视角里大概长什么样。
02 V²-SAM：统一的跨视角分割框架
整个框架包含四个关键部分：
V²-Anchor
：从查询视角出发，为目标视角生成可靠的空间锚点；
V²-Visual
：从查询视角出发，为目标视角生成更稳健的视觉提示；
Multi-Prompt Experts
：分别处理不同提示形式的多个专家分支；
PCCS
：在推理阶段进行后验一致性选择，决定当前样本采用哪个专家的结果。
整体流程如下图所示：
图1：V²-SAM 总体框架
03 V²-Anchor：空间提示专家
V²-Anchor 主要用于：
在目标视角中恢复一个可以被 SAM2 使用的空间提示。
在单视角场景里，SAM2 很依赖点、框或 mask 这类空间提示；但在跨视角场景里，这些提示并不能直接使用。V²-Anchor 的作用，就是重新建立这种空间上的可用性。
3.1 特征提取与跨视角匹配
通过使用
DINOv3
的 patch-level 特征来建立两个视角之间的几何对应关系。首先提取查询图像和目标圖像的特征：
然后计算 patch 之间的余弦相似度：
其中，
表示查询图像中第
个 patch 与目标图像中第
个 patch 的相似度。
3.2 前景约束与锚点筛选
为了避免背景干扰，先利用查询 mask 只保留前景 patch：
在目标图像中得到候选对应点之后，再做去冗余筛选，从噪声较多的候选中保留少量但更可靠的锚点：
3.3 空间提示的生成
最终，筛选后的点会被映射到 SAM2 的提示空间中，形成跨视角空间提示：
04 V²-Visual：视觉提示专家
V²-Visual
的主要作用：为目标视角生成更稳健的视觉提示，除了“它大概在哪里”之外，模型还需要知道“它在这个视角里大概长什么样” 。
只靠空间锚点并不够。尤其在以下场景中，空间线索很容易变得不稳定：
目标发生明显非刚体变化；
视角差异非常剧烈；
目标局部被遮挡；
背景中存在相似物体。
4.1 区域级表示
先利用 SAM2 编码器特征，对 query 与 target 的目标区域做 mask pooling：
4.2 VPMatcher：视觉提示匹配器
V²-Visual 的核心模块是
VPMatcher
，它包含两个分支：
Feature Mapping Branch
：做语义层面的跨视角映射；
Structural Mapping Branch
：做结构层面的约束与恢复。
如下图所示：
图2：VPMatcher 结构示意图
这两个分支分别回答两个问题：
语义上是否是同一个目标？
结构上是否还能保持合理对应？
4.3 语义映射分支
首先将 query 原型与 mask 编码结合：
然后构造 query、key、value：
其注意力权重为：
经过交叉注意力和映射后，得到跨视角视觉表示：
4.4 结构映射分支
结构分支先将 mask 下采样为先验表示：
然后利用 FiLM 风格调制注入语义条件：
进一步预测一个粗粒度的跨视角 mask：
再基于这个 mask 做区域聚合：
最终，两部分信息共同生成视觉提示：
05 Multi-Prompt Experts：专家分工
因为不同样本的困难来源并不一样：
有些样本中，几何线索更可靠；
有些样本中，视觉线索更关键；
还有一些样本，必须同时依赖两类信息。
因此在得到空间提示和视觉提示后，并没有把它们全部交给同一个解码器统一处理，而是设计了三个专家：
Anchor Expert
：只使用空间提示专家；
Visual Expert
：只使用视觉提示专家；
Fusion Expert
：同时使用两类提示专家。
06 PCCS：专家选择机制
有了多个专家之后，还需要解决一个问题：
当前样本到底该相信哪一个专家？
为此，设计了
PCCS（Post-hoc Cyclic Consistency Selector）
：把某个专家在目标视角中的预测结果，再反向映射回查询视角，根据在同一个视角下的几何距离来选择更优的分割结果。
07 训练目标
V²-SAM 的训练目标由以下三个主要损失函数组成：
其中：
：视觉对比损失；
：结构约束损失；
：最终分割损失。
视觉对比损失（Visual Contrastive Loss）
：通过跨视角的对比损失，强化区域级特征在不同视角下的映射关系。该损失鼓励正样本对在嵌入空间中靠近，而负样本对远离，从而形成紧凑且分离良好的特征簇。其形式化定义为：
其中，
表示余弦相似度函数，
为温度参数。
掩码预测损失（Mask Prediction Loss）
：结合空间约束损失
和掩码损失
，通过掩码级监督确保空间定位的准确性和结构一致性。掩码损失由像素级交叉熵项和区域级 Dice 损失组成：
其中，
用于惩罚像素级分类错误，
用于衡量预测掩码与真实掩码之间的重叠程度。
结构约束损失（Structural Constraint Loss）
：在 VPMatcher 中施加结构约束，通过掩码损失对跨视角的结构映射施加约束，鼓励模型学习固定的空间变换，从而保持语义和结构的一致性。
08 实验设置：数据集、指标
8.1 数据集
实验覆盖三个具有代表性的 benchmark：
Ego-Exo4D
：ego–exo 跨视角目标对应；
DAVIS-2017
：更一般的视频对象对应任务；
HANDAL-X
：面向机器人操作的跨视角对应任务。
8.2 评测指标
实验中使用的主要指标包括：
IoU / mIoU
Cont.A（Continuity Accuracy）
Loc.E（Localization Error）
/
/
09 主要结果
9.1 Ego-Exo4D 主结果
Method
Ego2Exo IoU↑
Ego2Exo Cont.A↑
Ego2Exo Loc.E↓
Exo2Ego IoU↑
Exo2Ego Cont.A↑
Exo2Ego Loc.E↓
Total IoU↑
Total Params(M)
Train Params(M)
PSALM (Zero-shot)
7.4
0.121
0.266
2.1
0.058
0.294
4.8
1587.1
0
CMX
6.8
0.137
0.110
12.0
0.177
0.166
9.4
138.0
17.3
XSegTx
18.9
0.386
0.070
27.1
0.358
0.104
23.0
12.1
3.6
XMem
19.3
0.262
0.151
16.6
0.240
0.160
18.0
62.2
62.2
XMem + XSegTx
34.9
0.559
0.038
25.0
0.237
0.117
30.0
75.6
67.1
Ref-SAM*
29.2
0.452
0.077
42.2
0.502
0.096
37.8
224.8
4.3
ObjectRelator
35.3
0.540
0.036
40.3
0.500
0.068
37.8
1587.3
1587.3
O-MaMa (k-NN)
31.9
0.414
0.195
30.9
0.373
0.127
31.4
154.0
0
O-MaMa
42.6
0.590
0.033
44.1
0.524
0.082
43.4
165.6
11.6
V²-SAM (Single-Expert)
44.5
0.607
0.055
47.3
0.552
0.092
45.9
531.3
7.6
V²-SAM (Multi-Experts)
46.3
0.616
0.056
49.6
0.575
0.078
48.0
543.4
15.3
从这张表可以看出，V²-SAM 在 Ego2Exo 和 Exo2Ego 两个方向上都取得了最好的 IoU。
如果与此前表现较强的
O-MaMa
相比，V²-SAM (Multi-Experts) 在：
Ego2Exo
上提升
+3.7 IoU
Exo2Ego
上提升
+5.5 IoU
9.2 DAVIS-2017：能否泛化到一般视频对应任务？
Method
↑
↑
↑
SiamMAE
60.7
58.4
62.9
CrocoV2 + Cont. Pretrain
40.0
37.4
42.5
Probabilistic Warp Consistency
42.9
42.6
42.7
DINO ViTs/8
64.5
61.6
67.5
DINO ViTb/8
66.4
63.7
69.2
DINOv2 + Reg ViTb/14
62.1
59.6
64.8
PCC
70.2
67.8
72.7
V²-SAM (Ours)
78.8
76.5
81.0
在 DAVIS-2017 上，V²-SAM 也明显领先已有方法。这说明它并不只适用于 ego–exo 这种特定场景，对更一般的视频对象对应任务也具有较好的泛化能力。
9.3 HANDAL-X：零样本场景是否仍然有效？
Setup
Method
Training Dataset
IoU↑
ZSL
XSegTx
COCO / Self-Gen. Pairs
1.5
ZSL
SEEM
COCO Panoptic, RefCOCO/+g
2.5
ZSL
PSALM
COCO Panoptic, RefCOCO/+g, etc.
14.2
ZSL
PSALM
Ego-Exo4D
39.9
ZSL
ObjectRelator
Ego-Exo4D
42.8
ZSL
V²-SAM (Single-Expert)
Ego-Exo4D
66.4
ZSL
V²-SAM (Multi-Experts)
Ego-Exo4D
77.2
即便在零样本设置下，V²-SAM 仍然取得了 77.2 IoU，这说明模型学到的并不只是某个数据集上的特定模式，而是更一般的跨视角对应能力。
10 消融实验
10.1 多个专家之间真的存在互补吗？
Method
Ego2Exo IoU↑
Exo2Ego IoU↑
Total IoU↑
A: Anchor Expert
38.7
41.6
40.1
B: Visual Expert
36.2
46.6
41.4
C: Fusion Expert
44.5
47.3
45.9
A + B
42.7
48.2
45.5
A + B + C
46.3
49.6
48.0
实验说明三类专家并不是重复劳动。Anchor 与 Visual 各自有偏向，Fusion 更均衡，而三者联合后还能继续提升，说明这种分工是有效的。
10.2 模块级消融
Semantic Mapping
Spatial Mapping
V²-Anchor
Ego2Exo IoU↑
Exo2Ego IoU↑
Total IoU↑
✓
✓
-
✓
-
34.19
45.16
39.68
✓
-
✓
-
-
34.98
46.46
40.72
✓
✓
✓
✓
-
36.17
46.63
41.40
✓
✓
✓
✓
✓
44.51
47.29
45.90
实验结果表明，语义映射与结构映射本身就是互补的，而
V²-Anchor
的加入又带来了最明显的额外收益，尤其在 Ego2Exo 方向上提升更明显。
11 可视化结果
11.1 不同专家在不同场景中的表现
图3：不同专家的场景分析
从分析图中可以看到：
Anchor Expert
更适合几何结构相对稳定的场景；
Visual Expert
在外观变化更大、动作更复杂的场景中更有优势；
Fusion Expert
则整体更均衡。
11.2 Ego2Exo 定性结果
图4：Ego2Exo 定性结果
图注：从左到右分别为 query view、Anchor Expert 预测、Visual Expert 预测、Fusion Expert 预测，以及 PCCS 选出的最终结果。
11.3 Exo2Ego 定性结果
图5：Exo2Ego 定性结果
图注：从左到右分别为 query view、Anchor Expert 预测、Visual Expert 预测、Fusion Expert 预测，以及 PCCS 选出的最终结果。
从这些可视化中可以大致看出：
当背景复杂、相似目标较多时，纯视觉匹配容易误选；
当外观变化很大时，纯空间锚点又可能不够；
多专家与 PCCS 的组合，能在这些不同情况之间做出更稳妥的选择。
11.4 更多可视化结果
图10：PCCS 共识分析（Ego2Exo）
图11：PCCS 共识分析（Exo2Ego）
图12：HANDAL-X 定性结果
图13：DAVIS-17 定性结果
12 总结
本研究提出了 V²-SAM，一个专为跨视角目标对应任务设计的统一框架。其核心贡献包括：
创新性提示生成器
：通过 V²-Anchor 和 V²-Visual，分别从空间和视觉两个维度生成跨视角提示，解决了视角变化和外观差异带来的挑战。
多专家协作机制
：设计了 Multi-Prompt Experts 框架，针对不同场景的需求，灵活选择最优的提示处理方式。
高效的专家选择策略
：引入 PCCS 后验循环一致性选择器，以较低的计算代价实现专家的动态选择。
通过在多个基准数据集上的实验验证，V²-SAM 展现了卓越的性能，显著提升了跨视角目标对应任务的准确性和鲁棒性。
本文为粉丝投稿。
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向