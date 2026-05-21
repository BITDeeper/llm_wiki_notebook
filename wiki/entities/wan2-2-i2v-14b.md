---
type: entity
title: Wan2.2 I2V 14B
tags: [foundation-model, video-generation, image-to-video]
related: [vbvr, vbvr-wan2-2, 视频推理]
created: 2026-03-25
updated: 2026-03-25
sources: ["「百万级」视频推理数据集！30+顶尖高校联合发布.md"]
---

# Wan2.2 I2V 14B

Wan2.2 I2V 14B 是一个开源的图像转视频（Image-to-Video）基础模型，参数量为 140 亿（14B）。在 [[vbvr]] 的研究中，该模型被选定为实验的基座模型。

## 在 VBVR 中的角色
研究团队使用 Wan2.2 I2V 14B 作为起点，利用 [[vbvr]] 数据集对其进行微调，从而得到了 [[vbvr-wan2-2]] 模型。

## 性能表现
- **微调前**：在 VBVR 基准上的初始通过率为 **37.1%**。
- **微调后**：通过 [[vbvr]] 数据集训练后，通过率跃升至 **68.5%**。

这一显著的性能提升（相对提升 84.6%）证明了该基座模型具备良好的架构基础，能够通过大规模推理数据的注入，有效吸收并内化空间、物理和逻辑规则。