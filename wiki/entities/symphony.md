---
type: entity
title: Symphony
tags: [tool, open-source, orchestration, ai-programming]
related: [openai, codex, claude-code, 上下文工程]
created: 2026-04-29
updated: 2026-04-29
sources: ["和anthropic-ceo一起发过nature，他用claude-code复活三年烂尾代码.md"]
---

# Symphony

Symphony 是 [[openai]] 开源的一个 AI 编程编排系统，旨在解决工程师在同时管理多个 AI 编码会话时面临的上下文切换成本过高的问题。

## 核心机制
Symphony 将项目管理工具（如 Linear）的看板转化为 AI 编程的控制中心。
- **自动派发**：每一个 Open 状态的 Issue 会自动分配一个独立的 Agent。
- **持续运行**：Agent 在独立工作区中持续运行，崩溃自动重启，新任务自动接手。
- **人类角色**：工程师从“写代码的人”转变为“Review 结果的人”。

## 成效
根据 OpenAI 的统计数据，部分团队在上线 Symphony 的头三周，成功合并的 PR 数量暴涨了 500%。它极大地降低了尝试新重构方案的成本，甚至允许产品经理和设计师直接通过自然语言提交功能请求。

## 技术哲学
Symphony 代表了 AI 编程管理的**广泛编排模式**（“开工厂”）。与 [[brendan-maclean]] 在 [[skyline]] 项目中采用的**深度上下文模式**（“带徒弟”）不同，Symphony 更侧重于通过规范文档（SPEC.md, WORKFLOW.md）来实现大规模的并行任务处理。

## 自举
Symphony 的核心规范最初由 Codex 生成，OpenAI 甚至使用 Symphony 编排 Codex 重写了 Symphony 本身。