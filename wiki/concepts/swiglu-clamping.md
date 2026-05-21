---
type: concept
title: SwiGLU Clamping
tags: [optimization, training, activation-function]
related: [training-stability-challenge, anticipatory-routing]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告亮了！v4发布延迟的秘密，终于曝光了.md"]
---

# SwiGLU Clamping

SwiGLU Clamping 是一种用于提升大模型训练稳定性的工程手段，由 DeepSeek 在 [[DeepSeek V4]] 的训练过程中采用。

## 定义
该方法将 SwiGLU 激活函数的输出数值范围强行钳制在 **[-10, 10]** 的区间内。

## 目的
其目的是从源头压制数值异常值的产生，防止这些异常值在后续的 MoE 路由和梯度更新中被无限放大。

## 特点
- **暴力但有效**：这是一种简单直接的数值截断方法，虽然缺乏理论上的优雅性，但在实际工程中被证明极其有效。
- **工程哲学体现**：反映了 DeepSeek 面对超大规模训练中的未知难题时，优先采用实用主义工程手段解决问题的态度。