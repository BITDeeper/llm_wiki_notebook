---
type: entity
title: SignThought
tags: [model, sign-language-translation, multimodal]
related: [lc-hkslt, gloss-free-手语翻译, latent-chain-of-thought, plan-then-ground, 香港理工大学]
created: 2026-05-04
updated: 2026-05-04
sources: ["acl-2026｜ai-for聋哑群体，港理工开源思考型手语翻译模型.md"]
---

# SignThought

**SignThought** 是由 [[香港理工大学]] 和 [[四川大学]] 在 ACL 2026 上提出的一种面向 [[gloss-free-手语翻译]] 的“思考型”框架。该框架旨在解决手语翻译中的跨模态推理难题，通过引入显式的中间语义表示，提升了翻译的连贯性和忠实度。

## 核心架构
SignThought 主要由三部分组成：
1.  **Sign Encoder**：将输入的手语视频编码为稠密的时序证据特征。
2.  **Latent Chain-of-Thought Thinking Module**：核心模块，通过一组可学习的 thought slots，将长视频中的连续证据压缩成一条有序的 [[latent-chain-of-thought]]。
3.  **Dual-Stream Decoder**：基于思维链进行语义规划，再回到视频特征中进行细粒度定位，最终生成翻译文本。

## 关键技术
- **Plan-then-Ground**：一种解耦的解码策略。模型先决定“要说什么”（语义规划），再回到视频中寻找“证据在哪里”（视觉定位），解决了传统方法中语义决策与证据检索相互耦合导致的注意力分散问题。
- **结构化路由机制**：将不同时间段的视觉证据分配给不同的 thoughts，确保推理过程的时序一致性。

## 性能表现
在 PHOENIX14T、CSL-Daily、How2Sign、OpenASL 和 [[lc-hkslt]] 五个主流数据集上均取得了 SOTA 的 BLEU-4 和 ROUGE 分数。消融实验表明，Latent thinking module 是性能提升的关键组件。

## 意义
SignThought 重新定义了手语翻译任务，将其从单纯的模态映射转变为跨模态推理问题。它让手语翻译模型第一次明确拥有了“先组织语义、再 grounded 生成”的中间过程。