---
type: concept
title: Thought-Action-Observation循环
created: 2026-06-01
updated: 2026-06-01
tags: [智能体, 执行范式, react]
related: [任务执行范式, thought-aligner, 智能体行为安全, 思维校正]
sources: ["icml-2026-上海创智学院-x-复旦大学提出智能体安全新范式-：让智能体学会「三思而后行」.md"]
---
# Thought-Action-Observation循环

Thought-Action-Observation 循环是智能体完成任务的基本执行范式（即 ReAct 范式）。Agent 以"思考（Thought）- 行动（Action）- 观察（Observation）"的循环方式完成任务。

## 循环流程

1. **Thought（思考）**：Agent 在内部形成"我接下来应该怎么做"的推理
2. **Action（行动）**：调用工具或执行动作
3. **Observation（观察）**：根据环境反馈继续下一轮决策

## 安全风险

风险往往从看似合理但偏离安全边界的 Thought 开始，而非从恶意指令开始。Agent 不是"故意做坏事"，而是"先想偏了，才做错了"。

## 安全干预点

[[thought-aligner]] 在 Thought 生成之后、Action 执行之前嵌入安全干预层，形成 [[思维校正]] 机制。这是 [[智能体行为安全]] 领域的关键技术突破。

## 与任务执行范式的关系

本概念是 [[任务执行范式]] 在安全维度的具体展开，描述了 Agent 执行循环中安全风险的传播路径和干预时机。