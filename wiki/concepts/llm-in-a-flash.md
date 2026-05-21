---
type: concept
title: LLM in a flash
tags: [论文, 苹果, 内存优化, 本地推理]
related: [flash-moe, 模型流式传输, apple-silicon]
created: 2026-05-01
updated: 2026-05-01
sources: ["不可思议！400b大模型在iphone上跑起来了.md"]
---

# LLM in a flash

《LLM in a flash: Efficient Large Language Model Inference with Limited Memory》是 Apple 于 2023 年发表的一篇研究论文。该论文提出了一种在 DRAM 容量不足的情况下，利用闪存高效运行大语言模型的方法，是后续 [[Flash-MoE]] 等项目的理论基础。

## 核心思想
“既然内存装不下，那就把 SSD 当作内存用。” 论文构建了一个结合闪存特性的推理成本模型，并据此在两个关键领域进行优化：
1. **减少数据传输量**：只从闪存传输当前推理所需的最小数据集。
2. **优化读取块**：确保以更大、更连续的数据块进行读取，以最大化闪存带宽利用率。

## 技术影响
这一思路打破了传统 AI 推理对大容量 DRAM 的绝对依赖，证明了通过软件层面的优化，可以在消费级设备（甚至手机）上运行参数量远超内存容量的模型。它直接启发了 [[Daniel Woods]] 开发 Flash-MoE 引擎，实现了 400B 模型在 iPhone 上的运行。