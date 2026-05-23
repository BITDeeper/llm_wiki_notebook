---
type: entity
title: Laguna XS.2
created: 2026-05-19
updated: 2026-05-19
tags: [poolside, 开源模型, llm, 代码生成, 注意力机制]
related: [逐层注意力预算分配, sliding-window-attention, grouped-query-attention]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
---
# Laguna XS.2

欧洲公司 Poolside 推出的首个 open-weight 模型，主要专注于面向代码场景的LLM训练。是近期open model中最具代表性的[[逐层注意力预算分配]]实践。

## 架构概览

- **总层数**：40层
- **Sliding-Window Attention层**：30层（窗口大小512 token）
- **Global / Full Attention层**：10层
- **KV Head数量**：固定为8

## 核心创新：逐层Query-Head Budgeting

Laguna XS.2 引入了不同层拥有不同数量Query Head的设计：

- **Full Attention Layer**：每个KV Head对应 **6个** Query Head
- **Sliding-Window Attention Layer**：每个KV Head对应 **8个** Query Head

核心思路是将Attention Capacity花在最值得的地方：Full Attention Layer因需要访问整个上下文窗口，计算代价更高，因此减少Query Head数量；计算成本更低的Sliding-Window Layer则拥有更多Query Head。

## 其他特性
- 采用 per-head attention-output gating，与Qwen3-Next等模型类似
- 逐层动态分配模型容量的思路可追溯至Apple在2024年提出的OpenELM