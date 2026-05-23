---
type: entity
title: DPO (Direct Preference Optimization)
created: 2026-05-17
updated: 2026-05-17
tags: [algorithm, preference-optimization, alignment, rlhf]
related: [tgo-threshold-guided-optimization, 标量反馈对齐, 成对偏好, kl-正则化对齐目标]
sources: ["无需构造偏好对：tgo用标量反馈对齐视觉生成模型｜icml'26.md"]
---
# DPO (Direct Preference Optimization)

偏好优化领域的代表性方法，将复杂的 KL-regularized RL objective 改写为可直接训练的分类目标。DPO 不需要显式训练 reward model，也不需要像 PPO 那样做在线 rollout，只要有离线的偏好对就能完成 policy fitting。

## 数学原理

在 [[kl-正则化对齐目标|KL-regularized alignment objective]] 下，最优策略有 closed-form solution，但其中包含 [[配分函数|partition function]]（归一化项），需要对所有可能输出求和，通常不可计算。

DPO 绕开此问题的核心技巧：在同一个 prompt 下比较 preferred output 和 rejected output 时，partition function 会在 reward difference 里自然抵消。因此 DPO 的简洁很大程度上来自 [[成对偏好|pairwise data]] 本身。

## 局限性

- 一旦监督信号不再是 pair 而是单个样本的标量分数，"两两相减"抵消 partition function 的办法不再成立。
- 实践中常将标量分数转为偏好对（如 batch 内排序），但这会带来信息损失——分数差距很小或评分噪声较大时，人为构造的偏好对未必可靠。
- 对于视觉生成，图像和视频的质量很少是简单的二元判断，连续分数比 winner/loser 标签更接近真实反馈。

## 与 TGO 的关系

[[tgo-threshold-guided-optimization|TGO]] 并非替代 DPO，而是补充另一种反馈接口。成对偏好在人类容易做相对判断的任务中仍有价值，但不应该是唯一接口。