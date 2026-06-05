---
type: concept
title: Need-to-know机制
created: 2026-06-05
updated: 2026-06-05
tags: [ai安全, 多agent系统, 信息流控制, 隐私保护]
related: [执行线束安全, 多agent协作架构, 轨迹级安全审计, harnessaudit]
sources: ["过程比结果更危险：从模型到harness，ai-agent的下半场该如何评测安全？.md"]
---
# Need-to-know机制

Need-to-know 机制是多 agent 系统中的一种信息流控制原则：每个子 agent 只应该获得完成当前任务所必需的信息，而不是默认继承全部上下文。

## 问题背景

[[harnessaudit]] 评测发现，在多 agent 系统中信息流合规性仅为 0.58。主要问题包括：
- 子 agent 往往会收到超过其任务所需的上下文
- 中间组件会在任务结束后继续保留敏感信息
- 一个从 agent 传给另一个 agent 的摘要可能悄悄泄露其背后的原始数据

## 设计原则

1. 每一次信息传递都应有清晰边界：哪些内容可以传、传给谁、能保留多久
2. 子 agent 先声明自己需要什么信息，再由 harness 或 message bus 判断是否允许传递
3. 不能为了方便而直接把完整上下文交给下一个 agent

## 与传统安全的类比

Need-to-know 机制借鉴了传统信息安全中的"最小权限原则"（Principle of Least Privilege），将其应用于多 agent 系统的上下文管理。在单 agent 系统中，信任边界是 agent 的工具调用；在多 agent 系统中，信任边界变成了 message bus。