---
type: entity
title: TRELLIS
tags: [3d-generation, backbone, latent-representation, foundation-model, slat]
related: [monoart, 3d-reconstruction, slat, morphany3d, structured-latents]
created: 2026-04-22
updated: 2026-05-05
sources: ["无需多视角，单图重建可交互3d模型！南洋理工开源结构推理框架.md", "大象秒变挖掘机！三维变形新突破，无需额外训练-cvpr'26.md"]
---

# TRELLIS

**TRELLIS** 是一个强大的三维生成基础模型，全称为 "Structured 3D Latents for Scalable and Versatile 3D Generation" (CVPR 2025)。它通过将三维资产编码为 [[slat]]（Structured Latents，结构化隐变量），实现了高质量且多样的图生3D能力。

## 核心技术
TRELLIS 提出的 [[slat]] 表示法为三维资产的生成与编辑提供了统一的特征空间。这种表示法不仅保留了物体的几何结构信息，还使得模型能够通过标准的注意力机制进行处理，为下游任务提供了高质量的 3D 空间特征表示。

## 在 MonoArt 中的角色
在 [[monoart]] 框架中，TRELLIS 被用作**冻结的 3D 生成基础**。它负责从单张输入图像恢复物体的基础几何形状以及与之对齐的潜在特征。

这种从 3D 几何出发的推理方式，使得后续步骤（部件感知、运动推理）能够建立在三维空间而非二维像素特征之上，比直接从 2D 图像回归关节参数具有更高的稳定性和准确性。

## 在 MorphAny3D 中的角色
[[morphany3d]] 框架同样将 TRELLIS 作为底座模型。MorphAny3D 的成功在很大程度上归功于 TRELLIS 强大的三维生成先验：

*   **隐式对齐能力**：原生 TRELLIS 的注意力机制能够隐式建立 2D 条件与 3D 隐特征之间的语义对应关系。
*   **姿态先验与局限**：TRELLIS 学习到的姿态分布虽然带来了高质量的生成结果，但也导致了特定角度（90°/180°/270°）的跳变问题，这促使 MorphAny3D 提出了 [[朝向纠正策略]]。

## 局限性与依赖
由于 [[monoart]] 等框架严重依赖 TRELLIS 的初始输出，整体系统的性能上限受限于 TRELLIS 的几何重建能力。如果 TRELLIS 无法准确重建物体的基础形状，后续的运动推理或编辑操作也会受到影响。

## 衍生与兼容
除了被上述框架用作基座外，TRELLIS 架构也衍生出了 Trellis.2 等版本。此外，MorphAny3D 的研究证明了其方法可以无缝迁移至 Hi3DGen 等同类架构中。