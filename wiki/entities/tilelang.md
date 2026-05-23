---
type: entity
title: TileLang
created: 2026-05-14
updated: 2026-05-22
tags: ["算子编程", "DSL", "开源项目", "DeepSeek", "高性能计算"]
related: ["摩尔线程", "deepseek-v4", "musa架构", "sglang"]
sources: ["国产gpu组了个开源局，把sglang等核心开发者都摇来了！.md", "国产gpu首获全球顶级推理框架「原生门票」：musa合入sglang主线.md"]
origin_date: 2025-02-01
---

# TileLang

TileLang 是一种 Tile 级领域特定编程语言（DSL），专注于化解算子硬件依赖与性能调优问题，降低高性能 kernel 编程门槛，使更多开发者能参与算子优化。2025年2月开源，开源不到一年已积累超过 6000 颗 Star，133位贡献者。[[deepseek-v4|DeepSeek V4]] 的核心 kernel 使用 TileLang 编写。

## 核心特性

- **极简代码实现极致性能：** 约 50 行 Python 代码即可构建出性能比肩 FlashAttention 专家级实现的 Kernel，性能与专家手写 CUDA 一致。
- **GEMM 高效实现：** 同样的 GEMM 算子，15行代码达到 CUTLASS 的性能，代码量减少90%。
- **显著加速：** 在 Attention-Sinks 等算子上，加速比超过 20 倍。
- **三种编程模式：** Beginner（快速上手）、Developer（常规开发）、Expert（深度调优），覆盖不同层次用户。

## 关键人物

- **唐正举** — TileLang Maintainer，DeepSeek V3.2 与 V4 核心算子背后的 DSL 项目核心成员，主导下一代算子编程生态。

## 生态定位与合作

TileLang 在大模型推理工程链路中承担"算子编程民主化"的角色。

TileLang 与 [[摩尔线程]] [[musa架构|MUSA]] 生态深度联调，目标是为全功能 GPU 构建一套完整的高性能算子库。在 [[deepseek-v4]] 优化中，摩尔线程正与社区协作，以 Jit Kernel 和 TileLang 的方式实现算子优化。与 MUSA 的结合是下一代算子生态的提前布局。