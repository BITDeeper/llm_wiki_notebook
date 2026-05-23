---
type: entity
title: FLUX.2-klein-base-4B
created: 2026-05-16
updated: 2026-05-16
tags: [扩散模型, 基础模型, 图像生成]
related: [diffusion-templates, 魔搭社区]
sources: ["扩散模型也有「skills」了！魔搭开源11个现成模板，风格、修图、超清一键搞定.md"]
---

# FLUX.2-klein-base-4B

FLUX.2-klein-base-4B 是一个 40 亿参数的扩散模型基础模型，是 [[diffusion-templates]] 框架首批 11 个 Template 模型的训练基础。

## 关键信息

- **参数规模**：4B（40 亿参数）
- **用途**：作为 [[diffusion-templates]] 框架的基础模型，接受 Template Cache 输入进行可控生成
- **兼容性**：Template 模型与该模型的 LoRA 和微调版本兼容

## 在框架中的角色

在 [[diffusion-templates]] 架构中，FLUX.2-klein-base-4B 作为 Diffusion Pipeline 的基础模型，接收来自多个 Template 模型通过 Template Cache 传递的控制信息，最终生成受控的图像内容。[[魔搭社区]] 团队表示未来将基于该框架提供更多基础模型的 Templates。