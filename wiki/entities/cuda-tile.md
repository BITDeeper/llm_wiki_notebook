---
type: entity
title: CUDA Tile
tags: [nvidia, programming-model, gpu-computing, python, compiler]
related: [英伟达, tile-瓦片化计算, simt, tensor-core, openai, cutile-python]
created: 2025-12-08
updated: 2025-12-08
sources: ["英伟达亲手终结cuda「护城河」？传奇芯片架构师引发争议.md"]
---

# CUDA Tile

CUDA Tile 是 [[英伟达]] 在 CUDA 13.1 版本中引入的一种全新的显卡代码编写方式，被视为该平台诞生 20 年来最重大的一次更新。它标志着 GPU 编程范式从传统的线程级并行向瓦片化计算的转变。

## 核心变革

### 从“线程”到“瓦片”
- **传统 SIMT 模型**：开发者需要从单个线程的视角出发，手动管理成千上万个线程的调度、同步和内存访问。
- **CUDA Tile 模型**：以“瓦片”（Tile，即多维数组的子块）为基本操作单位。开发者只需声明数据块的形状和要执行的算子，底层硬件细节由编译器自动处理。

### 技术支撑：Tile IR
英伟达引入了一套全新的中间表示——**CUDA Tile IR**。这是一套虚拟指令集，使得开发者编写的代码能够以瓦片操作的形式对硬件进行原生编程，且只需极少改动即可在多个世代的 GPU（如 Hopper 到 Blackwell）上高效执行。

## Python 优先策略

在 CUDA 13.1 中，英伟达极其罕见地首发推出了 [[cutile-python]]，而 C++ 支持则被延后。这一策略反映了 AI 开发生态的现状：Python 已经成为 AI 的通用语言。cuTile 旨在让 AI 研究员无需离开 Python 环境即可编写高性能内核。

## 战略意义

### 针对 OpenAI Triton 的防御
CUDA Tile 的核心理念与 [[openai]] 开发的 Triton 语言高度一致（基于块的编程）。这被视为英伟达为了防止开发者流向开源替代品而进行的“降维打击”。

### 护城河的加固
虽然 [[jim-keller]] 等人认为转向 Tile 架构可能打破 CUDA 的护城河，但分析指出：
1. **内部移植性**：极大增强了在英伟达不同代际 GPU 之间的移植性。
2. **跨厂商移植性**：由于 Tile IR 是专有的，跨厂商（如移植到 AMD）的移植性并未改善，甚至变得更难。

因此，CUDA Tile 实际上是将护城河的墙修得更漂亮、更易于进入，但也让用户更难离开。