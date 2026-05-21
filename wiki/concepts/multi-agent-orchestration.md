---
type: concept
title: 多智能体编排
tags: [agent, orchestration, parallelism, anthropic]
related: [claude-managed-agents, runtime-agent-os]
created: 2026-05-07
updated: 2026-05-07
sources: ["claude会「做梦」了，梦里还在卷.md"]
---

# 多智能体编排

**多智能体编排**（Multi-Agent Orchestration）是一种让多个 AI 智能体协同工作以完成复杂任务的技术模式。在 Claude Managed Agents 中，该功能通过明确的角色分工和上下文管理，实现了高效的并行处理。

## 架构设计

1.  **Lead Agent（队长）**：
    - 负责接收复杂任务。
    - 将任务拆解为若干子任务。
    - 分发给不同的 Specialist Agent 处理。
    - 汇总结果并负责最终输出。

2.  **Specialist Agent（专员）**：
    - 专注于处理特定的子任务。
    - 可以是不同的模型、使用不同的 Prompt 或工具集。
    - 上下文互相隔离，避免干扰，但共享文件系统。

## 协作特点
- **记忆延续**：Lead Agent 可以随时找回之前调用的 Specialist Agent 继续对话，对方仍记得上次的工作内容。
- **噪音过滤**：通过并行处理和交叉验证，有效过滤单次执行中的偶然噪音。

## 应用案例
**Netflix** 平台工程团队利用该功能并行分析数百个 build 的日志。多个 Agent 各自负责不同的批次，最终只浮出反复出现的问题模式，一次性过滤掉偶发性噪音。

## 优势
- **效率提升**：并行处理大幅缩短了复杂任务的完成时间。
- **专业化**：不同 Agent 可以针对特定任务进行深度优化。