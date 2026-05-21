---
type: concept
title: 细节层次技术
tags: [graphics, optimization, rendering, lod]
related: [spark-2.0, 3d-gaussian-splatting]
created: 2026-04-15
updated: 2026-04-15
sources: ["刚刚，李飞飞世界模型新成果发布.md"]
---

# 细节层次技术

[[细节层次技术]] (Level-of-Detail, LoD) 是计算机图形学中用于优化大规模 3D 场景渲染性能的经典技术。

## 原理

其核心思想是根据物体与观察者（相机）的距离，自动调整渲染的细节程度。当物体距离较远时，降低细节等级以提升帧率；当物体距离较近或用户静止观察时，提高细节等级以呈现更精细的画面。

## 在 Spark 2.0 中的应用

[[Spark 2.0]] 采用了连续型 LoD 方案，为所有 splats 构建了一个层级化的 **LoD Gaussian splat tree**。引擎会沿着该树的边界，精准筛选出最适合当前视口的 splats 子集，从而实现平滑无断层的细节过渡，避免了传统离散型 LoD 方案中的“跳变”伪影。

Spark 2.0 内置了两种生成算法：
-   **Tiny-LoD**：快速轻量，适合网页端实时生成。
-   **Bhatt-LoD**：高精度，适合离线处理。