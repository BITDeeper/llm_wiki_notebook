---
type: entity
title: LangGraph
tags: [工具, 框架, agent-orchestration]
related: [tradingagents, langchain, 多智能体协作]
created: 2026-03-31
updated: 2026-03-31
sources: ["唐杰高徒打造龙虾投资军团！量化私募全线agent，开源狂揽39k星.md"]
---

# LangGraph

[[LangGraph]] 是 LangChain 生态中的有状态多智能体编排框架。

## 核心特性
- **有状态编排**：支持循环图和条件分支，适合构建复杂的智能体工作流。
- **结构化通信**：支持智能体间通过结构化协议进行通信，减少信息损耗，便于调试。

## 应用案例
[[TradingAgents]] 使用 LangGraph 构建其五层协作架构，实现了分析师、研究员、交易员等角色之间的状态流转与信息交互。