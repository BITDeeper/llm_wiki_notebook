---
type: entity
title: Coder Agent
tags: [agent-component, implementation]
related: [aibuildai, manager-agent, designer-agent, tuner-agent]
created: 2026-03-23
updated: 2026-03-23
sources: ["龙虾也能养龙虾！ucsd发布aibuildai智能体，mle-bench榜单第一.md"]
---
# Coder Agent

[[Coder Agent]] 是 [[AIBuildAI]] 系统中负责将设计方案转化为可执行代码的智能体组件。

## 职责
*   **流水线构建**：将 [[Designer Agent]] 提出的建模方案转化为完整的训练与推理流水线代码。
*   **验证运行**：在代码编写完成后，执行一次短时的验证运行，以确保流水线可以端到端运行，随后将完整的训练任务移交给 [[Tuner Agent]]。

## 目标
其首要目标是确保代码的正确性和完整性，而非直接追求最终的性能指标（性能优化由 Tuner Agent 负责）。