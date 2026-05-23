---
type: event
title: VGGT-Ω 发布
created: 2026-05-17
updated: 2026-05-17
tags: [3d重建, 模型发布, cvpr-2026, 计算机视觉]
related: [vggt-omega, 牛津大学视觉几何组, meta-ai, 前馈3d重建, scaling-law]
origin_date: 2026-05-17
participants: [牛津大学视觉几何组, meta-ai]
causes: []
effects: []
significance: high
sources: ["cvpr-2026-oral-牛津-&-meta-ai-推出-vggt-ω：前馈-3d-重建迈入-10b-参数时代，动态场景精度升-77%.md"]
---
# VGGT-Ω 发布

2026年5月，牛津大学视觉几何组（VGG）与 Meta AI 联合发布前馈3D重建大模型 VGGT-Ω，论文被 CVPR 2026 接收为 Oral presentation。

## 事件概述

VGGT-Ω 是前代 VGGT 模型的100亿参数规模化版本，标志着 [[前馈3d重建]] 从中小模型向大模型演进的关键节点。该模型在 Sintel 基准测试中将相机姿态估计精度提升77%，验证了 [[scaling-law|Scaling Law]] 在3D重建领域同样成立。

## 核心贡献

1. **验证3D重建的Scaling Law**：模型从2亿参数扩展到100亿，性能提升曲线接近完美线性。
2. **架构创新**：引入 [[寄存器注意力]] 降低70%训练显存，使用 [[像素打乱上采样]] 替代传统DPT头。
3. **数据工程突破**：构建400万训练序列的数据集，规模是前作的15倍以上。
4. **涌现能力发现**：模型自发产生 [[涌现运动感知]]，寄存器特征具有语义通用性。

## 影响

- 为具身智能和世界模型提供了强大的几何底座。
- 证明了规模化方法论在3D视觉领域的有效性，与NLP和2D视觉领域的趋势形成呼应。
- 代码和模型开源发布（github.com/facebookresearch/vggt-omega）。

## 资源

- 论文：arXiv: 2605.15195
- 项目主页：https://vggt-omega.github.io