---
type: entity
title: Axion CPU
tags: [google, hardware, cpu, arm]
related: [tpu-8t, tpu-8i, google-deepmind]
created: 2026-04-23
updated: 2026-04-23
sources: ["马斯克站台谷歌第8代tpu！训练从数月缩至数周、推理性价比提升80%.md"]
---

# Axion CPU

Axion 是谷歌基于 ARM 架构自研的 CPU 处理器。在第 8 代 TPU 发布中，Axion 作为 TPU 的搭档首次亮相，标志着谷歌实现了 AI 基础设施中计算单元的全栈自研。

## 角色与功能

### TPU 的协处理器
在以往的 TPU 系统中，谷歌可能搭配通用的第三方 CPU（如英特尔或 AMD 的 x86 架构）。Axion 的引入意味着谷歌可以根据 AI 任务的实际需求，定制 CPU 和 TPU 之间的配合方式，从而榨干每一瓦电的性能。

### 系统级优化
- **服务器密度**：在 [[tpu-8i]] 推理系统中，Axion 的引入使得每台服务器的 CPU 主机数量翻倍。
- **NUMA 隔离**：通过非统一内存访问（NUMA）优化，确保 CPU 与 TPU 协同时的高效性，减少数据争用。

## 战略意义
Axion 的出现是谷歌全栈协同优化战略的关键一环。它不仅消除了对第三方 x86 架构的依赖，还使得从 CPU、TPU 到网络、数据中心的整个链路都能围绕 AI 负载进行深度定制。这种软硬件结合的能力是谷歌在 AI 基础设施领域竞争的重要壁垒。