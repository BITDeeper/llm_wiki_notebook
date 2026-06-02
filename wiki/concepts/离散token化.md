---
type: concept
title: 离散Token化
created: 2026-06-02
updated: 2026-06-02
tags: [多模态, token化, 表示学习, avi]
related: [音视频智能-avi, clip, imagebind]
sources: ["2026最新综述-新国立&牛津等发布大模型时代的音视频智能（avi）全景指南.md"]
---
# 离散Token化

**离散Token化** 是当前大模型处理多模态数据的主流技术路径。通过VAE（变分自编码器）或EnCodec等技术，将连续的音频波形和视觉像素转化为离散的Token序列，使Transformer可以像处理文本一样统一处理音频和视觉数据。

## 技术原理

1. 音频是1D波形，视觉是2D/3D像素——本质上是连续信号
2. 通过编码器（如VAE、EnCodec）将连续信号量化为离散Token
3. 每个Token类似于文本中的"单词"
4. Transformer通过预测下一个视听Token实现理解和生成

## 与连续嵌入的对比

| 路径 | 技术 | 特点 |
|------|------|------|
| 连续嵌入 | [[clip]]、[[imagebind]] | 将不同模态映射到同一语义空间 |
| 离散Token化 | VAE、EnCodec | 将连续信号转化为离散Token，Transformer统一处理 |

离散Token化是[[音视频智能-avi]]系统实现统一架构的关键使能技术，使得理解和生成可以在同一个Transformer框架下完成。