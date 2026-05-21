---
type: concept
title: File-as-Bus
tags: [system-design, memory, agent-architecture]
related: [aiscientist, 状态连续性, durable-artifacts, runtime-agent-os]
created: 2026-04-20
updated: 2026-04-20
sources: ["agent不是关键！人大aiscientist实现23小时、74轮长程记忆.md"]
---

# File-as-Bus

[[File-as-Bus]] 是一种将文件系统作为长程协作和状态记忆底座的系统设计机制。它不仅是存储数据的仓库，更是不同 Agent 或任务阶段之间传递信息的“总线”。

## 设计理念

在传统的 Agent 系统中，记忆通常依赖于对话上下文，这在长程任务中容易导致信息丢失或失真。File-as-Bus 机制则将项目状态显式化、持久化：
- **持久化工件**：论文分析、任务计划、代码、日志和实验结果都被写入文件系统。
- **可继承性**：后续阶段可以读取完整的中间状态，而非依赖简短的摘要。

## 价值与作用

1.  **支持长程归因**：当实验失败时，系统可以回溯早期的决策记录和中间结果，准确判断问题根源。
2.  **提升迭代效率**：每一轮试错都建立在前一轮留下的有效证据之上，而非从头开始。
3.  **验证结果**：[[aiscientist]] 的消融实验显示，移除 File-as-Bus 会导致性能大幅下降（PaperBench 下降 6.41 分），证明了其对于 [[状态连续性]] 的关键作用。

## 与现有概念的联系

File-as-Bus 与 [[runtime-agent-os]] 中的“外部记忆”概念相通，都强调通过外部化状态来突破模型上下文限制，实现更复杂的任务编排。