---
type: concept
title: 性能悖论
tags: [ai-evaluation, benchmarking, generalization]
related: [ilya-sutskever, arc-agi-2, francois-chollet, capability-overhang]
created: 2026-01-10
updated: 2026-01-10
sources: ["gpt-5.2考赢人类！openai警告：大模型能力已过剩，agi天花板不是ai.md"]
---

# 性能悖论

**性能悖论**（Performance Paradox）是指大模型在基准测试中表现优异，但在实际应用中却“掉链子”的现象。这一观点由 [[OpenAI]] 前首席科学家 [[Ilya Sutskever]] 提出。

## 现象描述
- **基准测试强**：模型在传统的 NLP 或多模态基准上往往能刷出高分。
- **实际应用弱**：一旦面对真实世界中从未见过的复杂任务，模型的表现往往大幅下降。

## 成因分析
这一悖论揭示了当前 AI 评估体系与真实世界效用之间的脱节。许多基准测试允许模型通过“刷题”或记忆数据分布来获得高分，而缺乏对**样本外泛化能力**的真正考验。

## 解决方向
[[ARC-AGI-2]] 的出现正是为了打破这一悖论。它通过“无训练集、纯推理”的设计，强制要求 AI 展示真正的抽象和迁移推理能力，从而更准确地衡量其接近 AGI 的程度。

## 参见
- [[ARC-AGI-2]]：旨在解决性能悖论的基准测试。
- [[能力过剩]]：性能悖论导致的后果之一。