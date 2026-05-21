---
type: concept
title: RLM (Recursive Language Model)
tags: [concurrency, agent-architecture, optimization]
related: [deepseek-tui, deepseek-v4, 终端原生智能体]
created: 2026-05-06
updated: 2026-05-06
sources: ["deepseek版claude-code登顶热榜：8700星，鲸鱼哥火了.md"]
---

# RLM (Recursive Language Model)

[[RLM (Recursive Language Model)]] 是一种在 [[DeepSeek TUI]] 中实现的并行任务处理机制。

## 工作原理

RLM 利用 [[DeepSeek V4]]（特别是 Flash 版本）的低成本特性进行并发调度。它允许主智能体将复杂任务拆解，并同时驱动最多 16 个子任务进行批量处理。

## 优势

- **成本效率**：由于 Flash 模型的输出价格约为 Pro 模型的三分之一，RLM 将大量子任务分配给 Flash 处理，可显著降低整体 API 费用。
- **高并发性**：通过并行处理，能够在短时间内完成对代码库的批量分析或重构。

## 应用场景

该机制特别适合需要大规模代码分析或重构的任务，能够在保证质量的同时，将高昂的 AI 推理成本控制在可接受范围内。