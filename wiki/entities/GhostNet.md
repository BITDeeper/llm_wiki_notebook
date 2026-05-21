---
type: entity
title: GhostNet
tags: [model, architecture, cvpr-2020, efficient-ai]
related: [王云鹤, 华为诺亚方舟实验室, 高效-ai-算法, 模型压缩]
created: 2026-03-28
updated: 2026-03-28
sources: ["深度｜华为-ai，迎来大变.md"]
---

# GhostNet

GhostNet 是一种轻量级神经网络架构，于 2020 年被 CVPR 接收。[[王云鹤]] 是该论文的主要参与者之一。

## 核心思想
GhostNet 的核心创新在于提出了“幽灵模块”。传统卷积层会产生大量冗余的特征图，GhostNet 通过廉价的线性运算生成更多的“幽灵”特征图，从而在不显著增加计算成本的情况下丰富特征信息。

## 性能表现
- 在同等精度下，GhostNet 的速度和计算量均少于当时的 SOTA（State-of-the-Art）轻量级模型。
- 被广泛应用于端侧 AI 场景，如手机、嵌入式设备等。

## 影响
GhostNet 是 [[高效-ai-算法]] 领域的标志性工作之一，确立了华为诺亚方舟实验室在模型压缩与端侧 AI 领域的学术地位。