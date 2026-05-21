---
type: entity
title: ContextEngine
tags: [组件, 插件系统, 上下文管理, openclaw]
related: [openclaw, 上下文管理插件化, runtime-agent-os]
created: 2026-03-09
updated: 2026-03-09
sources: ["刚刚，openclaw史上最猛更新！ai记忆可自由插拔，开发者等了半年.md"]
---

# ContextEngine

ContextEngine 是 [[openclaw]] 在 v2026.3.7-beta.1 版本中推出的全新插件接口，旨在解决 AI Agent 开发中最棘手的上下文管理问题。

## 核心功能
它将 AI 智能体的上下文处理逻辑（如初始化、注入、压缩、子智能体生成）从核心代码中剥离，通过标准接口允许开发者自定义和插拔。

## 生命周期钩子
ContextEngine 提供了一组完整的生命周期钩子，允许开发者在不同阶段介入上下文处理：
- **bootstrap**：上下文初始化。
- **ingest**：信息注入。
- **assemble**：上下文组装。
- **compact**：上下文压缩（解决 Token 爆炸问题）。
- **afterTurn**：回合结束后处理。
- **prepareSubagentSpawn**：子智能体生成前准备。
- **onSubagentEnded**：子智能体结束后处理。

## 应用场景
- **自定义策略**：开发者可以插入自定义的 RAG（检索增强生成）策略或激进的压缩算法。
- **记忆隔离**：为不同的子任务配置隔离的记忆空间。
- **零阻碍接入**：无需修改 OpenClaw 核心代码即可调整上下文行为，降低了维护风险。

## 意义
ContextEngine 的推出是 OpenClaw 从“工具”进化为“平台”的关键拐点，极大地丰富了 [[上下文管理插件化]] 的生态，使得社区能够贡献多样化的上下文管理解决方案。