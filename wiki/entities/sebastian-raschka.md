---
type: entity
title: Sebastian Raschka
tags: [researcher, ai, engineer, ai-researcher, 人物, 研究者, ai教育者, 技术博主]
related: [claude-code, harness-engineering, 蛙跳式死斗, 硅谷996, gemma-4, deepseek-v4, laguna-xs-2, zaya1-8b]
created: 2026-04-01
updated: 2026-05-22
sources: ["claude-code源码「换壳」反杀，全网疯狂克隆！anthropic封杀失败.md", "硅谷养老梦碎！openai深夜突发：不接受996的就走，agi不养闲人.md", "llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
---

# Sebastian Raschka

Sebastian Raschka 是 AI/ML 领域知名的教育者、研究者和技術博主，以深度技术分析和行业洞察著称。其技术博客是多个重要技术分析文章的直接来源。

## 技术贡献与洞察

### Claude Code 源码分析
Raschka 因深度拆解 [[claude-code]] 源码并总结其六大技术杀手锏而知名。在 Claude Code 源码泄露后，他对代码进行了技术分析，提炼出了 Claude Code 强大性能背后的工程秘密，包括：
- 实时上下文加载
- 激进缓存复用
- 专用工具链

他的分析强调了 Claude Code 的优势在于"软件外壳"而非模型本身。他认为 Claude Code 的**结构化会话记忆机制**模仿了人类程序员写代码时随手记笔记和摘要的习惯，是其高效的关键之一。

### LLM 架构演化追踪
Raschka 持续追踪和深度分析 LLM 架构演化的最新趋势，精准捕捉到 2026 年新一代 LLM 在长上下文效率优化方面的共性方向。他对 [[gemma-4]]、[[laguna-xs-2]]、[[zaya1-8b]]、[[deepseek-v4]] 四个模型进行了系统性的架构对比分析。

在分析中他提出了若干重要观点：
- 当前 LLM 架构设计的核心主题是"缩小 KV Cache"
- 不应简单将 CSA/HCA 定义为"比 MLA 更好"，它是一种更激进、更复杂、更偏向长上下文效率的设计
- Transformer Block 的代码复杂度相比 GPT-2 时代已增长约 10 倍
- 缺乏完整消融实验是评估单一架构改动贡献的主要障碍

## 行业观点

### AI 竞争动态
Raschka 将当前 AI 模型的竞争动态定义为 [[蛙跳式死斗]]。

他描述的竞争模式是：一方发布领先模型，另一方迅速发布参数翻倍的模型使其瞬间过时。这种"慢一秒就暴毙"的节奏迫使公司不断压榨员工的生理极限，因为在这种环境下，只有人的极限是"唯一的弹性成本"。

## 博客
原文链接：https://magazine.sebastianraschka.com/p/recent-developments-in-llm-architectures