---
type: entity
title: AI Hedge Fund
tags: [开源项目, 金融ai, 多智能体系统, langgraph, 投资策略]
related: [炼化大师, runtime-agent-os, langgraph, 回测]
sources: ["有人把巴菲特芒格炼化成agent，然后开源了….md"]
created: 2026-04-13
updated: 2026-04-13
---

# AI Hedge Fund

## 概述
[[ai-hedge-fund]] 是一个由独立开发者 Virat Singh 创建的开源 AI 投资决策系统。该项目通过 [[炼化大师]] 技术，将巴菲特、芒格等 12 位传奇投资家的思维模型转化为 AI Agent，并结合 6 种专业分析 Agent，构建了一个完整的自动化投资研究框架。

## 核心功能

### 1. 多维决策系统
系统模拟了一个由“传奇投资人”和“专业分析师”组成的投资委员会：
- **决策层**：12 位风格迥异的投资大师（如价值派的巴菲特、成长派的 Cathie Wood、宏观派的 Druckenmiller）针对同一资产提供独立判断。
- **分析层**：基本面、技术面、情绪面、估值等 6 个维度的专业分析。
- **执行层**：Portfolio Manager 汇总信号，Risk Manager 控制仓位。

### 2. 可视化策略编排
前端集成了 React Flow 编辑器，用户可以通过拖拽节点的方式，自定义 Agent 之间的协作逻辑和决策流程，实现了投资策略的“白盒化”。

### 3. 本地化与隐私
支持通过 Ollama 接入本地大模型，无需将敏感财务数据上传至云端，即可运行完整的推理流程。

## 技术架构
- **编排框架**：使用 [[langgraph]] 管理多 Agent 工作流和状态流转。
- **状态管理**：通过共享的 `AgentState` 字典实现节点间的信息同步。
- **模型支持**：兼容 OpenAI、Anthropic、DeepSeek 等 13 种 LLM 提供商。

## 局限性与风险
- **实盘缺失**：目前主要依赖 [[回测]] 验证策略，缺乏长期的实盘业绩数据。
- **哲学 vs 结果**：Agent 复刻的是投资哲学和逻辑，而非历史业绩。大师观点冲突时的决策权重分配仍需用户主观判断。
- **市场不确定性**：历史数据无法完全预测未来黑天鹅事件（如 Nassim Taleb Agent 所强调的尾部风险）。

## 外部链接
- GitHub: https://github.com/virattt/ai-hedge-fund