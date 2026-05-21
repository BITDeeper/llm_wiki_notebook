---
type: source
title: "继Harness之后，“龙虾”JiuwenClaw率先开启“Coordination Engineering”时代"
tags: [multi-agent, coordination-engineering, harness-engineering, openjiuwen, 华为]
related: [jiuwenclaw, coordination-engineering, harness-engineering, openjiuwen, agentteam, team-workspace]
created: 2026-04-20
updated: 2026-04-20
authors: [允中]
year: 2026
url: "https://mp.weixin.qq.com/s/SL5aUMqCS6sxjrqkHM9dMQ"
venue: "量子位"
sources: ["继harness之后，“龙虾”jiuwenclaw率先开启“coordination-engineering”时代.md"]
---

# 继Harness之后，“龙虾”JiuwenClaw率先开启“Coordination Engineering”时代

## 摘要
本文报道了由华为支持的 openJiuwen 社区发布的最新版 [[jiuwenclaw]]，该版本新增了 [[agentteam]] 多智能体协同能力。文章提出了 [[coordination-engineering]]（协同工程）的概念，将其定位为继 [[harness-engineering]]（驾驭工程）之后的下一代 AI 工程范式。通过实测案例（装修设计、200页PPT生成、五子棋博弈），展示了 JiuwenClaw 在多智能体自主协作、分级自主协同及全生命周期管控方面的技术实力。

## 核心观点
- **范式演进**：AI 工程范式正从针对单智能体的 [[harness-engineering]]（提示词工程、工具编排、护栏机制）转向针对多智能体团队的 [[coordination-engineering]]（团队编排、任务调度、通信协议、隔离机制、故障恢复、可观测性）。
- **实战效能**：[[jiuwenclaw]] 能够在 20 分钟内生成 200 页逻辑严密的技术 PPT，或自主组建包含硬装、软装及艺术家的装修团队完成全屋设计，证明了多智能体协同的高效性。
- **架构创新**：通过“Leader + Teammate”的 [[分级自主协同]] 架构和“任务 + 消息”双驱动模式，实现了无需人工干预的全流程自动化协作。

## 关键技术
- **分级自主协同**：Leader 负责战略级拆分与决策，Teammate 负责独立执行与战术决策，保留向上求助通道。
- **Team Workspace**：团队级的共享文件空间，所有成员透明访问，支持文件级锁定与并发冲突解决。
- **全生命周期管控**：包括 Plan/工具审批机制（防止失控）、事件驱动机制（防止隐性停滞）和持久化模式（跨会话状态保留）。
- **Team Skill**：将团队协作流程沉淀为可复用的“团队 SOP”模板，并随使用自动优化，连接了 Coordination Engineering 与 Evolution Engineering。

## 实测案例
1.  **装修设计**：上传毛坯房照片，AgentTeam 自动组建包含硬装、软装设计师及艺术家的团队，完成全流程设计。
2.  **深度调研**：针对 [[openclaw]] 技术原理，自动分配 10 个成员并行工作，在 20 分钟内生成 200 页技术 PPT。
3.  **博弈对抗**：自动创建黑棋手和白棋手两个角色进行五子棋对弈，实时展示攻防策略。

## 来源
- 允中. (2026). 继Harness之后，“龙虾”JiuwenClaw率先开启“Coordination Engineering”时代. 量子位.