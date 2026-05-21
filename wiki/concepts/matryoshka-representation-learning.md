---
type: concept
title: Matryoshka Representation Learning
tags: [optimization, embedding, mrl]
related: [gemini-embedding-2, 动态维度缩减]
created: 2026-03-11
updated: 2026-03-11
sources: ["让龙虾看懂屏幕！谷歌多模态新成果，文本图像视频音频进同一空间.md"]
---

# Matryoshka Representation Learning

Matryoshka Representation Learning (MRL) 是一种用于嵌入模型的优化技术，以其类似“俄罗斯套娃”的嵌套结构而得名。

## 核心原理
MRL 强制模型将最核心、最关键的语义特征压缩在向量的前几十维里，而将次要的细节特征放在后面的维度中。

这种结构使得生成的向量具有“自适应”能力：开发者可以根据算力预算或存储限制，自由截断向量的长度，而不会导致核心语义信息的严重丢失。

## 动态维度缩减
在 [[gemini-embedding-2]] 中，MRL 技术允许模型默认输出 3072 维的高精度向量，同时也支持将其缩减为 1536 维或 768 维。

- **高维度 (3072)**：保留最丰富的细节信息，适合对精度要求极高的任务。
- **中维度 (1536)**：平衡性能与成本，适合通用场景。
- **低维度 (768)**：极大降低存储和计算开销，适合大规模检索或边缘设备。

## 优势
- **灵活性**：同一个模型可以服务不同性能需求的应用。
- **成本控制**：开发者可以在不重新训练模型的情况下，动态调整系统的资源消耗。
- **兼容性**：通常能与现有的向量数据库（如 QDrant, ChromaDB）无缝配合。