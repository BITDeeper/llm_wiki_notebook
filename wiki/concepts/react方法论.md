---
type: concept
title: ReAct方法论
created: 2026-06-05
updated: 2026-06-05
tags: [Agent, AI方法论, 推理, 行动, 姚顺雨]
related: [姚顺雨, ai下半场, 任务执行范式, agentic-engineering]
sources: ["刚刚，姚顺雨现身！公开回应腾讯ai落后了吗？.md"]
origin_date: 2022-07-01
---
# ReAct方法论

由[[姚顺雨]]在博士期间提出的智能体方法论，全称Reasoning and Acting（推理与行动），将推理与行动结合，是现代AI Agent的基础范式之一。

## 起源

- 源自[[姚顺雨]]2019年普林斯顿大学博士论文《Language Agent: from next token prediction to digital automation》
- 论文核心目标：建立一套将next token prediction机器转化为agent的方法论
- **2022年7月**：[[姚顺雨]]首次将LLM API与手写的Wikipedia API连接，实现基于网页的多轮交互问答——可能是人类第一次将LLM与真正的互联网连接并做多轮交互

## 核心思想

ReAct将语言模型的推理能力（Reasoning）与外部工具的行动能力（Acting）结合，使模型能够：
- 思考下一步该做什么（推理）
- 调用工具执行操作（行动）
- 根据观察结果继续推理（多轮循环）

## 历史意义

- 奠定了Web Agent和Coding Agent两大方向的方法论基础
- [[姚顺雨]]同期还定义了WebShop（第一个互联网web agent任务）和InterCode（最早的coding agent任务）
- 预见了AI Agent发展的四大方向：为Agent训练模型、安全部署、科学发现、帮助人类

## 与当前行业的关系

ReAct提出时的预测与2026年行业趋势高度吻合：
- Coding Agent成为每家模型厂商的发力重点
- Web Agent和Coding Agent确实是agent技术最重要的两个组成部分
- "为Agent训练模型"已成为行业共识