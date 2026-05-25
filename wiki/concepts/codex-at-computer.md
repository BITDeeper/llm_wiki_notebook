---
type: concept
title: "@computer（Codex 计算机操控）"
created: 2026-05-23
updated: 2026-05-23
tags: [codex, agent, gui, 计算机操控]
related: [codex, codex-maxxing, codex-heartbeats]
sources: ["openai大神教你如何榨干codex.md"]
---
# @computer（Codex 计算机操控）

[[codex]] 的计算机操控能力，Agent 可模拟点击、上传等 GUI 操作。突破了 API 层面的限制，让 Agent 能完成需要图形界面交互的任务。

## 典型应用

在 [[jason-liu]] 的 [[codex-maxxing]] 工作流中，@computer 主要用于弥补 API 能力的不足。例如：

- Slack MCP 服务器不支持文件上传时，Agent 自动调用 @computer 点击"Add file"按钮上传渲染好的文件
- 需要与网页 GUI 交互但无对应 API 时，Agent 模拟用户操作完成

## 与 Heartbeats 的协同

@computer 与 [[codex-heartbeats]] 组合使用时效果最强：Heartbeats 提供定时触发机制，@computer 提供执行能力，两者结合使 Codex 从被动工具变为能主动巡检并自动执行 GUI 操作的"数字员工"。

## 安全考量

Agent 自主操控计算机涉及重大安全风险，包括误操作、数据泄露和权限滥用等问题。当前文章未详细讨论安全边界和风险管控机制。