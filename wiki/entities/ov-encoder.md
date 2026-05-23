---
type: entity
title: OneVision-Encoder (OV-Encoder)
created: 2026-05-21
updated: 2026-05-21
tags: [视觉编码器, 码流原生, ViT]
related: [llava-onevision-2, codec-native视觉建模]
sources: ["llava-onevision-2迈向下一代感知智能的视觉语言大模型.md"]
origin_date: 2026-05-20
---
# OneVision-Encoder (OV-Encoder)

OV-Encoder 是 [[llava-onevision-2]] 的视觉骨干编码器，核心创新在于将 Codec 的预测式结构写入 ViT（Vision Transformer）。

## 设计理念

OV-Encoder 不把 codec 当作"压缩技巧"，而是把它当作"视频结构的显式标注"。当 tokenization 与这套结构对齐，模型学习的对象就从"平均处理像素"变成"在状态之上解释增量"。

## 性能表现

- 在同一多模态评测设置下整体超过 Qwen3-ViT 与 SigLIP2（16 项图像/视频/文档基准）
- 视频理解平均提升约 +4.1%
- 监督预算仅 100B caption tokens，对比基线则超过 2.1T

## 在 LLaVA-OneVision-2 中的角色

OV-Encoder 完成了第一步：把 Codec 的预测式结构写进 ViT。[[llava-onevision-2]] 直接复用这套视觉接口作为骨干，码流流式输入只改变"证据选择"而不改变"视觉对齐"。