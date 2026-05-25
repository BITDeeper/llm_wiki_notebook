---
type: concept
title: Amodal 推理
created: 2026-05-24
updated: 2026-05-24
tags: [计算机视觉, 遮挡处理, 实例分割]
related: [sa-z-dataset, occlusionformer, z-order-遮挡]
sources: ["icml-2026：复旦大学新作，如何让布局条件模型生成出更精准的物体遮挡？.md"]
---
# Amodal 推理

Amodal 推理（完整掩码/边界框推理）是指推断被遮挡物体不可见部分的完整形状的能力。与仅标注可见区域的普通分割不同，amodal 标注包含了物体被遮挡部分的完整轮廓估计。

## 在 SA-Z 数据集中的应用

[[sa-z-dataset|SA-Z 数据集]] 的核心创新之一是通过以下流程推导 amodal 标注：

1. 使用 **SAM-3D** 将 2D 实例提升至 3D 空间
2. 通过 3D 几何重建获取物体的完整三维形状
3. 通过重投影将 3D 形状投影回 2D 平面
4. 得到包含被遮挡部分的完整（amodal）掩码与边界框

## 意义

Amodal 标注为 [[occlusionformer|OcclusionFormer]] 的 [[查询对齐损失]] 提供了关键训练信号，使模型能够理解物体间的完整空间关系，而不仅仅是可见部分的位置信息。这是实现准确 [[z-order-遮挡|Z 轴遮挡]] 建模的基础。