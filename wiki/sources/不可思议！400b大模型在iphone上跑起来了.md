---
type: source
title: "不可思议！400B大模型在iPhone上跑起来了"
tags: [本地推理, 端侧ai, apple-silicon, moe, 量化]
related: [flash-moe, qwen3.5-397b-a17b, llm-in-a-flash, daniel-woods]
created: 2026-05-01
updated: 2026-05-01
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/kQMDj9KCEdX-ztGiQYZp7Q"
venue: "机器之心"
sources: ["不可思议！400b大模型在iphone上跑起来了.md"]
---

# 不可思议！400B大模型在iPhone上跑起来了

## 概述
本文报道了开发者 [[Daniel Woods]] 利用开源推理引擎 [[Flash-MoE]]，成功在 iPhone 17 Pro 上运行 3970 亿参数（400B）的 [[Qwen3.5-397B-A17B]] 模型。尽管在手机端仅有 0.6 tok/s 的生成速度，但这标志着“端侧大模型”突破了内存容量的物理限制，证明了通过 [[模型流式传输]] 技术，可以在消费级设备上运行远超 DRAM 容量的模型。

## 核心技术突破

### 1. Flash-MoE 引擎
该项目摒弃了 PyTorch 等现代 AI 框架，采用极致的底层工程优化：
- **零 Python 依赖**：完全使用 Objective-C 和 C 编写。
- **定制化 Metal 流水线**：手写 Metal Shader，构建三指令缓存（Three-command-buffer）GPU 并行流水线，消除 CPU/GPU 同步等待。
- **GCD 并行读取**：利用 Grand Central Dispatch 压榨 SSD 速度（M3 Max 上约 17.5 GB/s）。

### 2. 内存管理策略
- **模型流式传输**：模型参数存储在 SSD 中，仅将当前计算所需的“活跃专家”加载到 DRAM。
- **反直觉缓存**：移除应用层缓存，完全交由 macOS 页面缓存管理，避免内存压缩抖动，提升 38% 速度。
- **极低内存占用**：209 GB 模型（2-bit 量化后 120 GB）在任何时刻仅占用 5.5 GB 内存。

## 性能基准
- **iPhone 17 Pro (A19 Pro)**：0.6 tok/s（受限于散热和移动芯片性能）。
- **Mac M3 Max**：5.74 tok/s（持续），7+ tok/s（峰值）。
- **意义**：首次证明在消费级硬件上，模型规模超过 DRAM 容量 4 倍以上仍能以交互级速度运行。

## 理论基础
该项目的实现灵感来源于 Apple 2023 年的研究论文 [[LLM in a flash]]，其核心逻辑是“既然内存装不下，就把 SSD 当作内存用”，通过减少数据传输量和优化数据块读取来解决 DRAM 容量不足的挑战。

## 相关概念
- [[本地推理]]：本案例是本地推理技术的极端应用。
- [[量化]]：使用了 2-bit 专家重量化技术。
- [[MoE (混合专家模型)]]：利用 MoE 架构的特性，每次推理只激活少量专家，使得流式传输成为可能。