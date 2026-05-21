---
type: entity
title: Flash-MoE
tags: [推理引擎, 开源项目, apple-silicon, 本地推理]
related: [qwen3.5-397b-a17b, daniel-woods, llm-in-a-flash, 模型流式传输]
created: 2026-05-01
updated: 2026-05-01
sources: ["不可思议！400b大模型在iphone上跑起来了.md"]
---

# Flash-MoE

Flash-MoE 是一个开源的推理引擎项目，旨在通过极致的底层工程优化，在 Apple Silicon 芯片上实现超大规模混合专家模型的流式推理。它由前拜登政府首席技术官 [[Daniel Woods]] 开发，标志着“端侧大模型”进入了一个突破性阶段。

## 核心特性
- **零 Python 依赖**：整个引擎使用 Objective-C 和 C 编写，不依赖 PyTorch 等重量级框架。
- **三指令缓存流水线**：通过手写 Metal Shader，构建了 CPU 与 GPU 深度并行的流水线，消除了同步等待开销。
- **极致 I/O 吞吐**：利用 GCD (Grand Central Dispatch) 并行读取 SSD，在 M3 Max 上达到约 17.5 GB/s 的读取速度。

## 技术原理
Flash-MoE 利用 [[模型流式传输]] 技术，将模型参数存储在 SSD 中，仅将当前推理所需的活跃专家权重加载到内存中。配合 [[LLM in a flash]] 的设计理念，它成功在内存容量远小于模型体积的硬件上运行了 400B 级别的模型。

## 性能表现
- 在 **Mac M3 Max** 上运行 [[Qwen3.5-397B-A17B]] 达到 5.74 tok/s（持续）。
- 在 **iPhone 17 Pro** 上实现 0.6 tok/s 的运行速度，首次在移动端展示了 400B 模型的推理能力。