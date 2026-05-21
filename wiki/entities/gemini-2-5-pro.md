---
type: entity
title: Gemini 2.5 Pro
tags: [google, llm, closed-model]
related: [google-deepmind, gpt-5-5, claude-opus-4-7, 不可压缩知识探针]
created: 2026-05-01
updated: 2026-05-01
sources: ["有人只用api就猜出了gpt、claude、gemini的参数量？社区吵翻了.md"]
---

# 简介
**Gemini 2.5 Pro** 是 Google DeepMind 发布的大语言模型。根据 [[李博杰]] 的“[[不可压缩知识探针]]”框架估算，该模型的参数量约为 **1.2 万亿**。

# 参数估算与对比
- **估算数值**：约 1.2 万亿参数。
- **横向对比**：该估算数值与国内模型 [[Kimi k2.6]] 和 [[GLM 5.1]]（约 800B 参数）的差距仅在 2 倍左右。
- **性能鸿沟争议**：社区指出，尽管参数差距不大，但 Gemini 2.5 Pro 与上述国内模型在实际使用体验上存在巨大性能鸿沟。这引发了关于单纯参数量是否能决定模型能力的质疑，也暗示了 [[不可压缩知识探针]] 方法可能存在的局限性（如未区分 [[MoE (混合专家) 架构]] 与稠密模型）。

# 相关条目
- [[Google DeepMind]]：模型开发者。
- [[不可压缩知识探针]]：用于估算该模型参数的方法论。