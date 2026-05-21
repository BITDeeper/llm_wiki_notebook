---
type: concept
title: Token 维度压缩
tags: [optimization, attention-mechanism, deepseek]
related: [dsa, deepseek-v4, 百万上下文标配]
created: 2026-04-24
updated: 2026-04-24
sources: ["deepseek-v4终于发布！打破最强闭源垄断，明确携手华为芯片.md"]
---

# Token 维度压缩

Token 维度压缩是一种针对大模型注意力机制的优化技术，旨在通过在 token 维度上进行数据压缩，来降低模型推理时的计算量和显存占用。

## 原理
传统的注意力机制计算复杂度通常与上下文长度的平方成正比。Token 维度压缩通过改变计算方式，在保留关键信息的同时减少需要处理的 token 数量或其特征维度，从而实现线性或更低复杂度的增长。

## 应用
该技术是 [[DeepSeek V4]] 实现 [[百万上下文标配]] 的关键之一。它与 [[DSA]]（稀疏注意力）配合使用，使得模型在处理 1M token 长上下文时，无需成倍增加 GPU 资源。

## 价值
这一技术突破打破了“长上下文=高成本”的传统铁律，为长文本应用的普及奠定了工程基础。