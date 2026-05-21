---
type: concept
title: MMDiT
tags: [架构, 深度学习, 扩散模型, Transformer]
related: [joyai-image-edit, 原生理解生成统一]
created: 2026-04-11
updated: 2026-04-11
sources: ["重磅开源！240亿参数力压nano-banana-2.md"]
---

# MMDiT

**MMDiT**（Multimodal Diffusion Transformer，多模态扩散 Transformer）是一种用于图像生成的深度学习架构组件。在 [[JoyAI-Image-Edit]] 模型中，MMDiT 承担了图像生成的具体执行任务，参数量为 160 亿。

## 架构角色
MMDiT 通常与多模态语言模型（MLLM）配合使用：
- **MLLM**：负责理解自然语言指令和解析图像语义。
- **MMDiT**：负责根据 MLLM 的解析结果，执行具体的像素生成和编辑操作。

## 技术特点
- **多模态融合**：能够同时处理文本和图像特征，实现基于文本指令的精准图像控制。
- **扩散过程**：基于扩散模型原理，逐步从噪声中生成或修改图像。
- **空间一致性**：在 [[JoyAI-Image-Edit]] 中，MMDiT 被证明能有效保持生成图像的空间几何一致性，支持相机控制和物体旋转等复杂操作。