---
type: entity
title: Jetson Orin NX
created: 2026-03-05
updated: 2026-03-05
tags: [hardware, edge-computing, nvidia]
related: [vulcan, 本地推理]
sources: ["模型砍掉一大半，准确率反升15%！华科&阿里安全新研究实现vit近乎无损的类特定压缩｜iclr'26.md"]
---

# Jetson Orin NX

**Jetson Orin NX** 是 NVIDIA 推出的嵌入式人工智能计算平台，专为边缘计算场景设计。它提供了强大的 GPU 算力，同时保持了较低的功耗，非常适合用于机器人、自动驾驶和工业检测等领域。

## 在模型压缩验证中的应用

在 [[Vulcan]] 的研究中，Jetson Orin NX 被用作验证 [[Vision Transformer (ViT)]] 压缩效果的实际硬件平台。

-   **推理加速**：Vulcan 派生的模型在该平台上实现了 **1.23×-3.02×** 的推理加速。
-   **显存优化**：显存占用降低了 **20.59%-76.47%**。

这一实测数据证明了 Vulcan 方法在真实边缘设备上的有效性，为 [[本地推理]] 提供了强有力的硬件支持案例。