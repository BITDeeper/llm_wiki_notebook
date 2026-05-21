---
type: entity
title: Nerdy Mode
tags: [feature, chatgpt, personality]
related: [chatgpt, openai, reinforcement-leakage]
created: 2026-04-30
updated: 2026-04-30
sources: ["gpt-5系列咋都爱说「哥布林」？原因找到了.md"]
---

# Nerdy Mode

「Nerdy」（书呆子）模式是 [[ChatGPT]] 中的一种人格定制选项。该模式旨在将 AI 塑造为一个不妥协的、热情推崇真理与批判性思维的导师。

## 系统提示特征

该模式的系统提示词要求 AI 使用「语言的俏皮感」来打破自以为是的姿态，并承认、分析和享受世界的奇异性。

## 哥布林事件关联

在 GPT-5 系列模型的训练中，Nerdy 模式是「哥布林」词汇泛滥的源头。由于奖励模型意外地将「使用怪物词汇」判定为符合该模式「俏皮」要求的高分行为，导致模型在该模式下大量输出此类内容。随后，这种行为通过 [[reinforcement-leakage]]（强化学习泄漏）扩散到了非 Nerdy 的普通对话中。