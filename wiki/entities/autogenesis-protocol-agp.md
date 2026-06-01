---
type: entity
title: Autogenesis Protocol (AGP)
created: 2026-05-30
updated: 2026-05-30
tags: [智能体, 自进化, 协议, 架构]
related: [autogenesis-system-ags, rspl-资源基底协议层, sepl-自进化协议层, 自进化架构, evolver, runtime-agent-os]
sources: ["leetcode-c++近满分！autogenesis要给智能体装上「自进化操作系统」.md"]
origin_date: 2026-04-01
---
# Autogenesis Protocol (AGP)

Autogenesis Protocol（AGP）是由南洋理工大学、斯坦福大学、普林斯顿大学等机构联合提出的面向智能体自我进化的**双层协议架构**。

## 核心设计理念

AGP 的核心设计是将自进化拆分为两个解耦的层次：

1. **[[rspl-资源基底协议层|RSPL（资源基底协议层）]]**：定义"什么东西可以被进化"。将 Prompt、Agent、Tool/MCP/Skill、Environment、Memory 五类组件抽象为可注册、检索、更新、回滚、审计的协议级资源。
2. **[[sepl-自进化协议层|SEPL（自进化协议层）]]**：定义"如何安全地进化"。将自我改进形式化为 Reflect → Select → Improve → Evaluate → Commit 的[[闭环自进化流程|闭环操作流程]]。

## 解决的核心问题

AGP 针对当前智能体系统的三个关键痛点：

1. **系统组件高度耦合**：Prompt、工具、记忆、环境和 Agent 逻辑被写死在框架中，任务变化需人工修改代码。
2. **缺少生命周期和版本管理**：运行中修改组件后，无法追踪改了什么、为什么改、能否回滚。
3. **自进化偏经验主义**：缺乏统一接口、审计机制，难以复现和安全扩展。

## 与现有协议的关系

AGP 不是替代 MCP、A2A 等连接协议，而是填补了智能体技术栈中"进化层"的空白。MCP/A2A 解决智能体如何连接外部世界，AGP 解决智能体如何安全地修改和进化自身。

## 与 Evolver 的对比

维基中已收录的 [[evolver]]（EvoMap 团队的开源自进化引擎）是特定团队的工程实现，而 AGP 定位为学术界的**通用协议框架**，更底层、更通用。两者解决同类问题但路径不同。

## 技术细节

- 论文：https://arxiv.org/abs/2604.15034
- GitHub：https://github.com/DVampire/Autogenesis