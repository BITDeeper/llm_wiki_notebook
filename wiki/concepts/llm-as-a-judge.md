---
type: concept
title: LLM-as-a-Judge
tags: ["evaluation", "llm", "methodology", "评测", "评审", "偏好判断"]
related: [llm-as-a-verifier, score-granularity, rubrics-评价量规, reward-hacking]
created: 2026-04-27
updated: 2026-05-31
sources: ["超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md", "rubrics综述：agent时代，如何定义一个「好答案」？.md"]
---

# LLM-as-a-Judge

## 定义

**LLM-as-a-Judge** 是一种用大语言模型作为评审者的评价方法，解决的是"谁来评"的问题。通过提示大语言模型对输出结果进行打分（例如 1 到 8 分）来判断质量。

与 [[rubrics-评价量规|Rubrics]] 形成互补——Judge 解决"谁评"，Rubrics 解决"按什么标准评"。

## 核心机制

在 LLM-as-a-Judge 范式中，一个强大的 LLM 被用作评审模型（Judge Model），对另一个模型的输出进行质量评估。Judge Model 可以给出总体分数，也可以依据 [[rubrics-评价量规|Rubrics]] 逐项打分，再将分数聚合为整体评价。

## 与 Rubrics 的关系

- **互补关系**：LLM-as-a-Judge 提供评审能力，[[rubrics-评价量规|Rubrics]] 提供评审标准
- **结合使用**：Judge Model 按 Rubrics 逐项评分，再将分数聚合为整体评价
- **偏差来源**：Judge Model 的选取本身会引入评测偏差，这是 [[rubrics-评价量规|Rubrics]] 评测中需要关注的问题

## 应用场景

- 偏好数据标注（替代人工标注）
- 模型训练中的奖励信号生成
- 开放式任务的自动化评测
- 多维度质量评估

## 局限性

尽管该方法被广泛使用，但在评估长时序 Agent 轨迹时存在显著缺陷：

1. **评分粒度粗糙**：单一的离散分数无法捕捉细微的质量差异。
2. **高平局率**：在 **[[Terminal-Bench]]** 测试中，该方法导致了 27% 的平局情况，即两条不同的轨迹被赋予相同的分数，使得系统无法区分优劣。

## 演进

为了解决这些问题，斯坦福团队提出了 **[[LLM-as-a-Verifier]]** 范式，通过扩展评分粒度、重复验证和标准分解，实现了从"判分"到"验证"的转变。

## 来源

- 综述论文《The Rules of the Game: A Survey of Rubrics for Large Language Models》对 LLM-as-a-Judge 与 [[rubrics-评价量规|Rubrics]] 的关系进行了系统讨论