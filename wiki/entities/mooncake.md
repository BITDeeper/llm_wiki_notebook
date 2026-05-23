---
type: entity
title: Mooncake
tags: [ai-infra, distributed-systems, moonshot, tsinghua, KVCache, 推理优化, 开源项目, 分布式系统, 分布式推理, AI基础设施, KV-Cache]
related: [月之暗面, 清华大学, prfaas, 趋境科技, sglang, 摩尔线程, p-d分离, vLLM, prefill-decode分离架构]
created: 2026-04-19
updated: 2026-05-22
sources: ["kimi新论文：把kvcache玩成新商业模式了.md", "国产gpu组了个开源局，把sglang等核心开发者都摇来了！.md", "国产gpu首获全球顶级推理框架「原生门票」：musa合入sglang主线.md"]
---

# Mooncake

**Mooncake** 是由 [[月之暗面]] 与 [[清华大学]] MADSys 实验室联合主导研发并开源的分布式推理基础设施项目，专注于 KVCache 解耦与传输，在大模型推理栈中负责分布式推理的底层支撑。该系统旨在解决大模型在大规模部署时的推理效率与资源调度问题，已成为 [[sglang|SGLang]]、vLLM 等主流推理框架的标配组件。

## 核心关联

Mooncake 项目是 [[PrFaaS]]（Prefill-as-a-Service）架构的前身与核心共建基础。PrFaaS 论文的核心作者团队（包括秦若愚、许欣然等）同时也是 Mooncake 架构的核心贡献者。

## 技术架构与核心能力

Mooncake 的研发涉及对 KV Cache 架构的深度优化与分布式推理调度，具备以下核心能力：

- **传输引擎：** 充分利用零拷贝 RDMA 与多协议支持，在高吞吐与超低延迟之间找到平衡。
- **KV Cache Store：** 将 GPU 显存、DRAM、SSD 等异构存储统一池化，大幅降低长上下文推理成本。
- **弹性 EP 架构：** 支持故障节点的动态摘除与 Expert 映射调整，显著提升集群容错能力。
- **RDMA P2P 权重更新：** Kimi K2 1T 模型权重同步从 53 秒降至 7.2 秒（7.37 倍加速），RL 场景下通过 P2P 传输实现同等效果。
- **EPD 三级解耦架构：** 多模态模型首 token 延迟降低 6-8 倍。
- **HiCache + Mooncake 后端：** 多轮对话缓存命中率超 90%。

## 生产级特性

Mooncake 与 [[musa架构|MUSA]] 的结合探索了跨实例 KVCache 共享、弹性扩缩容、缓存复用、原地升级等生产级问题。

## 合作单位与关键人物

### 趋境科技

[[趋境科技]] 是一家 AI Infra 公司，由清华教授武永卫担任首席科学家，是 Mooncake 项目的核心共建单位。

### 摩尔线程

[[摩尔线程]] 已作为 Mooncake 项目的核心 Maintainer 之一，深度参与多节点通信协议等关键特性的共建。摩尔线程通过 Mooncake 方式支持 [[prefill-decode分离架构|PD 分离]]。

### 核心贡献者

- **马腾** — 阿里云工程师，Mooncake 核心贡献者，专注 KVCache 解耦与传输。曾在「SGLang × MUSA Meetup」上分享推理解耦时代的基础设施技术。

## 意义

Mooncake 代表了 AI 推理基础设施从"单机集群"向"多中心协同"演进的重要探索，为后续实现跨地域的异构算力调度奠定了理论与工程基础。