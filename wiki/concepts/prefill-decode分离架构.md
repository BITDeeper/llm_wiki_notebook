---
type: concept
title: Prefill-Decode 分离架构
created: 2026-05-14
updated: 2026-05-14
tags: [推理优化, 大模型, 分布式系统, KV-Cache]
related: [sglang, mooncake, deepseek-v4, 摩尔线程]
sources: ["国产gpu首获全球顶级推理框架「原生门票」：musa合入sglang主线.md"]
---
# Prefill-Decode 分离架构

Prefill-Decode（PD）分离架构是大模型推理中将预填充（Prefill）和解码（Decode）两个阶段分离部署的架构模式，结合分层缓存机制提升推理效率。

## 技术背景

大模型推理包含两个计算特征截然不同的阶段：

- **Prefill（预填充）：** 计算密集型，需要处理完整的输入 prompt，生成 KV Cache。
- **Decode（解码）：** 访存密集型，逐 Token 生成输出，每次只需读取 KV Cache。

传统架构将两个阶段在同一 GPU 上混合调度，导致资源利用不均衡。PD 分离将两者部署到不同硬件上独立优化。

## 在 SGLang 中的实现

[[sglang]] 支撑 [[deepseek-v4]] 等模型的核心技术之一就是 PD 分离架构与分层缓存机制。DeepSeek V3 的 EP 与 PD 分离方案即出自 SGLang 社区。

## 与 Mooncake 的结合

[[mooncake]] 的 KV Cache Store 将 GPU 显存、DRAM、SSD 等异构存储统一池化，为 PD 分离提供了底层存储基础设施。[[摩尔线程]] 通过 Mooncake 方式支持 PD 分离。

## 分布式支持

摩尔线程基于 MCCL 底座和 Custom Allreduce，已支持 TP/PP/DP/CP/EP 全部分布式方法，并通过 Mooncake 实现 PD 分离。