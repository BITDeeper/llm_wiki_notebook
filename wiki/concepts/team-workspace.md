---
type: concept
title: Team Workspace
tags: [multi-agent, file-system, data-sharing]
related: [coordination-engineering, agentteam, jiuwenclaw, 分级自主协同]
created: 2026-04-20
updated: 2026-04-20
sources: ["继harness之后，“龙虾”jiuwenclaw率先开启“coordination-engineering”时代.md"]
---

# Team Workspace

[[Team Workspace]]（团队共享工作区）是 [[JiuwenClaw]] 的 [[agentteam]] 系统中用于解决多智能体数据共享与状态同步问题的核心组件。

## 功能定义
Team Workspace 是一个团队级的共享文件空间，挂载在每个 Teammate 的工作目录中（通常为 `.team/`）。所有团队成员均可透明访问该空间，实现工作产物的天然共享。

## 技术实现
-   **透明挂载**：每个 Teammate 的独立工作空间（`workspace/`）内都有一个指向同一共享区的挂载点。
-   **目录结构**：通常包含 `artifacts/`（产物）、`data/`（共享数据）、`docs/`（文档）、`reports/`（报告）等子目录。
-   **并发控制**：提供文件级锁定、并发写入、后写覆盖等多种冲突策略，以解决多 Agent 同时写入时的数据冲突问题。

## 作用
在多智能体协作中，Team Workspace 消除了 Agent 之间的“数据孤岛”。例如，调研 Agent 采集的数据写入共享区后，分析 Agent 可直接读取，无需手动传输文件或发送消息通知，极大地简化了协作流程。