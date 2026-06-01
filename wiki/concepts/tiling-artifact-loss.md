---
type: concept
title: TilingArtifactLoss（分块伪影损失）
created: 2026-05-30
updated: 2026-05-30
tags: [损失函数, 图像压缩, 分块处理, PICO]
related: [pico-感知图像编解码器, 感知压缩]
sources: ["苹果用ai重新发明了图像压缩：同样画质，文件只要三分之一.md"]
---
# TilingArtifactLoss（分块伪影损失）

TilingArtifactLoss 是 [[pico-感知图像编解码器|PICO]] 为解决图像分块处理导致的色块边界问题而引入的多分辨率 L1 损失函数。

## 问题背景

为在手机芯片上快速运行，PICO 将图像切成 504×504 像素的瓦片，分别处理再拼回去。但 GAN 在训练时倾向于忽略低频色彩，导致相邻瓦片之间常出现可见的色差，类似于修图时"没有拼好"的感觉。

## 机制

多分辨率 L1 损失函数，强制模型在多个空间频率上保持瓦片间色彩一致性。

## 效果

引入 TilingArtifactLoss 后，瓦片边界的误差下降 **50% 以上**。