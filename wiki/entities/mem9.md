---
type: entity
title: mem9
tags: [ai-agent, memory, database, tidb]
related: [openclaw, tidb, huang-dongxu, contextengine, agent-永续记忆]
created: 2026-03-15
updated: 2026-03-15
sources: ["全网爆火的龙虾总失忆？大佬亲自下场手搓解药，终结致命痛点.md"]
---

# mem9

**mem9** 是由 [[tidb]] 团队（具体由联合创始人 [[黄东旭]] 发起）开发的免注册、开箱即用的 [[openclaw]] 永续记忆服务。它旨在解决 AI Agent 在长期运行中面临的“失忆”问题，通过云端数据库提供持久化、可跨设备同步的记忆能力。

## 核心特性

### 一虾一库
mem9 采用了独特的架构设计理念，即为每个 [[openclaw]] 实例分配独立的数据库实例。这种设计确保了：
- **数据隔离**：不同 Agent 的记忆完全物理隔离，互不干扰。
- **安全性**：一虾一密，数据完全加密。
- **弹性**：利用 TiDB Cloud 的 Serverless 特性，实例在空闲时可缩容至接近零成本。

### 零门槛接入
- **免注册**：用户无需注册账号或手动配置 API Token。
- **Skill 安装**：用户只需向 OpenClaw 发送一条指令（包含 `https://mem9.ai/SKILL.md`），即可完成安装和配置。

### 记忆可视化
mem9 提供了 **Memory Space**（个人记忆空间）Dashboard，允许用户：
- 查看所有被持久化的记忆条目。
- 审计 Agent 到底记住了什么（将“黑盒”变为“白盒”）。
- 主动指定需要记住的内容。

### 混合检索能力
基于 TiDB 的 HTAP 架构，mem9 支持：
- **向量检索**：基于语义相似度的召回。
- **全文检索**：基于关键词的精确匹配。
- **分析查询**：对历史记忆进行模式识别和总结。

## 技术架构

### ContextEngine 集成
mem9 深度集成了 [[openclaw]] 3.8 版本开放的 [[contextengine]] 接口。这使得 mem9 能够介入 Agent 的上下文生命周期管理，而不仅仅是充当外部存储：
- **bootstrap**：Session 启动时恢复关键记忆。
- **assemble**：在生成 Prompt 时按需装配相关记忆。
- **compact**：在 Token 紧张时决定哪些记忆应保留、压缩或丢弃。
- **subagent management**：处理子 Agent 之间的记忆继承与隔离。

### 底层支撑
mem9 的运行依赖于 [[tidb]] Cloud 的以下能力：
- **高弹性**：支持百万级数据库实例的动态伸缩。
- **多模态支持**：同时处理向量、全文和关系型数据。
- **ACID 事务**：保证多 Agent 共享记忆时的一致性。

## 解决的痛点
- **上下文压缩丢失**：解决了 OpenClaw 原生 `MEMORY.md` 在 Compaction 时丢失关键信息的问题。
- **多设备同步**：打破了本地文件系统的限制，实现记忆跨设备跟随。
- **多 Agent 协作**：通过 ContextEngine 接口，实现了多个 Agent 之间的记忆共享与隔离逻辑。

## 开发背景
该项目由 TiDB 联合创始人 [[黄东旭]] 在一个周末内快速构建（大部分代码由 AI 生成，即 "vibe coded"），并迅速上线。其诞生源于 TiDB 团队发现大量客户在使用 OpenClaw 时深受“失忆”困扰，而市面上的解决方案均不够“开箱即用”。

## 参考链接
- 官网: https://mem9.ai
- GitHub: https://github.com/mem9-ai/mem9