---
type: entity
title: BudgetMem
created: 2026-06-14
updated: 2026-06-14
tags: [agent-memory, budget-routing, reinforcement-learning, cost-aware, llm-agent]
related: [runtime-query-aware-memory, budget-tier-routing, performance-cost-frontier, fixed-memory-pipeline, nanyang-technological-university, delta-mem, vam-视觉智能体记忆]
sources: ["rss/budgetmem：给runtime-agent-memory装上「预算路由器」，让记忆系统学会按需分配运行成本.md"]
---
# BudgetMem

BudgetMem 是一个基于强化学习的动态预算路由记忆系统框架，由[[南洋理工大学]]和[[香港科技大学广州|香港科技大学（广州）]]的研究团队提出。其核心主张是：Agent 记忆系统不应使用固定的处理流水线，而应根据当前查询的复杂度动态分配计算预算。

## 核心架构

BudgetMem 打破了[[固定记忆流水线]]（build once, use always）的传统范式，引入了[[runtime-query-aware-memory|运行时查询感知记忆提取]]机制。系统将历史保留为原始 chunks，当查询到达时再进行动态处理。

其实验性模块化流水线包含：
1. **Filtering**：筛选相关 chunks。
2. **Entity / Temporal / Topic Extraction**：分别提取实体、时间和主题相关信息。
3. **Summarization**：整合为面向当前查询的记忆。

## 预算档位接口

BudgetMem 的关键创新在于为每个记忆处理模块提供 LOW / MID / HIGH 三档[[budget-tier-routing|预算档位]]。系统支持三种预算分层策略：
- **Implementation Tiering**：改变模块实现方式（规则 → 轻量模型 → LLM），覆盖较宽的预算范围。
- **Reasoning Tiering**：改变推理行为（直接提取 → CoT → 多步反思），适合细粒度质量调节。
- **Capacity Tiering**：改变模型大小，适用于不同规模的部署需求。

## 强化学习训练

由于记忆提取过程包含离散的检索和模型调用，难以端到端求导。BudgetMem 将预算档位选择建模为序列决策问题，使用强化学习训练轻量级 Budget Router。通过调节成本权重，系统可在 performance-first 和 cost-sensitive 设置之间灵活切换，形成连续可控的[[performance-cost-frontier|性能-成本前沿]]。

## 实验表现

在 LoCoMo、LongMemEval 和 HotpotQA 基准上，BudgetMem 在 performance-first 设置下的 F1 和 LLM-Judge 指标优于 ReadAgent、MemoryBank、A-MEM、Mem0、MemoryOS、LightMem 等基线系统。

## 在 Wiki 中的定位

BudgetMem 代表了第三代 Agent 记忆系统（成本感知型）。它与 Wiki 中收录的其他记忆研究形成互补：
- 与[[delta-mem]]：δ-mem 聚焦于记忆容量与参数效率，BudgetMem 聚焦于记忆提取的运行时成本调度。
- 与[[vam-视觉智能体记忆]]：VAM 解决"记什么"的问题，BudgetMem 解决"花多少算力去记"的问题。
- 与[[token末日]]及[[企业ai成本治理]]：BudgetMem 的"按需计算"理念是 AI 行业成本治理趋势在底层记忆架构层面的具体体现。