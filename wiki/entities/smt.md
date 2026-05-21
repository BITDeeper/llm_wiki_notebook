---
type: entity
title: SMT
tags: [nlp, translation, history, algorithm]
related: [google-translate, gnmt, sequence-to-sequence]
created: 2026-04-29
updated: 2026-04-29
sources: ["20岁了！劈柴哥发帖庆生：谷歌翻译换了4代ai，第一次有了「呼吸感」.md"]
---

# SMT

[[SMT]] (Statistical Machine Translation，统计机器翻译) 是早期机器翻译的主流技术范式，[[Google Translate]] 在 2006 年上线时最初采用的核心技术。

## 工作原理
SMT 基于统计学习原理，通过向计算机输入数十亿级别的双语文本，计算词频和短语出现的概率来构建翻译模型。模型本身并不“理解”语言，而是通过概率计算寻找最可能的对应关系。

## 局限性
*   **生硬机械**：倾向于逐词翻译，难以处理长难句的语法结构。
*   **缺乏语境**：无法理解习语或文化特定表达，常产生直译笑话（例如将“老婆饼”翻译为 "wife cake"）。
*   **数据依赖**：翻译质量高度依赖于双语语料库的规模。

## 历史地位
虽然 SMT 在今天已被 [[GNMT]] 和大语言模型取代，但它确立了“数据规模决定翻译质量”的行业共识，是现代翻译系统的共同起点。