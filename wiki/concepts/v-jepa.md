---
type: concept
title: V-JEPA 视频联合嵌入预测架构
created: 2026-05-15
updated: 2026-05-15
tags: [jepa, 视频, 自监督学习, 时空特征]
related: [jepa, i-jepa, v-jepa-2]
sources: ["160行代码读懂lecun的jepa世界模型.md"]
---
# V-JEPA 视频联合嵌入预测架构

V-JEPA（Video JEPA）是 [[jepa]] 联合嵌入预测架构面向视频任务的变体，将 I-JEPA 的二维 patch 机制扩展到三维时空域。

## 核心机制

- **3D 管块（Tubelet）：** 将二维 patch 扩展为三维管块，同时覆盖空间和时间维度
- **双组管状掩码：** 同时做短程和长程两组管状掩码，让模型从部分帧推测缺失帧的时空特征
- **机制同源：** 与 [[i-jepa]] 核心机制一致，但多了一维时间轴

## 极简实现

在 [[keon-jepa]] 教学项目中，V-JEPA 用 188 行代码实现，适配 Moving MNIST 数据集。

## 与后续变体的关系

V-JEPA 是 [[v-jepa-2]] 的基础，后者在 V-JEPA 预训练的基础上增加了动作条件预测能力。