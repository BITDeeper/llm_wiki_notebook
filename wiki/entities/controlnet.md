---
type: entity
title: ControlNet
created: 2026-01-18
updated: 2026-01-18
tags: [ai, model, diffusion, adapter]
related: [controllable-generation, conditional-score-prediction, unet]
sources: ["任意条件，「可控」文生图扩散模型综述-tpami'25.md"]
---

# ControlNet

ControlNet 是一种用于扩散模型的适配器架构，属于 [[conditional-score-prediction]] 技术路线中的 Adapter-based 方法。

它通过引入额外的条件编码器，将边缘图、深度图、姿态等空间条件映射成特征，并注入到噪声预测网络（如 [[unet]]）中。这种方法的优势在于底座模型可复用、条件可扩展，且训练过程更加聚焦，是实现 [[controllable-generation]] 的代表性工作。