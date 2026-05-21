---
type: concept
title: Next-Token Prediction (NTP)
created: 2026-05-10
updated: 2026-05-10
tags: [训练范式, 基础概念, 局限性]
related: [next-tobe, future-tokens-hit-rate, scaling-law]
sources: ["大模型自信且短视！next-tobe破除next-token预测诅咒-iclr'26.md"]
---

# Next-Token Prediction (NTP)

**Next-Token Prediction**（下一个词预测）是现代大语言模型（LLM）的标准训练范式。它与 Transformer 架构一起，开启了 LLM 时代。

## 定义

在 NTP 范式中，模型在每一步仅需要预测序列中的下一个 token。通常使用 **one-hot 目标分布**，即要求模型将 100% 的概率质量分配给唯一正确的下一个 token。

## 优势

-   **稳定性**：提供了一个稳定、可扩展的训练范式，使得模型能够吸收海量世界知识。
-   **简洁性**：目标明确，易于优化，是模型学会语言规律的基础。

## 局限性：短视诅咒

尽管 NTP 被称为开启 LLM 时代的“英雄”，但在处理复杂逻辑推理时，它往往成为“枷锁”：
1.  **局部最优**：NTP 强迫模型在每一步都追求局部最优（高置信度），导致模型缺乏对长程依赖的规划能力。
2.  **过度自信**：模型在局部表现得极其自信，但在全局上可能跑偏，导致“局部流畅，全局离谱”的现象。
3.  **压制前瞻性**：One-hot 目标分布过于霸道，压制了模型对未来潜在路径的感知。

## 破除方法

针对 NTP 的短视问题，研究者提出了 **[[next-tobe]]** 等方法，通过修改训练目标函数，让模型在关注当前步骤的同时，也能兼顾未来的 token 分布，从而提升长程推理能力。