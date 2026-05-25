---
type: concept
title: Codex Heartbeats
created: 2026-05-23
updated: 2026-05-23
tags: [codex, agent, 定时任务, 自动化]
related: [codex, codex-maxxing, jason-liu, codex-goal-mode]
sources: ["openai大神教你如何榨干codex.md"]
---
# Codex Heartbeats

[[codex]] 的定时任务调度功能，允许 Agent 按固定间隔（如每 15 或 30 分钟）自动执行检查和操作。是 [[codex-maxxing]] 方法论中让 Codex 从被动工具变为主动"员工"的关键机制。

## 工作原理

Heartbeats 本质上相当于给 Agent 加了一层定时任务调度层。用户设定检查频率和任务规则后，Agent 会自动按周期执行：

- 扫描 Slack 和 Gmail，判断消息优先级，起草回复草稿
- 检查审阅线程是否有新反馈，有则自动推进下一步
- 监控外部状态（如客服排队），状态变化时自动处理

## 典型应用场景

- **Chief of Staff 线程**：每 30 分钟跑一次，扫描 Slack/Gmail，起草回复但不发送
- **动画审阅**：每 15 分钟检查 Slack 审阅线程，有反馈则重新渲染并上传
- **亚马逊退款**：持续监控客服排队状态，自动跟进直到退款到账

## 与 @computer 的协同

当 Heartbeats 驱动的任务需要 GUI 操作时（如 Slack MCP 不支持文件上传），Agent 会自动调用 @computer 能力模拟点击"Add file"按钮完成操作。