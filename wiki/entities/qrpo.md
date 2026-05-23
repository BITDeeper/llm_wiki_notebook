---
type: entity
title: QRPO (Quantile Reward Policy Optimization)
created: 2026-05-17
updated: 2026-05-17
tags: [algorithm, preference-optimization, alignment]
related: [tgo-threshold-guided-optimization, pmpo, dpo-direct-preference-optimization, 标量反馈对齐, 配分函数]
sources: ["无需构造偏好对：tgo用标量反馈对齐视觉生成模型｜icml'26.md"]
origin_date: 2025-07-01
---
# QRPO (Quantile Reward Policy Optimization)

论文《Quantile Reward Policy Optimization: Alignment with Pointwise Regression and Exact Partition Functions》（arXiv: 2507.08068）提出的方法，解决如何直接利用 pointwise absolute reward 进行 policy fitting 的问题。

## 核心思路

将原始 reward 转为 quantile reward。在 reference policy 下，quantile reward 的分布变成 uniform distribution，[[配分函数|partition function]] 也就有了解析形式。于是模型可以用简单的 pointwise regression objective 直接拟合 [[kl-正则化对齐目标|KL-regularized objective]] 的最优策略，无需依赖成对比较来抵消归一化项。

## 定位

与 [[pmpo|PMPO]]（未配对正负反馈）和 [[tgo-threshold-guided-optimization|TGO]]（阈值引导的标量反馈）共同构成偏好优化从 pairwise 向更一般 feedback optimization 扩展的三条路线。QRPO 关心的是 pointwise absolute reward 的可解析 policy fitting。