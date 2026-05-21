---
type: concept
title: CFR (反事实遗憾最小化)
tags: [博弈论, 算法, 强化学习]
related: [psro, vad-cfr, 可利用度, 不完全信息博弈]
created: 2026-02-27
updated: 2026-02-27
sources: ["alphaevolve再进化！deepmind用ai「养殖」算法，碾压所有人类设计.md"]
---

# CFR (反事实遗憾最小化)

[[CFR]]（Counterfactual Regret Minimization，反事实遗憾最小化）是博弈论中用于求解 [[纳什均衡]] 的一种基石算法，广泛应用于 [[不完全信息博弈]]（如德州扑克）。

## 原理
CFR 通过迭代模拟博弈过程，计算在每个决策点采取不同行动的“遗憾值”（即如果采取了其他行动能多获得多少收益），并根据这些遗憾值调整策略，以最小化长期的可利用度。

## 变体与演进
在 [[AlphaEvolve]] 出现之前，CFR 的改进主要依赖人类研究者的直觉，产生了 CFR+、DCFR、PCFR+ 等变体。AlphaEvolve 进化出的 [[VAD-CFR]] 是首个由 AI 自动设计且性能超越人类基线的 CFR 变体。

## 应用
著名的扑克 AI（如 Libratus 和 Pluribus）的核心算法均基于 CFR。