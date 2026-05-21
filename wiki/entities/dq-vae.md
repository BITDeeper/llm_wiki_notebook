---
type: entity
title: DQ-VAE
tags: [vae, math, 3d-graphics, physics]
related: [dragmesh, 双四元数, film, 沙勒定理]
created: 2026-01-04
updated: 2026-01-04
sources: ["比sota提速10倍！北大dragmesh重塑3d交互，物理零失真.md"]
---

# DQ-VAE

DQ-VAE (Dual Quaternion Variational Autoencoder) 是 [[dragmesh]] 框架中用于处理刚体运动表征的核心模块。它基于 [[双四元数]] 理论构建，旨在解决传统 3D 运动表征中的数学缺陷。

## 核心优势
传统的运动表征方法（如欧拉角或变换矩阵）存在万向节死锁、参数冗余或空间不连续等问题。DQ-VAE 利用双四元数仅需 8 个参数即可同时完美描述三维空间中的旋转和平移，且天然满足 [[沙勒定理]] 关于螺旋运动的描述。

## 架构细节
-   **非自回归 Transformer 解码器**：采用并行解码方式，避免了自回归方式常见的误差累积问题，保证了长序列动作的连贯性。
-   **FiLM 条件注入**：将 [[kpp-net]] 预测的关节先验通过 [[film]] (Feature-wise Linear Modulation) 层注入到 Transformer 的每一层，确保生成的每一帧都严格遵循物理约束。
-   **物理修正模块**：在解码器末端引入残差修正，进一步微调轨迹以消除微小的物理漂移。

## 意义
DQ-VAE 的引入使得 [[dragmesh]] 能够在数学底层实现刚体运动的“大一统”，无需针对“旋转”和“平移”分别设计约束，从而实现了轻量化且高保真的物理交互。