---
type: entity
title: "CUDA 13.1"
tags: [nvidia, cuda, gpu, programming-model, software]
related: [英伟达, cuda-tile, green-context, blackwell, cublas]
created: 2025-12-06
updated: 2025-12-06
sources: ["英伟达周末双炸！cuda二十年最大更新，顺手屠榜agi比赛.md"]
---

# CUDA 13.1

CUDA 13.1 是英伟达发布的 CUDA 平台版本，被官方称为 CUDA 诞生二十年来最大、最全面的一次更新。该版本旨在通过引入新的编程模型和优化工具，帮助开发者更轻松地驾驭当前及未来的 GPU 架构（如 Blackwell）。

## 核心特性

### CUDA Tile 编程模型
这是 CUDA 13.1 最具革命性的更新，引入了一种基于 Tile（数据块）的编程抽象层。
- **抽象层级提升**：位于 SIMT（单指令多线程）之上，开发者不再需要直接管理每个线程的执行路径，而是指定在 Tile 数据块上执行的数学运算。
- **自动化优化**：编译器和运行时自动确定将工作分发到各个线程的最佳方式，并屏蔽了 Tensor Core 等专用硬件的底层细节。
- **组件支持**：
  - **CUDA Tile IR**：一种新的虚拟指令集架构（ISA）。
  - **cuTile Python**：一种新的领域特定语言（DSL），允许在 Python 中编写基于数组和 Tile 的 Kernel。

### Green Context
一种轻量级的 CUDA Context 替代方案，旨在提供更精细的资源管理。
- **资源分区**：允许开发者定义和管理 GPU 资源（主要是流多处理器 SM）的独特分区。
- **资源预置**：可以将一组特定的 SM 专用于某个特定的 Context，并在该 Context 预置的资源内运行流。
- **确定性**：提供确定性的资源分配，改善多租户场景下的隔离性。

### 库与工具更新
- **cuBLAS**：引入了支持 Blackwell GPU 上 FP8 和 BF16/FP16 的 Grouped GEMM 实验性 API，在 MoE 用例中性能提升显著。
- **Nsight Compute**：增加了对 CUDA Tile Kernel 的分析支持，包括 Tile 统计和源码映射。
- **Compute Sanitizer**：通过编译器标志增加了编译时修补功能，增强了内存错误检测能力。
- **CCCL (CUDA Core Compute Libraries)**：提供了确定性浮点归约选项，允许在确定性和性能之间进行权衡。

## 意义
CUDA 13.1 的发布标志着 GPU 编程范式的重大转变，通过提升抽象层级和屏蔽硬件复杂性，旨在降低开发门槛并确保代码对未来架构的兼容性。