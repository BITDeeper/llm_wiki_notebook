---
type: entity
title: LangGraph
tags: [工具, 框架, agent-orchestration, 多智能体框架, 开源工具]
related: [tradingagents, langchain, 多智能体协作, openrath, autogen, crewai]
created: 2026-03-31
updated: 2026-06-16
sources: ["唐杰高徒打造龙虾投资军团！量化私募全线agent，开源狂揽39k星.md", "rss/别再只堆agent了：清华团队把session重新做成了多智能体系统的核心.md"]
---

# LangGraph

[[LangGraph]] 是 [[LangChain]] 生态中的有状态多智能体编排框架。它基于图状态和 supervisor 节点来表达路由与控制，通过图结构来编排 Agent 之间的协作流程。

## 核心特性

- **有状态编排**：支持循环图和条件分支，适合构建复杂的智能体工作流。
- **结构化通信**：支持智能体间通过结构化协议进行通信，减少信息损耗，便于调试。
- **Supervisor 节点路由**：通过 supervisor 节点实现多智能体间的路由与控制。

## 应用案例

[[TradingAgents]] 使用 LangGraph 构建其五层协作架构，实现了分析师、研究员、交易员等角色之间的状态流转与信息交互。

## 相关框架对比

在多智能体框架竞争中，LangGraph 被视为 [[openrath|OpenRath]] 的相关竞品。[[openrath|OpenRath]] 在图状态编排的基础上进一步提出了由大模型驱动的 [[selector-动态路由器|Selector]] 来实现真正的动态路由。其他同类框架还包括 [[autogen|AutoGen]] 和 [[crewai|CrewAI]]。