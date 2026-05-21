---
type: concept
title: Translator-Guided Reinforcement Learning
tags: [强化学习, 算法, 优化, rlhf]
related: [geodpo, dpo, 结构化表示]
created: 2026-04-30
updated: 2026-04-30
sources: ["vlm解几何题总翻车？geodpo从「看」入手：用结构化表示+dpo优化，让模型先看懂再推理丨iclr'26.md"]
---

# Translator-Guided Reinforcement Learning

**Translator-Guided Reinforcement Learning**（翻译器引导的强化学习）是一种模型优化范式，旨在解决直接监督学习（SFT）在引入结构化约束时带来的分布偏移问题。

## 工作流程
1. **自然语言输出**：模型保持原有的自然语言输出空间。
2. **翻译器**：使用专用模块（如 NL→GeoDSL 翻译器）将模型的自然语言输出转化为结构化代码。
3. **结构级评分**：基于结构化代码计算精确的奖励信号（如 F1 分数）。
4. **强化学习优化**：利用结构化奖励构造偏好对，通过 DPO 等算法优化模型。

## 优势
相比直接训练模型输出代码，该方法避免了模型对特定 Token 顺序的过度拟合，保持了模型在自然语言任务上的泛化能力，同时利用了结构化信息的精确性。