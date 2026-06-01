---
type: concept
title: DDIM（去噪扩散隐式模型）
created: 2026-05-31
updated: 2026-05-31
tags: [扩散模型, 采样加速, 生成模型, 算法]
related: [宋佳铭, luma-ai, 原生理解生成统一]
sources: ["ddim之父宋佳铭，宣布离职.md"]
origin_date: 2020-01-01
---
# DDIM（Denoising Diffusion Implicit Models）

DDIM全称Denoising Diffusion Implicit Models（去噪扩散隐式模型），是2020年由 [[宋佳铭]] 作为第一作者提出的扩散模型采样加速方法。

## 核心原理

DDIM通过用隐式模型替代显式马尔可夫链，大幅减少了扩散模型的推理步数。传统扩散模型（如DDPM）需要数百步逐步去噪才能生成图像，而DDIM允许在保持生成质量的前提下将步数压缩到数十步甚至更少，从而显著提升推理效率。

## 影响与意义

DDIM与DDPM共同奠定了扩散模型在图像生成领域的理论基础。几乎所有基于扩散模型的图像生成工具——包括Stable Diffusion、DALL-E、Midjourney——背后都离不开DDIM带来的采样加速技术。可以说，DDIM是扩散模型从学术研究走向工业化落地的关键使能技术。

## 与相关概念的关系

- DDIM解决的是扩散模型的**推理效率**问题，而 [[原生理解生成统一]] 关注的是多模态模型的**架构统一**问题，两者分别从不同维度推动了生成式AI的发展
- DDIM的提出者 [[宋佳铭]] 后来在 [[luma-ai]] 继续推进多模态基础模型方向，体现了从单一模态优化到多模态统一的技术演进脉络