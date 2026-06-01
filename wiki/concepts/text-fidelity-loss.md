---
type: concept
title: TextFidelityLoss（文字保真损失）
created: 2026-05-30
updated: 2026-05-30
tags: [损失函数, 图像压缩, 文字保真, PICO, GAN]
related: [pico-感知图像编解码器, gan-幻觉, 感知压缩]
sources: ["苹果用ai重新发明了图像压缩：同样画质，文件只要三分之一.md"]
---
# TextFidelityLoss（文字保真损失）

TextFidelityLoss 是 [[pico-感知图像编解码器|PICO]] 针对 [[gan-幻觉|GAN 幻觉]] 在文字区域的问题专门设计的损失函数。

## 问题背景

使用 GAN 训练的感知编解码器会产生"看起来真实但不存在"的纹理。人眼对文字极度敏感，哪怕一个字母变形一点点就会立刻被察觉。GAN 在文字区域的"发挥"会导致文字变形、模糊或产生虚假笔画。

## 机制

1. 利用现成的文字检测器自动找出图中的文字区域
2. 在这些区域强制施加严格的像素保真约束
3. 同时压制 GAN 在文字区域的"发挥空间"

## 效果

加上 TextFidelityLoss 后，文字区域的绝对误差降低了 **50%**。