---
type: concept
title: LeWorldModel 端到端JEPA世界模型
created: 2026-05-15
updated: 2026-05-15
tags: [jepa, 世界模型, 端到端训练, 自回归]
related: [jepa, v-jepa-2, 具身智能数据困境]
sources: ["160行代码读懂lecun的jepa世界模型.md"]
---
# LeWorldModel 端到端JEPA世界模型

LeWorldModel 是 [[jepa]] 系列中最激进的变体，采用完全端到端的训练方式，去除了其他变体中的多种工程技巧。

## 核心特点

- **无 EMA：** 不使用指数移动平均目标编码器
- **无 Stop-Grad：** 不使用梯度停止
- **无 Masking：** 不使用掩码策略
- **联合训练：** 编码器与 action-conditioned 自回归预测器联合端到端训练

## 设计哲学

LeWorldModel 代表了 JEPA 路线中最简洁的世界模型实现，试图证明在去除所有辅助工程手段后，核心的"在表征空间做预测"思想依然有效。

## 极简实现

在 [[keon-jepa]] 教学项目中，LeWorldModel 用 233 行代码实现。

## 与具身智能的关联

作为端到端世界模型，LeWorldModel 与 [[具身智能数据困境]] 和 [[sim2real]] 挑战存在间接关联，为具身智能提供了一种可能的表征学习路径。