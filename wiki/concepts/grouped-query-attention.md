---
type: concept
title: Grouped Query Attention（GQA）
created: 2026-05-19
updated: 2026-05-19
tags: [注意力机制, kv-cache, 架构优化]
related: [跨层kv共享, multi-head-latent-attention-mla, 压缩卷积注意力-cca, 长上下文效率优化]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
---
# Grouped Query Attention（GQA）

一种让多个Query Head共享同一组Key-Value（KV）Head的注意力机制，是当前LLM架构设计中减少KV Cache大小的经典方法。

## 核心原理

在标准Multi-Head Attention（MHA）中，每个Query Head都有独立的KV Head。GQA将多个Query Head分组，每组共享同一组KV Head，从而减少KV Cache的大小。

## 特殊情况

- **MHA**：每个Query Head有独立KV Head（分组数=Head数）
- **MQA**（Multi-Query Attention）：所有Query Head共享一个KV Head（分组数=1），是GQA的极端情况

## 在新架构中的应用

GQA是本文讨论的多种高级技术的基础：
- [[gemma-4|Gemma 4]] E2B使用MQA（GQA的特殊情况）
- [[zaya1-8b|ZAYA1-8B]]使用4:1 GQA结合CCA
- [[跨层kv共享]]在GQA基础上进一步跨层复用KV