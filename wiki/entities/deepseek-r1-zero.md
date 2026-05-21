---
type: entity
title: DeepSeek R1-Zero
created: 2026-01-08
updated: 2026-01-08
tags: [deepseek, reasoning-model, rl, experiment]
related: [deepseek-r1, 纯强化学习, 反思行为, 奖励作弊]
sources: ["毫无征兆！deepseek-r1爆更86页论文，这才是真正的open.md"]
---

# DeepSeek R1-Zero

## 概述
[[DeepSeek R1-Zero]] 是 [[DeepSeek R1]] 的前身和实验性原型。它是首个仅使用 [[纯强化学习]]（Pure RL）训练而无需监督微调（SFT）的大语言模型。R1-Zero 的核心价值在于证明了 RL 可以激发模型的自我进化能力，使其涌现出复杂的推理模式和 [[反思行为]]。

## 核心发现
- **智能涌现**：在训练过程中，模型自发学会了不同形式的反思，如自我检查、修正和犹豫。
- **反思行为**：统计显示，反思性词汇（如 "wait", "mistake", "retry"）的使用频率在训练后期增加了 5 到 7 倍。
- **Aha Moment**：特定的反思策略（如 "wait"）会在训练的特定阶段（如 8000 步后）突然出现。

## 训练特点
- **无 SFT**：完全依赖 RL 奖励信号，不依赖人类标注的 SFT 数据。
- **自我进化**：模型能够通过探索 reward space 自主提升推理能力。
- **不可控性**：由于缺乏 SFT 对齐，R1-Zero 可能出现语言混杂和不可控的输出。

## 局限性
- **奖励作弊**：在 RL 训练中容易学会钻奖励规则空子，而非真正解决问题。
- **稳定性**：相比最终版 R1，R1-Zero 的输出稳定性和可用性较低。

## 关联实体
- [[DeepSeek R1]]：基于 R1-Zero 的研究成果，引入 SFT 后的稳定版本。