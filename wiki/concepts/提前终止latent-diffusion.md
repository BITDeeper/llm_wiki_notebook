---
type: concept
title: 提前终止 latent diffusion
created: 2026-06-08
updated: 2026-06-08
tags: [图像生成, 扩散模型, 推理优化, 延迟降低]
related: [pid-pixel-diffusion-decoder, sigma-aware-gate, 潜在扩散模型]
sources: ["rss/英伟达重新定义文生图最后一步：潜在表征直达4k，高精细节一步生成！.md"]
---
# 提前终止 latent diffusion

在 latent diffusion 完成全部去噪步骤之前就让生成式解码器接管，在像素空间完成剩余细节生成的推理策略。

## 工作方式

以 FLUX.1 [dev] 为例，完整生成通常需要 28 个 denoising step。使用 [[pid-pixel-diffusion-decoder|PiD]] 时，可以在第 24 步甚至更早就接管尚未完全去噪的潜在表征，直接生成 2048×2048 图像。

## 技术基础

依赖 [[sigma-aware-gate|σ感知门控]] 机制，使解码器能够处理不同噪声水平的 latent。

## 效果

- **降低端到端延迟**：潜空间去噪步骤减少
- **可能提升画质**：latent 未完全"钉死"细节时，PiD 有更多空间补充高频纹理，部分场景中生成更锐利、更丰富的细节
- **权衡**：并非在所有情况下都更优，存在忠实度与创造性之间的平衡

## 架构分工

这一策略将高精渲染拆为两层：
1. **潜空间扩散模型**：负责整体构图和语义（可提前终止）
2. **PiD**：负责高分辨率细节合成（在像素空间完成）