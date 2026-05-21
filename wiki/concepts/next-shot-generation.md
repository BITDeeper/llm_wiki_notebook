---
type: concept
title: Next-Shot Generation
created: 2026-04-10
updated: 2026-04-10
tags: [video-generation, autoregressive, narrative]
related: [onestory, adaptive-memory-modeling]
sources: ["视频生成不再「断片」：onestory给模型装上「选择性记忆」，跨镜头讲故事人物场景始终如一丨cvpr'26.md"]
---
# Next-Shot Generation

**Next-Shot Generation**（下一镜头生成）是一种将多镜头视频生成重构为自回归任务的技术范式。

## 定义
与一次性生成整段长视频的传统方法不同，Next-Shot Generation 要求模型基于前面已经生成的镜头，逐步生成下一个镜头（shot-by-shot）。这种设定类似于人类讲故事的逻辑，即随着情节的发展不断推进画面。

## 优势
- **上下文管理**：通过逐步生成，模型可以更自然地维护长程上下文，避免一次性处理过长序列带来的计算和记忆压力。
- **灵活性**：允许在生成过程中根据前序镜头动态调整后续生成策略。
- **兼容性**：首个镜头可由任何 text-to-video 或 [[image-to-video]] 模型生成，后续镜头则由专门模型接手，易于集成现有技术栈。

## 应用
该范式是 [[OneStory]] 模型的基础架构之一，使得模型能够在生成过程中保持跨镜头的叙事连贯性。