---
type: concept
title: H-score
tags: [metric, information-theory, transfer-learning]
related: [h-embedding, 可迁移性]
created: 2025-12-01
updated: 2025-12-01
sources: ["破解可塑性瓶颈！清华团队新作刷榜持续学习：可迁移任务关系指导训练.md"]
---

# H-score

H-score 是一种基于信息论的可迁移性度量指标，用于评估从源任务（旧任务）到目标任务（新任务）的特征可迁移性。

## 定义与作用

在 [[持续学习]] 和 [[H-embedding]] 的上下文中，H-score 能够反映源任务的特征对于目标任务学习的有效性。它通过计算特征空间中的统计依赖性或互信息，量化旧知识对新任务的潜在帮助程度。

## 应用

在清华团队的方案中，H-score 被用作构建任务关系图的原始数据。通过计算所有旧任务与新任务之间的 H-score，系统可以识别出哪些旧知识应当被迁移，哪些应当被隔离以防止干扰。这些数值随后通过 [[AHP (层次分析法)]] 进行归一化，以生成最终的 [[H-embedding]]。
