---
type: entity
title: TriMul
tags: [benchmark, gpu, code-optimization]
related: [ttdiscover, 英伟达]
created: 2026-01-25
updated: 2026-01-25
sources: ["斯坦福×英伟达发布ai推理新范式，刷新了多领域sota.md"]
---

# TriMul

[[TriMul]] 是一项 GPU 内核优化比赛，旨在评测和竞赛生成底层代码的运行效率。该任务极度考验工程师对硬件架构（如 GPU 内存层次结构、流水线）的理解和优化能力。

## 竞赛结果

在 [[TriMul]] 基准测试中，[[TTT-Discover]] 展现了超越人类顶级程序员的代码生成能力：

*   **H100 显卡**：人类第一名代码耗时 1371 微秒，TTT-Discover 生成的代码耗时 1161 微秒，性能提升约 15%。
*   **A100 显卡**：TTT-Discover 的代码比人类第一名快了整整 50%。

## 技术意义

TTT-Discover 发现了一些人类工程师未曾设想的激进优化策略，如极其激进的算子融合和精度压缩。这表明 AI 有能力在底层系统优化领域发现新的知识边界，直接提升软件和硬件的运行效率。