---
type: concept
title: PBR (基于物理的渲染)
created: 2026-06-06
updated: 2026-06-06
tags: [rendering, materials, 3d-assets]
related: [trellis-2, o-voxel, 原生3d表征]
sources: ["cvpr-2026-最佳学生论文奖！微软&清华等提出trellis.2：原生3d大模型新标杆，17秒生成超高精度pbr资产.md"]
---
# PBR (基于物理的渲染)

**PBR（Physically-Based Rendering，基于物理的渲染）** 是一种基于物理规律的材质渲染模型。

## 参数构成

PBR 通常包含以下核心材质参数：
- 基础颜色（Base Color）
- 金属度（Metallic）
- 粗糙度（Roughness）
- 不透明度（Opacity）

## 在 3D 生成中的应用

传统 3D 生成模型往往将“形状”与“外观”割裂，生成无纹理形状后再进行多视角图像烘焙。[[trellis-2|TRELLIS.2]] 通过 [[o-voxel]] 将 PBR 材质与几何原生绑定，实现了在原生 3D 空间中一步到位生成带物理材质的高精度资产，避免了纹理漂移和接缝伪影。