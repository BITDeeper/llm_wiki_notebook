---
type: entity
title: RoboAfford
created: 2026-03-30
updated: 2026-03-30
tags: [数据集, 基准, 机器人]
related: [spatial-point-data, spatial-point]
sources: ["将深度信息作为vlm核心输入！视启未来×清华×idea帮机器人看懂物理世界.md"]
---

# RoboAfford

[[roboafford]] 是一个用于机器人操作的数据集或基准，主要提供 2D 交互标注。

## 在 SpatialPoint 中的应用

在构建 [[spatial-point-data]] 数据集时，RoboAfford 的 2D 交互标注被用作“实点”数据的来源。通过结合深度图，这些 2D 标注被转化为具有度量信息的 3D 坐标，用于训练模型预测物体表面的可交互点（如抓取点）。