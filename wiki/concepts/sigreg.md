---
type: concept
title: SIGReg 正则化
created: 2026-05-03
updated: 2026-05-03
tags: [regularization, loss-function, optimization]
related: [leworldmodel, jepa, model-collapse]
sources: ["lecun的世界模型单gpu就能跑了.md"]
---

# SIGReg 正则化

[[sigreg]] (Spherical Information Gaussian Regularization) 是一种用于防止深度学习模型（特别是 [[jepa]] 架构）发生坍塌的正则化技术。它是 [[leworldmodel]] 能够实现极简、稳定训练的关键创新。

## 原理

SIGReg 强制模型输出的特征向量服从**标准高斯分布**。在训练过程中，它作为一个正则项加入损失函数：
$$ L_{total} = L_{prediction} + \lambda \times L_{SIGReg} $$

其中，$\lambda$ 是唯一的超参数，用于平衡预测损失和正则化强度。

## 作用

在 JEPA 类模型中，如果缺乏约束，编码器可能会将所有输入映射到相同的特征向量（即“模型坍塌”），导致预测器无法学习到有用的动态信息。
- **替代复杂技巧**：传统的 JEPA 方法通常使用 EMA（指数移动平均）或 Stop Gradient（停止梯度）来缓解这一问题，但这些技巧增加了训练的不稳定性。
- **简化训练**：SIGReg 通过简单的数学约束，自然地保持了特征空间的各向同性和信息量，使得 [[leworldmodel]] 能够端到端稳定训练，无需额外的启发式方法。