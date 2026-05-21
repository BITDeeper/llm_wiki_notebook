---
type: entity
title: MoDA
tags: [architecture, attention-mechanism, model]
related: [flash-depth-attention, 信息稀释, attention-sink, oLmo2]
created: 2026-04-19
updated: 2026-04-19
sources: ["大模型架构的下半场.md"]
---

# MoDA

MoDA (Mixture-of-depths Attention，混合深度注意力) 是由 [[华中科技大学王兴刚团队]] 提出的一种新型神经网络架构，旨在解决深层网络中的 [[信息稀释]] 问题。

## 核心机制
MoDA 将深度维度的注意力（层与层之间）和序列维度的注意力（Token 与 Token 之间）合并到一个统一的 Softmax 操作中。
- **统一检索**：每个注意力头同时关注当前层的序列 KV 对和所有前序层的深度 KV 对。
- **动态决策**：模型可以在一次操作中自由决定是关注序列中的其他 Token，还是跨层检索自身的历史信息。

## 技术优势
1. **解决通信瓶颈**：通过 [[Flash Depth Attention]] 提供的高效工程实现，MoDA 使得模型能够基于内容直接检索特定层的信息，而不是被动接收混合后的信号。
2. **缓解 Attention Sink**：实验表明，引入深度检索后，模型不再需要将概率质量堆积在少数固定 Token（如 BOS）上，[[Attention Sink]] 现象显著减弱。
3. **性能提升**：在主流开源基线 [[OLMo2]] 上的实验结果显示，MoDA 全面提升了模型能力。

## 设计哲学
MoDA 的设计基于对 [[范畴谬误]] 的修正：层间通信不应是简单的信号累加（`x + F(x)`），而应是基于内容匹配的检索。这标志着大模型架构从“扩展组件”转向“扩展通信”的范式转移。