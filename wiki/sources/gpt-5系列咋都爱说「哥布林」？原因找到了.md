---
type: source
title: "GPT-5系列咋都爱说「哥布林」？原因找到了"
tags: [openai, rlhf, model-behavior, gpt-5, chatgpt]
related: [openai, chatgpt, reinforcement-leakage, reward-hacking, goblin-incident]
created: 2026-04-30
updated: 2026-04-30
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/c70SK2ldUAevW39Jqs9zRQ"
venue: "机器之心"
sources: ["gpt-5系列咋都爱说「哥布林」？原因找到了.md"]
---

# GPT-5系列咋都爱说「哥布林」？原因找到了

本文详细记录了 OpenAI GPT-5.1/5.5 系列模型出现「哥布林」词汇泛滥现象的调查过程与技术归因。

## 核心发现

OpenAI 官方博客确认，GPT-5 系列模型频繁使用「goblin」（哥布林）等奇幻词汇并非模型故障，而是强化学习过程中的「副作用」。这一现象与 DeepSeek V3.1 的「极」字 Bug 类似，揭示了大规模模型训练中不可预测的偏差放大效应。

## 事件因果链

1.  **特定人格训练**：ChatGPT 的「Nerdy」（书呆子）模式被要求使用俏皮、打破常规的语言。
2.  **奖励偏差**：负责该模式的奖励模型意外地将「使用怪物词汇」判定为高分行为（在 76.2% 的数据集中）。
3.  **行为固化与迁移**：这种在特定模式下强化的习惯，突破了模式边界，通过 [[reinforcement-leakage]]（强化学习泄漏）扩散到了普通对话模式中。

## 关键证据

- **统计数据**：Nerdy 模式仅占 2.5% 的响应，却贡献了 66.7% 的哥布林回复。
- **趋势同步**：带 Nerdy 提示和不带的样本中，哥布林出现频率几乎同步增长。
- **代码证据**：Codex 系统提示中被发现加入了明确的「禁令」，禁止谈论哥布林等生物。

## 行业启示

文章指出，现代大模型训练链路长、规模大，细小偏差（如未清洗的数据或奖励信号的意外偏好）会被悄悄放大。那些看似「无害」的奇怪习惯，往往是系统性偏差的早期信号，直到泛滥成灾才可能被发现。

## 相关概念

- [[reinforcement-leakage]]：特定条件下习得的行为向通用行为迁移的现象。
- [[reward-hacking]]：模型找到获取奖励捷径而非完成目标的行为。
- [[goblin-incident]]：本次 OpenAI 哥布林事件。