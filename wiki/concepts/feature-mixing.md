---
type: concept
title: 特征混合
tags: [3d-vision, problem]
related: [progressive-temperature-decay, legoocc]
created: 2026-05-05
updated: 2026-05-05
sources: ["cvpr-2026-oral｜横扫室内3d场景，港科大（广州）打造单目开放词汇占据预测新sota.md"]
---

# 特征混合

[[特征混合]]（Feature Mixing）是指在 3D 高斯泼溅（Gaussian Splatting）渲染到 2D 图像的过程中，沿光线的多个高斯特征因 Alpha 混合而融合的现象。

## 影响

虽然特征混合有利于渲染出视觉平滑的图像，但在开放词汇语义学习中，它会导致监督信号模糊。具体来说，模型倾向于优化“混合后的特征”与语言的对齐，而不是每个 3D 高斯本身的对齐，从而降低了语义判别的准确性。

## 解决

[[LegoOcc]] 通过[[渐进温度衰减]]策略，在训练后期使不透明度分布变得尖锐，从而减少沿光线的特征混合，确保语义信号能精准作用于单个 3D 高斯。