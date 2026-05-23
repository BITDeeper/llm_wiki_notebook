---
type: entity
title: PMPO (Preference Optimization as Probabilistic Inference)
created: 2026-05-17
updated: 2026-05-17
tags: [algorithm, preference-optimization, alignment]
related: [tgo-threshold-guided-optimization, qrpo, dpo-direct-preference-optimization, google-deepmind, 标量反馈对齐]
sources: ["无需构造偏好对：tgo用标量反馈对齐视觉生成模型｜icml'26.md"]
origin_date: 2024-10-01
---
# PMPO (Preference Optimization as Probabilistic Inference)

[[google-deepmind|Google DeepMind]] 发布的偏好优化方法（arXiv: 2410.04166）。核心思想是模型不一定需要严格配对的 preferred/dis-preferred samples 才能学习偏好——只要有 preferred examples 或 dis-preferred examples，甚至只有其中一种反馈，也可以进行优化。

## 方法

基于 EM-style policy improvement，将目标写成三部分：提高 preferred samples 的 likelihood，降低 dis-preferred samples 的 likelihood，同时让新策略保持接近 reference policy。

## 意义

允许正负样本不成对出现，也允许数据分布不平衡。这对现实任务有重要意义，因为真实数据里经常只有"这个结果不错"或"这个结果不行"，而非完整的两两比较。

PMPO 与 [[tgo-threshold-guided-optimization|TGO]]、[[qrpo|QRPO]] 共同构成偏好优化从 pairwise supervision 向更一般的 feedback optimization 扩展的三条路线。