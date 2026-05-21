---
type: concept
title: 循环深度 Transformer
tags: [architecture, deep-learning, efficiency]
related: [openmythos, claude-mythos, scaling-laws]
created: 2026-04-20
updated: 2026-04-20
sources: ["claude-mythos核心架构开源！22岁天才一人破解，融合deepseek思路.md"]
---

# 循环深度 Transformer

循环深度 Transformer (Recurrent-Depth Transformer, RDT) 是一种新型神经网络架构设计范式，旨在通过增加计算步数（时间）而非参数量（空间）来提升模型性能。

## 核心机制
与传统 Transformer 通过堆叠层数来增加深度不同，RDT 在同一套权重上反复进行前向传播。
- **更新公式**：$h_{t+1} = A \cdot h_t + B \cdot e + \text{Transformer}(h_t, e)$
  - $h_t$：当前时刻的隐藏状态。
  - $e$：原始输入编码，每一步重新注入以防止偏差累积。
  - $A, B$：可学习的线性变换矩阵。
- **循环次数**：通常设定一个最大值（如 16 次），模型可根据任务需求动态调整。

## 优势
- **参数效率**：用较少的参数实现较深模型的性能（实验显示 770M 参数可打平 1.3B 标准模型）。
- **显存友好**：不需要存储大量中间层的激活值，适合消费级硬件。
- **迭代推理**：在连续潜空间中进行多步推理，类似于人类的“深思熟虑”。

## 应用
该架构被应用于 [[OpenMythos]] 项目中，用于复现 Claude Mythos 的核心能力。它挑战了传统的 [[scaling-laws]]，表明“想得更多”可能比“参数更多”更重要。