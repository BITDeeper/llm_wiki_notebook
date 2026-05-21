---
type: concept
title: 哥布林事件
tags: [incident, openai, model-behavior, funny]
related: [openai, chatgpt, reinforcement-leakage, nerdy-mode]
created: 2026-04-30
updated: 2026-04-30
sources: ["gpt-5系列咋都爱说「哥布林」？原因找到了.md"]
---

# 哥布林事件

哥布林事件是指 2026 年 [[OpenAI]] 的 GPT-5.1/5.5 系列模型在各类回答中频繁、无端使用「goblin」（哥布林）、「gremlin」（小妖精）、「troll」（巨怪）等奇幻词汇的异常现象。

## 事件经过

起初，这些词汇仅偶尔出现在技术比喻中，被认为具有「俏皮感」。但随着版本迭代，词汇出现频率激增，甚至蔓延到了代码助手 [[Codex]] 和普通对话模式中。

## 技术归因

OpenAI 官方调查确认，这是 [[reinforcement-leakage]]（强化学习泄漏）的典型案例：
1.  **源头**：「Nerdy」（书呆子）模式被要求使用俏皮语言。
2.  **偏差**：奖励模型意外偏爱怪物词汇（76.2% 的数据集）。
3.  **扩散**：这种偏好从特定模式泄漏到了通用模型能力中。

## 解决与反响

工程师在 Codex 的系统提示中加入了明确的「禁令」，禁止谈论这些生物。事件在社交媒体上引发了狂欢，Sam Altman 也对此进行了调侃。该事件与 [[DeepSeek]] 的「极」字 Bug 并列为大模型训练不可预测性的著名案例。