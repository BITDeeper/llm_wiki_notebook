---
type: concept
title: PrFaaS
tags: [ai-infra, llm-inference, architecture, distributed-systems]
related: [月之暗面, mooncake, 混合注意力架构, kv-cache-带宽墙, ai-subscription-crisis]
created: 2026-04-19
updated: 2026-04-19
sources: ["kimi新论文：把kvcache玩成新商业模式了.md"]
---

# PrFaaS (Prefill-as-a-Service)

**PrFaaS**（Prefill-as-a-Service，预填充即服务）是一种由 [[月之暗面]] 和 [[清华大学]] 提出的大模型推理服务架构范式。其核心思想是将大模型推理的 Prefill（预填充）阶段与 Decode（解码）阶段彻底解耦，并将 Prefill 阶段跨数据中心调度到独立的算力密集型集群中执行。

## 核心特性

### 异构解耦
PrFaaS 允许针对不同推理阶段使用最适合的硬件，并独立扩容：
- **Prefill 集群**：使用算力强大的芯片（如 H200），专注于处理高负载的长上下文预填充计算。
- **Decode 集群**：使用带宽优化的芯片（如 H20），专注于处理解码阶段及短请求的全流程推理。

### 跨数据中心调度
通过 [[混合注意力架构]] 对 KV Cache 的压缩，PrFaaS 使得 KV Cache 能够通过普通商用以太网（如 100Gbps VPC）进行跨数据中心传输，而不再依赖昂贵的 RDMA 网络。这打破了传统 PD 分离架构的地域限制。

### 智能路由
系统根据请求长度和实时带宽动态决定处理路径：
- **短请求**（未缓存长度 ≤ t）：留在本地 PD 集群处理。
- **长请求**（未缓存长度 > t）：发送至远程 PrFaaS 集群进行 Prefill，生成的 KV Cache 传回本地 Decode。

## 技术组成

1.  **计算层**：异构硬件的独立部署与协同。
2.  **网络层**：集群内使用 RDMA 保证低延迟，跨集群使用通用以太网降低成本。
3.  **存储层**：混合前缀缓存池，区分本地复用缓存和跨集群传输缓存。

## 性能表现

在 1T 参数模型和真实流量（27K tokens 均值）下的实测数据：
- 相比同构部署，吞吐量提升 **54%**。
- 相比朴素异构部署，吞吐量提升 **32%**。
- P90 延迟（TTFT）降低 **64%**。
- 跨数据中心带宽占用仅 **13%**（100Gbps 链路）。

## 商业价值

PrFaaS 通过提升资源利用率和降低网络成本，直接降低了长上下文推理的边际成本。这有助于应对 [[ai-subscription-crisis]]，使得 AI 服务商在提供长文本服务时能保持更好的盈利能力。