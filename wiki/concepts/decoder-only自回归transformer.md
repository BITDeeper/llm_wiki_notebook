---
type: concept
title: Decoder-only自回归Transformer
created: 2026-03-06
updated: 2026-03-06
tags: [architecture, transformer, multimodal]
related: [uni-1, 原生理解生成统一]
sources: ["黑马图像模型被nano-banana技术负责人点赞！15人华人小队，ddim之父&cvpr最佳论文作者带队.md"]
---
# Decoder-only自回归Transformer

Decoder-only自回归Transformer 是一种深度学习架构，它仅使用 Transformer 的解码器部分，并采用自回归的方式进行生成。这种架构最初在大语言模型（如 GPT 系列）中取得巨大成功，随后被引入多模态领域。

## 在多模态模型中的应用
[[Luma AI]] 的 [[uni-1]] 模型采用了这种架构来处理图像理解和生成任务。其核心特点是将文本和图像表示在同一个交错序列中——既是输入，也是输出。

## 优势
- **统一性**：不需要分别训练“理解模块”和“生成模块”，可以在一个统一框架内同时建模时间、空间和逻辑。
- **推理能力**：支持模型在生成输出前进行结构化的内部推理（如分解指令、规划构图），即“先想后画”。
- **生成提升理解**：实践表明，这种架构下的生成训练能显著提升模型的理解能力。

## 对比
与传统的扩散模型或混合架构相比，Decoder-only 架构在处理需要复杂逻辑推理和跨模态对齐的任务时展现出了独特的优势。