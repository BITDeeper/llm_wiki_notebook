---
type: concept
title: Agent与人类同权
created: 2026-05-14
updated: 2026-05-14
tags: [agent, 人机交互, 协议设计, 审计]
related: [mavis-minimax, 多agent协作架构, 1-n-agent调度]
sources: ["重生之我在ai时代当老板：让一群agent互相pua.md"]
---
# Agent与人类同权

[[minimax]] 在 [[mavis-minimax]] 中采用的设计理念：用户和Agent使用同一套操作协议，操作可审计追溯。

## 协议内容

统一的操作协议包含四种操作：
- **prompt**：下达指令
- **spawn**：创建新Agent
- **abort**：中止任务
- **kill**：终止Agent

用户可以对Agent执行这些操作，Agent也可以对另一个Agent执行同样的操作。真正操作Agent的渠道可以是用户、其他Agent或 [[team-engine]]。

## 设计意义

- 谁做了什么、有没有越权，都可以审计追溯
- 统一协议降低了系统的认知复杂度
- 体现了多Agent时代人机交互的新范式

## 安全机制

涉及高风险的节点，仍然需要human in the loop，确保人类保持最终决策权。