---
type: concept
title: 位置偏置
tags: [model-behavior, attention-mechanism, bias]
related: [attention-debiasing, attention-sink]
created: 2026-01-30
updated: 2026-01-30
sources: ["vlm剪枝新sota：无需重训练，注意力去偏置超越6大主流方案.md"]
---

# 位置偏置

位置偏置（Positional Bias），在 VLM 剪枝的语境下特指“近因偏置”，是指模型倾向于给予序列中特定位置（通常是末尾）的 token 更高的注意力权重，而不管这些 token 的实际语义内容如何。

## 表现形式
在视觉-语言模型中，这通常表现为模型对图像下方区域给予过高的关注。这是因为视觉 token 在序列中往往按空间顺序排列，下方的 token 位于序列末尾，从而获得了结构性的注意力优势。

## 影响
位置偏置会误导基于注意力的剪枝算法（如 [[FastV]]），导致模型在剪枝后保留了图像底部不重要的背景信息，而丢弃了位于图像中上部的前景关键物体。

## 对策
[[注意力去偏]]技术通过拟合并去除这种随位置变化的趋势，还原了注意力对真实语义内容的指向性。