---
type: concept
title: KV Cache 带宽墙
tags: [llm-inference, bottleneck, networking, performance]
related: [prfaas, 混合注意力架构, rdma, long-context]
created: 2026-04-19
updated: 2026-04-19
sources: ["kimi新论文：把kvcache玩成新商业模式了.md"]
---

# KV Cache 带宽墙

**KV Cache 带宽墙**是指在大模型推理的长上下文场景下，KV Cache 的生成速率极高，远超普通网络带宽的承载能力，从而形成严重的传输瓶颈。

## 形成原因

在传统的 Transformer 架构（如 Dense GQA）中，KV Cache 的大小与上下文长度成正比。当处理长文本（如 32K tokens）时：
- 单实例 KV Cache 生成速率可达 **60Gbps**（如 MiniMax-M2.5）。
- 而普通跨数据中心以太网带宽通常仅为 **10-100Gbps**。

这种巨大的差距就像“试图用家用小水管来扛消防水带的流量”，导致网络拥塞和推理延迟。

## 后果

1.  **架构锁定**：为了保证低延迟，Prefill 和 Decode 阶段必须部署在同一个 RDMA 域内，无法跨机房调度。
2.  **资源浪费**：无法针对不同阶段（计算密集型 vs 带宽密集型）使用最匹配的异构硬件，导致整体算力利用率低下。
3.  **成本高昂**：被迫依赖昂贵的 RDMA 网络设备进行集群内互联。

## 破局方案

[[混合注意力架构]]的出现是打破带宽墙的关键。通过引入线性注意力层，KV Cache 的吞吐量可降低 4-36 倍，使其落入普通以太网的承载范围。这直接催生了 [[PrFaaS]] 等跨数据中心推理架构，实现了算力的灵活调度与成本优化。