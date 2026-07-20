---
type: concept
title: GDSO（分组直接分数优化）
created: 2026-06-13
updated: 2026-06-13
tags: [概念, 强化学习, 优化方法, 奖励模型]
related: [z-reward, risd, 分布式奖励模型]
sources: ["rss/阿里-z-image-提出奖励模型新范式：超越-opd，将大模型推理能力蒸馏进单-token-分数分布.md"]
---
# GDSO（分组直接分数优化）

GDSO（Group-wise Direct Score Optimization）是 [[z-reward|Z-Reward]] 范式中用于训练教师模型的核心强化学习方法。它是对传统 GRPO 方法的改进，直接优化“分数分布”和“同 prompt 下的分数差距”。

## 核心机制

GDSO 包含两种关键的监督信号：

1. **Pointwise Score Supervision（逐点分数监督）**
   让模型输出的分布期望尽量接近人工标注分数，同时使用交叉熵损失直接锚定正确的分数区间。这使模型能快速学会评分尺度。

2. **Pairwise Score-gap Supervision（成对分差监督）**
   不是简单地告诉模型“图 A 比图 B 好”，而是告诉模型“图 A 应该比图 B 好多少”。这有别于传统 Bradley-Terry 或 DPO 式偏好优化（后者容易将分差越拉越大），GDSO 直接匹配人工标注的分数差距，让模型同时学会排序方向、分差幅度和不确定性。