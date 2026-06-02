---
type: concept
title: MaPE 模态感知位置编码
created: 2026-06-01
updated: 2026-06-01
tags: [位置编码, 多模态, 模型架构]
related: [lance, 双专家混合架构, 原生理解生成统一]
sources: ["“理解”和“生成”相互成就，字节跳动发布-lance：轻量级统一多模态模型的新标杆.md"]
---
# MaPE 模态感知位置编码

模态感知旋转位置编码（Modality-Aware Rotary Positional Encoding, MaPE）是[[lance|Lance]]模型提出的一种位置编码方案，用于在统一多模态序列中区分不同功能的 Token 组。

## 问题背景

在[[双专家混合架构]]的统一序列中，同时存在语义 Token、干净的 VAE 条件 Token 和加噪的 VAE 目标 Token。如果只用传统的 3D-RoPE，模型难以分清这些功能各异的 Token 组。

## 技术方案

MaPE 在时间维度上为不同的 Token 组引入特定的偏移量。这种设计在不破坏图像/视频内部空间结构的前提下，在全局位置空间中为不同功能的 Token 划清界限。

## 效果

显著提升了跨任务的对齐效果，是 Lance 实现[[原生理解生成统一]]的关键创新之一。