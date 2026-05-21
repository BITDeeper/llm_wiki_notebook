---
type: concept
title: Visual Token Pruning
tags: [optimization, vlm, efficiency]
related: [attention-debiasing, fastv, pyramid-drop]
created: 2026-01-30
updated: 2026-01-30
sources: ["vlm剪枝新sota：无需重训练，注意力去偏置超越6大主流方案.md"]
---

# Visual Token Pruning

Visual Token Pruning（视觉令牌剪枝）是一种降低视觉-语言模型（VLM）推理成本的技术。其核心思想是在不影响模型性能的前提下，丢弃不重要的视觉信息，从而减少计算量和内存占用。

## 实现方式
大多数剪枝方法依赖于模型的注意力分数来评估视觉 token 的重要性。常见的方法包括：
- [[FastV]]
- [[PyramidDrop]]
- [[SparseVLM]]
- [[HiMAP]]
- [[TokenCarve]]
- [[iLLaVA]]

## 挑战
由于注意力机制存在[[位置偏置]]和 [[attention-sink]] 现象，直接使用原始注意力进行剪枝往往会导致错误决策（例如保留图像底部无意义的背景或填充区）。

## 解决方案
通过引入[[注意力去偏]]技术，可以修正注意力权重，使剪枝过程更加精准，从而在 [[本地推理]] 和边缘设备上实现更高效的部署。