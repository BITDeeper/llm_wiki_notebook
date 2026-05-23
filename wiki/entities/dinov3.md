---
type: entity
title: DINOv3
created: 2026-03-25
updated: 2026-05-22
tags: [模型, 计算机视觉, 视觉基础模型, 视觉骨干网络, 基础模型, meta-ai]
related: [deepvision-vla, vision-language-mixture-of-transformers, meta-ai, vggt-omega]
sources: ["vla别再「走神」：即插即用提升视觉泛化，相对pi0.5提升18%.md", "cvpr-2026-oral-牛津-&-meta-ai-推出-vggt-ω：前馈-3d-重建迈入-10b-参数时代，动态场景精度升-77%.md"]
---
# DINOv3

[[DINOv3]] 是由 [[meta-ai|Meta AI]] 开发的视觉骨干网络，是 DINO 系列的最新版本。

## 关键特性

- **16-pixel patch size**：相比常见的 14-pixel patch size，更大的 patch 有助于长视频推理效率，是 [[vggt-omega|VGGT-Ω]] 处理 1000 帧以上长视频时保持速度和显存优势的关键因素之一。

## 应用

- **VGGT-Ω**：DINOv3 被用作核心视觉编码器，支撑前馈 3D 重建任务。
- **DeepVision-VLA**：DINOv3 在 [[DeepVision-VLA]] 框架中被用作高分辨率视觉专家。其多层特征被引入 VLA 的深层网络，通过 [[Vision-Language Mixture-of-Transformers]] (VL-MoT) 架构与语言模型进行交互，从而增强模型对精细操作所需视觉信息的表征能力。