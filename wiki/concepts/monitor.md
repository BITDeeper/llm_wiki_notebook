---
type: concept
title: Monitor
tags: [anthropic, agent-tools, event-driven, cost-optimization]
related: [anthropic, 顾问策略, managed-agents, 事件驱动]
created: 2026-04-10
updated: 2026-04-10
sources: ["一行代码，claude养虾成本降85%！最强opus做大脑，sonnet疯狂搬砖.md"]
---

# Monitor

## 定义
**Monitor** 是 Anthropic 为 Claude 推出的一项工具功能，允许 AI Agent 创建并运行「后台脚本」。它将 Agent 的任务监控模式从「主动轮询」转变为「事件驱动」，旨在解决 Agent 在等待状态下的高昂 Token 消耗问题。

## 工作机制

### 传统模式的问题
在 Monitor 出现之前，若要让 Agent 监控某个任务（例如等待 CI 运行结束或等待 PR 审批），Agent 必须不停地循环询问状态。每一次询问都会消耗 Token，导致在任务实际执行之前就产生大量无效成本。

### Monitor 的解决方案
Monitor 允许 Claude 编写一段在后台运行的监控脚本。该脚本独立于 Agent 主进程运行，持续监听系统状态。
-   **事件触发**：只有当特定事件发生（如程序报错、合规检查通过、状态更新）时，脚本才会唤醒 Agent 进行处理。
-   **资源隔离**：脚本在后台轮询时不消耗 Agent 的 Token 配额。

## 应用场景
-   **日志监控**：持续盯着系统日志中的错误，仅在发现问题时通知 Agent。
-   **工作流集成**：自动追踪 GitHub 上的 PR 状态，脚本在后台轮询，Agent 仅在状态变更时介入。

## 战略意义
Monitor 与 [[顾问策略]] 逻辑一脉相承，都是在 Agent 运行中寻找「不需要烧钱的环节」并将其剥离。它优化了 Agent 的「跑法」，使得长时间运行的自动化任务在经济上变得可行。

## 相关条目
-   [[事件驱动]]
-   [[顾问策略]]
-   [[Managed Agents]]