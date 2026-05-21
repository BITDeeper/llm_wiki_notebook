---
type: concept
title: TLE (Triton Language Extensions)
created: 2026-02-06
updated: 2026-02-06
tags: [编程语言, 编译器, triton]
related: [flagtree, kernelgen, triton]
sources: ["cuda护城河破了？ai暴力直出82%算子，开发彻底告别手搓时代.md"]
---

# TLE (Triton Language Extensions)

[[TLE (Triton Language Extensions)]] 是 [[众智 FlagOS 社区]] 在 [[FlagTree]] 编译器中提出的分层扩展方案，旨在平衡 [[Triton]] 语言在跨芯片场景下的通用表达能力和极致性能需求。

## 设计背景
原生 [[Triton]] 语言虽然提供了高级抽象，但在面对差异巨大的底层硬件（如 GPGPU vs DSA vs RISC-V）时，往往难以兼顾“一次编写，到处运行”的便利性与“榨干硬件性能”的极致需求。

## 三层结构
1. **TLE-Lite**：
   - **目标**：快速验证与轻量级优化。
   - **特性**：一次编写，多后端运行。适合算法原型验证。
2. **TLE-Struct**：
   - **目标**：架构感知调优。
   - **特性**：面向算子开发者，提供允许针对特定架构特性进行优化的接口，而不破坏整体通用性。
3. **TLE-Raw**：
   - **目标**：极致性能场景。
   - **特性**：允许开发者直接内联 CUDA、MLIR 等厂商原生代码，绕过通用抽象以获取最高性能。

## 价值
[[TLE]] 的存在使得 [[KernelGen]] 等上层工具可以在不同开发阶段和性能需求下，灵活选择合适的抽象层级，从而在多芯片生态中实现最佳的工程效果。