---
type: concept
title: "Dual-Kernel"
tags: [optimization, gpu, deepseek, engineering]
related: [deepseek-v4, batch-invariance, split-kv]
created: 2026-04-28
updated: 2026-04-28
sources: ["deepseek不惜代价保住它！v4关键特性被挖出来了.md"]
---

# Dual-Kernel

[[Dual-Kernel]] 是 [[DeepSeek V4]] 在注意力机制层为了兼顾 [[批次不变性]] 和 GPU 计算效率而提出的一种工程策略。

## 背景问题

在 GPU 上执行注意力计算时，不同的负载（序列长度、批次大小）对硬件的利用率影响巨大。通常的做法是使用 [[Split-KV]] 等技术将计算切分到多个流处理器（SM）上以提高负载均衡。然而，这种切分会改变并行归约的路径，导致浮点运算结果出现差异，从而破坏批次不变性。

## 解决方案

为了在不破坏确定性的前提下解决负载均衡问题，DeepSeek 设计了 Dual-Kernel 策略：

1.  **双程序准备**：为同一个注意力解码任务准备两套不同的计算程序。
2.  **场景适配**：
    *   一套程序针对“GPU 吃得满”的高负载场景优化。
    *   另一套程序针对“GPU 吃不满”的低负载场景优化。
3.  **结果一致性**：尽管执行路径不同，但两套程序被设计为产生逐比特完全一致的结果。

## 意义

[[Dual-Kernel]] 是 [[DeepSeek V4]] 在工程上“不惜代价”的体现之一。它通过增加工程复杂度（编写和维护两套 kernel）来换取在保持严格数值确定性的同时，尽可能缓解 GPU 利用率下降的问题。