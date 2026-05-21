---
type: source
title: "Kimi新论文：把KVCache玩成新商业模式了"
tags: [ai-infra, llm-inference, distributed-systems, moonshot, prfaas]
related: [月之暗面, prfaas, 混合注意力架构, mooncake, kv-cache-带宽墙]
created: 2026-04-19
updated: 2026-04-19
authors: [衡宇]
year: 2026
url: "https://mp.weixin.qq.com/s/VvvvYy_c2g4Bnrc2qopiNw"
venue: "量子位"
sources: ["kimi新论文：把kvcache玩成新商业模式了.md"]
---

# 概述

本文报道了 [[月之暗面]] 与 [[清华大学]] 联合提出的一项名为 [[PrFaaS]]（Prefill-as-a-Service，预填充即服务）的新型推理架构。该架构旨在解决大模型长上下文推理中的跨数据中心调度难题，通过将 Prefill 阶段与 Decode 阶段彻底解耦，并利用普通以太网传输 KV Cache，实现了异构算力的独立扩容与最优调度。

# 核心内容

## 背景与挑战

传统的 Prefill-Decode（PD）分离架构虽然已成为行业标配，但存在严重的局限性：
- **网络依赖**：KV Cache 传输高度依赖昂贵的 RDMA 网络，导致 Prefill 和 Decode 被强行绑定在单一集群内。
- **资源僵化**：无法跨地域调度最适合各自阶段的异构硬件（如 H200 做 Prefill，H20 做 Decode），导致算力利用率低下。
- **带宽墙**：以 MiniMax-M2.5 为例，32K 上下文下 KV Cache 生成速率达 60Gbps，远超普通跨数据中心以太网带宽（10-100Gbps）。

## 技术突破

### 1. 混合注意力架构的转机
新一代模型（如 Kimi Linear, Qwen 3.5）采用的“线性注意力+全注意力”混合架构大幅降低了 KV Cache 的吞吐量：
- MiMo-V2-Flash：降至 4.66Gbps（降低 13 倍）。
- Qwen3.5-397B：降至 8.25Gbps（降低 4 倍）。
- Ring-2.5-1T：通过 MLA 压缩和混合比例，整体 KV 内存节省约 36 倍。
这使得 KV Cache 传输从 RDMA 级别降到了以太网可承载级别。

### 2. PrFaaS 架构设计
PrFaaS 核心是将长上下文请求的 Prefill 计算卸载到独立的算力密集型集群，生成的 KV Cache 通过普通以太网传回本地集群执行 Decode。
- **计算层**：H200 专攻长上下文 Prefill，H20 专攻 Decode 和短请求，实现独立扩容。
- **网络层**：跨数据中心使用 VPC 或专线（100Gbps），无需 RDMA。
- **存储层**：设计混合前缀缓存池，区分集群内复用的 prefix-cache 和跨集群传输的 transfer-cache。

### 3. 双时间尺度调度
- **短期（毫秒级）**：基于带宽和缓存进行路由决策，动态调整长度阈值 t。
- **长期（分钟级）**：基于流量模式动态重分配集群角色（Prefill 或 Decode）。

## 实验结果

基于 1T 参数混合注意力模型和生产级配置（32 张 H200 + 64 张 H20）的实测显示：
- **吞吐量**：相比同构 PD 部署提升 54%，相比朴素异构部署提升 32%。
- **延迟**：P90 TTFT（首词时延）降低 64%。
- **带宽占用**：跨数据中心传输仅占用 13Gbps（100Gbps 链路的 13%），证明普通以太网即可稳定承载。

# 团队背景

该研究由 [[月之暗面]] 与 [[清华大学]] 郑纬民院士、武永卫教授团队联合完成。论文一作为秦若愚，通讯作者为章明星副教授。作者团队也是 [[Mooncake]] 分布式推理系统的核心贡献者。

# 意义

PrFaaS 架构不仅打破了长上下文推理的物理瓶颈，还通过“异构解耦”大幅降低了推理成本，为缓解 [[ai-subscription-crisis]] 提供了新的技术路径。