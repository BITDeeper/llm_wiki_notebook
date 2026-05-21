---
type: source
title: "OpenAI新模型Day0就被嫌弃！排名拉垮，不如一月底发布的国产模型"
tags: [openai, llm, benchmark, pricing, kimi]
related: [gpt-5-4, kimi-2-5, ai-subscription-crisis, 子代理]
created: 2026-03-18
updated: 2026-03-18
authors: [量子位, henry]
year: 2026
url: "https://mp.weixin.qq.com/s/KTmh5zxZHVnelVr8iu5R1A"
venue: "量子位"
sources: ["openai新模型day0就被嫌弃！排名拉垮，不如一月底发布的国产模型.md"]
---

# OpenAI新模型Day0就被嫌弃！排名拉垮，不如一月底发布的国产模型

## 摘要
OpenAI 推出了主打速度与成本效益的 [[gpt-5-4]] 系列轻量级模型（mini 和 nano）。尽管官方强调其在编程和 Agent 任务上的优化及相比满血版的成本优势，但市场反响冷淡。在 Vals 排行榜上，GPT-5.4 mini 排名第 13，落后于一月底发布的国产模型 [[kimi-2-5]]（第 12 名）。此外，用户发现相比旧版 GPT-5 mini，新模型价格实际上涨了约三倍，引发关于“变相涨价”的争议。

## 核心论点

### 1. 市场排名不及国产竞品
- **Vals 排行榜**：GPT-5.4 mini 排名第 13，落后于一月底发布的 Kimi 2.5（第 12 名）。
- **性价比对比**：Kimi 2.5 比 GPT-5.4 mini 便宜一倍多，且延迟更低。
- **拓扑证明**：在拓扑证明评测中，mini 和 nano 模型表现中规中矩，分别排行第九、第十，不及 Kimi、Qwen、DeepSeek 等国产模型。

### 2. 定价策略争议（变相涨价）
- **官方叙事**：OpenAI 强调新 mini 版本比 GPT-5.4 满血版便宜三倍。
- **市场现实**：网友指出，如果对比旧版 GPT-5 mini，新 mini 价格实际上涨了约三倍。
- **行业背景**：这被视为“龙虾热”背景下，全球模型厂商普遍涨价的又一例证，关联 [[ai-subscription-crisis]]。

### 3. 特定场景（编程/Agent）优化有效
- **性能接近满血版**：在 SWE-Bench Pro、OSWorld-Verified 等编程和计算机操作基准测试中，mini/nano 表现接近 GPT-5.4 满血版。
- **子代理模式**：新模型针对 [[子代理]]（Subagent）架构进行了优化，即大模型负责决策规划，小模型（如 mini/nano）并行处理具体任务（如搜索代码库、处理文档）。
- **实测数据**：Reddit 用户测试显示，在分类、翻译等任务中，nano 模型成本比满血版降低最高达 91.9%，且性能损失在可接受范围内。

### 4. 用户怀旧情绪
- **Keep 4o**：OpenAI 总裁 Greg Brockman 的发布推文评论区被“让 4o 回来”刷屏，反映了用户对旧版本模型体验的留恋或对新模型的不满。

## 关键实体
- [[OpenAI]]：模型发布方。
- [[Kimi 2.5]]：一月底发布的国产模型，在性价比和排名上优于 GPT-5.4 mini。
- [[Gemini Flash 3 lite]]：被网友指出比 GPT-5.4 mini 更智能且便宜六倍。

## 关键数据
- **价格**：GPT-5.4 mini 输入 $0.75/1M tokens，输出 $4.5/1M tokens；Nano 输入 $0.2/1M tokens，输出 $1.25/1M tokens。
- **成本节省**：在特定任务中，使用 nano 模型相比满血版可节省约 91.9% 的成本。

## 结论
虽然 GPT-5.4 mini/nano 在特定工程任务（如编程、子代理）中展现了极高的性价比，但在全球竞争格局下，其综合性能已不再具备绝对统治力，甚至被早期发布的国产模型超越。同时，其定价策略也引发了用户的不满。