---
type: concept
title: Plan-then-Ground
tags: [ai, decoding-strategy, multimodal]
related: [signthought, latent-chain-of-thought, gloss-free-手语翻译]
created: 2026-05-04
updated: 2026-05-04
sources: ["acl-2026｜ai-for聋哑群体，港理工开源思考型手语翻译模型.md"]
---

# Plan-then-Ground

**Plan-then-Ground**（先规划后定位）是一种用于多模态生成的解码策略，由 [[signthought]] 模型提出并应用。

## 核心思想
该策略将生成过程解耦为两个阶段：
1.  **Plan（规划）**：模型先生成语义规划，决定“要说什么”。这一步主要依赖 [[latent-chain-of-thought]]。
2.  **Ground（定位）**：模型回到原始视频特征中，寻找支持该语义的视觉证据，决定“证据在哪里”。

## 优势
- **减少干扰**：解决了传统方法中“语义决策”与“证据检索”相互耦合导致的注意力分散问题。
- **符合认知**：模拟了人类“先想清楚，再找依据”的认知过程。
- **提升准确性**：显式的证据定位减少了生成内容与视频内容不匹配（幻觉）的情况。