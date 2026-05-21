---
type: concept
title: LogitLens
tags: [interpretability, research-tool]
related: [engram, transformer]
created: 2026-05-03
updated: 2026-05-03
sources: ["deepseek-v4最大的遗憾.md"]
---

# LogitLens

[[LogitLens]] 是一种用于分析 [[Transformer]] 内部层表示的技术。它通过读取模型中间层的隐藏状态并映射到输出空间，来观察模型在不同深度对输入的处理情况。

## 在 Engram 研究中的应用

在评估 [[engram]] 的效果时，LogitLens 分析揭示了关键机制：Engram-27B 第 5 层的表征与基线 MoE 模型第 12 层的表征最为相似。这证明了 Engram 能够显著加速模型早期层对静态知识的获取过程，从而将更深的网络层级释放出来用于处理复杂的推理任务。