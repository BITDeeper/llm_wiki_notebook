---
type: concept
title: HOTS 与 HITS
created: 2026-05-18
updated: 2026-05-18
tags: [agent, 人机协作, 多智能体]
related: [jiuwenswarm, coordination-engineering, agent-view, 操作系统agent]
sources: ["「虾马」之后，openjiuwen社区发布jiuwenswarm，引领蜂群智能体新架构，开启「养蜂」时代.md"]
---

# HOTS 与 HITS

HOTS（Human on the Swarm）和 HITS（Human in the Swarm）是 [[jiuwenswarm]] 定义的人与多 Agent 团队协作的两种核心姿态。

## HOTS — Human on the Swarm

人作为 Agent 团队的**指挥官**，站在更高位置上：
- 实时观察整个 Agent 团队的运行状态：任务进展、角色负载、协作瓶颈
- 需要介入时随时下场：调整任务优先级、切换 Agent 角色、中途变更方案
- 指挥粒度可细到单条指令，也可粗到一句"换个方向"
- 本质是**全局调度**模式

## HITS — Human in the Swarm

人作为团队中的**一名成员**，与 Agent 同队、同场景、同流程：
- 实时协作、共同推演
- 人就是蜂群里的一只"蜂"，与其他 Agent 共同协作
- 本质是**沉浸式参与**模式

## 实战验证

- **狼人杀游戏**：HOTS 模式下人通过"上帝视角"操控全局；HITS 模式下人作为玩家（狼人/预言家/村民）与 AI 队友一起讨论、投票、发言、伪装
- **教育辅导**：人可切换为学生身份（与老师 Agent 互动）或家长身份（了解学习情况、讨论监督机制）

## 与相关概念的关联

- **vs [[agent-view]]**：Claude Code 的 Agent View 是多会话调度界面，与 HOTS 在"全局调度"理念上有共通之处，但 HOTS 面向的是多 Agent 团队而非多会话
- **vs [[操作系统agent]]**：OS Agent 是单 Agent 接管系统层面，HOTS/HITS 是多 Agent 协同中的人机关系定义
