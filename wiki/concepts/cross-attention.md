---
type: concept
title: Cross-Attention
tags: [architecture, mechanism]
related: [moss-vl]
created: 2026-04-13
updated: 2026-04-13
sources: ["准确回答视频细节！11b模型挑战视频理解「证据级」任务，开源可商用.md"]
---

# Cross-Attention

[[cross-attention]]（交叉注意力机制）是 [[moss-vl]] 模型用于优化视频处理效率的关键技术。

## 原理
不同于将所有视觉 token 全部压入语言模型的传统做法，Cross-Attention 允许模型按需提取视觉信息。

## 优势
这种机制使得长视频处理不再被海量的视觉 token 数量拖垮，从而在保证理解能力的同时提升了计算效率。