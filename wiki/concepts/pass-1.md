---
type: concept
title: Pass@1
tags: [evaluation-metrics, code-generation, benchmarking]
related: [recap, alfworld, swe-bench]
created: 2025-12-02
updated: 2025-12-02
sources: ["全面战胜react！斯坦福全新智能体推理框架，性能提升112.5%.md"]
---

# Pass@1

**Pass@1** 是一种严格的评测原则，指在不使用样本层面的重试、多数投票或者束搜索的情况下，仅通过模型的一次生成输出来评估任务成功与否。

## 意义
在 AI 智能体和代码生成领域，Pass@1 被认为更能反映模型在真实多步环境中的鲁棒性和可靠性。高 Pass@1 分数意味着模型不仅“想得对”，还能“做得稳”，能够一次性连贯地完成复杂任务，而不依赖于多次试错。

## 应用
[[recap]] 框架在所有基准测试（如 [[alfworld]] 和 [[swe-bench]]）中均严格遵循 Pass@1 原则，这证明了其在单次执行路径上的稳定性优于 [[react]] 等基线模型。