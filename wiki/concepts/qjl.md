---
type: concept
title: QJL
tags: [algorithm, quantization, math, linear-algebra]
related: [turboquant, polarquant, kv-cache]
created: 2026-03-26
updated: 2026-03-26
sources: ["谷歌新论文把内存股价干崩了！kv-cache压缩6倍，“谷歌的deepseek时刻”.md"]
---

# QJL

**QJL**（Quantized Johnson-Lindenstrauss Transform，量化 JL 变换）是 [[turboquant]] 算法中用于消除残差误差的关键技术。

## 原理
QJL 是一种数学变换技术，它将高维数据投影到低维空间后，进一步压缩为 **+1** 或 **-1** 的符号位（1-bit 数据）。这种表示方式完全不需要额外的内存来存储浮点数或量化常数。

## 在 TurboQuant 中的作用
虽然 [[polarquant]] 能够极高效地压缩数据的主要特征，但仍会残留微小的量化误差。QJL 被用来对这些残差进行修正：
1.  [[polarquant]] 先用大部分 bit 容量捕捉数据的主要信息。
2.  QJL 再用 1 个 bit 进行残差修正，消除 [[polarquant]] 压缩后的微小误差。

这种组合使得 [[turboquant]] 能够在极低比特（如 3-bit）的配置下实现**精度零损失**。