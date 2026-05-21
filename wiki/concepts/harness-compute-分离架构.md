---
type: concept
title: Harness/Compute 分离架构
tags: [architecture, agent, security, design-pattern]
related: [agents-sdk, harness, sandbox, 生产级-agent]
created: 2026-04-16
updated: 2026-04-16
sources: ["openai祭出gpt-5.4神装！codex同款harness全面开放.md"]
---

# Harness/Compute 分离架构

## 定义
[[Harness/Compute 分离架构]] 是一种将 AI 智能体的**控制逻辑**与**执行环境**彻底解耦的软件架构设计模式。

## 核心组成
1. **Harness（控制层）**：
    - 运行在可信的基础设施中。
    - 负责模型调用、逻辑决策、工具路由和记忆管理。
    - 持有 API Key 等敏感凭证。
2. **Compute/Sandbox（计算层）**：
    - 运行在隔离的沙盒环境中。
    - 负责执行代码、读写文件、安装依赖。
    - **无凭证**：不接触任何敏感信息，甚至可断网运行。

## 优势
- **安全性**：敏感凭证与模型生成的代码物理隔离，防止泄露或被恶意利用。
- **稳定性**：沙盒崩溃不会影响控制层的状态，支持快照和恢复。
- **灵活性**：计算层可由不同供应商（如 [[Modal]]、[[E2B]]）提供，通过 [[Manifest]] 动态切换。

## 行业意义
这一架构被视为实现 [[生产级-agent]] 的关键范式转移，解决了长期以来阻碍 Agent 落地的安全和扩展性难题。