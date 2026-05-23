---
type: concept
title: 逐层嵌入（PLE）
created: 2026-05-19
updated: 2026-05-19
tags: [嵌入, 参数效率, 架构优化, 小模型]
related: [gemma-4, 长上下文效率优化]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
---
# 逐层嵌入（PLE）

Per-Layer Embeddings（PLE）是一种面向参数效率的架构设计，让小模型通过额外的embedding table提升表达能力，而不扩大Transformer主干的计算规模。

## 核心原理

1. **PLE Vector构建**：token ID经过per-layer embedding lookup + 普通token embedding通过linear projection映射到PLE空间，两部分相加、缩放、reshape
2. **分发机制**：每个Transformer Block只接收属于自己的那一份较小的token-specific embedding slice
3. **注入方式**：在Feed-Forward residual update后，当前hidden state作为gating信号控制layer-specific PLE vector，被gate后的PLE vector重新投影回model hidden size并作为额外residual update加回模型

## 关键特点

- PLE不是给每个Transformer Block单独复制一整套embedding layer，而是只计算一次再分发
- embedding本质上是lookup-style parameter，远比增加Attention或FFN权重更便宜、更容易缓存
- 让昂贵的Transformer Block保持在较小的"effective size"，同时把额外容量存储在per-layer embedding table中

## 应用实例

[[gemma-4|Gemma 4]] E系列模型：
- E2B：2.3B effective parameters → 5.1B总参数量（含embedding）
- E4B：4.5B effective parameters → 约8B总参数量

## 开放问题

- 目前缺乏PLE版本与同等参数量Dense模型的完整对比实验
- 理论上PLE不限于小模型，但大模型中收益可能不明显（已有MoE等结构提升容量）