---
type: concept
title: Latent Chain-of-Thought
tags: [ai, reasoning, multimodal]
related: [signthought, plan-then-ground, 跨模态推理]
created: 2026-05-04
updated: 2026-05-04
sources: ["acl-2026｜ai-for聋哑群体，港理工开源思考型手语翻译模型.md"]
---

# Latent Chain-of-Thought

**Latent Chain-of-Thought**（潜在思维链）是指在视频理解与文本生成之间引入的一组有序的、可学习的中间语义表示。它是 [[signthought]] 框架的核心组件。

## 作用
- **语义接口**：作为视觉证据与自然语言生成之间的桥梁，避免将所有信息直接压缩进黑盒编码器。
- **组织语义**：将长视频中的连续证据逐步压缩成一条有逻辑的思维链，帮助模型理清复杂的时空关系。
- **提升连贯性**：通过显式的中间表示，提升生成文本的连贯性和对视频内容的忠实度。

## 特点
与文本推理中显式的推理步骤不同，这里的“思维链”是 **Latent（隐式）** 的，即它不是人类可读的自然语言，而是模型内部学习到的抽象表示。这使得模型能够处理非离散的视觉信号，但也牺牲了一定的可解释性。