---
type: concept
title: "GRPO Done Right（Dr. GRPO）"
created: 2026-06-01
updated: 2026-06-01
tags: [强化学习, 优化算法, grpo变体, 偏差修正]
related: [grpo, dapo, rl-scaling-law]
sources: ["别光会调grpo，来看看真正的大规模rl是怎么炼的.md"]
origin_date: 2025-03-01
---
# GRPO Done Right（Dr. GRPO）

Dr. GRPO 识别并修正了原始 [[grpo]] 算法中存在的两个关键偏差来源。

## 两种偏差

### 1. 响应级长度偏差

GRPO 通过将每个序列的 token 损失之和除以该序列的 token 总数来归一化，导致梯度更新基于响应长度产生偏差。

**修正**：将 token 级损失求和后除以固定常数 MAX_TOKENS，将响应长度从聚合过程中剥离。

与 [[dapo]] 的差异：DAPO 中每个 token 对梯度贡献相等，较长序列仍因更大 token 占比获得更多强调；Dr. GRPO 用固定常数替代序列级平均，将聚合与响应长度完全解耦。

### 2. 问题级难度偏差

GRPO 优势公式分母中的标准差项，导致对特别容易（大多数响应奖励为 1）或特别困难（大多数响应奖励为 0）的问题，优势值变得非常大。

**修正**：从优势估计器中去除标准差项。

## 效果

两项改动提升了训练稳定性和效率，同时使模型的 token 利用效率更高（响应不会人为变长）。

参见：[[grpo]]、[[dapo]]、[[rl-scaling-law]]