---
type: concept
title: P/D分离
tags: [architecture, optimization]
related: [a/f分离, 元脑hc1000, 算力利用率]
created: 2025-12-26
updated: 2025-12-26
sources: ["推理成本打到1元每百万token，浪潮信息撬动agent规模化的“最后一公里”.md"]
---

# P/D分离

P/D分离（Prefill/Decode Decoupling）是指将大模型推理中的**预填充**（Prefill）和**解码**（Decode）两个阶段分离处理的技术策略。

## 背景与原理

-   **Prefill阶段**：处理输入Prompt，特点是计算密集、访存密集，并行度高。
-   **Decode阶段**：逐个生成输出Token，特点是计算量小、延迟敏感，需频繁加载全部参数。

传统架构往往将两者耦合在同一硬件资源上调度，导致资源分配冲突和效率低下。

## 优势

通过P/D分离，系统可以针对不同阶段的特性配置不同的计算资源：

-   **资源最大化**：让Prefill实例专注于吞吐，Decode实例专注于低延迟，从而把每张卡的负载打满。
-   **降低成本**：提升整体 [[算力利用率]] (MFU)，进而降低单位Token的 [[推理成本]]。

这一技术是 [[元脑HC1000]] 实现低成本推理的关键架构特性之一。