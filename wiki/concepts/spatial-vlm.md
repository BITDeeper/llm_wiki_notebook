---
type: concept
title: SpatialVLM
tags: [multimodal, spatial-reasoning, vlm]
related: [gpt-image-2, chen-boyuan, google-deepmind]
created: 2026-04-23
updated: 2026-04-23
sources: ["半壁华人！gpt-image-2团队曝光：无锡才俊带队，13人4个月封神.md"]
---

# SpatialVLM

[[spatial-vlm]]（空间视觉语言模型）是一种通过大规模 3D 空间推理数据集训练出的视觉语言模型。该技术由 [[chen-boyuan]] 在 Google 实习期间以共同一作身份发表。

## 技术原理
研究团队自动构建了一个包含 1000 万图像和 20 亿 QA 对的互联网规模 3D 空间推理 VQA 数据集。通过该数据集训练，模型获得了定性和定量的空间推理能力。

## 能力特点
SpatialVLM 能够从单张 2D 图像中输出精确的物理数值，包括：
*   **米制距离**：物体之间的实际距离。
*   **尺寸**：物体的大小。
*   **方位**：物体的相对位置。

## 与 GPT Image 2 的联系
这一技术被认为是 [[gpt-image-2]] 能够精准理解复杂空间布局指令（如“杯子在右边”）的关键来源。它将思维链空间推理能力引入了图像生成领域，使模型不再仅仅是“画图”，而是“理解并构建空间关系”。