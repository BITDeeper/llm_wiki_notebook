---
type: entity
title: DINOv3
created: 2026-03-25
updated: 2026-03-25
tags: [模型, 计算机视觉, 视觉基础模型]
related: [deepvision-vla, vision-language-mixture-of-transformers]
sources: ["vla别再「走神」：即插即用提升视觉泛化，相对pi0.5提升18%.md"]
---
# DINOv3

[[DINOv3]] 是一个视觉基础模型，在 [[DeepVision-VLA]] 框架中被用作高分辨率视觉专家。

## 应用
在 DeepVision-VLA 中，DINOv3 的多层特征被引入 VLA 的深层网络，通过 [[Vision-Language Mixture-of-Transformers]] (VL-MoT) 架构与语言模型进行交互，从而增强模型对精细操作所需视觉信息的表征能力。