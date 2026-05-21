---
type: entity
title: CogViT
tags: [视觉编码器, 智谱AI, 架构组件]
related: [glm-5v-turbo, zhipu-ai, mtp]
created: 2026-04-02
updated: 2026-04-02
sources: ["开卷视觉编程！glm-5v-turbo上线，一张草图搞定前端.md"]
---

# CogViT

[[cogvit]] 是 [[zhipu-ai]]（智谱AI）自研的视觉编码器（Vision Encoder），首次应用于 [[glm-5v-turbo]] 模型中。

## 设计目标

CogViT 旨在提升多模态模型在以下方面的能力：
- **物体识别**：更精准地识别图像中的具体物体。
- **细节理解**：捕捉图像中的微小细节和纹理信息。
- **空间关系**：理解图像元素之间的相对位置和空间逻辑。

## 技术作用

作为 [[glm-5v-turbo]] 原生多模态架构的关键组件，CogViT 负责将视觉信息高效编码为模型可理解的表征，配合 [[mtp]]（多模态推理结构）共同支撑模型的视觉编程和 GUI 操控能力。