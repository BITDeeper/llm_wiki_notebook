---
type: concept
title: DuoAttention
tags: [推理优化, 注意力机制, 显存优化]
related: [肖光烜, streamingllm, kv-cache-优化]
created: 2026-01-09
updated: 2026-01-09
sources: ["mit天才博士刚毕业，就被前openai-cto抢走！年薪或300万起步.md"]
---

# DuoAttention

**DuoAttention** 是一种针对长上下文大语言模型推理的高效注意力机制优化方案，由 [[肖光烜]] 在英伟达实习期间提出。

## 背景与动机
在处理长文本时，Transformer 模型的 KV Cache 会随着序列长度线性增长，导致显存迅速耗尽（OOM）。传统的注意力机制对所有 Token 一视同仁，缺乏针对性优化。

## 核心思想
DuoAttention 基于一个观察：**注意力头是有分工的**。
- **少数头**：负责“全局检索”，关注整个上下文中的关键信息。
- **多数头**：仅关注“最近上下文”，即局部信息。

## 实现方式
根据这种分工，DuoAttention 采用混合策略：
1.  对全局检索头保留完整的 KV Cache。
2.  对局部关注头仅保留最近窗口的 KV Cache。

## 效果
这种策略大幅降低了显存占用，同时几乎不损失模型的性能。它解决了长上下文推理中的显存瓶颈，使得在有限硬件资源下处理超长序列成为可能。