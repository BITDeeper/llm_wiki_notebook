---
type: entity
title: OpenAI Codex
tags: [ai-model, code-generation, openai]
related: [claude-code, 盲移植, simcity-1989-移植事件]
created: 2026-04-01
updated: 2026-04-01
sources: ["yc掌门人惊呼：这就是-agi！4天、零读码，ai移植37年古董软件.md"]
---

# OpenAI Codex

OpenAI Codex 是 OpenAI 开发的 AI 代码生成模型。在 [[christopher-ehrlich]] 进行的 [[simcity-1989-移植事件]] 中，5.3-codex 版本被用作核心引擎，成功实现了对复杂遗留系统的“[[盲移植]]”。

## 应用案例
- **SimCity 移植**：在 Christopher Ehrlich 的项目中，Codex 被用于将 1989 年的 C 语言代码库重写为 TypeScript。整个过程仅耗时 4 天，成本不到 30 美元，且无需人工阅读原始代码。

## 技术表现
在该案例中，Codex 展现了在处理高度晦涩、依赖位运算和古老编程范式（如汇编转C）的代码时的强大重构能力。配合 [[基于属性的测试]]，它能够通过迭代生成符合严格行为规范的代码。