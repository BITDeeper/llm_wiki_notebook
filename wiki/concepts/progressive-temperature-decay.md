---
type: concept
title: 渐进温度衰减
tags: [training-strategy, optimization]
related: [legoocc, feature-mixing]
created: 2026-05-05
updated: 2026-05-05
sources: ["cvpr-2026-oral｜横扫室内3d场景，港科大（广州）打造单目开放词汇占据预测新sota.md"]
---

# 渐进温度衰减

[[渐进温度衰减]]（Progressive Temperature Decay）是 [[LegoOcc]] 在训练语义学习部分时采用的一种策略，旨在减少沿光线的[[特征混合]]。

## 原理

在 3D 渲染到 2D 的过程中，$\alpha$ 混合会导致每个像素特征成为沿光线多个高斯嵌入的加权混合，这会模糊语义监督信号。LegoOcc 使用带温度的 Sigmoid 函数控制不透明度，并在训练中把温度从较高逐步退火到低。

## 效果

-   **早期（高温）**：不透明度分布平滑，有利于梯度的反向传播，保证训练稳定性。
-   **后期（低温）**：不透明度分布变尖锐，减少了特征混合，使语言监督信号能更精准地作用于单个 3D 高斯，提升了语义判别能力。

这种策略在保留连续梯度的同时，有效缓解了特征混合问题。