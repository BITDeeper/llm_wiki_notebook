---
type: entity
title: FNG-CE
created: 2026-04-24
updated: 2026-04-24
tags: [loss-function, deep-learning, optimization]
related: [dases, abyss-falsifier, shortcut-reliance]
sources: ["ai科学家还在刷静态榜？基准主动反击，重塑自动科研评价标准.md"]
---

# FNG-CE

**FNG-CE** (Feature Norm, Feature Covariance Geometry, and Cross-Entropy) 是一种新型的图像分类损失函数，由 [[DASES]] 框架在严格的自动科研实验中自动发现。

## 发现背景
FNG-CE 并非由人工手动设计，而是 [[DASES]] 框架通过“提出候选—主动反证—最小修正”的循环，一步步“逼”出来的最小修正解。在实验中，传统的交叉熵（CE）损失函数在面对动态对抗环境时，表现出了严重的[[Shortcut Reliance]]（捷径依赖），即模型倾向于学习背景颜色等简单特征而非前景形状。

## 组成结构
FNG-CE 在标准交叉熵（CE）的基础上，结合了三个正则化项，分别针对不同的失败模式：

1.  **Feature Norm Regularization (特征模长正则化)**
    *   **作用**：抑制模型通过放大特征模长来“靠长度取胜”的行为。
    *   **解决的问题**：防止模型通过增加置信度数值来伪装高性能，而非真正学习到稳定的判别机制。

2.  **Feature Covariance Geometry Regularization (特征协方差几何正则化)**
    *   **作用**：优化特征空间的几何结构，使其更加均匀和各向同性。
    *   **解决的问题**：减少特征空间的冗余和各向异性，防止模型在面临反事实扰动和组合压力时类间分离度塌陷。

3.  **L2 Weight Decay (L2 权重衰减)**
    *   **作用**：提供标准的容量控制，防止过拟合。

## 性能表现
*   **合成环境**：在 [[DASES]] 构建的动态对抗实验室中，FNG-CE 是唯一在所有反证阶段（从简单的背景反事实到复杂的组合尾部压力）都保持稳定且未崩溃的候选方案。
*   **真实数据集**：FNG-CE 展现出了卓越的迁移能力。在 CIFAR-10、CIFAR-100、ImageNet 等标准数据集上，使用 ResNet-18 和 ResNet-50 骨干网络进行验证时，FNG-CE 的表现均优于 CE 和 CE+L2。例如在 ImageNet 上，它使 ResNet-50 达到了 71.56% 的准确率。

## 意义
FNG-CE 的成功证明了 [[DASES]] 框架的有效性：它不仅能发现“刷分”的技巧，更能发现具有深层机制性原理、且在真实世界中具有鲁棒性和迁移性的科学知识。它代表了从“静态高分”向“动态抗打”转变的一次成功实践。

## 参见
*   [[DASES]]：发现 FNG-CE 的框架。
*   [[Shortcut Reliance]]：FNG-CE 致力于解决的现象。