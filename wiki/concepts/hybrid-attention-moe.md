---
type: concept
title: "Hybrid-Attention MoE"
tags: [architecture, moe, optimization]
related: [thinker-talker-架构, qwen3-5-omni]
created: 2026-03-31
updated: 2026-03-31
sources: ["实测拿215项sota的qwen3.5-omni：摄像头一开，ai给我现场讲论文、撸代码.md"]
---

# Hybrid-Attention MoE

Hybrid-Attention MoE（混合注意力机制的混合专家模型）是一种结合了混合注意力机制和混合专家模型的架构设计。

## 应用场景

在 [[qwen3-5-omni]] 的 [[thinker-talker-架构]] 中，Thinker（大脑）和 Talker（嘴巴）两个模块均采用了 Hybrid-Attention MoE。

## 作用

- **效率提升**：通过 MoE 机制，模型可以在处理不同任务时激活不同的专家网络，从而在不显著增加计算量的前提下提升模型容量。
- **性能优化**：混合注意力机制有助于更好地处理多模态输入（文本、音频、视觉）之间的复杂关联。

该技术的应用使得 Qwen3.5-Omni 在保持高性能（215项 SOTA）的同时，能够实现低延迟的流式实时交互。