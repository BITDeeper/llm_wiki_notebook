---
type: concept
title: Codex Steering
created: 2026-05-23
updated: 2026-05-23
tags: [codex, agent, 异步协作, 中途指令]
related: [codex, codex-maxxing, 1-n-agent调度]
sources: ["openai大神教你如何榨干codex.md"]
---
# Codex Steering

[[codex]] 的中途插队指令功能，允许用户在 Agent 执行任务时追加指令而无需等待当前任务完成。体现了异步协作理念。

## 使用场景

在 [[jason-liu]] 的 [[codex-maxxing]] 工作流中，Steering 配合口述任务方式使用：说完就走，不用干等 Agent 完成当前任务。用户可以在 Agent 执行过程中随时追加新指令或调整方向。

## 与 1:N 调度的关系

Steering 是实现 [[1-n-agent调度]] 的关键能力之一。当用户同时管理多个 Agent 线程时，Steering 允许在不中断任何线程的情况下灵活调整各线程的任务方向。