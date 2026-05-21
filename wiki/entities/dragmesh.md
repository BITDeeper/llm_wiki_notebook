---
type: entity
title: DragMesh
tags: [3d-interaction, graphics, ai, physics, pk]
related: [北京大学, kpp-net, dq-vae, 语义-几何解耦, 双四元数, 交互-保真度鸿沟, gpt-4o, gapartnet]
created: 2026-01-04
updated: 2026-01-04
sources: ["比sota提速10倍！北大dragmesh重塑3d交互，物理零失真.md"]
---

# DragMesh

[[北京大学]] 团队推出的 3D 交互框架，旨在解决静态 3D 模型在动态交互中的物理真实性与计算效率问题。

## 核心特性
DragMesh 的核心优势在于通过数学表征和架构设计的优化，实现了“物理零失真”与“实时性”的统一。

-   **轻量化**：核心生成模块参数量仅为 27.5M，GFLOPs 仅为 5.2，相比 SOTA 模型（如 [[meshart]], [[dragapart]]）计算开销降低 5-10 倍。
-   **高精度**：运动轴预测误差低至 45.0mrad（相比 Baseline 的 450.0mrad），原点预测误差仅 1.8mm。
-   **通用性**：基于 [[沙勒定理]]，理论上支持空间中任意刚体的螺旋运动，无需针对特定物体单独训练。

## 技术架构
DragMesh 采用了 [[语义-几何解耦]] 的设计哲学，将交互过程拆解为两个流水线：

1.  **意图推理**：利用 [[gpt-4o]] 等 VLM 的通识能力判断交互意图（如判断是旋转还是滑动），解决语义歧义。
2.  **几何回归**：通过专用的 [[kpp-net]] (Kinematics Prediction Network) 回归精准的关节轴和原点。

在运动表征层面，DragMesh 使用了 [[dq-vae]] (Dual Quaternion VAE)，利用 [[双四元数]] 的数学完备性（8 参数描述旋转与平移，无万向节死锁）来确保生成的动作严格遵循物理法则。

## 应用与评测
该模型在 [[gapartnet]] 和 [[objaverse]] 数据集上进行了广泛测试。在定性对比中，面对微波炉、折叠椅等物体，DragMesh 能够生成平滑、结构完整的运动轨迹，避免了竞品常见的“关节脱臼”或结构崩坏现象。

## 外部链接
-   论文：[arXiv:2512.06424](https://arxiv.org/abs/2512.06424)
-   代码：[GitHub - AlGeeksGroup/DragMesh](https://github.com/AlGeeksGroup/DragMesh)
-   主页：[Project Page](https://aigeeksgroup.github.io/DragMesh)