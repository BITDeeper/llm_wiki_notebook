---
type: concept
title: "Planner-Builder-Reviewer三角色模型"
created: 2026-05-24
updated: 2026-05-24
tags: [agent, 人机协作, 信任, 产品设计]
related: [人格化信任, opc-一人公司, 任务执行范式, agentic-engineering]
sources: ["卷到今天，agent的含金量还在提升丨aigc2026圆桌论坛.md"]
---
# Planner-Builder-Reviewer三角色模型

未来人机协作中，Agent承担大部分Builder工作及部分Planner/Reviewer工作，人类保留Spark（创意火花）和最终Responsibility（责任）。

## 模型定义

由[[张昊阳]]在圆桌论坛中提出，将未来人机协作抽象为三种角色：

### Planner（规划者）
- 负责定义目标、拆解任务、制定策略
- Agent已能承担部分工作（如写PRD）
- 人类保留"Spark"——创意火花和方向判断

### Builder（构建者）
- 负责执行、编码、交付具体产物
- Agent几乎可以承担软件工程里大部分Builder工作
- 这是Agent当前最强的能力域

### Reviewer（审核者）
- 负责质量检查、审计、验收
- Agent已能做web testing、部分审计
- 人类保留最终Responsibility——责任承担

## 演进方向

模型会逐渐侵蚀Planner前半段部分和Reviewer后半段部分，所有Agent设计应瞄准这个方向。最终走向[[opc-一人公司|OPC]]阶段：一个人操纵数百个Agent大军，大部分协作不需要反复Permission，只在极少数关键权限环节需要人类参与。

## 产品设计启示

- 哪些权限可以跳过审核，哪些边界绝对不能省必须由人确认
- Agent会进入自主运行、自主交付、自主验收、自主审计的过程
- 信任框架的建立是核心挑战