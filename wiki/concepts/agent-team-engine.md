---
type: concept
title: Agent-Team-Engine
tags: [multi-agent, orchestration, engine]
related: [coordination-engineering, team-skills, 共享工作区]
created: 2026-04-30
updated: 2026-04-30
sources: ["华为携手中科大发布灵境造物，openjiuwen首发coordination-engineering全栈支撑.md"]
---

# Agent-Team-Engine

**Agent-Team-Engine**（多智能体协作引擎）是 [[coordination-engineering]]（协同工程）的核心组件之一，旨在解决多智能体如何围绕一个目标组队、分工、执行和汇总的问题。

## 设计理念
该引擎的设计理念是**模拟真实团队的协作方式**，将人类团队中的角色分工与协作机制映射到 AI 智能体系统中。

## 核心机制
1.  **分级自主协同**：
    -   **Leader Agent**：负责需求分析、团队组建、任务拆解、依赖管理和进度监控。
    -   **Teammate Agent**：负责主动认领任务、独立执行、遇阻求助及完工汇报。
2.  **共享工作区**：
    -   团队成员共享一个上下文环境。
    -   前序任务的产出自动成为后续任务的输入，无需手动传递，极大提升了信息流转效率。
3.  **全生命周期管控**：
    -   Leader 全程把控关键决策，防止任务偏离。
    -   具备事件驱动机制和 TeamMonitor 可观测能力，确保团队不会陷入僵死状态。

## 应用价值
在科研场景中，Agent-Team-Engine 可以根据“电催化剂研发”等需求，动态组建包含文献分析、分子建模、性能预测等角色的 AI 团队，并梳理任务依赖（如“理论筛选完成后才能启动实验设计”），实现复杂任务的并行推进。