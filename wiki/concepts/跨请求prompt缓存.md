---
type: concept
title: 跨请求Prompt缓存
created: 2026-05-21
updated: 2026-05-21
tags: [optimization, caching, llm]
related: [grok-4-3, hermes-agent, xai]
sources: ["20刀月费秒变api！hermes一行命令就能用上claude、chatgpt订阅.md"]
---
# 跨请求Prompt缓存

跨请求Prompt缓存是一种LLM成本优化机制，在同一会话中重复的system prompt不重复计费。[[grok-4-3]]接入[[hermes-agent]]后默认开启此功能，成为其相比其他模型的成本优势特性。

## 工作原理

- 首次请求时，system prompt被缓存
- 后续请求中，相同的system prompt部分直接命中缓存，仅对新增内容计费
- 对于Agent场景中频繁使用固定system prompt的模式，可显著降低成本

## 在Agent生态中的意义

- Agent通常在每次工具调用后重新发送完整上下文，其中system prompt占比极大
- 跨请求缓存直接降低了[[订阅转api]]模式下的额度消耗速度
- 是[[xai]]吸引开发者选择Grok而非Claude或GPT的差异化竞争力之一