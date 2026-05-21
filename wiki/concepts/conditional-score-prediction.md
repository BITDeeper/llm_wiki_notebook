---
type: concept
title: 条件分数预测
created: 2026-01-18
updated: 2026-01-18
tags: [ai, diffusion, mechanism]
related: [controllable-generation, controlnet, dreambooth, unet]
sources: ["任意条件，「可控」文生图扩散模型综述-tpami'25.md"]
---

# 条件分数预测

条件分数预测是实现 [[controllable-generation]] 的一条核心技术路线。其核心思想是让扩散模型的去噪网络（如 [[unet]] 或 DiT）在内部直接“看见”并利用新的条件信号，从而在每一步去噪时都能基于这些条件预测噪声方向。

## 主要实现方式

1.  **Tuning-based（基于微调）**：
    *   通过更新模型的部分参数或嵌入，将特定主体或风格内化到模型中。
    *   代表工作：[[dreambooth]]。
    *   优点：控制力强；缺点：训练成本高，可能导致过拟合。

2.  **Adapter-based（基于适配器）**：
    *   引入额外的条件编码器，将新条件映射成特征并注入主网络。
    *   代表工作：[[controlnet]]。
    *   优点：底座模型可复用，扩展性强，训练更聚焦。

3.  **Training-free（免训练）**：
    *   利用模型内部的注意力机制，在推理阶段进行轻量级干预。
    *   优点：无需训练，灵活性高。