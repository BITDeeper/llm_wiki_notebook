---
type: concept
title: Micro Batch 流水线
tags: [性能优化, 系统架构, rl]
related: [relax, 全异步流水线, transferqueue]
created: 2026-04-15
updated: 2026-04-15
sources: ["吞吐提升76%！小红书开源rl训练引擎relax.md"]
---

# Micro Batch 流水线

[[micro-batch-流水线]] 是一种细粒度的并行计算技术，常用于大规模深度学习训练中。它将全局 Batch 切分为更小的 Micro Batch，使得不同的 Micro Batch 可以在处理流水线的不同阶段同时进行。

## 工作原理
在传统的训练流程中，通常需要等待整个全局 Batch 的所有样本完成 Rollout 后，才能进行下一步的 Advantage 计算和梯度更新。如果其中存在长尾样本（处理时间极长），整个流水线都会被阻塞。

[[micro-batch-流水线]] 的做法是：
1.  将一个大的全局 Batch（例如 256 条样本）切分为多个 Micro Batch（例如 8 组，每组 32 条）。
2.  当一个 Micro Batch 完成 Rollout 后，立即写入 [[transferqueue]]。
3.  下游的 Advantage 计算和 Train 模块一旦检测到有数据可用，立即开始处理。

## 优势
-   **消除长尾效应**：单个慢样本只会拖累其所在的 Micro Batch，其他 Micro Batch 可以正常流转。
-   **提高资源利用率**：流水线中的各个阶段（生成、计算、训练）几乎总是处于忙碌状态。
-   **Partial Rollout 支持**：对于超时未完成的样本，系统可以回收已生成的部分数据，避免完全丢弃。

## 应用
[[Relax]] 引擎利用 [[micro-batch-流水线]] 技术，配合 [[全异步流水线]] 架构，实现了相比传统方案 76% 的吞吐提升。