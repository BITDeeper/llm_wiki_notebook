---
type: source
title: "龙虾最大痛点被官方插件升级！对话永不忘记，GPT和Gemini最强模型都可接入"
tags: [openclaw, agent, context-engine, llm]
related: [openclaw, lossless-claw, 可插拔上下文引擎, gpt-5-4, gemini-flash-3-1, oolong-benchmark]
created: 2026-03-09
updated: 2026-03-09
authors: [Henry]
year: 2026
url: "https://mp.weixin.qq.com/s/s_8yqfuwh_hhiey7pYB-aQ"
venue: 量子位
sources: ["龙虾最大痛点被官方插件升级！对话永不忘记，gpt和gemini最强模型都可接入.md"]
---

# 龙虾最大痛点被官方插件升级！对话永不忘记，GPT和Gemini最强模型都可接入

## 概述
本文报道了 [[openclaw]]（昵称“龙虾”）在 2026 年 3 月 7 日发布的 v2026.3.7 版本更新。此次更新的核心在于引入了 [[可插拔上下文引擎]]，旨在解决 AI Agent 在长对话中遗忘指令和上下文丢失的痛点。此外，新版本还接入了 [[GPT-5.4]] 和 [[Gemini Flash 3.1]] 模型，并优化了部署与路由机制。

## 核心更新：可插拔上下文引擎

### 技术背景
在传统的 Agent 系统中，上下文管理逻辑（如压缩历史、拼接上下文、丢弃旧信息）通常是硬编码在系统内部的。这导致在长对话中，Agent 往往会出现“变笨”、遗忘计划或修改记录等问题。

### ContextEngine 插件插槽
OpenClaw 新增了 `ContextEngine` 插件插槽，提供了完整的生命周期钩子，包括：
- `bootstrap`
- `ingest`
- `assemble`
- `compact`
- `afterTurn`
- `prepareSubagentSpawn`
- `onSubagentEnded`

这使得插件可以在上下文生成、压缩、拼接以及子 Agent 生命周期管理的各个阶段介入，实现完全自定义的上下文策略。

### 官方示例：lossless-claw
官方重点推荐的插件 [[lossless-claw]] 展示了一种“无损上下文管理”策略：
1. **持久化存储**：旧对话不被删除，而是持久化到 SQLite 数据库。
2. **摘要压缩**：对旧消息块生成摘要，并使用 LLM 将摘要压缩为更高层级节点，形成 DAG（有向无环图）。
3. **上下文组装**：每轮对话时，将摘要与最近原始消息组合。
4. **回溯能力**：提供工具（如 `lcm_grep`）让 Agent 可搜索、回溯历史。

### 性能对比
在 [[OOLONG benchmark]] 测试中，使用同一模型时，[[lossless-claw]] 得分 **74.8**，超越了 [[claude-code]] 的 **70.3**。测试表明，上下文越长，[[lossless-claw]] 的优势越明显。

## 其他重要更新

### 模型接入
- 新增支持 [[GPT-5.4]]。
- 新增支持 [[Gemini Flash 3.1]]。

### Agent 路由能力升级
- **持久化绑定**：ACP 绑定在重启后依然保留。
- **Topic 路由**：支持按主题路由 Agent（例如在 Telegram 中，每个 topic 运行独立的 Agent）。

### 工程化与部署
- **Docker 优化**：采用多阶段构建，新增 bookworm-slim 版本，减小容器体积。
- **安全认证**：引入用于网关认证的 SecretRef。
- **移动端**：开始为 iOS App Store 发布做准备。

## 观点与影响
PR 作者 [[Josh Lehman]] 提出：“你其实不需要一个 Agent 记忆系统，你需要的是不会被重置的上下文。”这一观点强调了状态连续性在长任务执行中的关键作用，标志着 AI Agent 架构从单纯模型调用向系统工程化方向的进一步演进。