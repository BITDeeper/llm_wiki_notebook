---
type: concept
title: SWA 结构
tags: [architecture, inference, optimization]
related: [step-3.5-flash, 投机采样, 推理加速]
created: 2026-02-28
updated: 2026-02-28
sources: ["openclaw杀出中国黑马，全球开发者狂呼真香！一场深夜ama撕开底牌.md"]
---

# SWA 结构

SWA 结构（Sliding Window Attention 或相关变体）是一种对[[投机采样]]（Speculative Sampling）友好的模型架构设计。

## 作用

在 [[step-3.5-flash]] 等模型中，采用 SWA 结构旨在提升推理速度。它允许模型利用投机采样技术，通过一个小型草稿模型来预测大模型的输出，从而在不显著损失生成质量的情况下，大幅提高 Token 生成速度。

## 意义

这种架构选择体现了在 [[agent-时代]]，为了追求极致的 [[推理速度-生死线]]，模型设计不仅关注参数量，更关注底层架构对推理加速技术的兼容性。