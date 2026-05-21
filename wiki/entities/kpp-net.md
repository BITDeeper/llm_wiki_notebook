---
type: entity
title: KPP-Net
tags: [3d-interaction, neural-network, geometry]
related: [dragmesh, 语义-几何解耦]
created: 2026-01-04
updated: 2026-01-04
sources: ["比sota提速10倍！北大dragmesh重塑3d交互，物理零失真.md"]
---

# KPP-Net

KPP-Net (Kinematics Prediction Network) 是 [[dragmesh]] 框架中的核心组件，是一个专门用于从 Mesh 和拖拽信号中回归精准运动学参数（关节轴和原点）的神经网络。

## 设计特点
与通用的点云编码器不同，KPP-Net 采用了**双流注意力机制**。这种设计专门针对几何回归任务进行了优化，使其能够从稀疏的拖拽信号中准确推断出物体的潜在运动结构。

## 性能表现
在消融实验中，使用 KPP-Net 后的轴预测误差从 Baseline (PointNet) 的 450.0mrad 显著降低至 45.0mrad，原点预测误差仅为 1.8mm。这证明了其在几何感知任务上的高效性。

## 作用
在 [[dragmesh]] 的 [[语义-几何解耦]] 架构中，KPP-Net 负责处理“怎么动”的问题，其输出作为先验条件通过 [[film]] 层注入到生成模型中，确保后续的动作生成严格遵循物理约束。