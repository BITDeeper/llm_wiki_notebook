---
type: concept
title: Layer-wise Shared Attention
created: 2026-05-28
updated: 2026-05-28
tags: [注意力机制, 模型架构, 自动驾驶, vla]
related: [automot, vla-视觉-语言-动作, 异步推理, cross-task-causal-mask]
sources: ["icml2026-automot-b2d-&-nuscense双sota-，重新思考vlm和端到端驾驶的结合.md"]
---
# Layer-wise Shared Attention

Layer-wise Shared Attention 是 [[automot|AutoMoT]] 提出的核心架构创新，用于在模型内部实现理解模块与动作模块的直接交互。

## 核心思想

在传统的 hierarchical 式串联架构中，理解模块（VLM）先处理场景，再将结果以文本形式传递给下游规划器。这种方式存在信息压缩损失——复杂场景理解被压缩为少量文本提示。

Layer-wise Shared Attention 打破了这种限制：在模型的每一层，Understanding Expert（UE）和 Action Expert（AE）通过共享注意力机制直接交互。AE 在生成动作时可以直接访问 UE 的中间表示（intermediate representations），而非仅接收外部文本解释。

## 技术细节

- UE 提供高层场景理解的中间特征
- AE 在每一层通过共享注意力读取这些特征
- 结合 [[cross-task-causal-mask|Cross-task Causal Mask]] 建立从 Understanding → Decision → Planning 的有序信息流

## 意义

这一设计使场景理解直接参与动作生成，而非仅通过外部文本传递。轨迹预测不再只是几何拟合，而是由场景语义和驾驶意图共同驱动。同时，这种层级别的交互方式比简单的模块串联更加紧凑高效。