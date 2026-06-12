---
type: entity
title: TraqPoint
created: 2026-06-09
updated: 2026-06-09
tags: [关键点检测, 强化学习, 序列级训练, CVPR-2026-Oral, 小米]
related: [序列级关键点训练范式, 轨迹感知奖励机制, dinov3-convnext, 小米研究院, cvpr-2026]
sources: ["rss/cvpr-2026-oral-traqpoint：用序列级强化学习重新定义关键点检测，轨迹更长、重建更密.md"]
---
# TraqPoint

TraqPoint是小米研究院提出的基于序列级强化学习的关键点检测方法，发表于CVPR 2026 Oral。论文标题为"From Pairs to Sequences: Track-Aware Policy Gradients for Keypoint Detection"。

## 核心思想

TraqPoint将关键点检测重构为序列决策问题：策略网络在参考图像上选择关键点，以整段图像序列为环境，以轨迹可跟踪性为奖励信号进行优化。核心洞察是当前主流检测器在图像对上训练优化"瞬时可匹配性"，但SLAM/SfM等下游任务需要"长期可跟踪性"，二者存在根本目标错位。

## 技术架构

- **骨干网络**：[[dino-v3-convnext|DINOv3-ConvNeXt]] (base)，替代RDD中的ResNet-50，提供多尺度特征和强语义表示。
- **训练范式**：[[先描述后检测|先描述后检测]]（Describe-then-Detect），描述子分支先预训练后冻结，关键点分支独立进行策略学习。
- **采样策略**：[[混合采样策略|混合采样策略]]——全局采样（利用高概率区域）+ 网格采样（确保空间覆盖）。
- **损失函数**：策略梯度项（以平均奖励为基线降低方差）+ 空间熵正则化（防模式坍塌）+ 热身损失（前10%轮次用FAST检测器弱监督）。

## 关键设计特征

- **RL仅用于训练**：推理时仍是标准前馈检测器，输入一张图像输出关键点，不需要序列信息、位姿或深度，无额外推理开销。
- **即插即用**：可直接嵌入任何现有的特征匹配或视觉定位流水线，无需修改下游系统。

## 实验表现

| 任务 | 数据集 | 表现 |
|------|--------|------|
| 相对位姿估计 | MegaDepth / ScanNet | 超越所有对比方法 |
| 视觉定位 | Aachen Day-Night | 所有白天设置和两个夜间设置最佳 |
| 视觉里程计 | KITTI | 最高AKTL、最低ATE |
| 三维重建 | ETH | 注册图像数、点云数量、轨迹长度均为最佳 |

## 消融实验关键发现

- 序列化训练提升AUC@5° 2.5、AKTL 2.3。
- RL框架相比监督基线：AUC从52.0升至55.8、AKTL从3.8升至6.6。
- 排名奖励和区分度奖励互补，缺一不可。
- 序列感知RL在所有骨干架构上都带来一致提升，表明该范式是对描述子质量的补充而非依赖。

## 与VLM³ Bitter Lesson的张力

[[vlm3|VLM³]]揭示三维视觉领域的Bitter Lesson——标准VLM+规模化数据即可超越任务特定设计。但TraqPoint通过任务特定的RL奖励设计取得了显著提升，说明Bitter Lesson的适用范围存在边界：在关键点检测这类高度结构化的低级视觉任务中，精心设计的训练目标仍有不可替代的价值。

## 开放问题

- 骨干从ResNet-50升级到DINOv3-ConvNeXt(base)在移动端/嵌入式设备上的实时性如何？
- 序列长度5帧是否为最优？在更长序列（如自动驾驶场景数百帧）上的表现如何？
- 与特征匹配端到端方法（如SuperGlue/LightGlue）联合使用时的互补效果如何？

## 链接

- 论文：https://arxiv.org/abs/2602.20630
- 代码：https://github.com/xiaomi-research/traqpoint
- 项目主页：https://1yangliwen.github.io/traqpoint.github.io/