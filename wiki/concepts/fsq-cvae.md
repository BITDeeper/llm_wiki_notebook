---
type: concept
title: FSQ-CVAE
tags: [深度学习, 量化, 变分自编码器, 算法]
related: [skintokens, tokenrig, 离散化]
created: 2026-04-22
updated: 2026-04-22
sources: ["3d生成告别「穿模」噩梦！vastx清华将蒙皮权重token化，统一生成骨骼与权重，grpo微调形变平滑.md"]
---

# FSQ-CVAE

**FSQ-CVAE**（Finite Scalar Quantization - Variational Autoencoder，有限标量量化变分自编码器）是一种用于将连续数据压缩为离散表示的深度学习模型架构。

## 在 SkinTokens 中的应用

在 [[SkinTokens]] 研究中，FSQ-CVAE 被用于处理 3D 绑定中的蒙皮权重数据：
- **输入**：连续的、高维的蒙皮权重矩阵。
- **输出**：一小段离散的 Token 序列。

## 作用

通过 FSQ-CVAE 的量化过程，原本难以预测的高维连续回归问题被转化为更容易学习的序列预测问题。这使得 [[TokenRig]] 框架能够利用 Transformer 等强大的序列模型来处理 3D 几何数据。

## 优势

相比传统的连续值回归，FSQ-CVAE 的离散表示通常具有更好的鲁棒性和泛化能力，能够捕捉数据中的关键特征分布。