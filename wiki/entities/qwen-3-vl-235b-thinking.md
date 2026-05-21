---
type: entity
title: Qwen-3-VL-235B-Thinking
tags: [ai, 多模态模型, 开源模型]
related: [babyvision, gemini-3-pro-preview]
created: 2026-01-12
updated: 2026-01-12
sources: ["大模型拿金牌却输给三岁宝宝！一套「纯视觉考卷」把顶尖vlm打回幼儿园.md"]
---

# Qwen-3-VL-235B-Thinking

**Qwen-3-VL-235B-Thinking** 是一款开源的多模态大模型。在 [[BabyVision]] 评测基准中，它是表现最好的开源模型。

## 性能表现

### BabyVision 评测
- **得分**：22.2%（BabyVision-Full）。
- **排名**：在开源模型中排名第一，但整体表现仍显著落后于闭源顶尖模型 [[Gemini-3-Pro-Preview]]（49.7%）。
- **对比**：大多数开源模型的得分集中在 12-19% 区间，Qwen-3-VL-235B-Thinking 略高于平均水平，但仍远低于 3 岁儿童的基线水平。

## 局限性
尽管是开源领域的佼佼者，该模型在 BabyVision 测试的四大类视觉原子能力（精细辨别、视觉追踪、空间感知、模式识别）上均表现不佳，特别是在“Count 3D Blocks”等需要空间想象的任务上存在明显短板。