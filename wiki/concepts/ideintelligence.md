---
type: concept
title: IDEIntelligence
tags: [framework, apple, xcode, ai-integration]
related: [xcode, agentic-coding, model-context-protocol]
created: 2026-02-04
updated: 2026-02-04
sources: ["两个「最强ai」塞进xcode！苹果这波杀疯了.md"]
---

# IDEIntelligence

IDEIntelligence 是 [[Apple]] 在 [[Xcode]] 26.3 中引入的一套全新框架集，旨在将 AI 能力原生深度集成到开发环境中。它是苹果构建 AI 原生 IDE 的技术基石。

## 框架组成
IDEIntelligence 包含三个主要组件：
1.  **Agent**：负责 [[Agentic Coding]] 的核心逻辑，管理 AI 的任务规划、文件访问和权限控制。
2.  **Codex**：专门对接 [[OpenAI]] Codex 模型的接口，用于通用代码生成和诊断。
3.  **Claude**：专门对接 [[Anthropic]] Claude 模型的接口，用于复杂重构和视觉验证。

## 功能特性
*   **原生集成**：AI 功能不再是外挂插件，而是与 Xcode 的编辑器、预览器和调试器深度融合。
*   **统一管理**：开发者可以在 Xcode 设置中直接绑定 OpenAI 或 Anthropic 账号，无需配置复杂的 API Key。
*   **开放标准支持**：框架支持 [[Model Context Protocol]] (MCP)，理论上允许接入任何兼容该协议的第三方模型。

## 意义
IDEIntelligence 的出现，使得 Xcode 能够利用 AI 的“大脑”来理解开发者意图，自动处理繁琐的编码任务，从而让开发者专注于核心业务逻辑和产品创新。