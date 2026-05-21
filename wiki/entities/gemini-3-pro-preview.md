---
type: entity
title: Gemini-3-pro-preview
tags: [multimodal, closed-source, google, ai, 多模态模型]
related: [videodr, gpt-5.2, video-deep-research, 目标漂移, gemini, babyvision, qwen-3-vl-235b-thinking]
created: 2026-01-22
updated: 2026-05-07
sources: ["视频理解+开放网络搜索=首个视频deep-research评测基准.md", "大模型拿金牌却输给三岁宝宝！一套「纯视觉考卷」把顶尖vlm打回幼儿园.md"]
---

# Gemini-3-pro-preview

**Gemini-3-pro-preview** 是 Google DeepMind 开发的闭源多模态大模型 [[Gemini]] 的一个版本。该模型在多个评测基准中均展现出顶尖的性能，特别是在 [[VideoDR]] 和 [[BabyVision]] 测试中表现突出。

## 性能表现

### VideoDR 评测基准
在 [[VideoDR]] 基准测试中，Gemini-3 是表现最强的模型之一，处于第一梯队（准确率约 69%-76%）。

- **王者地位**：在准确率上领先于包括 [[GPT-5.2]] 在内的其他竞争对手。
- **长上下文优势**：在 Agentic 模式下，Gemini-3 能够有效利用长上下文信息，在长视频任务中获得显著性能提升。
- **长期一致性**：相比其他模型，Gemini-3 在保持长程逻辑连贯和记忆初始视觉线索方面表现更佳，有效缓解了 [[目标漂移]] 问题。

### BabyVision 评测基准
在 [[BabyVision]] 评测中，它是表现最好的闭源模型，也是唯一一个稳定超过 3 岁儿童基线的模型。

- **得分**：49.7%（BabyVision-Full）。
- **对比**：虽然远超其他模型（如开源最强的 [[Qwen-3-VL-235B-Thinking]] 得分仅为 22.2%），但仍远低于人类成人基线（94.1%）和 6 岁儿童水平。

### 局限性与失败案例
尽管在各项基准中表现优异，Gemini-3-pro-preview 在基础视觉任务上仍暴露出显著缺陷，揭示了当前顶尖多模态模型的局限性：即使在语言推理上极其强大，一旦剥离语言辅助，其基础视觉能力仍不及幼儿。

- **连线任务失败**：在“连线垃圾分类”任务中，模型试图通过写一大段“逐段追踪”的推理来解决问题，但最终仍把两条路径接反。
- **归因**：其失败主要归因于无法处理 [[Unspeakable 视觉]]，即难以将连续的视觉路径（连通性）准确转化为离散的语言描述，导致在处理线条交叉点时“追丢”路径。

## 参见
- [[GPT-5.2]] — VideoDR 评测中的主要竞争对手。
- [[agentic-vs-workflow]] — Gemini-3 在 Agentic 模式下的表现分析。