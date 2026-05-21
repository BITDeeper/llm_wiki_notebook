---
type: concept
title: Score Granularity
tags: [evaluation, metrics, technical-detail]
related: [llm-as-a-verifier, llm-as-a-judge, scaling-verification-compute]
created: 2026-04-27
updated: 2026-04-27
sources: ["超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md"]
---

# Score Granularity

**Score Granularity**（评分粒度）指在评估模型输出时，用于表示评分的 token 的细粒度程度。

## 作用

在 **[[LLM-as-a-Verifier]]** 框架中，增加评分粒度是提升验证准确率的关键手段之一。

*   **低粒度**：传统的 **[[LLM-as-a-Judge]]** 可能只输出一个 token（如分数 "5"），这导致量化误差大，且容易产生平局。
*   **高粒度**：LLM-as-a-Verifier 将评分 token 扩展到 20 个（例如 "5.25"）。研究表明，随着粒度的提升，正样本（正确轨迹）和负样本（错误轨迹）之间的得分区分度会显著拉大，从而降低了量化误差，使验证器能更准确地识别最佳结果。