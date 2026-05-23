---
type: entity
title: LLaVA-OneVision
created: 2026-05-21
updated: 2026-05-21
tags: [多模态模型, 开源, 视觉语言模型]
related: [loongforge]
sources: ["百度百舸开源全模态训练框架-loongforge：一套代码跑通-gpu-与昆仑芯，多模态训练提速-45%.md"]
---
# LLaVA-OneVision

LLaVA-OneVision 是一款全开源的全帧率多模态视觉语言模型，包含 1.5 和 2.0 两个版本。

## LLaVA-OneVision-2.0

面向真实业务场景中的视频理解需求，在不丢帧的前提下重构了视频理解路径，优化了帧级信息提取与视觉编码方式，显著减少冗余计算，将视频 token 消耗大幅降低。其视频理解能力可达到与 Qwen3-VL 相当的水平。

在训练过程中，[[loongforge|LoongForge]] 提供了异构并行、负载均衡等方面的系统性支持。

## LLaVA-OneVision-1.5

引入全新 RICE-ViT 视觉编码器的开源多模态模型。团队在数天内完成新编码器适配，在 128 张 A800 上完成 8B VLM Stage-1.5 预训练，验证了 LoongForge 快速支持新架构的工程能力。