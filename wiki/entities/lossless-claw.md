---
type: entity
title: lossless-claw
tags: [plugin, context-management, openclaw, llm]
related: [openclaw, 可插拔上下文引擎, oolong-benchmark, claude-code]
created: 2026-03-09
updated: 2026-03-09
sources: ["龙虾最大痛点被官方插件升级！对话永不忘记，gpt和gemini最强模型都可接入.md"]
---

# lossless-claw

## 概述
[[lossless-claw]] 是 [[openclaw]] 官方推荐的上下文管理插件，旨在实现“无损上下文管理”。它通过持久化存储和分层摘要机制，解决了 AI Agent 在长对话中遗忘历史信息的问题。

## 核心机制

### 1. 持久化存储
与传统 Agent 系统在上下文过长时直接丢弃旧内容不同，[[lossless-claw]] 将所有旧对话持久化存储到 SQLite 数据库中，并按对话结构进行组织。

### 2. DAG 摘要结构
- 利用配置的 LLM 对旧消息块生成摘要。
- 将摘要压缩为更高层级的节点，形成 DAG（有向无环图）结构。
- 在每轮对话中，将高层摘要与最近的原始消息组合成上下文输入给模型。

### 3. 历史回溯
插件提供了一组工具（如 `lcm_grep`, `lcm_describe`, `lcm_expand`），允许 Agent 在需要时主动搜索、描述或展开历史摘要，回溯到原始数据。

## 性能表现
在 [[OOLONG benchmark]] 的测试中，使用 [[lossless-claw]] 的 Agent 得分达到了 **74.8**，超越了 [[claude-code]] 的 **70.3**。测试结果显示，随着上下文长度的增加，[[lossless-claw]] 的性能优势更加明显。

## 设计理念
该插件的设计理念源自论文《LCM: Lossless Context Management》，强调上下文的连续性和完整性，而非单纯的检索增强。其核心思想是：通过保留原始数据并提供高效的压缩与检索机制，确保 Agent 在执行长任务时不会“失忆”。