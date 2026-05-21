---
type: concept
title: Image-to-Physics
created: 2026-05-07
updated: 2026-05-07
tags: [自动化, 数据生成, 仿真, 具身智能]
related: [gs-playground, bridge-gs, 具身智能数据困境, grounding-dino, sam, lama]
sources: ["万帧照片级仿真，打通视觉机器人学习的感知与物理鸿沟：国产仿真器gs-playground入选rss-2026.md"]
---

# Image-to-Physics

**Image-to-Physics** 是 [[gs-playground]] 提出的一套自动化资产生成流水线，旨在解决 [[具身智能数据困境]] 中仿真资产制作成本高昂的问题。

## 工作流程

该流水线仅需输入一张 RGB 图像，即可自动生成仿真就绪的数字孪生场景。具体步骤如下：
1.  **检测**：使用 [[grounding-dino]] 进行开放词汇目标检测。
2.  **分割**：使用 [[sam]]（Segment Anything Model）进行实例分割。
3.  **修复**：使用 [[lama]] 进行背景修复，去除被遮挡物体。
4.  **重建**：使用 [[anysplat]] 进行场景级 3DGS 重建，并结合 SAM-3D 生成物体级 Mesh。
5.  **对齐**：进行深度对齐、尺度校正和 Speedy-Splat 剪枝。

## 价值

- **效率**：单张图像端到端处理仅需约 5 分钟。
- **自动化**：无需人工建模或调试，极大降低了 Real2Sim 的门槛。
- **规模化**：基于此流程生成的 [[bridge-gs]] 数据集证明了其批量生产能力，为视觉强化学习提供了海量数据支持。