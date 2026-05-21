---
type: concept
title: Experience-Imitation Planning
tags: [agent-method, planning, web-agent]
related: [avenir-web, agent-harness, long-horizon-tasks]
created: 2026-04-29
updated: 2026-04-29
sources: ["龙虾冲浪终于不迷路了！网页智能体新框架avenir-web开源即sota.md"]
---

# Experience-Imitation Planning

经验模仿规划（Experience-Imitation Planning, 简称 EIP）是一种用于提升智能体在特定环境中任务执行成功率的方法。其核心思想是模仿人类行为，在任务开始前主动检索并利用外部知识（如目标网站的帮助文档、操作指南或论坛攻略），将其转化为高层级的策略路线图。

## 工作原理
1.  **知识检索**：利用大模型的在线搜索能力，获取目标站点的操作流程信息。
2.  **策略转化**：将非结构化的文本指南转化为可执行的步骤或约束条件。
3.  **行动指导**：在后续的任务执行中，Agent 依据该策略进行操作，避免盲目探索。

## 效果验证
在 [[avenir-web]] 框架的消融实验中，移除 EIP 模块导致成功率从 48.0% 暴跌至 36.0%，证明了外部知识注入对于解决 [[long-horizon-tasks]] 和缺乏特定站点常识的问题至关重要。