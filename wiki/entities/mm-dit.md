---
type: entity
title: MM-DiT
created: 2026-05-03
updated: 2026-05-03
tags: [架构, Transformer, 扩散模型]
related: [muddit, meissonic, 统一离散扩散]
sources: ["从视觉出发统一多模态！颜水成团队最新研究：不再把图像编解码器塞进llm｜iclr'2026.md"]
---

# MM-DiT

**MM-DiT** (Multimodal Diffusion Transformer) 是 [[Muddit]] 模型使用的核心共享骨干架构。

## 特点

- **多模态处理**：设计用于同时处理文本和图像的 token。
- **继承性**：在 Muddit 中，MM-DiT 并非从零训练，而是由预训练的 [[Meissonic]] 模型初始化，从而继承了高质量的文生图先验。
- **统一性**：作为生成器，它支持文生图、图生文和 VQA 三种任务在同一套参数和逻辑下运行。