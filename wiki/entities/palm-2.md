---
type: entity
title: PaLM 2
tags: ["google", "llm", "nlp", "translation", "模型", "大语言模型"]
related: [google-translate, 零样本翻译, yi-tay, ul2, google-deepmind]
created: 2026-04-29
updated: 2026-05-30
sources: ["20岁了！劈柴哥发帖庆生：谷歌翻译换了4代ai，第一次有了「呼吸感」.md", "帮gemini拿下imo金牌的关键先生，差点成了职业钢琴家.md"]
---

# PaLM 2

[[PaLM 2]]（亦写作 PaLM-2）是 Google 开发的大语言模型。[[yi-tay|Yi Tay]] 担任建模联合负责人（co-lead）之一。

## 技术架构

PaLM-2 内部采用了"UL2-like"训练目标，即基于 [[ul2|UL2]] 框架的统一预训练范式。Yi Tay 同时参与了 Flan-2 的工作。

## 在翻译中的应用

PaLM 2 在 2024 年被大规模应用于 [[Google Translate]] 的语言扩展工作，扮演了"语言之间的迁移引擎"角色。利用其强大的 [[零样本翻译]] 和迁移学习能力，Google 在 2024 年 6 月一次性为 Translate 新增了 110 种语言，覆盖了额外 6.14 亿人口。

### 语言族迁移学习

PaLM 2 能够高效学习相互接近的语言族。例如，一旦模型学会了印地语，它就能顺带掌握 Awadhi 和 Marwadi 等相关语言。这种能力使得 Google 能够以较低的成本实现史上最大规模的语言扩展，解决了低资源语言翻译的难题。