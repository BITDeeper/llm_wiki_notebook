---
type: entity
title: DSA
tags: [architecture, attention-mechanism, deepseek, optimization]
related: [deepseek-v4, 百万上下文标配, token-维度压缩]
created: 2026-04-24
updated: 2026-04-24
sources: ["deepseek-v4终于发布！打破最强闭源垄断，明确携手华为芯片.md"]
---

# DSA

DSA (DeepSeek Sparse Attention) 是 DeepSeek 提出的一种稀疏注意力机制，旨在降低长上下文处理的计算和显存成本。

## 技术演进
DSA 最早在 [[DeepSeek V3.2-Exp]] 版本中引入，当时外界关注度不高，被视为一次过渡更新。然而，随着 [[DeepSeek V4]] 的发布，DSA 被证实是实现百万上下文标配的基石技术之一。

## 工作原理
DSA 通过稀疏化注意力计算，减少不必要的计算量。在 V4 中，DSA 与全新的“[[token-维度压缩]]”技术结合，使得模型在处理 1M 上下文时，对计算资源的需求大幅降低，从而将长上下文从“高端功能”转变为“标配”。

## 意义
DSA 的成功应用证明了通过架构创新（而非单纯堆砌算力）来突破大模型性能瓶颈的可行性。