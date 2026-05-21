---
type: concept
title: Gloss-Free 手语翻译
tags: [sign-language, nlp, multimodal]
related: [signthought, lc-hkslt, 跨模态推理]
created: 2026-05-04
updated: 2026-05-04
sources: ["acl-2026｜ai-for聋哑群体，港理工开源思考型手语翻译模型.md"]
---

# Gloss-Free 手语翻译

**Gloss-Free 手语翻译**（Gloss-Free Sign Language Translation）是指直接从手语视频生成自然语言句子，跳过传统的中间“手语标注”（Gloss）步骤的技术范式。

## 核心特征
- **端到端映射**：不依赖人工定义的 gloss（即手语的逐词转写），直接建立视频到文本的映射。
- **降低成本**：避免了昂贵且繁琐的人工 gloss 标注工作。
- **真实场景适应性**：更贴近真实部署环境，因为在实际应用中往往难以获得高质量的 gloss 标注。

## 技术挑战
手语翻译不仅仅是视觉识别问题，更是一个 [[跨模态推理]] 问题。手语的语义往往由动作轨迹、空间位置和上下文关系共同决定，同一个手型在不同语境下可能表达完全不同的含义。简单的模态映射容易导致语义错误或“幻觉”。

## 解决方案
[[signthought]] 等先进模型通过引入 [[latent-chain-of-thought]] 和 [[plan-then-ground]] 机制，试图在 Gloss-Free 框架下解决跨模态推理的难题，通过显式的中间语义表示来提升翻译的准确性。