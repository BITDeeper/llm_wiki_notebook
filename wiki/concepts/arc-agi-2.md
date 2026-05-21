---
type: concept
title: ARC-AGI-2
tags: [benchmark, reasoning, ai-evaluation, agi, evaluation]
related: ["gemini-3-1-pro", "claude-opus-4-6", "agi", "scaling-law", "gemini-3-deep-think", "arc-agi-1", "francois-chollet", "arc-agi", "gemini", "ai-takeoff"]
created: 2026-02-20
updated: 2026-05-07
sources: ["谷歌gemini-3.1-pro屠榜封神，清华姚顺宇出手！claude和gpt被逼入死角.md", "清华传奇姚顺宇立功！全新gemini一夜血洗编程，全球仅7人能赢它.md", "谷歌imo金牌级gemini-3深夜上线！华人大神挂帅，openai无力反击.md"]
---

# ARC-AGI-2

[[arc-agi-2]]（Abstraction and Reasoning Corpus for AGI - Version 2）是由 [[francois-chollet]] 提出的抽象推理数据集的升级版，也是 [[arc-agi]] 的后续版本。它目前被公认为难度最高的大模型推理能力测试基准之一。

## 核心目标与意义

该基准测试旨在衡量模型在**样本效率**、**泛化能力**和**抽象推理**方面的表现。不同于传统的基于海量训练数据的基准测试，ARC-AGI-2 侧重于评估人工智能系统在样本外的泛化能力，即“学习-to-learn”的能力。

它通常被认为是检验模型是否具备真正“理解”能力而非仅仅记忆模式的试金石。高分通常被视为模型向 AGI（通用人工智能）迈进的重要指标，也是 AI 模型具备强大泛化能力和逻辑推理能力的有力证明，超越了单纯的模式识别或记忆能力。

## 历史记录与测试结果

该基准见证了模型能力的快速迭代，以下为关键的历史节点：

- **Claude Opus 4.6**：曾取得 68.8% 的成绩，一度被视为推理王者。
- **Gemini 3.1 Pro**：于 2026 年 2 月取得 **77.1%** 的成绩，性能达到上一代 Gemini 3.0 Pro 的两倍以上，确立了当时的 SOTA（State of the Art）地位。
- **Gemini 3 Deep Think**：
    - 在该基准上达到了 **84.6%** 的准确率。这一成绩被描述为使该基准接近“饱和”，意味着模型在抽象推理任务上已达到极高的水平，甚至接近人类专家的表现。
    - 在配合代码执行的特定测试场景下，曾创下 45.1% 的纪录（注：此数据可能指代特定子集或早期测试条件），被视为当时行业的领先成绩。

## 相关测试

与其配套的还有 [[arc-agi-1]]，Gemini 3.1 Pro 在该测试中取得了接近满分（98%）的成绩。