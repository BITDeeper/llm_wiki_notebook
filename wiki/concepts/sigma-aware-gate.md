---
type: concept
title: Sigma-aware gate（σ感知门控）
created: 2026-06-08
updated: 2026-06-08
tags: [图像生成, 扩散模型, 条件注入, 解码器]
related: [pid-pixel-diffusion-decoder, 提前终止latent-diffusion]
sources: ["rss/英伟达重新定义文生图最后一步：潜在表征直达4k，高精细节一步生成！.md"]
---
# Sigma-aware gate（σ感知门控）

[[pid-pixel-diffusion-decoder|PiD]] 中的关键机制，根据潜在表征的噪声水平（σ）动态调节条件注入强度。

## 工作原理

- **latent 越干净**（噪声越低）→ 条件注入越强 → 更忠实于原始 latent
- **latent 越嘈杂**（噪声越高）→ 模型越依赖自身像素生成先验 → 更多创造性细节补充

## 设计意义

这一机制使得 PiD 不仅能处理完整去噪后的 latent，还能处理尚未完全去噪的中间 latent。这是实现 [[提前终止latent-diffusion|提前终止 latent diffusion]] 的技术基础。

## 实际效果

- 完全跑满 denoising step 时：PiD 更忠实于原始 latent
- 在中间 step 接管时：由于 latent 还没有把所有细节"钉死"，PiD 反而有更多空间补充高频纹理，部分场景中生成更锐利、更丰富的细节