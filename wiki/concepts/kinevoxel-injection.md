---
type: concept
title: KineVoxel Injection (KVI)
created: 2026-06-09
updated: 2026-06-09
tags: [3d生成, 运动学, diffusion, 技术机制]
related: [physforge, physics-grounded-3d-asset-generation]
sources: ["rss/icml-2026-physforge框架来了，让3d资产从静态模型变成可交互对象.md"]
---
# KineVoxel Injection (KVI)

KineVoxel Injection（KVI）是 [[physforge|PhysForge]] 框架中提出的技术机制，用于实现几何与运动学参数的联合生成。

## 核心思想

KVI 将每个可动部件的运动学参数——关节原点（joint origin）、关节轴（joint axis）和运动限制（joint limits）——编码为 kinematic voxel，并与几何 voxel 一起进入统一的 diffusion denoising 过程。

## 解决的问题

在 PhysForge 的两阶段架构中，VLM 擅长进行结构和语义规划，但关节轴方向、关节原点、运动范围等连续 3D 参数需要更精细的生成机制。KVI 的设计使得模型可以在同一个生成过程中协同学习：
- **"部件长什么样"**（几何信息）
- **"部件应该怎么动"**（运动学信息）

## 技术意义

KVI 实现了几何生成与运动学生成的统一化处理，避免了传统方法中先建几何再手动绑定运动学参数的分步流程，是 [[physics-grounded-3d-asset-generation|Physics-Grounded 3D Asset Generation]] 范式的关键技术支撑。

## 局限性

VLM 规划阶段的离散语义判断与 Diffusion 阶段的连续参数生成之间存在信息传递的精度损失风险，KVI 是缓解方案但非完美解决。