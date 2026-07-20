---
type: concept
title: 固定记忆流水线
created: 2026-06-14
updated: 2026-06-14
tags: [agent-memory, legacy-paradigm, query-agnostic, cost-control]
related: [budgetmem, runtime-query-aware-memory, budget-tier-routing]
sources: ["rss/budgetmem：给runtime-agent-memory装上「预算路由器」，让记忆系统学会按需分配运行成本.md"]
---
# 固定记忆流水线

固定记忆流水线（Fixed Memory Pipeline）是现有 Agent 记忆系统普遍采用的传统范式，遵循"一次构建，永久使用"（build once, use always）的模式。

## 工作方式

系统先离线构建记忆（对历史交互进行压缩、总结和结构化），然后在未来所有查询中统一检索和使用这些预构建的记忆。

## 核心缺陷

[[budgetmem|BudgetMem]] 研究指出该范式存在两大结构性缺陷：
1. **查询无关性（Query-agnostic）**：系统在不知道未来问题的情况下提前压缩历史，不可避免地会丢掉后续查询真正需要的细节信息。
2. **缺乏性能-成本控制**：简单事实查询和复杂多跳推理被同一套流程处理，前者浪费计算成本，后者又可能处理预算不足。

## 被替代的趋势

固定记忆流水线正被[[runtime-query-aware-memory|运行时查询感知记忆提取]]范式所挑战。新范式将记忆处理推迟到查询到达之后，配合[[budget-tier-routing|预算档位路由]]机制，实现根据查询复杂度动态分配计算预算的"按需计算"能力。