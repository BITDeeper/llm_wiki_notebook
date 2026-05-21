---
type: entity
title: VGGT
tags: ["architecture", "transformer", "3d-vision", "model", "3d-reconstruction", "baseline", "三维重建", "视觉Transformer", "多模态模型"]
related: [neoverse, 免位姿输入, scal3r, depth-anything-3, quantvggt, dinov2, dust3r]
created: 2026-01-05
updated: 2026-05-08
sources: ["李飞飞又被超越了？百万「普通视频」打造通用4d世界模型！.md", "公里级场景也能稳住了，国产团队把长视频3d重建又往前推了一步.md", "首次将十亿参数三维模型塞进手机！4比特量化，速度2.5倍、内存降3.7倍、精度98%｜iclr'26.md"]
---

# VGGT (Vision Foundation Transformer for Graphics)

**Visual Geometry Grounded Transformers (VGGT)** (视觉几何基础变换器) 是一种基于大规模 Transformer 架构的前馈式 3D 基础模型，拥有约 12 亿参数。它能够直接从 RGB 图像或任意长度的图像序列中，在单次前向传播中统一完成多个三维视觉任务。

## 核心能力

VGGT 旨在解决传统三维重建方法对人工设计先验和迭代求解器的依赖问题。其核心功能包括：

*   **密集深度估计** (Dense Depth Estimation)
*   **点云图回归** (Point Cloud Regression)
*   **相机参数与姿态预测** (Camera Pose Prediction)
*   **点跟踪** (Point Tracking)

## 架构设计

VGGT 的架构包含两个关键组件：

1.  **令牌化**：使用预训练的视觉骨干网络（如 [[dinov2]]）将输入图像转换为图像令牌。
2.  **令牌配准**：引入特殊的 **相机令牌** 和 **配准令牌**。这些数据无关的特殊令牌被注入图像令牌中，用于编码全局上下文和跨视图几何信息。

## 应用与衍生

VGGT 是 [[neoverse]] 前馈式重建模块的基础架构。NeoVerse 在此基础上进行了动态化和高斯化改进，使其能够支持免姿态输入的快速 4D 场景重建。

## 性能与局限

虽然 VGGT 在短序列上表现良好，但在处理公里级长序列时面临轨迹漂移和误差累积的问题。在 [[Scal3R]] 的相关研究中，VGGT 被用作对比基准。Scal3R 在其视觉几何能力的基础上，通过引入 [[test-time-training]] 机制解决了这些长序列固有的缺陷。

此外，尽管 VGGT 在性能上超越了许多任务专用模型，但其十亿级别的参数规模带来了极高的计算和内存成本，限制了其在实际场景（尤其是移动端）中的部署。这也是 [[quantvggt]] 框架被提出的主要原因。