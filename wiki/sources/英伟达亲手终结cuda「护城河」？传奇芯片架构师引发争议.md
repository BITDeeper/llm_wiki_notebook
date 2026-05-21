---
type: source
title: "英伟达亲手终结CUDA「护城河」？传奇芯片架构师引发争议"
tags: [nvidia, cuda, gpu-architecture, jim-keller, programming-model, openai-triton]
related: [英伟达, jim-keller, cuda-tile, tile-瓦片化计算, simt, openai, tenstorrent]
created: 2025-12-08
updated: 2025-12-08
authors: ["新智元"]
year: 2025
url: "https://mp.weixin.qq.com/s/13Yxbqsydg4va-LLLTOEEQ"
venue: "新智元"
sources: ["英伟达亲手终结cuda「护城河」？传奇芯片架构师引发争议.md"]
---

# 英伟达亲手终结CUDA「护城河」？传奇芯片架构师引发争议

## 摘要
本文详细解析了英伟达在 CUDA 13.1 版本中发布的 CUDA Tile 技术，这是该平台 20 年来最重大的架构更新。文章探讨了从传统的 SIMT（单指令多线程）编程模型向以“瓦片”为中心的编程范式的转变，以及传奇芯片架构师 [[jim-keller]] 对此举是否打破 CUDA 护城河的质疑。

## 核心观点

### 1. CUDA 20 年来最大变革
英伟达推出了 [[cuda-tile]]，将编程的基本原子从“线程”变为“瓦片”。这一更新旨在通过抽象化底层硬件（如 [[tensor-core]]）细节，降低开发门槛，使开发者能够更专注于算法逻辑而非硬件管理。

### 2. 编程范式的转移
- **旧范式 (SIMT)**：开发者需要手动管理成千上万个线程，处理 Warp 调度、内存屏障和寄存器分配。这在处理现代 AI 矩阵运算时显得笨拙且效率低下。
- **新范式 (Tile)**：开发者只需声明数据块形状和算子，由编译器自动处理底层硬件映射。这类似于从汇编语言跳转到了高级语言。

### 3. Jim Keller 的“沼泽”论
[[jim-keller]]（Tenstorrent CEO）曾直言“CUDA 是沼泽而非护城河”，意指其复杂性让开发者深陷其中。他质疑转向 Tile 架构是否会终结 CUDA 的护城河，使 AI 内核更易移植到其他硬件。

### 4. 护城河的真相
文章分析认为，英伟达并未拆除护城河，而是将其加固：
- **内部移植性**：CUDA Tile 极大提升了在英伟达不同代际 GPU（如 Hopper 到 Blackwell）之间的移植性。
- **跨厂商移植性**：由于引入了专有的 [[tile-瓦片化计算]] IR，跨厂商（如移植到 AMD）的移植性并未改善，甚至可能变得更难。

### 5. 针对 OpenAI Triton 的防御
CUDA Tile 的理念与 [[openai]] 开发的 Triton 语言高度一致（基于块的编程）。英伟达罕见地首发 Python 支持（cuTile Python），旨在迎合 AI 开发者习惯，防止开发者流向开源替代品。

## 关键技术细节
- **CUDA Tile IR**：一套全新的中间表示，作为虚拟指令集，屏蔽了不同代际 GPU 的硬件差异。
- **Python 优先**：英伟达打破了 C++ 一等公民的传统，首发 Python 支持，反映了 AI 开发生态的现状。

## 结论
英伟达通过 CUDA Tile 在沼泽上铺设了一条只通向自己城堡的高速公路。虽然降低了开发门槛，但也加深了开发者对英伟达硬件生态的依赖。