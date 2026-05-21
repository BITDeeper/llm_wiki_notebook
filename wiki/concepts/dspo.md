---
type: concept
title: DSPO
tags: [algorithm, reinforcement-learning, optimization]
related: [rlaf, uv, deepseek, grpo]
created: 2026-04-01
updated: 2026-04-01
sources: ["斯坦福mit天团出手！1美元养龙虾，图文视频全包，打工人神外挂.md"]
---

# DSPO

DSPO（Dynamic-filter Sequence-level Policy Optimization，动态过滤序列级策略优化）是 [[Agnes]] 在 [[RLAF]] 框架中提出的核心算法。

## 技术对比
DSPO 被设计用来优化模型策略。根据 Agnes 官方数据，在同规模模型对比中，DSPO 相比 [[DeepSeek]] Search-R1 所使用的 GRPO (Group Relative Policy Optimization) 算法实现了 34.1% 的性能提升。

## 作用
作为 RLAF 的一部分，DSPO 结合 [[UV]]（通用验证器），旨在通过动态过滤机制和序列级优化，减少对人工奖励信号的依赖，从而提升训练效率和模型最终表现。