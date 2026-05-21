---
type: concept
title: HiCache
tags: [inference, cache, system]
related: [kv-cache, layersplit, scaling-pain]
created: 2026-05-01
updated: 2026-05-01
sources: ["智谱公布“降智”的秘密：scaling不可避免的痛.md"]
---

# HiCache

**HiCache** 是智谱推理架构中的缓存组件，用于管理 KV Cache 的换入换出，以支持长上下文和高并发推理。

## 技术挑战
在 [[GLM-5]] 的高负载运行中，HiCache 的加载时序缺失导致了 **[[Scaling Pain]]** 的一部分故障。具体问题在于：
- **未就绪访问**：当 KV Cache 换入与计算重叠时，系统未能保证数据在使用前已完成加载，导致计算节点读取了未就绪的 KV Cache 数据。

## 优化方案
智谱重构了 HiCache 的读取流程，引入了**显式同步约束**：
1.  **Load Stream 同步点**：在启动 Indexer 算子之前，插入同步点，确保相应级别的 Indexer 缓存已完全加载。
2.  **Forward Stream 等待**：计算流只有在数据准备就绪后才会进行计算，从而消除了 "read-before-ready" 问题。

这一修复消除了由执行时序不一致引起的异常，显著提升了系统的稳定性。