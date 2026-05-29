---
type: entity
title: SIGReg
created: 2026-05-28
updated: 2026-05-28
tags: [正则化, 自监督学习, 表示学习]
related: [lejepa, yann-lecun, 线性可识别性, 各向同性高斯分布约束]
sources: ["lecun新证明：世界是高斯的.md"]
origin_date: 2026-05-01
---
# SIGReg

SIGReg 是 [[lejepa]] 架构中的核心正则化组件，全称为各向同性高斯正则化（Isotropic Gaussian Regularization）。其作用是将模型输出的嵌入分布显式约束为各向同性高斯分布。

## 设计动机

VICReg、BYOL 等自监督学习方法对嵌入分布没有明确约束，只是通过各种技巧防止表示退化为常数。SIGReg 选择正面约束嵌入分布的形状，赋予嵌入空间明确的几何结构，从而使严格的理论分析成为可能。

## 在证明链中的作用

SIGReg 的约束是 [[lejepa]] 理论证明链的关键起点：

1. 各向同性高斯约束使嵌入空间具有明确的几何结构
2. 结合 LeJEPA 对齐损失对非线性扭曲的惩罚，证明线性映射必然是正交变换
3. 正交变换保证了 [[线性可识别性]] 的成立

## 与 VICReg 的对比

VICReg 同样在实验中表现出高 R² 值，但缺乏 SIGReg 的理论保证。SIGReg 的显式约束使理论分析成为可能，而非仅仅依赖经验表现。