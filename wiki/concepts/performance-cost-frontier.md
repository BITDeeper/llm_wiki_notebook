---
type: concept
title: 性能-成本前沿
created: 2026-06-14
updated: 2026-06-14
tags: [agent-memory, cost-control, performance-tradeoff, reinforcement-learning]
related: [budgetmem, budget-tier-routing, runtime-query-aware-memory]
sources: ["rss/budgetmem：给runtime-agent-memory装上「预算路由器」，让记忆系统学会按需分配运行成本.md"]
---
# 性能-成本前沿

性能-成本前沿（Performance-Cost Frontier）是[[budgetmem|BudgetMem]]框架中描述记忆系统在输出质量和计算开销之间权衡关系的核心概念。

## 定义

通过调节强化学习训练中的成本权重（cost weight），BudgetMem 能够在 performance-first（性能优先）和 cost-sensitive（成本敏感）设置之间灵活切换，形成一条连续、可控的性能-成本权衡曲线。这条曲线即为性能-成本前沿。

## 实际意义

在性能-成本前沿上：
- **相近成本下取得更好效果**：与固定流水线系统相比，在同等计算预算下获得更高质量的记忆输出。
- **相近效果下降低成本**：在保持同等回答质量的前提下，大幅降低记忆提取的计算开销。

这一概念将 Agent 记忆系统的评估从单一的"能力维度"扩展到了"效率维度"，为实际部署场景中根据业务需求和预算约束选择最优运行点提供了理论框架。