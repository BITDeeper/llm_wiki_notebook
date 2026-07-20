---
type: entity
title: OpenRath
created: 2026-06-16
updated: 2026-06-16
tags: [多智能体框架, 运行时, 开源项目, session, pytorch]
related: [rath-team, session作为一等公民, mams-多智能体多会话, pytorch抽象映射, session-graph, selector-动态路由器, autogen, langgraph, crewai]
sources: ["rss/别再只堆agent了：清华团队把session重新做成了多智能体系统的核心.md"]
---
# OpenRath

OpenRath 是由 [[rath-team|Rath Team]] 开发的一个多智能体、多会话运行时框架。该框架主张在多智能体系统中，应将 [[session作为一等公民|Session 作为一等公民]]，而非仅仅关注 Agent 本身。

## 核心理念
OpenRath 认为多智能体系统的瓶颈在于“状态流动管理”。它将 Session 定义为承载执行证据的持久化、可路由对象。其最显著的设计特点是 [[pytorch抽象映射|PyTorch 抽象映射]]，将 Agent 视为纯变换层（`forward(session) -> session`），将 Sandbox 和 Memory 视为可插拔后端。

## 核心组件
- **Session**：结构化的数据块表，支持 fork（分叉）、detach（切断血缘）和 merge（合并）。
- **Workflow**：对应 PyTorch 中的 Module，用于串联和嵌套多个 Agent。
- **[[session-graph|Session Graph]]**：由 Session 流动动态生成的血缘图谱，提供路由、复现、回滚和审计能力。
- **[[selector-动态路由器|Selector]]**：由大模型驱动的动态路由机制，取代写死的 if/else 控制流。

## 行业定位
在多智能体系统象限中，OpenRath 面向最复杂的 [[mams-多智能体多会话|多智能体多会话（MAMS）]] 场景。与 [[autogen]]、[[langgraph]] 和 [[crewai]] 等主要解决“Agent 之间怎么说话”的框架不同，OpenRath 解决的是“Agent 们说完话之后，谁来拥有这份工作的状态”这一控制平面问题。

## 版本状态
- **v1.1**：引入持久 Session，解决跨时间证据留存。
- **v1.2**：引入 Session 路由，升级为多 Agent 协作的控制平面。
- **v1.2.1**：当前版本，已在 PyPI 发布（`pip install openrath`），采用 BSD-3-Clause 协议。