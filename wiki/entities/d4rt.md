---
type: entity
title: D4RT
tags: [google-deepmind, model, 4d-reconstruction, tracking]
related: [google-deepmind, 4d-reconstruction, spatio-temporal-query, spatialtrackerv2, project-astra]
created: 2026-01-23
updated: 2026-01-23
sources: ["谷歌4d世界模型来了，比sota快300倍！.md"]
---

# D4RT

**D4RT** (Dynamic 4D Reconstruction and Tracking) 是由 [[google-deepmind]] 开发的统一动态 4D 重建与追踪系统。它通过引入 [[spatio-temporal-query]] 机制，在单一架构内同时实现了全像素追踪、深度估计与相机位姿估计。

## 核心特性

### 统一架构
D4RT 摒弃了传统 4D 重建中“拼装派”（串联深度、光流、位姿模型）和“多头派”（挂载多个解码头）的复杂范式。它使用单一的查询接口，将几何问题转化为大规模并行搜索问题。

### 性能表现
- **吞吐量**：在 24 FPS 下可处理 1570 条轨迹，是 [[spatialtrackerv2]] (84条) 的约 18 倍，DELTA 模型的 314 倍。
- **速度**：处理一分钟视频仅需 5 秒钟（特定维度）。
- **精度**：在处理高动态场景（如游动的天鹅、绽放的花朵）时，消除了传统算法的“重影”问题。

### 技术实现
- **全局场景表征**：使用 Transformer 编码器（ViT-g，10亿参数）将视频压缩为全局特征 F，作为“长期记忆”。
- **时空查询**：通过查询特定坐标 $(x, y)$ 和时间 $t$ 来获取 3D 信息，支持任意视角和时间的检视。
- **9x9 Patch**：查询时包含像素点周围 9x9 的图像块，以增强纹理区分能力，提升重建锐度。

## 应用场景
- **具身智能**：为机器人提供实时、密集的动态环境感知，预判物体轨迹。
- **自动驾驶**：提升对行人、车辆等动态物体的像素级轨迹预测能力。
- **增强现实**：作为 [[project-astra]] 的技术基石，支持低延迟的实时 AR 交互。

## 局限性
- **训练成本**：需在 64 个 TPU 上训练两天，门槛极高，不适合普通开发者复现。
- **推理资源**：虽然推理极快，但庞大的编码器架构对移动端部署提出了挑战。