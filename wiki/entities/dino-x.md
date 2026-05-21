---
type: entity
title: DINO-X
created: 2026-03-30
updated: 2026-03-30
tags: [模型, 目标检测, 工具]
related: [spatial-point-data, spatial-point]
sources: ["将深度信息作为vlm核心输入！视启未来×清华×idea帮机器人看懂物理世界.md"]
---

# DINO-X

[[dino-x]] 是一个目标检测模型。

## 在 SpatialPoint 中的应用

在 [[spatial-point]] 的数据引擎中，DINO-X 被用作自动化工具来生成“虚点”数据。它负责进行目标检测，结合深度图与相机内参，自动计算方向、间距、物体间关系等三维几何约束，从而构建出用于放置、导航等任务的训练数据。