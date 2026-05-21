---
type: entity
title: Qwen3.5-397B-A17B
tags: [大语言模型, moe, qwen, 移动端优化]
related: [flash-moe, apple-silicon, 量化]
created: 2026-05-01
updated: 2026-05-01
sources: ["不可思议！400b大模型在iphone上跑起来了.md"]
---

# Qwen3.5-397B-A17B

Qwen3.5-397B-A17B 是 Qwen 系列大语言模型的一个特定变体，拥有 3970 亿参数（约 400B），采用混合专家架构。该模型经过专门优化（特别是针对 Apple Silicon 的 2-bit 量化版本），成为了展示消费级设备本地推理极限能力的核心演示对象。

## 模型规格
- **参数量**：397B (3970 亿)。
- **架构**：MoE (Mixture-of-Experts)，每次推理仅激活部分专家。
- **体积**：原始约 209 GB，经过 2-bit 专家重量化后约为 120 GB。

## 运行环境
该模型主要在 [[Flash-MoE]] 引擎上运行，成功在以下硬件上完成了推理演示：
- **iPhone 17 Pro (A19 Pro)**：尽管 RAM 有限（12GB），仍能以 0.6 tok/s 的速度运行。
- **Mac M3 Max**：达到 5.74 tok/s 的交互级速度。

## 意义
作为目前公开报道中在移动端运行的最大规模模型之一，它验证了通过 [[模型流式传输]] 和底层工程优化，可以突破传统硬件内存容量的限制。