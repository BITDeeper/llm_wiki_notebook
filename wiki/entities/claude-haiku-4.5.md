---
type: entity
title: Claude Haiku 4.5
created: 2026-03-14
updated: 2026-03-14
tags: [model, anthropic, llm]
related: [claude-sonnet-4.5, anthropic, cursorbench, swe-bench]
sources: ["拜拜了swe-bench！cursor刚发了个ai-coding评测基准，难哭claude.md"]
---

# Claude Haiku 4.5

Claude Haiku 4.5 是 [[anthropic]] 发布的轻量级大语言模型，主打速度与成本效益。

## 评测表现

在 [[swe-bench]] 基准测试中，该模型得分为 **73.3**。但在 [[cursor]] 发布的 [[cursorbench]] 评测中，分数大幅下跌至 **29.4**。

这一结果表明，尽管该模型旨在提供高效的解决方案，但在处理复杂的真实开发任务和严格的 **[[token约束]]** 时，其性能衰减比 [[claude-sonnet-4.5]] 更为严重。