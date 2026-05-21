---
type: source
title: "DeepSeek不惜代价保住它！V4关键特性被挖出来了"
tags: [deepseek, engineering, batch-invariance, llm]
related: [deepseek-v4, batch-invariance, deepgemm, dual-kernel, arthur-zucker]
created: 2026-04-28
updated: 2026-04-28
authors: [鱼羊]
year: 2026
url: "https://mp.weixin.qq.com/s/rRyrQ6WYWDKXuhmc3hOIIA"
venue: "量子位"
sources: ["deepseek不惜代价保住它！v4关键特性被挖出来了.md"]
---

# DeepSeek不惜代价保住它！V4关键特性被挖出来了

本文深入分析了 [[DeepSeek V4]] 技术报告中的核心工程哲学——[[批次不变性]]。文章指出，DeepSeek 为了实现这一特性，不惜牺牲了 GPU 利用率、推理速度和工程实现的简洁性。

## 核心发现：批次不变性

[[批次不变性]] 的定义是：对于同一个 token，无论其在批次中的位置、批次大小或与其他请求的组合方式如何，模型输出都能保持逐比特完全一致。

### 为什么不惜代价？

DeepSeek V4 同时处理超长上下文、复杂后训练管线和自研高性能 kernel 栈，[[批次不变性]] 是其底层工程稳定器。其价值体现在：

1.  **保证线上推理结果稳定**：消除动态 batching 导致的输出差异，确保同一输入严格一致。
2.  **保证全流程对齐**：打通预训练、SFT、RL、蒸馏和推理之间的数值壁垒，便于定位问题来源（是数据/算法问题，还是工程实现问题）。
3.  **支撑复杂上下文系统**：在长上下文、MoE、FP4/FP8 等多组件叠加的复杂系统中，消除数值不确定性来源。
4.  **提升后训练稳定性**：减少 RL 和蒸馏过程中的随机数值扰动，防止因微小差异改变采样路径进而导致训练信号漂移。

## 付出的代价

为了实现 [[批次不变性]]，DeepSeek V4 放弃了许多常见的性能优化手段：

-   **放弃 Split-K 优化**：在矩阵乘法中，Split-K 会改变浮点加法的归约顺序，破坏一致性。
-   **放弃 Split-KV 优化**：在注意力机制中，Split-KV 会改变并行归约路径。

## 工程解决方案

为了在保持确定性的前提下缓解性能损失，DeepSeek 采取了以下措施：

-   **[[Dual-Kernel]]**：在 Attention 层为同一任务准备两套计算程序（分别处理高负载和低负载），同时保证结果逐比特一致。
-   **[[DeepGEMM]]**：自研矩阵乘法算子库，替代通用的 cuBLAS，执行受约束的 batch-invariant GEMM。

## 外部评价

Hugging Face Transformers 负责人 [[Arthur Zucker]] 高度评价了该技术报告的公开透明度，认为将数月乃至数年的努力全部免费公开是真正的 GOAT（Greatest of All Times）行为。