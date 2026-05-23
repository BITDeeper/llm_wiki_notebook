---
type: concept
title: 3D高斯溅射
tags: [graphics, rendering, 3d-reconstruction, splats, 三维视觉, 图形学, 场景表示, 高斯]
related: [spark-2.0, lod, rad-format, gaussianpile, 切片式容积成像, ai-for-science]
created: 2026-04-15
updated: 2026-05-22
sources: ["刚刚，李飞飞世界模型新成果发布.md", "cvpr-2026-让3dgs看见内部结构，中关村学院gaussianpile实现切片式容积影像快速重建.md"]
---

# 3D高斯溅射 (3D Gaussian Splatting)

[[3D高斯溅射]] (3D Gaussian Splatting, 3DGS) 是一种新兴的 3D 场景表达与渲染技术。与传统的基于三角形网格的建模方法不同，它使用数百万个半透明的、可优化的各向异性 3D 高斯椭球体（称为 splats）来表示场景。相比传统体素或神经辐射场（NeRF），它既能保留连续空间结构，又能实现高速渲染。

## 核心原理

每一个 splat 由位置、XYZ 三轴缩放（尺度）、旋转角度、颜色（通过球谐系数建模视角相关颜色）和不透明度等参数定义。

渲染时，通常采用画家算法（alpha blending），按照从远到近的顺序将这些椭球体叠加融合，从而呈现出超写实的细节效果。这类似于数字版的"点彩画"。通过可微渲染将高斯投影到二维图像平面进行优化。

## 优势

-   **高保真度**：能够精细地捕捉和呈现场景的细节，特别是对于复杂的反射和半透明物体。
-   **实时渲染**：相比传统的神经辐射场，其渲染速度更快，更适合实时交互应用。

## 局限性

标准 3DGS 主要面向自然场景的表面渲染，存在以下局限：

1.  **假设 all-in-focus 相机**：不显式考虑沿切片方向的点扩散和焦深效应。
2.  **面向表面而非体积**：球谐系数用于建模视角相关的颜色，适合自然图像但不适合体积密度表示。
3.  **Alpha blending 不适用于体积信号**：自然场景的遮挡模型与医学成像中的信号积分模型物理含义不同。

## 应用

该技术是 [[Spark 2.0]] 引擎的核心处理对象，被广泛应用于 [[World Labs]] 的空间智能研究中，用于大规模 3D 场景的重建与 Web 端展示。

## 扩展方向

[[gaussianpile|GaussianPile]] 是 3DGS 向医学/科学成像领域扩展的重要工作，通过引入 focus-aware physical model 和 additive rasterization，解决了标准 3DGS 在[[切片式容积成像]]中的适用性问题。