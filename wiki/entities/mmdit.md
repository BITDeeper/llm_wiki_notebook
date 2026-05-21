---
type: entity
title: MMDiT
created: 2026-03-23
updated: 2026-03-23
tags: [architecture, transformer, diffusion-model]
related: [unicalli, stable-diffusion-3, 多模态扩散Transformer]
sources: ["告别ai「鬼画符」！一行指令「复活」王羲之、苏轼，带连笔、懂排版，项目已开源丨iclr'26.md"]
---
# MMDiT

MMDiT (Multimodal Diffusion Transformer) 是一种多模态扩散 Transformer 架构，也是 [[UniCalli]] 模型的技术基座。该架构也被用于 Stable Diffusion 3 等先进模型中。

## 在 UniCalli 中的应用
UniCalli 采用 MMDiT 替代了传统的自回归线性生成方式。通过双向注意力机制，模型在每一步去噪时都能统览全局画布，从而实现类似书法家“全局谋篇”的效果。这对于实现 [[列级排版]] 和处理复杂的空间布局至关重要。