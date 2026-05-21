---
type: concept
title: FlexKV
created: 2026-05-03
updated: 2026-05-03
tags: [分布式, 显存优化, 架构]
related: [vllm, kv-cache, 分离式服务]
sources: ["vllm-v0-20-发布-2-bit-压缩默认开启-你的推理成本要打折了-20260503.md"]
---

# FlexKV

FlexKV 是一种分布式 KV 缓存技术，旨在解决大模型推理中的显存容量限制和资源调度灵活性问题。它被集成在 [[vLLM]] v0.20 及以后的版本中。

## 核心功能

FlexKV 允许将 KV Cache 从 GPU 显存中**卸载** (Offload) 到其他存储介质，包括：

-   CPU 内存
-   本地 SSD
-   远程网络存储

## 应用场景：Disaggregated Serving (分离式服务)

FlexKV 支持将推理的不同阶段部署在不同的硬件资源上：

1.  **Prefill 阶段**（计算密集）：可以部署在拥有强大算力的 GPU 集群上。
2.  **Decode 阶段**（内存密集）：可以利用 FlexKV 将庞大的 KV Cache 存储在廉价的 CPU 内存或 SSD 中，仅将当前计算所需的数据加载回 GPU。

这种架构使得大规模推理服务不再受限于单张显卡的显存大小，实现了计算资源与存储资源的解耦和独立扩展。