---
type: entity
title: Agents SDK
tags: [sdk, framework, tool, openai]
related: [openai, gpt-5.4, harness-compute-分离架构, langchain, crewai]
created: 2026-04-16
updated: 2026-04-16
sources: ["openai祭出gpt-5.4神装！codex同款harness全面开放.md"]
---

# Agents SDK

Agents SDK 是 OpenAI 推出的用于构建 AI 智能体的官方软件开发工具包。该 SDK 经历了从轻量级聊天工具到生产级 Agent 底座的重大架构重构。

## 核心架构
SDK 采用了 [[harness-compute-分离架构]]，将系统分为两层：
1. **Harness（控制层）**：负责决策、记忆和工具路由。
2. **Sandbox（计算层）**：负责代码执行和文件操作。

## 关键特性
- **Codex 级工具**：集成了类似 [[Codex]] 的文件系统工具和 [[Claude Code]] 的最佳实践。
- **安全隔离**：API Key 和敏感凭证仅存在于 Harness 层，Sandbox 层完全隔离。
- **原生沙盒支持**：通过 [[Manifest]] 配置，一键接入 [[Modal]]、[[E2B]]、[[Cloudflare]] 等七家厂商。
- **容错机制**：支持快照、状态恢复和多沙盒并行，确保长时任务的稳定性。

## 行业影响
Agents SDK 的成熟直接挤压了 [[LangChain]]、[[CrewAI]] 等第三方框架的生存空间，迫使行业向“原生基建+垂直应用”的两极分化发展。