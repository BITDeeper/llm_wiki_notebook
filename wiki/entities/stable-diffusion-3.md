---
type: entity
title: Stable Diffusion 3
created: 2026-03-09
updated: 2026-03-09
tags: [model, generative-ai, image-generation]
related: [流匹配, vgg-flow]
sources: ["可微奖励就该直接微调！用hjb方程颠覆流匹配对齐｜neurips'25.md"]
---

# Stable Diffusion 3

Stable Diffusion 3 (SD3) 是一种先进的文生图生成模型。与早期基于扩散概率模型（DDPM）的版本不同，SD3 采用了 [[流匹配]]（Flow Matching）技术作为其核心生成范式。

## 技术特点

SD3 使用流匹配模型来模拟从噪声到数据的概率路径，通过学习速度场 $v(x,t)$ 来生成图像。这种架构使得模型能够利用 [[VGG-Flow]] 等基于 [[HJB方程]] 的最优控制方法进行高效微调。

## 应用案例

在 [[VGG-Flow]] 的研究中，SD3 被用作基准模型，验证了利用 [[价值梯度]] 进行对齐的有效性。实验表明，仅需 400 次更新即可显著提升其在 Aesthetic Score 和 PickScore 上的表现。