---
type: entity
title: Tavily
tags: [search-api, ai-tools, agent]
related: [openclaw, clawhub, ai-agent-技能生态]
created: 2026-03-04
updated: 2026-03-04
sources: ["龙虾部署不求人，还附5个openclaw必备技能.md"]
---

# Tavily

[[Tavily]] 是一个专门为 AI Agent 和大语言模型优化的搜索 API 服务。

## 核心特点
与传统的浏览器搜索相比，Tavily 具有以下优势：
- **语义理解**：更懂自然语言指令，能准确理解 AI Agent 的搜索意图。
- **结构化输出**：直接返回结构化的数据，便于 LLM 处理和推理，无需进行复杂的网页解析。
- **无广告干扰**：搜索结果纯净，不包含广告信息。

## 应用场景
Tavily 常被用于获取实时信息，例如：
- 查询最新的学术论文或新闻报道。
- 获取实时产品价格或航班动态。
- 补充 [[openclaw]] 等智能体的知识时效性短板。

## 使用方式
在 [[openclaw]] 中，用户可以通过 [[ClawHub]] 安装 `tavily-search` 插件来集成该服务。