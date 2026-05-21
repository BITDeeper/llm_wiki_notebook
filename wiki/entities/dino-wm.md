---
type: entity
title: DINO-WM
created: 2026-05-03
updated: 2026-05-03
tags: [world-model, baseline, self-supervised-learning]
related: [leworldmodel, jepa, pldm]
sources: ["lecun的世界模型单gpu就能跑了.md"]
---

# DINO-WM

[[DINO-WM]] 是一种依赖大模型预训练的世界模型基线方法。它通常利用在大规模数据集上预训练的视觉特征提取器（如 DINO）来增强世界模型的表现。

## 性能对比

在 [[leworldmodel]] (LeWM) 的相关研究中，DINO-WM 被用作强基线进行对比：
- **性能**：在部分任务（如 3D 机械臂抓取）中表现优异，但在 2D 任务（如推箱子）中不如 LeWM。
- **速度**：规划速度极慢（约 47 秒），比 LeWM 慢 48 倍。
- **依赖性**：高度依赖大规模预训练模型，计算成本高昂。

DINO-WM 代表了当前依赖“大模型预训练”的行业趋势，而 LeWM 则证明了通过精巧的架构设计，小模型也能达到同等甚至更好的性能。