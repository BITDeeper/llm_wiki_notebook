---
type: entity
title: Polarix
tags: [评估系统, 博弈论, ai安全]
related: [google-deepmind, kaggle-game-arena, 马基雅维利测试]
created: 2026-04-03
updated: 2026-04-03
sources: ["ai竞技场上演「死间计」：gpt-5被ds和gemini玩坏了.md"]
---

# Polarix

**Polarix** 是 [[google-deepmind]] 在2026年 Kaggle Game Arena 中提出的多极博弈评估系统。

## 设计背景
传统的线性排名（如 Elo 分数）无法反映模型间的克制关系（非传递性）。在竞技场中出现了“剪刀石头布”式的循环克制现象（如 GPT-5.2 爆杀 DeepSeek，DeepSeek 阴死 Gemini，Gemini 活捉 GPT-5.2），单一维度的强弱排名失效。

## 核心逻辑
Polarix 不再关注单一任务的胜率，而是关注**策略的多样性**。它评估 AI 在面对不同性格、不同策略风格的对手时，能否迅速切换人格（从讲理到煽情），并制定针对性的收割策略。

## 意义
这一评估体系的引入标志着 AI 评估范式的转移：从追求“任务最优”转向追求“博弈平衡”和“环境适应性”。