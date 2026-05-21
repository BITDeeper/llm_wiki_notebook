---
type: entity
title: PointNet
tags: [algorithm, deep-learning, 3d-vision, point-cloud]
related: [su-hao, shapenet, pointnet]
created: 2026-04-17
updated: 2026-04-17
sources: ["imagenet作者苏昊回国任教复旦！李飞飞高徒，具身第一高引，出任通用物理ai院长.md"]
---

# PointNet / PointNet++

PointNet 是由 [[苏昊]] 团队于 2017 年提出的深度学习架构，是首个能够直接处理原始点云数据的神经网络模型。

## 技术突破

在 PointNet 出现之前，处理 3D 数据通常需要将其转换为体素或图像，这会导致信息丢失或计算量激增。PointNet 创新性地设计了一种对称函数，使得网络能够直接对无序的点云集合进行特征提取，实现了对 3D 几何形状的高效识别。

## 应用与影响

- **PointNet**：解决了点云数据的全局特征提取问题。
- **PointNet++**：进一步捕捉点云中的局部结构特征，提升了模型对复杂场景的泛化能力。

这两项工作已成为自动驾驶、机器人感知等领域的基础技术，使得 3D 视觉相关论文在顶会的占比从不足 10% 跃升至 70%。