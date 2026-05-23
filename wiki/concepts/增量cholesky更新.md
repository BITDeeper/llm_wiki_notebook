---
type: concept
title: 增量Cholesky更新
created: 2026-05-22
updated: 2026-05-22
tags: [数值优化, 算法, moe]
related: [mp-moe, 马氏范数]
sources: ["icml-2026-打破「回音室」效应！人大孟澄团队&华为提出集成剪枝视角下的moe新架构.md"]
---

# 增量Cholesky更新

**增量 Cholesky 更新**是 [[mp-moe|MP-MoE]] 中用于高效求解专家子集选择问题的关键算法组件。

## 问题背景

MP-MoE 的贪心算法每一步都需要评估候选专家加入当前集合后的边际收益，这涉及协方差矩阵的逆运算。如果每步都重新计算矩阵逆，计算复杂度将过高。

## 解决方案

利用 Cholesky 分解的性质：当新增一个专家时，可以通过增量更新已有的 Cholesky 因子来获得新的分解结果，而无需从头计算。这显著降低了计算复杂度，使得 MP-MoE 的训练阶段 wall-clock 时间仅增加约 3%。