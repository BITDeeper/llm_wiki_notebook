---
type: concept
title: Dual Diffusion Transformer
tags: [architecture, video-generation, deep-learning]
related: [bach-video-model, transformer, diffusion-model]
created: 2026-03-18
updated: 2026-03-18
sources: ["0产品获苏妈投资！前腾讯ai大牛刘威视频创业，又融了8000万美元.md"]
---

# Dual Diffusion Transformer

**Dual Diffusion Transformer (DDiT)** 是 [[Video Rebirth]] 在其 [[Bach (视频模型)]] 引擎中独创的一种模型架构。

## 设计目标
DDiT 架构的主要目标是实现**极致的指令遵循**（Instruction Following）。在专业的视频生成工作流中，创作者往往需要经过多次尝试和调整提示词才能获得满意的结果。DDiT 旨在通过架构创新，提高模型对用户意图的理解和执行精度，从而减少反复试错（Re-roll）的成本。

## 技术背景
虽然该架构的具体技术细节尚未公开，但其命名暗示了它可能结合了两种扩散过程或双路径的 Transformer 结构，以在保持生成质量的同时增强可控性。这代表了视频生成模型从单纯的“画质提升”向“工程可用性”和“生产可控性”演进的趋势。