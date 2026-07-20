---
type: concept
title: 线性注意力（Linear Attention）
created: 2026-06-12
updated: 2026-06-12
tags: [注意力机制, 线性复杂度, transformer]
related: [test-time-training, vit3, 状态空间模型, 滑动窗口注意力]
sources: ["rss/入围cvpr-2026最佳论文决选，vit³用「测试时训练」突破transformer复杂度瓶颈.md"]
---
# 线性注意力（Linear Attention）

线性注意力是一种将标准Softmax Attention的二次计算复杂度O(N²)降低到线性O(N)的技术方案。

## 原理

标准Attention计算为Softmax(QKᵀ)V，其中QKᵀ形成N×N矩阵，计算和显存成本随序列长度呈二次增长。

Linear Attention改变计算顺序，将Softmax(QKᵀ)V改写为Q(KᵀV)：先把K和V压缩成一个固定大小的状态，再让Q从中读取信息。由于KᵀV的大小与序列长度N无关，复杂度降至O(N)。

## 局限

上下文被压缩进一个相对简单的线性状态，压缩效率提高了，但表达能力不足，实际性能往往与标准Transformer存在差距。与[[test-time-training|TTT]]使用可训练内部网络进行非线性压缩相比，Linear Attention的固定线性状态扩展空间有限。

## 与其他方案的关系

在[[vit3|ViT³]]提出的统一视角中，Linear Attention对应一个固定大小的线性内部模型，是TTT框架的一个特例（内部模型为线性映射时的退化形式）。