---
type: concept
title: Multi-block Masking 多块掩码策略
created: 2026-05-15
updated: 2026-05-15
tags: [自监督学习, 掩码, jepa, 数据增强]
related: [jepa, i-jepa]
sources: ["160行代码读懂lecun的jepa世界模型.md"]
---
# Multi-block Masking 多块掩码策略

Multi-block Masking（多块掩码策略）是 [[jepa]] 系列模型中用于构造自监督学习任务的核心技术。

## 核心思想

将图像或视频分割为若干 patch（或管块），然后遮掉其中多个区块，让模型从可见区域预测被遮区域的 embedding。这种策略迫使模型学习数据的高级语义表征，而非低级像素细节。

## 在 I-JEPA 中的应用

在 [[i-jepa]] 中，multi-block masking 同时遮掉图像的多个区域，预测器需要从可见 patch 的 embedding 推断被遮 patch 的 embedding。

## 与其他掩码策略的关系

- [[v-jepa]] 将二维掩码扩展为三维管状掩码
- [[c-jepa]] 从 patch 级掩码转向物体级轨迹掩码
- [[leworldmodel]] 完全不使用掩码策略