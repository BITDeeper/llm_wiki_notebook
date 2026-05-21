---
type: concept
title: xhigh 推理等级
created: 2026-04-17
updated: 2026-04-17
tags: [api-parameters, llm-configuration, cost-control]
related: [claude-opus-4-7, 自适应思考模式, token-成本]
sources: ["claude-opus-4.7来了，公开模型里的sota！不过用起来gpt味好浓.md"]
---

# xhigh 推理等级

[[xhigh-推理等级]]（xhigh reasoning level）是 [[Anthropic]] 在 [[Claude Opus 4.7]] 中引入的一种新的推理努力级别设置。

## 定义
`xhigh` 介于现有的 `high` 和 `max` 等级之间，旨在为开发者提供更精细的控制旋钮，以便在**智能深度**与**响应延迟/成本**之间找到平衡点。

## 设计目的
- **平衡性能与成本**：`max` 级别虽然智能最强但延迟和成本极高，`high` 级别则可能在复杂任务上思考不足。`xhigh` 填补了这一空白。
- **适配多数任务**：官方建议将其作为大多数编码和 [[Agentic Coding]] 任务的起始配置。

## 应用场景
特别适用于需要深度推理但又无法接受 `max` 级别高延迟的场景，例如：
- 复杂的多步骤代码重构。
- 需要逻辑连贯性的长上下文分析。
- 对成本敏感但要求一定质量的 Agent 任务。