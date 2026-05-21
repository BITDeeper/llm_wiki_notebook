---
type: entity
title: ROMA
tags: [architecture, ai-accelerator, rom, edge-ai]
related: [tom, 内存墙, 模型即芯片, qdora, 三值化]
created: 2026-03-02
updated: 2026-03-02
sources: ["上交大和辉羲把llm刻进rom！推理性能冲2万tokens，gpu时代终结？.md"]
---

# ROMA

**ROMA** (Read-Only-Memory-based Accelerator) 是由 [[上海交通大学]] 与 [[辉羲智能]] 联合提出的一种基于 ROM+SRAM 异构架构的端侧大模型加速器。

## 核心设计
ROMA 旨在解决大模型推理中的 [[内存墙]] 问题，通过将模型参数物理固化在芯片内部来消除数据搬运带来的功耗与延迟。

### 1. ROM+SRAM 异构存储
-   **ROM (基座模型)**：利用高密度、低功耗的只读存储器（ROM）存储大模型的基座权重。ROM 的非易失性和高密度特性使得在片上容纳完整模型成为可能。
-   **SRAM (LoRA 适配器)**：为了解决 ROM 固化后难以更新的问题，ROMA 引入 [[qlora]] 机制。开发者可以通过更新 SRAM 中的小规模适配器参数，在不改变基座模型的情况下切换任务。

### 2. B-ROM 协同设计
通过独创的 B-ROM 设计，将计算单元与存储阵列进行紧耦合的物理布局，极大缩短了信号传输路径，提升了能效。

## 性能指标
-   **工艺**：7nm
-   **面积**：约 500 mm²
-   **容量**：可容纳 4bit LLaMA3.2-3B 或 2bit LLaMA3-8B
-   **推理速度**：**20,000 tokens/s**

## 应用场景
其高吞吐量和低延迟特性使其特别适合 [[具身智能]]（如机器人控制）和极端环境（如深海、太空探测）下的智能任务。