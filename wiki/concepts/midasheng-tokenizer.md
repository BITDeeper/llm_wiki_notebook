---
type: concept
title: Midasheng tokenizer
tags: [audio, tokenizer, representation-learning]
related: [midasheng-audio-generate, flow-matching]
created: 2026-04-08
updated: 2026-04-08
sources: ["小米ai语音新框架：人人都能当声音导演.md"]
---

# Midasheng tokenizer

Midasheng tokenizer 是 [[小米大模型应用团队]] 在 [[Midasheng-audio-generate]] 框架中提出的一种统一语义-声学表示技术。

## 技术特点
- **非 VAE 架构**：摒弃了主流音频生成方法中常用的 VAE（变分自编码器）声学分词器。VAE 在压缩过程中往往会损失部分语义信息，而 Midasheng tokenizer 旨在保留更完整的语义内容。
- **统一表示**：提供了一种能够同时涵盖语音、音乐和音效的统一表示方式，打破了不同类型音频模态之间的隔阂。

## 作用
作为 [[Midasheng-audio-generate]] 的核心组件，它配合 [[Flow Matching]] 框架，使得模型能够直接从文本指令生成包含人声、背景音乐和环境音效的复杂混合音频，实现了高质量的“声画同频”生成。
