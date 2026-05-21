---
type: concept
title: Frontier Search (边界搜索)
tags: [算法, 搜索优化]
related: [modes, training-free]
created: 2026-03-05
updated: 2026-03-05
sources: ["跳过88%专家，保住97%性能！moe推理的正确玩法-cvpr’26.md"]
---

# Frontier Search (边界搜索)

**Frontier Search** 是 [[modes]] 框架中提出的一种高效搜索算法，用于在离线校准阶段寻找最优的专家跳过阈值组合。

## 问题背景

在引入模态感知机制后，需要分别为文本 Token 和视觉 Token 寻找最优阈值。如果采用暴力搜索，复杂度是 $O(N^2)$，这在多模态场景下是难以接受的。

## 算法原理

Frontier Search 利用了模型性能与跳过比例之间存在的**单调性**关系（即跳过越多，性能通常越低），将搜索空间限制在性能边界上。这一优化将搜索复杂度从 $O(N^2)$ 降低到了 $O(N)$。

## 效果

根据论文数据，Frontier Search 将寻找最优阈值的时间缩短了约 45 倍，使得 [[modes]] 的离线校准过程变得快速且可行。
