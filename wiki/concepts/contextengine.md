---
type: concept
title: ContextEngine
tags: [openclaw, api, architecture, memory]
related: [mem9, openclaw, agent-永续记忆]
created: 2026-03-15
updated: 2026-03-15
sources: ["全网爆火的龙虾总失忆？大佬亲自下场手搓解药，终结致命痛点.md"]
---

# ContextEngine

**ContextEngine** 是 [[openclaw]] 在 3.8 版本中开放的一套上下文生命周期管理接口。它标志着 Agent 框架从“黑盒”运行向可编程、可干预的运行时架构演进。

## 核心功能

ContextEngine 允许外部插件（如记忆服务 [[mem9]]）深度介入 Agent 的思维过程，主要包含以下关键节点：

- **bootstrap**：Session 启动时的初始化，用于从持久化存储中恢复记忆状态。
- **assemble**：在每一轮对话生成 Prompt 之前，决定应该从记忆库中召回哪些信息注入上下文。
- **afterTurn / ingest**：在一轮对话结束后，决定哪些新生成的信息值得提炼并写入长期记忆。
- **compact**：当上下文窗口即将占满时，决定哪些信息应被保留、压缩或丢弃。这是解决“失忆”问题的关键环节。
- **prepareSubagentSpawn / onSubagentEnded**：处理子 Agent 生成前后的记忆继承与隔离，支持多 Agent 协作。

## 意义

在 ContextEngine 出现之前，外部记忆服务只能作为“外挂”存在，被动地等待 Agent 调用。ContextEngine 的开放使得记忆系统能够**主动管理**上下文的生命周期，从而实现：
- 更精准的记忆召回（按需装配，而非全量注入）。
- 更及时的记忆沉淀（不依赖 Compaction 的被动触发）。
- 合理的多 Agent 协作边界（明确记忆的共享与隔离规则）。

## 应用
[[mem9]] 是首批深度利用 ContextEngine 接口的记忆服务之一，通过该接口实现了对 OpenClaw 记忆的全生命周期接管。