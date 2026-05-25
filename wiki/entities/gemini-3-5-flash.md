---
type: entity
title: Gemini 3.5 Flash
created: 2026-05-20
updated: 2026-05-25
tags: ["谷歌", "gemini", "大语言模型", "旗舰模型", "大模型", "编程", "智能体", "ai"]
related: ["gemini", "gemini-omni", "antigravity-2", "google-io-2026", "谷歌", "google-antigravity", "sergey-brin", "桑达尔-皮查伊"]
sources: ["gemini-3.5来了！今夜，谷歌亲手淘汰谷歌.md", "io大会开完，谷歌连搜索框都变智能体了.md", "谷歌ceo承认coding落后了.md"]
origin_date: 2026-05-20
---
# Gemini 3.5 Flash

谷歌于 2026 年 5 月 20 日在 [[google-io-2026]] 大会上首发的最新轻量级前沿模型，被定义为"迄今最强的编码、智能体模型"。即日起面向全球所有用户开放。[[桑达尔-皮查伊]] 称其为"往前迈出的一大步"。

## 核心特性

- 在几乎所有基准测试中全面碾压前代旗舰 Gemini 3.1 Pro（仅三个月前发布）
- 输出速度达 289 tokens/秒，比 GPT-5.5 和 Claude Opus 4.7 快 4 倍以上
- 成本通常不到其他前沿模型的一半
- 谷歌宣称"用户不必再在质量和延迟之间做取舍"
- 同时成为 [[gemini-spark|Gemini App]] 和 Google 搜索 AI Mode 的默认模型
- 结合 [[google-antigravity|Antigravity]] 执行框架，可部署协作式子智能体
- 在人类监督下可靠执行多步骤工作流和编程任务
- 安全方面遵循 Frontier Safety Framework，加强网络安全和 CBRN 防护

## 基准测试成绩

| 基准测试 | 成绩 | 说明 |
|---------|------|------|
| Terminal-Bench 2.1 | 76.2% | 编码能力 |
| GDPval-AA | 1656 Elo | 真实世界 Agent 任务 |
| MCP Atlas | 83.6% | 大规模工具使用 |
| CharXiv Reasoning | 84.2% | 多模态理解 |

以上四项基准相较于 Gemini 3.1 Pro 均为"断层跃迁"。在一部分基准测试中，性能足以媲美甚至碾压 GPT-5.5 和 Claude Opus 4.7。

## 应用场景

- 瞬间消化学术论文并生成交互式可视化网站
- 通过 [[antigravity-2|Antigravity]] 完成多步工作流，自动分类和命名资产
- 两个 Agent 在六小时内复现 AlphaZero 论文并编写可运行游戏

## 访问方式

- **普通用户**：Gemini App 和 Google 搜索 AI Mode 默认搭载
- **开发者**：通过 [[antigravity-2|Antigravity 2.0]]、Gemini API、Google AI Studio、Android Studio 中的 Gemini API 调用
- **企业用户**：通过 Gemini Enterprise Agent Platform、Gemini Enterprise 接入

## 背景

[[sergey-brin]] 亲自挂帅组建攻坚队以应对 [[anthropic]] [[claude-code]] 在编程领域的挑战。此前 [[sergey-brin]] 亲自督战追赶 Claude Code，此次 3.5 Flash 在编程基准上的表现被视为谷歌的全面反击成果，但旗舰版本 3.5 Pro 仍未就绪。

## 皮查伊评价

发布仅一天后，[[桑达尔-皮查伊]] 接受采访时承认 Coding 能力仍有短板，特别是资深开发者处理复杂代码库的长期任务。早期版本存在一些瑕疵和使用限制，皮查伊称"比较容易修"。

> "这是一个新模型，也是在一个新方向上的推进，它确实带来了一些进展，但也可能出现一些回退，不过这些问题，我们可以通过后训练很快处理掉。"

## 与 Antigravity 2.0 的协同

[[antigravity-2]] 内部的高频使用正在为 Gemini 系列模型提供真实 Coding 数据反馈，Gemini 3.5 Flash 的后续迭代将直接受益。

## 后续计划

更强的 Gemini 3.5 Pro 正在内部测试中，预计 2026 年 6 月发布。

## 与现有维基的关联

- 与 [[anthropic]] 的 Claude Code 在编程领域形成直接竞争
- 与 [[openai]] 的 GPT-5.5 在速度和基准测试上形成对比
- 作为 [[任务执行范式]] 的核心引擎，驱动 [[antigravity-2]] 和 [[gemini-spark]]