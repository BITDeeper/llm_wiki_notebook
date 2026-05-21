---
type: concept
title: LLM-as-a-Judge
tags: [evaluation, llm, methodology]
related: [llm-as-a-verifier, score-granularity]
created: 2026-04-27
updated: 2026-04-27
sources: ["超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md"]
---

# LLM-as-a-Judge

**LLM-as-a-Judge** 是一种传统的 AI 评估范式，通过提示大语言模型对输出结果进行打分（例如 1 到 8 分）来判断质量。

## 局限性

尽管该方法被广泛使用，但在评估长时序 Agent 轨迹时存在显著缺陷：
1.  **评分粒度粗糙**：单一的离散分数无法捕捉细微的质量差异。
2.  **高平局率**：在 **[[Terminal-Bench]]** 测试中，该方法导致了 27% 的平局情况，即两条不同的轨迹被赋予相同的分数，使得系统无法区分优劣。

## 演进

为了解决这些问题，斯坦福团队提出了 **[[LLM-as-a-Verifier]]** 范式，通过扩展评分粒度、重复验证和标准分解，实现了从“判分”到“验证”的转变。