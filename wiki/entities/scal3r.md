---
type: entity
title: Scal3R
created: 2026-05-06
updated: 2026-05-06
tags: [3d-reconstruction, model, zhejiang-university, horizon-robotics]
related: [test-time-training, 长序列3d重建, 全局上下文记忆模块, 全局上下文同步机制, 浙江大学, 地平线机器人, 之江实验室, vggt]
sources: ["公里级场景也能稳住了，国产团队把长视频3d重建又往前推了一步.md"]
---

# Scal3R

**Scal3R** (Scalable Test-Time Training for Large-Scale 3D Reconstruction) 是一个由 [[浙江大学]]、[[地平线机器人]]和[[之江实验室]]联合开发的 3D 重建模型。它旨在解决公里级大场景长视频的 3D 重建稳定性问题，特别是针对长序列中常见的轨迹漂移和误差累积现象。

## 核心特性
Scal3R 的核心在于引入了 [[test-time-training]] (TTT) 机制，将长序列训练、推理和跨块信息更新统一在同一个流程中。这种方法不同于传统的“切块拼接”策略，而是让模型在训练阶段就学习处理超长序列，从而保证训练与推理机制的一致性。

## 技术架构
Scal3R 基于前馈式 3D 基础模型 [[VGGT]] 的视觉几何能力进行了扩展，主要包含两个核心模块：

1.  **[[全局上下文记忆模块]] (GCM)**：
    由自适应存储单元组成，作为轻量级的可更新上下文模块。它在处理每个分块后通过自监督目标进行更新，用于跨块累积和保留上下文信息。

2.  **[[全局上下文同步机制]] (GCS)**：
    利用 PyTorch DDP 的 all-reduce 机制，在不同 GPU 处理的不同分块之间同步自适应存储单元的自监督梯度，确保全局上下文信息的一致性更新。

## 性能表现
- **位姿估计精度**：在 KITTI Odometry 数据集上，Scal3R 的 ATE 指标（4.298）显著优于 VGGT-Long（8.637）；在 Oxford Spires 数据集上从 15.46 m 降至 4.45 m。
- **重建质量**：在 ETH3D、Oxford Spires、VKITTI2 等数据集上，Chamfer Distance 和 F1 分数均达到最优水平。
- **资源效率**：支持在单张 RTX 4090 上完成推理，运行时间随序列长度呈线性增长，且误差保持稳定，不随序列长度增加而发散。

## 应用场景
Scal3R 适用于需要处理超长序列（如公里级场景、数千帧视频）的 3D 重建任务，例如大规模城市建模、自动驾驶场景重建等。