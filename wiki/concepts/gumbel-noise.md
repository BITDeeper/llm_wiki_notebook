---
type: concept
title: Gumbel Noise
tags: [机器学习, 梯度估计, 采样]
related: [diger, 码本塌缩]
created: 2026-04-30
updated: 2026-04-30
sources: ["生成式推荐补上关键一环！语义id首次实现可微分联合优化-sigir'26.md"]
---

# Gumbel Noise

**Gumbel Noise** 是一种在离散采样过程中引入的随机噪声，常结合 Gumbel-Softmax 技术使用，旨在为离散变量的不可微操作提供平滑的梯度近似。

## 在 DIGER 中的应用

在 [[diger]] 框架中，Gumbel Noise 被引入到语义ID的选择过程中（即 DRIL 机制）。
- **作用**：替代刚性的硬选择，为模型提供探索性。
- **目的**：防止模型在训练初期过早收敛到少数几个 [[语义id]]（即缓解 [[码本塌缩]]），从而保证联合优化的稳定性和有效性。

通过在训练过程中逐渐衰减这种噪声（Uncertainty Decay），模型能够从“探索模式”平滑过渡到“利用模式”。