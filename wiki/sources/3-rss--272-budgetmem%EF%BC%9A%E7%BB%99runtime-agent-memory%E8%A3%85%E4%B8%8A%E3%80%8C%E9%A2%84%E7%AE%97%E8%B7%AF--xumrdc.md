---
type: source
title: "BudgetMem：给Runtime Agent Memory装上「预算路由器」，让记忆系统学会按需分配运行成本"
authors: [Haozhen Zhang, Wenya Wang, Chengwei Qin]
year: 2026
url: "https://arxiv.org/abs/2602.06025"
venue: "arXiv / 机器之心"
created: 2026-06-14
updated: 2026-06-14
tags: [agent-memory, budget-routing, reinforcement-learning, cost-control, runtime-extraction]
related: [budgetmem, runtime-query-aware-memory, budget-tier-routing, nanyang-technological-university]
sources: ["rss/budgetmem：给runtime-agent-memory装上「预算路由器」，让记忆系统学会按需分配运行成本.md"]
---
# BudgetMem：给Runtime Agent Memory装上「预算路由器」

## 摘要
本文报道了由[[南洋理工大学]]博士生 Haozhen Zhang、助理教授[[wenya-wang|Wenya Wang]]以及[[香港科技大学广州|香港科技大学（广州）]]助理教授[[chengwei-qin|Chengwei Qin]]合作完成的研究工作 [[budgetmem|BudgetMem]]。该研究针对大语言模型（LLM）智能体在长期对话和多轮交互中面临的记忆处理成本问题，提出了一种基于强化学习的动态预算路由机制。

## 核心问题
现有的 Agent 记忆系统普遍采用[[固定记忆流水线]]（Fixed Memory Pipeline）范式，即"一次构建，永久使用"（build once, use always）。这种模式存在两大缺陷：
1. **查询无关性（Query-agnostic）**：系统在不知道未来问题的情况下提前压缩历史，容易丢失后续查询真正需要的细节。
2. **缺乏性能-成本控制**：简单问题和复杂问题被同一套流程处理，导致前者浪费算力，后者预算不足。

## 技术方案
BudgetMem 将记忆构建从固定离线流程转向[[runtime-query-aware-memory|运行时查询感知记忆提取]]。当用户查询到达时，系统检索相关片段，并通过模块化流水线（Filtering → Extraction → Summarization）构建面向查询的记忆。

核心创新在于为每个记忆处理模块提供 LOW / MID / HIGH 三档[[budget-tier-routing|预算档位接口]]。研究比较了三种预算分层策略：
- **Implementation Tiering（实现分层）**：从规则/启发式方法到轻量模型，再到 LLM。
- **Reasoning Tiering（推理分层）**：从直接提取到 CoT 推理，再到多步反思。
- **Capacity Tiering（容量分层）**：使用不同规模的模型执行同一模块。

BudgetMem 将预算档位选择建模为序列决策问题，使用强化学习训练轻量级 Budget Router，以最终回答质量为任务奖励，以记忆提取成本为成本奖励，通过调节成本权重实现[[performance-cost-frontier|性能-成本前沿]]的连续可控权衡。

## 实验结果
在 LoCoMo、LongMemEval 和 HotpotQA 三个基准上，BudgetMem 在 performance-first 设置下的 F1 和 LLM-Judge 指标优于 ReadAgent、MemoryBank、A-MEM、Mem0 等基线。同时能够形成连续可控的性能-成本权衡曲线。

## 意义
BudgetMem 标志着 Agent Memory 研究从"能力构建"（如何记住更多信息）向"效率优化"（如何以合理成本记住信息）的成熟期过渡，直接呼应了 2026 年中期行业从 Token 消耗竞赛转向[[企业ai成本治理|成本治理]]的宏观趋势。