---
type: entity
title: Tuner Agent
tags: [agent-component, optimization]
related: [aibuildai, manager-agent, designer-agent, coder-agent]
created: 2026-03-23
updated: 2026-03-23
sources: ["龙虾也能养龙虾！ucsd发布aibuildai智能体，mle-bench榜单第一.md"]
---
# Tuner Agent

[[Tuner Agent]] 是 [[AIBuildAI]] 系统中专注于模型性能提升的智能体组件。

## 职责
*   **性能调优**：在 [[Coder Agent]] 构建的代码基础上，专注于提升模型的最终性能。
*   **超参数调整**：根据训练反馈调整超参数。

## 策略
采用“先快速校准，再决定投入”的策略：
1.  **热身训练**：先运行一段简短的训练过程，观察学习曲线。
2.  **决策**：根据热身结果决定是延长当前方案的训练时间，还是进行超参数调整。
3.  **预算控制**：整个过程在固定的计算预算内完成。