---
type: entity
title: SearchSWE
tags: [framework, evaluation, search, coding]
related: [beyondswe, deep-research-for-coding, gemini, deepseek-v4]
created: 2026-03-20
updated: 2026-03-20
sources: ["ai取代程序员还远！新基准beyondswe：顶尖模型通过率暴跌至45%.md"]
---

# SearchSWE

**SearchSWE** 是一个用于系统研究联网搜索能力是否能提升编程表现的实验框架。它作为 [[beyondswe]] 的补充研究，旨在探索信息检索与代码生成的深度融合路径。

## 框架设计
SearchSWE 在 [[openhands]] 基础上为 Agent 引入了两个工具：
- **SearchTool**：允许 Agent 使用搜索引擎查询信息。
- **BrowserTool**：允许 Agent 浏览和理解网页内容。

Agent 可以在编码过程中自主决定何时跳出本地环境去查阅文档、翻阅论坛或检索领域知识。为了防止作弊，框架设计了双重拦截机制，过滤指向目标仓库的 URL 和相关操作。

## 核心发现

### 搜索策略优于频率
实验结果表明，搜索的价值不在于频率，而在于精准判断：
- **[[gemini]] 3 Pro**：平均每任务仅搜索 0.8-1.1 次，却获得了最好的整体增益（+2.0%），特别是在 [[domainfix]] 任务上提升了 7.5%。
- **[[deepseek-v4]] (DeepSeek-V3.2)**：平均搜索 4.2-5.4 次，整体表现反而微降 0.2%。

### 融合的三大障碍
SearchSWE 揭示了“搜索+编码”难以融合的根本原因：
1. **信息景观鸿沟**：搜索引擎擅长索引高层文档，而代码任务往往需要深埋在源码或评论中的底层细节。
2. **版本时间错位**：搜索引擎倾向于展示最新文档，而本地环境可能是历史版本，导致 Agent 用新 API 改老代码。
3. **语义漂移与噪声**：技术术语的歧义导致搜索结果包含大量噪声，Agent 缺乏有效的过滤能力。

## 意义
SearchSWE 的实验指出，单纯的搜索能力或代码生成能力各自已相当成熟，但两者的有效融合（即 [[deep-research-for-coding]]）才是下一阶段进化的关键。