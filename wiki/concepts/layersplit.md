---
type: concept
title: LayerSplit
tags: [optimization, kv-cache, inference]
related: [glm-5.1, hicache, kv-cache]
created: 2026-05-01
updated: 2026-05-01
sources: ["智谱公布“降智”的秘密：scaling不可避免的痛.md"]
---

# LayerSplit

**LayerSplit** 是智谱提出的一种 KV Cache 分层存储优化方案，旨在解决长上下文推理中 Prefill 阶段的内存和带宽瓶颈。

## 工作原理
在传统的推理架构中，每个 GPU 通常需要存储完整的 KV Cache，这在处理长上下文时会导致巨大的内存压力。LayerSplit 通过以下方式优化：
1.  **分层存储**：每个 GPU 仅存储部分层的 KV Cache，显著降低了单卡内存占用。
2.  **广播机制**：在执行 Attention 计算前，将对应层的 KV Cache 广播给其他相关 rank。
3.  **通信重叠**：设计 KV Cache 广播与 Indexer 计算的重叠机制，将通信延迟隐藏在计算过程中。

## 性能表现
根据智谱在 [[GLM-5.1]] 上的测试数据：
- 在 Cache 命中率达到 90%、请求长度在 40k 到 120k 区间内时，系统吞吐量提高了 **10% 到 132%**。
- 随着上下文长度的增加，LayerSplit 的收益也随之增长。

## 应用场景
LayerSplit 特别适用于 [[Coding Agent]] 等需要处理大量长上下文并发请求的场景，是缓解 **[[Scaling Pain]]** 的关键技术之一。