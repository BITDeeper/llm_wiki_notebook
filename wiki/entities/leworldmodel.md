---
type: entity
title: LeWorldModel
created: 2026-05-03
updated: 2026-05-03
tags: [world-model, jepa, robotics, open-source]
related: [jepa, sigreg, mila, yann-lecun, dino-wm]
sources: ["lecun的世界模型单gpu就能跑了.md"]
---

# LeWorldModel (LeWM)

[[leworldmodel]] (LeWM) 是一个基于 [[jepa]] 架构的极简世界模型实现，由加拿大 [[Mila]] 研究院主导开发。该项目旨在通过简化架构和引入 [[sigreg]] 正则化技术，实现高效、稳定且低算力门槛的世界模型训练。

## 核心特性

LeWM 的设计哲学是“回归本质”，通过去除复杂的训练技巧（如 EMA、Stop Gradient），仅依靠编码器、预测器和简单的损失函数实现端到端训练。

- **参数规模**：仅 1500 万参数。
- **训练成本**：单张 NVIDIA L40S GPU 即可完成，训练时间仅需数小时。
- **推理速度**：规划速度比依赖大模型预训练的 [[dino-wm]] 快 48 倍（<1秒 vs 47秒）。
- **性能表现**：在推箱子、机械臂控制等任务中，性能超越此前的端到端 JEPA 方法（PLDM），与依赖大模型的方案持平。

## 技术原理

LeWM 的核心架构包含两个部分：
1.  **编码器**：将输入的像素画面压缩为低维的潜在特征。
2.  **预测器**：根据当前特征和智能体的动作，预测下一时刻的潜在特征。

为了防止模型在训练中发生坍塌，LeWM 引入了 [[sigreg]] 正则化技术，强制特征向量服从标准高斯分布。这一创新使得模型无需复杂的调参和额外的训练技巧即可稳定收敛。

## 物理理解能力

LeWM 不仅仅是一个预测器，其潜在空间被证明蕴含了精确的物理信息。
- **线性探测**：通过在潜在特征上训练简单的线性探测器，可以极高精度预测物体的位置、角度和机械臂指尖坐标。
- **异常检测**：模型对符合物理规律的视觉变化（如物体变色）反应平淡，但对违反物理规律的现象（如物体瞬移）表现出极高的惊讶值。

## 应用场景

LeWM 主要用于具身智能体的规划和控制任务，包括但不限于：
- 2D 推箱子
- 机械臂目标追踪
- 3D 物体抓取
- 室内导航

## 开源信息

- **项目主页**：[le-wm.github.io](https://le-wm.github.io/)
- **GitHub**：[github.com/lucas-maes/le-wm](https://github.com/lucas-maes/le-wm)
- **论文**：[arXiv:2603.19312v1](https://arxiv.org/pdf/2603.19312v1)