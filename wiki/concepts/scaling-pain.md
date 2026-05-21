---
type: concept
title: Scaling Pain
tags: [engineering, system-architecture, scaling-law]
related: [scaling-law, kv-cache, pd分离架构]
created: 2026-05-01
updated: 2026-05-01
sources: ["智谱公布“降智”的秘密：scaling不可避免的痛.md"]
---

# Scaling Pain

**Scaling Pain**（扩展之痛）是由智谱提出的概念，指随着模型规模扩大和应用场景复杂化（如高并发、长上下文的 [[Coding Agent]]），工程系统面临的非确定性故障和性能瓶颈。

## 核心特征
- **难以复现**：异常现象（如乱码、复读）往往只出现在特定的高负载在线环境中，难以在标准离线测试中复现。
- **时序敏感**：问题通常源于分布式系统中的微小时序错误，而非算法逻辑错误。
- **基础设施瓶颈**：表明 AI 发展的瓶颈正从“模型能力”转向“系统工程稳定性”。

## 典型案例
智谱在 [[GLM-5]] 的部署中发现，[[PD分离架构]] 下的 [[KV Cache]] 竞态条件和 [[HiCache]] 的加载时序缺失是导致 Scaling Pain 的主要原因。解决这些问题需要引入显式同步机制和分层存储优化（如 [[LayerSplit]]）。

## 行业意义
Scaling Pain 揭示了 [[Scaling Law]] 背后的工程代价。未来的 AI 竞争不仅需要更强的模型，更需要能够支撑大规模并发、保证输出确定性的底层基础设施。