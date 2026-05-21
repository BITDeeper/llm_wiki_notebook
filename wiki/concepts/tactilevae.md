---
type: concept
title: TactileVAE
tags: [model, deep-learning, tactile, compression]
related: [omnivta, 变分自编码器]
created: 2026-03-26
updated: 2026-03-26
sources: ["「被动感知」到「理解接触」！它石智航重磅发布omnivta视触觉世界模型.md"]
---

# TactileVAE

TactileVAE 是一种用于处理高频触觉数据的变分自编码器（VAE）架构，由 [[omnivta]] 框架提出。

## 功能
- **数据压缩**：将高频、稠密的触觉 3D 形变数据压缩为低维连续潜变量表示。
- **时空建模**：通过时空联合编码，在空间上保留细粒度接触结构（如剪切、法向形变），在时间上建模触觉动态变化。

## 作用
作为 [[omnivta]] 的感知基础模块，它显著降低了数据维度与计算开销，为后续的 [[世界模型]] 预测与控制提供了可泛化的触觉表征，使机器人能够高效理解当前接触状态并快速响应环境变化。