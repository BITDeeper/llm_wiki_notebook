---
type: concept
title: Criteria Decomposition
tags: [evaluation, methodology]
related: [llm-as-a-verifier, long-horizon-tasks]
created: 2026-04-27
updated: 2026-04-27
sources: ["超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md"]
---

# Criteria Decomposition

**Criteria Decomposition**（标准分解）是 **[[LLM-as-a-Verifier]]** 框架中采用的一种评估方法，旨在提供比单一整体评分更细致、具体的反馈。

## 维度

该方法将复杂的任务轨迹验证解构为三个可组合的评估标准：

1.  **规范合规性**：检查轨迹是否符合所有任务要求（例如文件路径、变量命名规范等）。
2.  **输出格式**：验证输出结果的格式是否符合预期（例如 JSON 结构、Markdown 格式等）。
3.  **错误检测**：检测轨迹中是否存在明显的错误信号（例如编译错误、运行时异常）。

## 优势

通过这种分解，验证器能够更精确地定位轨迹中的问题，而不是给出一个模糊的整体印象，从而显著提升了在 **[[Long-Horizon Tasks]]** 中的验证准确性。