---
type: source
title: "字节会师何恺明！开源连续扩散语言模型Cola DLM"
created: 2026-05-18
updated: 2026-05-18
tags: [扩散语言模型, 连续潜在空间, 字节跳动, 开源模型, 多模态统一]
related: [cola-dlm, 连续扩散语言模型, 字节seed团队, 量子位]
sources: ["字节会师何恺明！开源连续扩散语言模型cola-dlm.md"]
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/sSWrWvSQ8tw8yhFRip-aAw"
venue: 量子位公众号
---
# 字节会师何恺明！开源连续扩散语言模型Cola DLM

量子位发布的深度报道，介绍字节跳动Seed团队开源的连续潜在扩散语言模型 [[cola-dlm]]。该模型与何恺明团队的ELF几乎同期发布，共同挑战"语言模型必须建立在离散token上"这一被默认二十年的假设。

## 核心内容

- Cola DLM在~2B参数、约2000 EFLOPs严格对照实验下，展现出比自回归模型和主流离散DLM更稳定的scaling趋势
- 核心动机不是diffusion本身，而是representation（表征）——Token只是语义的表层载体
- 采用 [[text-vae]] 将离散文本压缩为连续潜在表示，配合Block-Causal DiT + Flow Matching进行先验建模
- 提出 [[三子任务诊断框架]]，将训练目标拆分为重建能力、压缩能力、拟合能力三个可独立诊断的子任务
- 揭示字节的战略野心：为语言模型造桥，将其接入连续多模态世界

## 关键链接

- 抱抱脸：https://huggingface.co/ByteDance-Seed/Cola-DLM
- GitHub：https://github.com/ByteDance-Seed/Cola-DLM
- 论文：https://arxiv.org/abs/2605.06548
- 博客：https://hongcanguo.github.io/posts/2026-cola-dlm-zh.html