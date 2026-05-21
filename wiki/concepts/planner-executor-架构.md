---
type: concept
title: Planner+Executor 架构
tags: [concept, architecture, agent, system-design]
related: [turix-cua, 工业级-agent, cua-computer-use-agent]
created: 2026-04-15
updated: 2026-04-15
sources: ["全球最年轻00后团队「掀桌子」：gpt做不到的物理执行，被这群少年跑通了.md"]
---

# Planner+Executor 架构

**Planner+Executor 架构**是一种用于 AI Agent 的系统设计模式，它将任务的规划与任务的执行在逻辑或模型层面进行分离。

## 组成部分
- **Planner（规划者）**：负责“思考”。它接收用户指令，进行任务拆解、策略制定和步骤规划。Planner 通常侧重于逻辑推理和上下文理解。
- **Executor（执行者）**：负责“行动”。它接收 Planner 的指令，并将其转化为具体的计算机操作（如点击按钮、输入文本、运行代码）。Executor 侧重于对环境的感知和操作的精准性。

## 优势
这种架构在处理长序列任务时具有显著优势：
1.  **稳定性提升**：分离设计允许 Executor 专注于执行细节，减少因规划失误导致的执行中断。
2.  **模块化**：可以独立优化 Planner 的智力水平或 Executor 的操作精度。
3.  **容错性**：当执行失败时，Executor 可以反馈给 Planner 进行重新规划，而不需要从头开始。

## 应用
[[TuriX-CUA]] 框架采用了这种多模型设计，以提升其在桌面自动化任务中的表现。