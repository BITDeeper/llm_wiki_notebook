---
type: concept
title: Tokenizer 指纹
tags: [nlp, model-identification, technical-evidence]
related: [kimi-k2-5, composer-2, yue-zhi-an-mian]
created: 2026-03-21
updated: 2026-03-21
sources: ["cursor套壳kimi败露，最强「自研」模型被锤！创始人：忘记署名了.md"]
---

# Tokenizer 指纹

Tokenizer 指纹是指大语言模型中分词器（Tokenizer）的特定特征模式。由于不同模型通常使用不同的训练语料库和分词算法，其 Tokenizer 往往具有独特的“指纹”。

## 技术溯源作用
在 [[cursor]] 套壳 [[kimi-k2-5]] 的事件中，Tokenizer 指纹成为了关键的技术证据。[[月之暗面]] 预训练负责人 [[杜羽伦]] 通过分析发现，Cursor 声称“自研”的 [[composer-2]] 模型与 Kimi K2.5 的 Tokenizer 完全一致。这一发现直接实锤了 Composer 2 是基于 Kimi 架构进行微调的，而非独立训练。

## 应用场景
- **版权验证**：用于检测模型是否基于特定开源模型修改。
- **架构识别**：在模型黑盒情况下，通过输出特征推断其基础架构。
- **合规审计**：验证企业是否遵守了开源协议的署名要求。

## 局限性
虽然 Tokenizer 指纹可以证明模型的基础架构来源，但无法直接揭示模型经过了何种程度的微调或后训练。因此，在争议中，它常被用作证明“套壳”存在的起点，而非终点。