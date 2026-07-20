---
type: entity
title: Wan 2.5
created: 2026-06-14
updated: 2026-06-14
tags: [视频生成模型, 对照模型]
related: [thinking-with-video, videothinkbench]
sources: ["rss/视频生成作为多模态推理新范式-cvpr-2026.md"]
---
# Wan 2.5

**Wan 2.5** 是一款 AI 视频生成模型。在 [[thinking-with-video|Thinking with Video]] 的研究中，Wan 2.5 被用作关键的**对照模型**，以验证视频生成模型的文本推理能力是否真实。

研究发现，Wan 2.5 的 API 允许控制是否进行“提示词改写”。当关闭提示词改写功能后，Wan 2.5 在文本任务上的表现几乎降至零。这一发现揭示了部分视频生成 API 表现出的“文本推理”能力，可能实际上是由前置的大语言模型代为解答后，再交由视频模型渲染的。