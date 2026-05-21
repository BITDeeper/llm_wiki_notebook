---
type: entity
title: Vision Transformer (ViT)
created: 2026-03-05
updated: 2026-03-05
tags: [model-architecture, deep-learning, computer-vision]
related: [vulcan, 结构化剪枝, 类中心神经元坍缩, 截断核范数正则化]
sources: ["模型砍掉一大半，准确率反升15%！华科&阿里安全新研究实现vit近乎无损的类特定压缩｜iclr'26.md"]
---

# Vision Transformer (ViT)

**Vision Transformer (ViT)** 是一种基于 Transformer 架构的视觉模型，它将自然语言处理中的自注意力机制引入计算机视觉领域。ViT 通过将图像分割成一系列 Patch 并将其视为 Token 序列，成功在图像分类、目标检测和实例分割等任务中取得了优异性能。

## 内部结构特性

根据 [[Vulcan]] 相关研究的分析，ViT 的不同模块承载了不同类型的知识：

-   **FFN (前馈网络)**：主要承载 **类特定知识**。深层神经元往往聚焦于高层语义概念，特定类别的激活模式在此模块中高度集中。
-   **MHA (多头注意力)**：主要承载 **类无关通用表征**。其权重矩阵具有天然的低秩特性，适合进行矩阵分解压缩。

## 部署挑战

随着模型规模的扩大，ViT 的参数量和计算开销急剧增加，导致其难以直接部署在资源受限的边缘设备（如 [[Jetson Orin NX]]）上。因此，[[结构化剪枝]] 和 [[类特定模型派生]] 成为了 ViT 落地的重要研究方向。