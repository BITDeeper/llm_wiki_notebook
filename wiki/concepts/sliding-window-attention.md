---
type: concept
title: Sliding Window Attention
created: 2026-05-19
updated: 2026-05-19
tags: [注意力机制, 局部注意力, 长上下文, 架构优化]
related: [gemma-4, laguna-xs-2, 压缩稀疏注意力-csa-hca, 长上下文效率优化]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
---
# Sliding Window Attention

一种只关注局部窗口的注意力机制，通常与Global/Full Attention混合使用以降低计算成本。

## 核心原理

Sliding Window Attention限制每个token只关注其前后固定窗口范围内的token（如512个），而非整个上下文窗口。这大幅降低了KV Cache与Attention计算成本。

## 在新架构中的应用

- **[[gemma-4|Gemma 4]] E2B**：普通GQA与Sliding Window Attention按4:1组合
- **[[laguna-xs-2|Laguna XS.2]]**：40层中30层使用Sliding-Window（窗口512 token），10层使用Global Attention
- **[[deepseek-v4|DeepSeek V4]]**：CSA与HCA都保留Local Sliding-Window Branch处理最近的未压缩token

## 设计模式

Sliding Window Attention通常不单独使用，而是与Global/Full Attention交替出现，形成"局部精细 + 全局覆盖"的混合架构。这种设计在长上下文场景下尤为常见。