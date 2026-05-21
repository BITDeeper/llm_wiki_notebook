---
type: concept
title: 视频稀疏注意力 (VSA)
tags: [optimization, attention, efficiency]
related: [skyreels-v4, 双流-mmdit-架构]
created: 2026-02-27
updated: 2026-02-27
sources: ["杀进全球榜top2！国产视频模型黑马刚刚出现了.md"]
---

# 视频稀疏注意力 (VSA)

视频稀疏注意力 (Video Sparse Attention, 简称 VSA) 是一种针对长序列视频数据优化的注意力计算机制。

## 作用
在视频生成任务中，随着分辨率和时长的增加，计算量会呈指数级增长。VSA 机制通过稀疏化计算，将长序列注意力计算量压缩至原来的约 1/3。

## 效果
这种优化使得模型在保证高画质（如 1080p/32fps）的同时，显著提升了推理效率，降低了生成延迟和算力成本。它是 [[skyreels-v4]] 能够实现高效生成的重要工程支撑之一。