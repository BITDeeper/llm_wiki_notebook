---
type: concept
title: 运行时查询感知记忆提取
created: 2026-06-14
updated: 2026-06-14
tags: [agent-memory, runtime-extraction, query-aware, dynamic-memory]
related: [budgetmem, budget-tier-routing, fixed-memory-pipeline, performance-cost-frontier]
sources: ["rss/budgetmem：给runtime-agent-memory装上「预算路由器」，让记忆系统学会按需分配运行成本.md"]
---
# 运行时查询感知记忆提取

运行时查询感知记忆提取（Runtime Query-Aware Memory Extraction）是[[budgetmem|BudgetMem]]框架提出的记忆构建新范式，打破了传统[[固定记忆流水线]]"一次构建，永久使用"（build once, use always）的离线处理模式。

## 核心理念

该范式将记忆构建从"离线预压缩"推迟到"运行时动态提取"：
1. 系统首先将历史交互保留为原始 chunks，不进行提前压缩。
2. 当用户查询到达时，系统根据查询内容检索相关片段。
3. 通过模块化流水线构建面向当前查询的专属记忆。

## 解决的问题

传统固定记忆流水线存在两大缺陷：
- **查询无关性**：系统在不知道未来问题的情况下提前压缩历史，可能丢失后续查询真正需要的细节。
- **缺乏成本控制**：简单问题和复杂问题被同一套流程处理，无法根据查询复杂度调整计算投入。

## 与其他记忆范式的区别

运行时查询感知记忆提取将"查询理解"作为记忆处理的前置条件，使得记忆系统能够根据查询的信息需求进行精准的资源分配。这一理念为[[budget-tier-routing|预算档位路由]]提供了架构基础，使得 Agent 记忆系统具备了类似云计算资源调度的"弹性伸缩"能力。