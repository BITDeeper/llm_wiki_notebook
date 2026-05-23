---
type: entity
title: TGO (Threshold-Guided Optimization)
created: 2026-05-17
updated: 2026-05-17
tags: [algorithm, preference-optimization, visual-generation, icml-2026]
related: [标量反馈对齐, dpo-direct-preference-optimization, 新加坡国立大学, google-deepmind]
sources: ["无需构造偏好对：tgo用标量反馈对齐视觉生成模型｜icml'26.md"]
origin_date: 2026-05-01
---
# TGO (Threshold-Guided Optimization)

新加坡国立大学团队提出的偏好优化方法，被 ICML 2026 接收。TGO 是一种不依赖成对偏好数据、直接利用独立样本标量评分进行视觉生成模型对齐的新范式。

## 核心机制

TGO 的规则可以概括为两层：

1. **阈值决定更新方向**：从分数分布中估计一个阈值（如中位数），高于阈值的样本为 pseudo-positive（提高相对 reference model 的概率），低于阈值的为 pseudo-negative（降低概率）。
2. **距离决定更新力度**：引入 [[置信度加权|confidence weighting]]，分数离阈值越远，训练权重越大；接近阈值的样本权重更低。

## 理论基础

TGO 源自 [[kl-正则化对齐目标|KL-regularized alignment objective]]。理论上，最优策略的更新方向取决于样本奖励是否超过 instance-specific oracle baseline，但该 baseline 与 [[配分函数|partition function]] 相关，通常不可计算。TGO 用数据驱动的全局阈值来近似这个不可计算的 baseline。

## 实验验证

- **图像生成**：在 Stable Diffusion v1.5、FLUX、Meissonic 等模型上，于 Pick-a-Pic、PartiPrompts、HPSv2 等基准测试中优于 SFT、CSFT、AlignProp、Diffusion-DPO、Diffusion-KTO、DSPO 等方法。
- **视频生成**：TGO-LoRA 在 Wan 1.3B + VideoReward 设置上提升了整体分数及多个组件指标。
- **跨范式适用**：同时适用于扩散模型和掩码生成模型（MaskGIT 风格）。

## 局限性

TGO 不消除对反馈质量的依赖。如果标量评分器有偏差或噪声较大，阈值产生的 pseudo-label 也会继承这些偏差。

## 定位

TGO 并非替代 [[dpo-direct-preference-optimization|DPO]]，而是补上另一种反馈接口——让模型不仅能从"谁赢了"中学习，也能从"这个结果有多好"中学习。与 PMPO（未配对正负反馈）和 QRPO（绝对奖励的解析拟合）共同构成偏好优化从 pairwise 向更一般 feedback optimization 扩展的三条路线。