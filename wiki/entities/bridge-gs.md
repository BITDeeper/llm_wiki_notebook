---
type: entity
title: Bridge-GS
created: 2026-05-07
updated: 2026-05-07
tags: [数据集, 3dgs, 仿真, 具身智能]
related: [gs-playground, 3dgs-3d高斯泼溅, image-to-physics]
sources: ["万帧照片级仿真，打通视觉机器人学习的感知与物理鸿沟：国产仿真器gs-playground入选rss-2026.md"]
---

# Bridge-GS

[[bridge-gs]] 是基于 Bridge-v2 数据集扩展的大规模仿真数据集，由 [[gs-playground]] 团队构建。它是 GS-Playground 仿真器实现自动化 Real2Sim 流程的关键数据支撑。

## 数据集内容

Bridge-GS 为原始场景补充了现代仿真所需的视觉与物理信息，主要包括：
- **3DGS 表示**：场景与物体的 3D 高斯泼溅表示，用于高效渲染。
- **物体 Mesh**：用于物理碰撞检测的几何网格。
- **6D 位姿**：物体在场景中的精确位置和姿态。
- **相机参数**：仿真相机的内参与外参。

## 生成流程

该数据集是通过 [[gs-playground]] 内置的 **Image-to-Physics** 自动化流水线生成的。流程包括：
1.  使用 [[grounding-dino]] 进行开放词汇检测。
2.  使用 [[sam]] 进行实例分割。
3.  使用 [[lama]] 进行背景修复。
4.  使用 [[anysplat]] 进行场景级 3DGS 重建。
5.  最终进行深度对齐、尺度校正和剪枝优化。

## 意义

Bridge-GS 验证了从单张图像快速生成仿真就绪资产的可行性，解决了 [[具身智能数据困境]] 中资产制作人工依赖度高的问题，为大规模视觉强化学习提供了数据基础。