---
type: concept
title: SLAT
tags: [3d-representation, latent-space, structured-latents]
related: [trellis, morphany3d]
created: 2026-03-17
updated: 2026-03-17
sources: ["大象秒变挖掘机！三维变形新突破，无需额外训练-cvpr'26.md"]
---

# SLAT

**SLAT**（Structured Latents，结构化隐变量）是由 [[trellis]] 模型引入的一种三维资产编码表示方式。

## 特点
*   **结构化**：与传统的非结构化隐变量不同，SLAT 保留了三维物体的空间结构信息，使得模型能够更好地理解和生成几何形状。
*   **统一性**：为三维资产的生成与编辑提供了统一的特征空间，便于在推理过程中进行操作和干预。

## 在 MorphAny3D 中的应用
[[morphany3d]] 正是利用了 SLAT 的特性，通过在 SLAT 空间内巧妙设计注意力机制（如 [[变形交叉注意力]]），实现了无需训练的跨类别三维变形。SLAT 的结构化特性使得模型能够隐式地建立 2D 条件与 3D 隐特征之间的语义对应关系。