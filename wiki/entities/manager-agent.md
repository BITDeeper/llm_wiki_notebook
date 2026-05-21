---
type: entity
title: Manager Agent
tags: [agent-component, orchestration]
related: [aibuildai, designer-agent, coder-agent, tuner-agent, 多智能体协作]
created: 2026-03-23
updated: 2026-03-23
sources: ["龙虾也能养龙虾！ucsd发布aibuildai智能体，mle-bench榜单第一.md"]
---
# Manager Agent

[[Manager Agent]] 是 [[AIBuildAI]] 系统中的核心调度组件，扮演项目负责人的角色。

## 职责
*   **决策调度**：不直接编写代码或执行训练，而是通过读取磁盘上的实验记录来决定下一步行动。
*   **模式切换**：
    *   **协调模式**：决定调用哪个子智能体（如 [[Designer Agent]] 或 [[Coder Agent]]）。
    *   **筛选模式**：依据训练信号评估方案潜力，保留有潜力的候选方案，并终止无效方案以节约计算成本（早停机制）。
*   **资源管理**：在进展停滞时触发方案修订或终止实验。

## 技术特点
作为 [[多智能体协作]] 的大脑，它依赖于 [[基于产出物的状态管理]]，通过持久化的日志和检查点来维持系统状态，而非依赖内存中的临时信息。