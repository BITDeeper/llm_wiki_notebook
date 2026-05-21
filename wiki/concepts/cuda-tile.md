---
type: concept
title: "CUDA Tile"
tags: [nvidia, cuda, gpu, programming, abstraction]
related: [cuda-13-1, 英伟达, blackwell, simt]
created: 2025-12-06
updated: 2025-12-06
sources: ["英伟达周末双炸！cuda二十年最大更新，顺手屠榜agi比赛.md"]
---

# CUDA Tile

CUDA Tile 是英伟达在 CUDA 13.1 中引入的一种全新的 GPU 编程模型，被视为 CUDA 二十年来最大的编程范式转变。

## 核心思想
CUDA Tile 将编程抽象层级从传统的 **SIMT**（单指令多线程）提升到了 **Tile**（数据块）层级。
- **传统 SIMT**：开发者需要通过划分数据和定义每个线程的执行路径来编写 Kernel。
- **CUDA Tile**：开发者只需指定在 Tile 数据块上执行的数学运算，无需关心底层线程如何分发。

## 技术细节
- **自动化分发**：编译器和运行时自动确定将工作分发到各个线程的最佳方式。
- **硬件屏蔽**：屏蔽了使用 Tensor Core 等专用硬件的底层细节，使得编写的 Tile 代码能够直接兼容未来的 GPU 架构（如 Blackwell）。
- **支持组件**：
  - **CUDA Tile IR**：一种新的虚拟指令集架构（ISA），用于对英伟达 GPU 进行编程。
  - **cuTile Python**：一种新的领域特定语言（DSL），允许在 Python 中编写基于数组和 Tile 的 Kernel。

## 优势
- **降低开发门槛**：减少了开发者处理底层硬件复杂性的工作。
- **未来兼容性**：确保代码在不同代际的 GPU 架构间保持有效。
- **性能释放**：旨在更充分地释放下一代 GPU（如 Blackwell）的恐怖性能。

## 意义
CUDA Tile 的出现标志着 GPU 编程从“线程级”思维向“块级”思维的转变，是英伟达为了应对日益复杂的硬件架构而推出的重要软件抽象层。