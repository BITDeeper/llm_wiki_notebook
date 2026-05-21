---
type: entity
title: Flux VAE
tags: [model, benchmark, vae]
related: [neo-unify-架构, 无编码器设计]
created: 2026-03-06
updated: 2026-03-06
sources: ["彻底告别ve与vae！商汤硬核重构多模态：砍掉所有中间编码器.md"]
---

# Flux VAE

Flux VAE 是一种基于变分自编码器（VAE）的图像模型，常作为图像重建任务的高性能基准。

## 在 NEO-unify 研究中的角色
在 [[neo-unify-架构]] 的相关实验中，Flux VAE 被用作对比基准，以验证无编码器设计的保真能力。

## 性能对比
在 MS COCO 2017 图像重建任务中：
- **Flux VAE**: PSNR 32.65, SSIM 0.91
- **NEO-unify (2B)**: PSNR 31.56, SSIM 0.85

虽然 NEO-unify 在指标上略低于 Flux VAE，但考虑到其不依赖预训练 VAE 且理解分支被冻结，这一结果证明了原生架构在保留细节方面的巨大潜力。