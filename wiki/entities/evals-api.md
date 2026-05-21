---
type: entity
title: Evals API
tags: [openai, testing, monitoring, safety]
related: [openai-data-agent, 终身记忆]
created: 2026-04-20
updated: 2026-04-20
sources: ["动动嘴写sql！codex+终身记忆，openai把查询难度直接归零.md"]
---

# Evals API

Evals API 是 OpenAI 用于评估和监控 AI 模型表现的框架。在 [[openai-data-agent]] 中，它扮演着“严格监管者”的角色，确保智能体在自我进化的过程中不会偏离正确轨道。

## 核心机制

### 黄金标准
对于关键的数据查询问题，Evals API 配备了由专家手动编写的“黄金标准” SQL 查询语句。这些标准答案用于：
- 验证智能体生成的 SQL 语法正确性。
- 比较返回结果的数据准确性。

### 持续监控
智能体的每一次重要查询表现都会被评分。如果智能体因为错误的 [[终身记忆]] 或上下文理解偏差而产生错误结果（即“学坏”），系统会立即发出警报，以便工程师在影响业务前进行修复。

## 重要性
在具有高度自主性的 Agent 系统中，Evals API 提供了一种必要的反馈回路，平衡了智能体的自主性与系统的可靠性。