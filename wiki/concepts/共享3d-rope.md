---
type: concept
title: 共享3D RoPE
created: 2026-05-21
updated: 2026-05-21
tags: [位置编码, 时空建模, 视觉语言模型]
related: [llava-onevision-2, codec-stream-tokenization]
sources: ["llava-onevision-2迈向下一代感知智能的视觉语言大模型.md"]
---
# 共享 3D RoPE

共享 3D RoPE 是 [[llava-onevision-2]] 中使用的旋转位置编码方案，将码流画布、采样帧、静态图像三种输入形态置于统一的时空坐标系中。

## 设计目的

无论输入形态如何（码流视频、均匀采样视频、静态图像），连接器与语言模型看到的接口都保持不变。这保证了 [[llava-onevision-2]] 架构中"一种视觉接口，三种证据来源"的设计理念。

## 技术细节

- 码流画布（I-canvas + P-canvas）携带时空位置信息
- 采样帧携带均匀时间位置信息
- 静态图像携带空间位置信息
- 三者共享同一套 3D 旋转位置编码参数