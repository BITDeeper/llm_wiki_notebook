---
type: entity
title: FlashMLA
tags: [deepseek, library, optimization, gpu]
related: [deepseek-r2, mla-多头潜在注意力, deepseek-v4, hopper-架构]
created: 2026-01-21
updated: 2026-01-21
sources: ["deepseek-r2要来了？.md"]
---

# FlashMLA

FlashMLA 是 DeepSeek 开发的优化注意力内核库，专门用于支持其大模型（如 DeepSeek-V3、DeepSeek-R1 及潜在的 R2）的高效推理。

## 核心功能
- **架构支持**：专为 [[Hopper-架构]] GPU（如 H800）优化。
- **算法基础**：基于 [[MLA-多头潜在注意力]] 机制，通过底层算子优化提升推理性能。
- **关键优化**：
  - **KV 缓存优化**：改进了键值缓存的管理方式，以支持更长的上下文和更复杂的推理链路。
  - **稀疏 FP8 解码**：支持 FP8 精度的稀疏解码，旨在保持模型精度的同时显著降低显存占用和计算延迟。
  - **大步幅支持**：代码更新显示其对 576B 步幅的支持，暗示其适配超大参数规模模型的能力。

## 在 DeepSeek 技术栈中的地位
FlashMLA 是 DeepSeek 推理层的核心组件。它的更新往往预示着新模型的适配工作正在进行。例如，在 [[DeepSeek-R2]]（代号 MODEL1）的爆料中，正是 FlashMLA 代码库的更新提供了最早的技术证据。

## 技术意义
通过自研底层算子库，DeepSeek 能够在硬件层面实现极致优化，从而在有限的算力资源下支撑复杂的推理任务。这体现了 DeepSeek 在“工程确定性”和“资源受限优化”方面的技术积累。