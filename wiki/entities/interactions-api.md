---
type: entity
title: Interactions API
tags: [google, api, agent, infrastructure, development]
related: [gemini, google-deepmind, 上下文环流, 声明式agent, gemini-deep-research-agent, gemini-3-pro, 有状态智能体交互]
created: 2026-03-19
updated: 2026-05-07
sources: ["ai助手现在认路了：谷歌地图直接「长」进大脑.md", "谷歌最新版「深度研究」反击gpt-5.2.md"]
---

# Interactions API

[[Interactions API]] 是 [[Google DeepMind]] 推出的全新 API 接口，专门面向复杂的 [[智能体工作流]] 应用设计。它标志着 AI 应用开发从无状态的「请求-响应」模式向有状态的「智能体交互」模式的重大转变。

## 核心特性

### 服务器端状态管理
传统的 LLM API 要求客户端维护整个对话历史，并在每次请求时发送全部上下文。Interactions API 允许将历史记录管理卸载到服务器端，这不仅简化了客户端代码，还通过提高缓存命中率降低了成本。

### 内置 Agent 调用
开发者不再局限于调用基础模型，而是可以直接通过 API 调用谷歌预训练的高级 Agent（例如 `agent=deep-research-pro-preview-12-2025`）。这意味着开发者可以将顶尖的研究能力直接嵌入到自己的 ERP、CRM 或科研软件中。

### 后台执行与长任务处理
支持长时间运行的推理循环，无需维持客户端连接。这对于需要处理数十万 token 阅读量的深度研究任务至关重要，同时也适应需要多次工具调用和中间推理的复杂任务。

### 可组合的数据模型
提供了清晰的数据架构，专门用于处理交错排列的消息、思考过程、工具及其结果。这使得对 Agent 行为的调试、操作和逻辑推理变得更加容易。

## 与 GenerateContent API 的区别

- **GenerateContent API**：主要用于标准的内容生成和简单的单次交互。
- **Interactions API**：专注于 Agent 的全生命周期管理，特别是涉及多工具协作、状态保持和复杂上下文处理的场景。

## 技术意义
Interactions API 的推出降低了构建复杂 Agent 的门槛，使得开发者能够更专注于业务逻辑而非上下文管理。它是谷歌构建 Agent 生态系统的关键基础设施。

## 当前状态
截至 2026 年 3 月，该 API 处于 **Public Beta** 阶段。谷歌官方建议，对于标准的生产工作负载，目前仍以 `GenerateContent` 为主要路径，但这标志着 Agent 开发基础设施的未来方向。