---
type: entity
title: AgentTeam
tags: [framework, multi-agent, orchestration]
related: [jiuwenclaw, openjiuwen, coordination-engineering, 分级自主协同, team-workspace]
created: 2026-04-20
updated: 2026-04-20
sources: ["继harness之后，“龙虾”jiuwenclaw率先开启“coordination-engineering”时代.md"]
---

# AgentTeam

[[AgentTeam]] 是 [[JiuwenClaw]] 框架中实现多智能体协同的核心功能模块，也是 [[coordination-engineering]]（协同工程）理念的落地实践。它模拟真实团队的协作方式，使多个 AI 智能体能够像人类团队一样自主分工、高效沟通。

## 核心能力
1.  **分级自主协同**：通过 Leader 和 Teammate 的角色分工，实现战略规划与战术执行的解耦。
2.  **Team Workspace**：提供团队级共享文件空间，解决数据共享与并发冲突问题。
3.  **全生命周期管控**：涵盖从任务创建、Plan 审批、工具审批到故障自愈的完整流程。
4.  **持久化模式**：支持团队状态跨会话保留，适合长期项目。
5.  **实时可观测性**：通过 TeamMonitor 提供状态查询 API 和事件流订阅，实现全流程追踪与审计。

## 应用场景
-   **并行调研**：自动分配多个成员并行调研不同主题，并汇总生成报告（如 20 分钟生成 200 页 PPT）。
-   **全案设计**：组建包含不同专家角色（如硬装、软装、艺术）的团队完成复杂设计任务。
-   **博弈对抗**：创建对立角色（如黑白棋手）进行自主对弈。

## 技术支撑
AgentTeam 的底层依赖于 openJiuwen 开源框架中的协同层，每个 Teammate 内部仍是一个完整的 Harness SDK Agent。