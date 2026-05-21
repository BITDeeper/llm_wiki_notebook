---
type: concept
title: Actor 模型
tags: [架构, 分布式计算, 并发]
related: [分布式多智能体, eigent, runtime-agent-os]
created: 2026-01-16
updated: 2026-01-16
sources: ["真没招了！claude撞碎创业梦，华人博士开源逆袭.md"]
---

# Actor 模型

**Actor 模型**（Actor Model）是一种分布式计算架构模型，在 [[eigent]] 项目中被用于构建消息总线，以实现 Agent 系统的容错、重启和扩容。

## 在 Agent 系统中的作用
- **消息传递**：通过结构化消息总线连接各个 Agent，解耦组件间的依赖。
- **容错机制**：当一个 Agent（如负责“代码审查”的节点）卡死或出现幻觉时，编排层可以立刻重启或分配新的 Agent 接管，而不会导致整个任务崩溃。
- **弹性扩容**：支持像微服务一样丝滑地进行系统扩容。

## 优势
相比于传统的“一条龙线性调用”脚本，基于 Actor 模型的架构提供了工程化的确定性，是构建工业级 [[runtime-agent-os]] 的关键技术之一。