---
type: entity
title: FluxEDA
tags: [eda-platform, middleware, agent-system, 浙江大学]
related: [openclaw-zju, eda-agent, mcp-model-context-protocol]
created: 2026-04-06
updated: 2026-04-06
sources: ["agent接管EDA工作流，不只写脚本！浙大打通真实芯片设计闭环.md"]
---

# FluxEDA

FluxEDA 是浙江大学卓成团队开发的面向真实 EDA Shell 的统一执行底座，在 OpenClaw + FluxEDA 架构中扮演“神经系统”的角色。

## 核心架构
FluxEDA 并非简单的 API 封装，而是打通了从 TCL Gateway、Socket RPC 协议、Python/C++ SDK、CLI 到 MCP Server 的完整链路。它将散落在不同 Shell 中的工具能力整理成结构化、可注册、可调用的 [[原子 API (Atomic API)]]。

## 关键特性

### 安全沙箱
通过 [[MCP (Model Context Protocol)]] + Skill 机制，FluxEDA 并不直接向模型暴露 EDA Shell，而是建立了一层能力沙箱。模型只能调用预先声明的原子接口，从而：
1. 保证流程稳定运行，降低直接操作复杂工具的风险。
2. 将复杂的 EDA 上下文隔离，节省模型的 Context 空间，使其更聚焦于策略规划。

### 统一接口
提供统一的 `api_*` 接口，屏蔽了底层异构工具链（如 Synopsys, Cadence）的差异，支持上层 Agent 持续驱动真实工具流程。

## 应用场景
- **Post P&R 自动化 ECO**：驱动时序分析工具进行违例修复。
- **标准单元库子库优化**：配合综合与时序分析工具进行结构化搜索。