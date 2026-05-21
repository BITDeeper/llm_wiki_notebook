---
type: concept
title: 模型坍塌
created: 2026-05-03
updated: 2026-05-03
tags: [training-phenomenon, stability, optimization]
related: [sigreg, jepa, mode-collapse]
sources: ["lecun的世界模型单gpu就能跑了.md"]
---

# 模型坍塌

[[model-collapse]] 是指在深度学习模型训练过程中，模型失去学习有效特征的能力，开始对所有不同的输入输出相同或高度相似的表征。

## 在世界模型中的表现

在 [[jepa]] 等自监督架构中，如果缺乏有效的约束，编码器可能会发现一个“偷懒”的解：无论输入什么画面，都输出相同的特征向量。这样预测器的预测误差（MSE）虽然很小，但模型没有学到任何关于世界动态的信息。

## 解决方案

- **传统方法**：使用 Stop Gradient（停止梯度）或 EMA（指数移动平均）来防止编码器和预测器陷入恶性循环。
- **[[sigreg]]**：[[leworldmodel]] 提出的解决方案，通过强制特征分布服从标准高斯分布，从根本上消除了特征空间坍缩的可能性，实现了更稳定的训练。