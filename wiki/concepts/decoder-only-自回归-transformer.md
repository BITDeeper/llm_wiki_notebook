---
type: concept
title: Decoder-only 自回归 Transformer
tags: [deep-learning, architecture, nlp, cv]
related: [uni-1.1, 推理与生成统一]
created: 2026-05-06
updated: 2026-05-06
sources: ["香蕉和gpt-image之外的第3条路：华人15人团队造出ai生图黑马.md"]
---

# Decoder-only 自回归 Transformer

Decoder-only 自回归 Transformer 是一种深度学习模型架构，最初在 NLP 领域（如 GPT 系列）取得巨大成功，近年来也被应用于图像生成领域。

## 在图像生成中的应用
[[Luma AI]] 的 [[uni-1.1]] 模型采用了这种架构。其核心特点是将文本 token 和图像 token 视为同一种数据，放入同一个序列中进行自回归生成。

## 优势
- **统一性**：消除了传统模型中视觉编码器与语言模型分离带来的信息损耗。
- **推理能力**：由于架构与 GPT 等大语言模型类似，更容易在生成过程中引入逻辑推理能力，支持 [[推理与生成统一]]。
- **可控性**：通过在序列中显式地处理约束条件（如品牌色、空间关系），提高了生成结果的可控性。

## 对比
与传统的 Diffusion 模型或 Encoder-Decoder 架构相比，Decoder-only 架构更强调“理解”与“生成”在同一个思维链路中的协同。