---
type: concept
title: 动态采样策略优化（DAPO）
created: 2026-06-01
updated: 2026-06-01
tags: [强化学习, 优化算法, grpo变体, 动态采样]
related: [grpo, rl-scaling-law, scalerl, dr-grpo]
sources: ["别光会调grpo，来看看真正的大规模rl是怎么炼的.md"]
origin_date: 2025-03-01
---
# 动态采样策略优化（DAPO）

动态采样策略优化（Dynamic Sampling Policy Optimization，DAPO）不是单一算法，而是对原始 [[grpo]] 提出的若干实用改进的集合。

## 解决的核心问题

1. **熵崩溃**：模型 token 分布熵在训练中急剧下降，概率集中于单个 token
2. **奖励噪声**：训练奖励噪声大，不稳定增加
3. **训练不稳定**：训练过程可能发散

## 关键改进

### Clip Higher（提高上截断值）

熵崩溃由截断操作强调高概率 token、惩罚低概率探索性 token 导致。DAPO 解耦上下截断界：ε_low = 0.2（默认值），ε_high = 0.28。提高 ε_high 防止熵崩溃并提升整体性能。

### 动态采样

随着训练推进，所有完成序列都正确的样本增加，其优势为零，对策略梯度无贡献。DAPO 从批次中过滤掉全对提示，持续采样直到批次填满。增加构建批次成本，但被样本效率提升所抵消。

### 改进损失聚合

原始 GRPO 的聚合方式引入隐性偏差——较长序列中的 token 对批次整体梯度贡献相对更小。DAPO 直接对批次中所有 token 的损失取平均。

### 超长序列软惩罚

在接近最大序列长度时逐渐将超长惩罚增加到最大值，提供平滑的长度惩罚信号。

参见：[[grpo]]、[[dr-grpo]]、[[scalerl]]、[[rl-scaling-law]]