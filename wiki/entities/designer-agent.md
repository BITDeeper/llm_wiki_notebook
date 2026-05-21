---
type: entity
title: Designer Agent
tags: [agent-component, strategy]
related: [aibuildai, manager-agent, coder-agent, tuner-agent]
created: 2026-03-23
updated: 2026-03-23
sources: ["龙虾也能养龙虾！ucsd发布aibuildai智能体，mle-bench榜单第一.md"]
---
# Designer Agent

[[Designer Agent]] 是 [[AIBuildAI]] 系统中负责制定和修订建模策略的智能体组件。

## 职责
*   **方案设计**：直接探索数据集特征，提出多个差异化、可行性强的建模计划。
*   **方案修订**：在实验失败时，仔细诊断原因（如过拟合、欠拟合、收敛问题或数据异常），并提出具体的改进方案供 [[Coder Agent]] 重新实现。

## 工作模式
*   **设计模式**：从零开始构建建模思路。
*   **修订模式**：基于反馈循环优化现有方案。