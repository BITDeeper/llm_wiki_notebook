---
type: concept
title: 预算档位路由
created: 2026-06-14
updated: 2026-06-14
tags: [agent-memory, budget-routing, reinforcement-learning, cost-control, dynamic-computing]
related: [budgetmem, runtime-query-aware-memory, performance-cost-frontier, fixed-memory-pipeline]
sources: ["rss/budgetmem：给runtime-agent-memory装上「预算路由器」，让记忆系统学会按需分配运行成本.md"]
---
# 预算档位路由

预算档位路由（Budget-Tier Routing）是[[budgetmem|BudgetMem]]框架的核心机制，为记忆处理模块提供动态计算路径选择能力，使 Agent 记忆系统实现"按需计算"。

## 机制设计

每个记忆处理模块提供 LOW / MID / HIGH 三档预算接口。同一个模块既可以用低成本方式执行（如规则/启发式方法），也可以用更高质量但更昂贵的方式执行（如大语言模型调用）。Budget Router 根据当前查询的复杂度和信息需求，动态为每个模块选择合适的预算档位。

## 三种分层策略

BudgetMem 系统比较了三种预算档位实现策略：
1. **Implementation Tiering（实现分层）**：改变模块实现方式，从规则/启发式 → 轻量模型 → LLM。覆盖较宽的预算范围，适合从低成本到高性能的部署需求。
2. **Reasoning Tiering（推理分层）**：改变推理行为，从直接提取 → CoT 推理 → 多步反思。适合在相近成本区间内进行细粒度质量调节。
3. **Capacity Tiering（容量分层）**：改变模型大小，用不同规模的模型实现同一模块。

## 强化学习训练

由于记忆提取过程包含离散的检索、规则、小模型和 LLM 调用，难以直接端到端求导。预算档位选择被建模为序列决策问题：
- 每个 query 的处理过程对应一个 episode。
- 最终回答质量作为**任务奖励**（task reward）。
- 记忆提取成本作为**成本奖励**（cost reward）。
- 通过调节成本权重，实现[[performance-cost-frontier|性能-成本前沿]]的连续可控权衡。

## 行业意义

预算档位路由代表了 Agent 记忆系统从"统一处理"向"弹性伸缩"的范式转变，与 2026 年中期 AI 行业从[[tokenmaxxing|Token 消耗竞赛]]转向[[企业ai成本治理|成本治理]]的宏观趋势高度同步。