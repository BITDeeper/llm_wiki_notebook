---
type: concept
title: 2D-RoPE
tags: [positional-encoding, computer-vision, transformer]
related: [penguin-encoder, 纯文本llm初始化视觉编码器, rope]
created: 2026-03-19
updated: 2026-03-19
sources: ["腾讯纯文本llm训视觉encoder，拿捏图表长视频，达到开源小模型sota！.md"]
---

# 2D-RoPE

[[2d-rope]]（二维旋转位置编码）是 RoPE（Rotary Positional Embedding）在二维空间（如图像或视频帧）上的扩展。

## 背景与动机

标准的 LLM 使用 1D 位置编码来标记 Token 在序列中的位置。然而，视觉数据具有固有的二维空间结构（高度和宽度）。直接将图像展平为 1D 序列会丢失像素间的空间相对位置关系。

## 作用

2D-RoPE 通过在两个维度上分别应用旋转编码，使得模型能够感知 Token 在图像平面中的具体位置（如左上角、右下角）。这对于 [[penguin-encoder]] 这样的视觉编码器至关重要，因为它需要保留文档布局、图表结构等细粒度的空间信息。

## 应用

在 [[penguin-vl]] 中，引入 2D-RoPE 是将纯文本 LLM 改造为视觉编码器的关键步骤之一，弥补了 LLM 原生位置编码在处理视觉信息时的不足。