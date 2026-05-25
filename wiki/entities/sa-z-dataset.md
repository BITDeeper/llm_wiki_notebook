---
type: entity
title: SA-Z 数据集
created: 2026-05-24
updated: 2026-05-24
tags: [数据集, 计算机视觉, 遮挡标注, 3D感知]
related: [occlusionformer, fudan-cvl, z-order-遮挡, amodal-推理]
sources: ["icml-2026：复旦大学新作，如何让布局条件模型生成出更精准的物体遮挡？.md"]
origin_date: 2026-05-24
---
# SA-Z 数据集

SA-Z 是由 [[fudan-cvl|复旦大学 FudanCVL 团队]] 构建的首个具备丰富几何约束的遮挡感知数据集，为 [[occlusionformer|OcclusionFormer]] 模型的训练提供数据支撑。

## 规模与统计

- **图像数量**：约 100 万张高分辨率图像
- **实例数量**：约 570 万个实例
- **评测基准**：SA-Z Eval，包含 1000 张精选高难度真实场景图像

## 构建流程

SA-Z 基于 SACap-1M 数据集构建，采用三步流水线：

1. **DescribeAnything**：为图像生成基于掩码的像素级精准描述，有效剔除 VLM 依赖边界框标注时因混入背景及相邻实例而引入的视觉噪声干扰
2. **InstaOrder**：明确实例间的成对 [[z-order-遮挡|Z-order]] 遮挡关系
3. **SAM-3D**：将 2D 实例提升至 3D 空间，通过 3D 几何重建和重投影，推导出被遮挡物体的完整（[[amodal-推理|amodal]]）掩码与边界框

## 与现有数据集的对比

| 数据集 | 局限性 |
|--------|--------|
| LayoutSAM / SACap-1M | 局限于 2D 平面，忽略 Z 轴遮挡和 amodal 信息 |
| COCOA / InstaOrder | 受限于低分辨率和封闭词汇表，无法满足开放词汇生成需求 |

SA-Z 首次同时提供高分辨率、开放词汇、Z-order 标注和 amodal 标注，填补了布局生成领域遮挡感知数据的空白。