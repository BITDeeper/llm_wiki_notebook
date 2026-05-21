---
type: source
title: "CVPR 2026 Oral｜横扫室内3D场景，港科大（广州）打造单目开放词汇占据预测新SOTA"
tags: [cvpr, 3d-vision, occupancy, embodied-ai, open-vocabulary]
related: [legoocc, hong-kong-university-of-science-and-technology-guangzhou, chen-changhao, open-vocabulary-occupancy-prediction, occ-scannet]
created: 2026-05-05
updated: 2026-05-05
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/soeH_VlEH2J1fsGo98u5ZA"
venue: 机器之心
sources: ["cvpr-2026-oral｜横扫室内3d场景，港科大（广州）打造单目开放词汇占据预测新sota.md"]
---

# CVPR 2026 Oral｜横扫室内3D场景，港科大（广州）打造单目开放词汇占据预测新SOTA

本文报道了香港科技大学（广州）陈昶昊教授团队被 CVPR 2026 录录为 Oral 的工作——[[legoocc]]。该研究首次面向具身场景实现了单目[[开放词汇占据预测]]。

## 核心内容

### 背景与挑战
传统的语义占据预测多基于**封闭词汇**，只能识别训练时定义的有限类别（如“椅子”、“桌子”），无法满足具身智能在真实开放环境中识别长尾物体（如“遥控器”、“纸巾”）的需求。此外，室内场景几何稠密、遮挡严重，直接迁移室外模型会导致性能下降。

### LegoOcc 方案
LegoOcc 提出了以[[语言嵌入高斯]]（Language-embedded Gaussians）为核心的统一 3D 表示方法，仅使用几何标签（二值占据）进行训练，即可支持任意文本查询。

主要技术创新包括：
1.  **统一表示**：每个 3D 高斯同时携带几何参数和语义嵌入，避免了双分支架构的割裂。
2.  **泊松式高斯到占据转换**：基于泊松过程聚合高斯，解决了弱监督下 2D 渲染与 3D 占据监督的优化冲突，提升了训练稳定性。
3.  **渐进温度衰减**：通过逐步降低 Sigmoid 温度，减少了沿光线的[[特征混合]]，增强了语义判别能力。

### 实验结果
在 [[occ-scannet]] 数据集上：
-   **开放词汇性能**：mIoU 达到 21.05，比此前最强方法 [[locc]] 提升了 11.8 个点（超过 2 倍）。
-   **几何精度**：整体 IoU (59.50) 超过了所有封闭词汇模型。
-   **推理效率**：在 RTX 4090 上达到 22.47 FPS，适合机器人平台部署。

### 意义
该工作为具身智能提供了一种低成本（仅需几何标注）、高泛化（支持开放词汇）的 3D 场景感知方案，解决了[[具身智能数据困境]]中的标注成本问题。