---
type: concept
title: SNIC
tags: [hardware, networking, infrastructure, storage]
related: [dualpath, cnic, pd分离架构, rdma]
created: 2026-02-27
updated: 2026-02-27
sources: ["deepseek新论文剧透v4新框架！用闲置网卡加速智能体推理性能，打破pd分离瓶颈.md"]
---

# SNIC

**SNIC**（Storage NIC）是指专用于存储读写的网卡。

## 在 DualPath 中的作用

在 [[DualPath]] 框架中，SNIC 是核心优化的关键资源。传统的 [[PD分离架构]] 导致预填充引擎（PE）的 SNIC 过载，而解码引擎（DE）的 SNIC 闲置。DualPath 通过利用 DE 上闲置的 SNIC 带宽来读取 KV-Cache，再通过 [[RDMA]] 传输给 PE，从而实现了集群存储带宽的全局池化。

## 与 CNIC 的区别

- **[[CNIC]]**（Compute NIC）：专用于计算节点间通信（如梯度同步、推理通信），通常对延迟极其敏感。
- **SNIC**：用于存储 I/O，通常吞吐量大但延迟容忍度相对较高。

DualPath 通过流量隔离技术（如 InfiniBand 的 VL/TC），确保 CNIC 的计算通信拥有最高优先级（99% 带宽），而 SNIC 的缓存搬运流量则“蹭”剩余带宽，互不干扰。