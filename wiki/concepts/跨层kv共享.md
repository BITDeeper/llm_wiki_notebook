---
type: concept
title: 跨层KV共享
created: 2026-05-19
updated: 2026-05-19
tags: [注意力机制, kv-cache, 架构优化, 长上下文]
related: [gemma-4, grouped-query-attention, sliding-window-attention, 长上下文效率优化]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
---
# 跨层KV共享

也称 Cross-Layer Attention，是一种让不同Transformer层复用同一组KV Projection的架构优化技术，旨在将KV Cache大小减少约一半。

## 核心原理

在传统Transformer中，每一层Attention模块都会分别计算自己的Key和Value Projection。跨层KV共享则让后续层不再单独计算KV，而是直接复用最近一个同类型且未共享层所生成的KV Tensor。

### 共享规则
- Sliding Window Attention层复用前面某个Sliding Window层的KV
- Full Attention层复用前面某个Full Attention层的KV
- 每层仍然计算自己的Query Projection，因此不同层依然可以形成各自不同的Attention Pattern

## 代表性应用

[[gemma-4|Gemma 4]]是首个大规模应用此机制的主流开源架构：
- E2B：35层中仅15层计算KV，后20层共享
- E4B：42层中24层计算KV，后18层共享
- KV Cache整体大小减少约50%

## 理论基础

该思路源自NeurIPS 2024论文《Reducing Transformer Key-Value Cache Size with Cross-Layer Attention》，Gemma 4是首次将其大规模应用于主流开源架构。

## 设计权衡

- **优势**：显著降低长上下文场景下的显存占用与计算成本
- **代价**：本质上是对完整Attention计算的"近似"，会削弱模型容量
- **实验结论**：在小规模模型上，这种影响可以非常有限