---
type: concept
title: Agent Swarm
tags: [ai-agents, parallel-computing, automation, swarm-intelligence]
related: [kimi-k2-6, runtime-agent-os, hermes-agent]
created: 2026-04-29
updated: 2026-04-29
sources: ["火速吃瓜：kimi-k2.6设计能力超越claude-design.md"]
---

# Agent Swarm

[[agent-swarm]]（多智能体集群）是指一种由一个主模型负责任务拆解与指挥，数百个子任务并行执行的技术范式。这代表了 AI 从单体智能向群体智能演进的阶段。

## 工作原理

在 Agent Swarm 模式下，用户只需向主模型下达一个宏观指令（例如“为 30 家店铺生成网站”），系统会自动：
1. **任务拆解**：将宏观指令分解为数十甚至数百个具体的子任务。
2. **并行调度**：同时启动多个智能体处理不同的子任务。
3. **结构化输出**：汇总所有子任务的执行结果，形成最终交付物。

## 应用案例

[[kimi-k2-6]] 模型展示了这一能力的实际应用。在实测中，它同时为 30 家没有官网的实体店生成了定制化的落地页。据官方数据，K2.6 的智能体集群规模可扩展至 300 个并行任务。

## 优势

- **效率量级提升**：相比串行执行，并行处理能将效率提升数个数量级。
- **复杂系统管理**：能够处理需要大量重复性操作但又有个性化需求的场景。

## 参见
- [[runtime-agent-os]]：支撑智能体运行的底层架构。
- [[kimi-k2-6]]：目前展示出强大 Agent Swarm 能力的模型之一。