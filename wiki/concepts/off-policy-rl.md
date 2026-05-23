---
type: concept
title: Off-policy RL
created: 2026-05-16
updated: 2026-05-16
tags: [强化学习, 训练范式]
related: [策略滞后, gipo, accerrl]
sources: ["icml-2026-告别「利用率崩溃」：gipo开启大模型强化学习高效训练新方法.md"]
---
# Off-policy RL

**Off-policy RL（离策略强化学习）** 是指使用与当前策略不同的行为策略收集的数据进行训练的强化学习范式。

## 在大规模训练中的必然性

在现代强化学习系统中，Off-policy 现象已成为难以避免的常态：
- 同步更新中数据被反复复用迭代
- 分布式 Actor-Learner 异步架构中采样与训练解耦
- 具身真机场景中物理采集缓慢且高度依赖历史数据回放

## 核心挑战

Off-policy 数据与当前策略之间的分布偏移由重要性比率（Importance Ratio）量化。在严重滞后场景下，重要性比率呈现重尾分布，导致方差爆炸或梯度归零（[[利用率崩溃]]）。

## 相关解决方案

[[gipo]] 通过 [[高斯信任权重]] 在对数空间实现平滑衰减，为 Off-policy RL 提供了具备理论保证的稳健训练方法。