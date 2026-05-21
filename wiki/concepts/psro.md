---
type: concept
title: PSRO (策略空间响应预言)
tags: [博弈论, 算法, 多智能体]
related: [cfr, shor-psro, 可利用度, 不完全信息博弈]
created: 2026-02-27
updated: 2026-02-27
sources: ["alphaevolve再进化！deepmind用ai「养殖」算法，碾压所有人类设计.md"]
---

# PSRO (策略空间响应预言)

[[PSRO]]（Policy Space Response Oracles，策略空间响应预言）是 [[CFR]] 之外，多智能体强化学习（MARL）中另一个核心的算法家族。它主要用于解决复杂博弈中的策略优化问题。

## 核心思想
PSRO 通过维护一个策略集合，并迭代性地计算对当前策略集合的最佳响应（Best Response），然后将新的响应策略加入集合，从而逐步逼近纳什均衡。

## AI 的改进
[[AlphaEvolve]] 进化出的 [[SHOR-PSRO]] 采用了“训练与考试分离”等反直觉机制，在性能上超越了人类设计的 PSRO 变体。