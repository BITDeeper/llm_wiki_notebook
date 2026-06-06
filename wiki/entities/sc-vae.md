---
type: entity
title: SC-VAE (Sparse Compression VAE)
created: 2026-06-06
updated: 2026-06-06
origin_date: 2025-12-18
tags: [vae, compression, sparse-convolution, 3d]
related: [trellis-2, flexgemm, 原生3d表征]
sources: ["cvpr-2026-最佳学生论文奖！微软&清华等提出trellis.2：原生3d大模型新标杆，17秒生成超高精度pbr资产.md"]
---
# SC-VAE (Sparse Compression VAE)

**SC-VAE**（Sparse Compression Variational Autoencoder，稀疏压缩变分自编码器）是 [[trellis-2|TRELLIS.2]] 的核心压缩组件，专为稀疏 3D 数据设计。

## 技术突破

SC-VAE 实现了前所未有的 **16 倍空间下采样率**，同时保持了极高的几何保真度。它将高分辨率的完整 PBR 资产压缩为仅约 9.6K 个隐空间 Token，为后续的大模型生成奠定了基础。

## 核心设计

1. **稀疏残差自编码层**：通过非参数化的空间-通道重排，将细粒度的空间几何信息暂时寄存在通道维度中，建立了一条信息绿道，缓解高倍率压缩时的信息丢失。
2. **早期剪枝上采样**：在上采样前预测二值掩码，提前判断哪些子节点是激活的，跳过对空白区域的计算，节省显存和推理时间。
3. **优化残差块**：采用 ConvNeXt 风格的简化设计，结合宽通道的 pointwise MLP，在不增加计算负担的前提下增强非线性表达能力。