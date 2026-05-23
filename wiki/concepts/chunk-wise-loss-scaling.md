---
type: concept
title: Chunk-wise Loss Scaling（分块损失缩放）
created: 2026-05-22
updated: 2026-05-22
tags: [训练技巧, 视频生成, 自回归模型, 损失函数]
related: [raven, 自回归视频扩散模型]
sources: ["raven-改写-self-forcing-训练范式，在质量与语义表现更优的同时将动态指标提升-16.5%，cm-grpo-首次原生支持一致性模型对齐.md"]
---
# Chunk-wise Loss Scaling（分块损失缩放）

**Chunk-wise Loss Scaling**（分块损失缩放）是 [[raven|RAVEN]] 框架中引入的辅助训练技术，根据 chunk 在序列中的位置分配不同训练权重。

## 核心思想

在 [[自回归视频扩散模型]] 中，越靠后的 chunk 条件在更长历史上，也更容易承受误差传播的影响。因此训练时需要对不同位置的 chunk 分配不同权重，后段 chunk 获得更高权重。

## 实验验证

消融实验显示，后段侧重的 chunk 权重优于均匀权重和早段侧重权重，带来约 1.3 分的 Total Score 提升。