---
type: entity
title: FlagTree
created: 2026-02-06
updated: 2026-02-06
tags: [编译器, ai基础设施, 跨平台, triton]
related: [kernelgen, 众智-flagos-社区, tle-(triton-language-extensions), 算子自动生成]
sources: ["cuda护城河破了？ai暴力直出82%算子，开发彻底告别手搓时代.md"]
---

# FlagTree

[[FlagTree]] 是由 [[众智 FlagOS 社区]] 开发的统一 AI 编译器，旨在解决异构 AI 计算环境下的硬件碎片化问题。它为 [[KernelGen]] 等上层工具提供统一的硬件抽象与编译基础，是实现跨芯片算子自动生成的关键基础设施。

## 支持范围
- **芯片厂商**：已支持 12 家厂商、近 20 款 AI 芯片。
- **覆盖架构**：包括华为昇腾、寒武纪、沐曦、摩尔线程、海光等，涵盖 DSA、GPGPU、RISC-V AI 芯片、ARM 等多种体系。

## 核心技术：TLE
为了平衡跨芯片的通用性与性能，[[FlagTree]] 引入了 [[TLE (Triton Language Extensions)]]，采用分层扩展策略：
- **TLE-Lite**：一次编写，多后端运行，适用于快速验证与轻量级优化。
- **TLE-Struct**：面向算子开发者的架构感知调优接口。
- **TLE-Raw**：允许直接内联 CUDA、MLIR 等厂商原生代码，用于极致性能场景。

## 评测表现
在 110 个 Torch 算子的多芯片评测中，[[FlagTree]] 的执行正确率普遍高于芯片原生 Triton 编译器。例如在 Nvidia 平台上，其执行正确率达到 70%，优于原生方案。

## 设计目标
- **硬件差异隔离**：通过统一的中间表示将芯片差异收敛在编译器内部。
- **性能与易用性平衡**：避免“一套代码跑所有芯片”带来的性能折损，同时保留高级语法带来的开发便利性。