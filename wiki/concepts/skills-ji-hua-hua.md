---
type: concept
title: Skills 化
tags: [architecture, agent-ecosystem, api]
related: [baidu-search-skill, openclaw, miaoda-app-builder]
created: 2026-03-17
updated: 2026-03-17
sources: ["百度龙虾全家桶火速上桌！出手就是全球最大搜索skill.md"]
---

# Skills 化

Skills 化是指将 AI 能力（如搜索、营销、代码生成、数据分析等）封装成标准化、可被智能体（Agent）调用的组件接口的技术范式。

## 背景与动机
大语言模型（LLM）本身存在训练数据的时间边界（时效性限制）和上下文窗口限制（无法处理海量外部信息）。为了解决这些问题，必须通过外部工具来扩展模型的能力边界。Skills 就是这些外部工具的标准化封装形式。

## 实现方式
- **标准化接口**：定义统一的调用协议，使得不同的 Agent 可以无缝调用各种 Skills。
- **生态集成**：通过官方商店（如 ClawHub）分发，方便开发者发现和集成。

## 百度的实践
百度在构建“龙虾全家桶”时，将其在搜索、学术、营销、应用开发等领域的积累封装成了 10 余种官方 Skills，包括：
- [[baidu-search-skill]]：提供实时全网信息。
- [[miaoda-app-builder]]（秒哒 Skill）：通过对话生成应用。
- 客悦营销：生成营销文案和视频。
- 伐谋 Skill：面向科研的算法实验管理。

## 意义
Skills 化使得 AI 智能体从单一的对话工具演变为具备实际操作能力的“任务入口”，是 AI 原生能力落地的重要形态。