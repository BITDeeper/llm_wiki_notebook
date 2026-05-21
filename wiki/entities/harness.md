---
type: entity
title: Harness
tags: [architecture, component, openai, control-flow]
related: [agents-sdk, sandbox, harness-compute-分离架构, openai]
created: 2026-04-16
updated: 2026-04-16
sources: ["openai祭出gpt-5.4神装！codex同款harness全面开放.md"]
---

# Harness

Harness 是 OpenAI [[Agents SDK]] 中的控制层组件，负责管理 Agent 的逻辑流、模型调用、工具路由以及暂停和恢复机制。

## 核心职责
- **决策中枢**：指挥 [[Sandbox]] 执行具体任务。
- **安全管理**：持有 API Key 和敏感凭证，确保这些信息不进入执行环境。
- **状态管理**：维护 Agent 的记忆和运行状态，支持长时任务的断点续传。

## 设计意义
Harness 的存在使得 Agent 的“大脑”（决策）与“手脚”（执行）得以分离。这种分离是 [[harness-compute-分离架构]] 的核心，解决了传统 Agent 架构中安全性与稳定性难以兼顾的难题。