---
type: concept
title: requireApproval 异步拦截
tags: [agent, security, human-in-the-loop, openclaw]
related: [openclaw, 高危操作弹窗拦截, 恶意-skills]
created: 2026-03-29
updated: 2026-03-29
sources: ["openclaw-3.28上线！4天爆更上百项重要更新.md"]
---

# requireApproval 异步拦截

**requireApproval** 是 OpenClaw 3.28 版本引入的一种核心安全机制，属于“人机回环”在 AI 智能体领域的具体实现。它允许 Agent 在执行特定操作前暂停，并请求用户进行确认。

## 机制描述
当 Agent 调用被标记为高危的工具或函数时，`requireApproval` 钩子会触发异步拦截流程：
1.  **暂停执行**：Agent 暂停当前任务，不立即执行操作。
2.  **发起请求**：通过用户当前使用的界面（Telegram 按钮、Discord 交互、命令行弹窗等）向用户发送确认请求。
3.  **等待反馈**：用户可以选择批准或拒绝该操作。
4.  **恢复或终止**：根据用户反馈，Agent 继续执行任务或放弃该操作。

## 解决的问题
该机制主要解决 Agent 权限过大带来的不可控风险：
*   **幻觉防御**：防止 Agent 因幻觉执行危险指令（如删除重要文件）。
*   **恶意代码阻断**：即使安装了恶意插件，其破坏性操作（如格式化磁盘、发送隐私数据）也会被拦截。
*   **意图对齐**：确保 Agent 的行为始终符合用户的即时意图，而非盲目执行预设流程。

## 技术实现
在 OpenClaw 的插件系统中，`requireApproval` 被集成在 `before_tool_call` 钩子中。它支持统一的 `/approve` 命令处理，并能根据上下文自动降级。

## 行业意义
`requireApproval` 的引入标志着 AI 智能体开发范式的转变：从追求“全自动、无人干预”的极致自主性，转向追求“可控、可信、可干预”的安全性。它承认了当前 AI 技术在逻辑判断和安全性上的局限性，通过引入人类监督来弥补这一短板。