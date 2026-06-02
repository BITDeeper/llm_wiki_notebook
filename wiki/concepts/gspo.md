---
type: concept
title: 组序列策略优化（GSPO）
created: 2026-06-01
updated: 2026-06-01
tags: [强化学习, 优化算法, grpo变体, 序列级]
related: [grpo, rl-scaling-law, scalerl]
sources: ["别光会调grpo，来看看真正的大规模rl是怎么炼的.md"]
origin_date: 2025-07-01
---
# 组序列策略优化（GSPO）

组序列策略优化（Group Sequence Policy Optimization，GSPO）是对 [[grpo]] 目标函数的改进，通过在**序列级别**而非 token 级别计算策略比率来解决错位问题。

## 解决的问题

原始 GRPO 存在优化方式与奖励分配方式的错位：

- 优势在**序列级别**计算（结果奖励场景）
- 策略比率及整个损失在 **token 级别**计算

这种错位导致 token 级策略比率方差很高，增大策略梯度方差，引发训练不稳定。尤其在训练长序列 LLM 或使用大型稀疏 MoE 模型时问题突出。

## 核心方法

GSPO 将 token 级重要性比率替换为序列级重要性比率，通过**几何平均数的对数形式**定义：

- 对 token 级概率取几何平均
- 通过序列长度归一化，确保不同长度序列的重要性比率具有可比性
- 用对数概率之和替代原始概率之积，改善数值稳定性

## 应用

GSPO 被用于 Qwen3-235B-A22B 等 MoE 模型的训练，在训练稳定性、样本效率和整体性能方面均有改善。

参见：[[grpo]]、[[rl-scaling-law]]