---
type: entity
title: Supermemory
tags: [ai-infrastructure, memory, startup, agent]
related: [asmr, rag, longmemeval, 自动遗忘]
created: 2026-03-23
updated: 2026-03-23
sources: ["一夜之间，ai终获「永久记忆」！最难考试99%刷爆sota，全网直呼疯狂.md"]
---
# Supermemory

**Supermemory** 是一家 AI 记忆基础设施提供商，致力于解决 AI Agent 的长期记忆问题。其核心产品是一套面向所有 AI 应用的记忆与上下文基础设施，旨在让 AI 真正拥有“永久记忆”，而不仅仅是检索能力。

## 核心产品与技术
Supermemory 开发了 [[ASMR]]（智能体搜索与记忆检索）系统，该系统在 [[LongMemEval]] 基准测试中取得了 99% 的准确率。与传统 [[RAG]]（检索增强生成）系统不同，Supermemory 强调“记忆”与“检索”的区别：
- **身份识别**：能够区分不同用户（如张三 vs 李四），提供个性化上下文。
- **信息更新处理**：能够识别并处理信息覆盖（例如从“住在北京”更新为“住在上海”），只返回最新信息。
- **自动遗忘**：具备 [[自动遗忘]] 机制，能够根据时间上下文使过时信息（如“明天的考试”）自动失效，防止其变成噪音。

## 技术架构
ASMR 系统抛弃了传统的向量数据库和嵌入模式，完全在内存中运行。它采用 [[多Agent并行推理]] 架构，包括：
- **观察者 Agent**：并行摄取原始数据，提取个人信息、偏好、时间线等六大维度信息。
- **搜索 Agent**：进行 [[主动推理检索]]，基于认知理解而非语义相似度来检索信息。
- **决策森林**：使用多个高度专业化的 Agent 变体独立作答，通过聚合器生成最终答案。

## 集成与生态
Supermemory 提供了低成本的集成方案：
- **API 接口**：提供约 50ms 延迟的用户画像 API，一次调用即可获取用户的静态事实和动态上下文。
- **外部数据源**：支持 Google Drive、Gmail、Notion、OneDrive、GitHub 等平台的实时同步。
- **开发框架支持**：兼容 Vercel AI SDK、LangChain、LangGraph、OpenAI Agents SDK、Mastra 等主流框架。
- **MCP 服务器**：提供 Model Context Protocol 服务器，支持 Claude Desktop、Cursor、Windsurf、VS Code 等工具直接使用。

## 行业影响
Supermemory 将 AI 的“工作记忆”从一个附加功能转变为一层基础设施，被视为让 AI 从“工具”变成“搭档”的关键拼图。该团队计划于 2026 年 4 月初开源 ASMR 的全部代码。