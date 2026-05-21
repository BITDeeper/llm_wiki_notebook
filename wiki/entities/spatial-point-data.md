---
type: entity
title: SpatialPoint-Data
created: 2026-03-30
updated: 2026-03-30
tags: [数据集, rgb-d, 具身智能]
related: [spatial-point, roboafford, dino-x]
sources: ["将深度信息作为vlm核心输入！视启未来×清华×idea帮机器人看懂物理世界.md"]
---

# SpatialPoint-Data

[[spatial-point-data]] 是为了训练和评估 [[spatial-point]] 模型而构建的大规模 RGB-D 问答对数据集。

## 数据规模

该数据集总共包含 **260 万组** RGB-D 问答对，覆盖了具身智能中的两类核心任务。

## 数据构成

1.  **实点数据**（190 万组）：
    *   来源：基于 [[roboafford]] 数据集的 2D 交互标注。
    *   生成方式：结合深度图将 2D 标注提升为 3D 坐标。
2.  **虚点数据**（72 万组）：
    *   生成方式：利用 [[dino-x]] 目标检测模型，结合深度图与相机内参，自动计算方向、间距及物体间关系等三维几何约束。

## 价值

海量且多样化的数据使得 SpatialPoint 模型具备了极强的跨场景泛化能力，能够精准处理复杂的空间定位任务。