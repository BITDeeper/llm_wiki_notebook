---
type: concept
title: Diffusion Forcing
tags: [generative-model, training-paradigm, neurips]
related: [gpt-image-2, chen-boyuan, autoregressive-model, diffusion-model]
created: 2026-04-23
updated: 2026-04-23
sources: ["半壁华人！gpt-image-2团队曝光：无锡才俊带队，13人4个月封神.md"]
---

# Diffusion Forcing

[[diffusion-forcing]] 是一种全新的序列生成训练范式，由 [[chen-boyuan]] 在 MIT 读博期间提出，并入选了 NeurIPS 2024。

## 核心思想
该技术旨在结合两种主流生成模型的优势：
1.  **自回归模型**：擅长处理可变长度生成。
2.  **全序列扩散模型**：擅长利用长程引导。

通过将逐 token 独立噪声级扩散与因果下一个 token 预测相结合，Diffusion Forcing 能够在保持生成灵活性的同时，利用全局信息优化生成结果。

## 应用与影响
虽然 OpenAI 尚未官方确认，但业界普遍推测 [[gpt-image-2]] 的底层架构采用了这一技术。这解释了 GPT Image 2 为什么能在保持极高生成质量的同时，对复杂的指令和空间逻辑有如此精准的遵循能力。它解决了传统扩散模型在处理长序列和复杂逻辑约束时的局限性。