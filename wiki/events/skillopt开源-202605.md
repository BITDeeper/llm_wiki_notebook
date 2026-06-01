---
type: event
title: SkillOpt 开源发布
created: 2026-05-31
updated: 2026-05-31
tags: [开源, 微软, 技能优化, agent]
related: [skillopt, 微软, 技能文档自我进化, 自进化架构, 办公技能框架]
sources: ["一周3.3k-star，微软开启skills自我进化！像训练神经网络一样训练技能.md"]
origin_date: 2026-05-25
participants: [微软]
causes: []
effects: [skillopt]
significance: high
---
# SkillOpt 开源发布

2026 年 5 月最后一周，微软开源了 SkillOpt 框架——一个将 Agent 技能文档作为「可训练参数」进行文本空间优化的研究框架。项目一周内获得 3.3k GitHub star，显示出极高的社区关注度。

## 背景

在智能体应用中，越来越多的程序员花费大量时间编写 CLAUDE.md、Codex 的 skill 文件、各种 Agent 的 system prompt。这种手工编写技能文档的方式本质上是试错的手工活，效率低下且高度依赖个人经验。SkillOpt 的出现为这一问题提供了系统化的自动化解决方案。

## 核心成果

- 发布了完整的训练循环框架（Rollout-Reflect-Edit-Gate）
- 在 7 个模型 × 6 个基准 × 3 种环境的全部 52 个评测组合中全面领先
- 证明了技能文档的跨模型、跨环境迁移能力
- 论文预印本发布于 arXiv（ID: 2605.23904）

## 影响

- 标志着 Agent 技能从手工编写进入自动化训练时代
- 为 [[自进化架构]] 在文本层面提供了具体工程实现
- 证明了 [[模型-技能分离架构]] 的可行性——技能层可以独立于模型层进行优化
- 人类在 AI 工作流中的角色进一步后退，从技能编写者转向元优化和监督者