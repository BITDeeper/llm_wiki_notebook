---
type: concept
title: Point-Aligned Elo
tags: [evaluation, fairness, forecasting, leaderboard]
related: [echo-system, train-on-future, unipat-ai, echoz-1.0, 时序不对称]
created: 2026-03-30
updated: 2026-05-08
sources: ["黑马ai横扫预测市场！预测未来胜率已超过人类.md", "预测这件事，人类越犹豫，这个大模型越有优势.md"]
---

# Point-Aligned Elo

Point-Aligned Elo（点对齐 Elo 评分）是一种用于预测模型评测的严格机制，旨在解决评测中的 [[时序不对称]] 问题。

## 问题背景
在预测任务中，不同模型往往在不同时间点对同一事件进行预测。由于越接近结算时间，可用信息越多，预测难度越低，因此直接比较不同时间点的正确率是不公平的。这种现象被称为“时序不对称”。

## 机制原理
Point-Aligned Elo 机制通过以下方式确保公平性：
- **严格比较条件**：仅比较“同一道题、同一预测时间点”的模型表现。
- **信息上下文对齐**：确保所有参赛模型在完全相同的信息上下文下进行对决，从而消除了因时间差异带来的信息量偏差。

## 应用与效果
这一机制构成了 [[UniPat AI]] 动态评测引擎的基础。实验显示，基于 Bradley-Terry MLE 算法的该框架对新加入模型的排名收敛速度是传统 Avg Brier 方法的 2.7 倍。通过确保排行榜的公平性，模型排名能够真正反映其预测能力，而非预测时机的选择。