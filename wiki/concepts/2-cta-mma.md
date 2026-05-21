---
type: concept
title: "2-CTA MMA"
tags: [gpu架构, 并行计算, 编程模型]
related: [blackwell-b200, flashattention-4, 张量内存]
created: 2026-03-18
updated: 2026-03-18
sources: ["英伟达最强b200算力浪费60%！普林斯顿团队出手，利用率升至71%.md"]
---

# 2-CTA MMA

一种 GPU 并行计算模式，全称为 2- Cooperative Thread Array Matrix Multiply-Accumulate。

## 定义
在 [[Blackwell B200]] 架构中，2-CTA MMA 允许两个线程簇（CTA）协作完成同一个矩阵乘累加任务。

## 优势
- **减少内存压力**：每个 CTA 仅需加载所需数据的一半，从而将共享内存的读写量减半。
- **降低原子操作**：减少了后续处理中的原子操作冲突。
- **缓解瓶颈**：在共享内存带宽成为主要瓶颈时，这一特性能有效提升 [[硬件利用率]]。

## 应用
[[FlashAttention-4]] 利用 2-CTA MMA 模式，配合 [[张量内存]] (TMEM)，重构了注意力计算的流水线，实现了计算与数据传输的高效重叠。