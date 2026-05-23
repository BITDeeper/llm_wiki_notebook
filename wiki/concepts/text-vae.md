---
type: concept
title: Text VAE（文本变分自编码器）
created: 2026-05-18
updated: 2026-05-18
tags: [变分自编码器, 文本表征, 连续空间]
related: [cola-dlm, 连续扩散语言模型, 潜在先验传输]
sources: ["字节会师何恺明！开源连续扩散语言模型cola-dlm.md"]
---
# Text VAE（文本变分自编码器）

Text VAE是 [[cola-dlm|Cola DLM]] 中用于将离散文本压缩为连续潜在表示的编码器-解码器结构，是实现语义与实现分层的关键架构组件。

## 架构

- **Encoder**：将离散文本压缩成连续latent（相当于提取"语义指纹"）
- **Decoder**：将latent还原回文本

## 与Token Embedding的区别

Token embedding与token一一绑定，每个token一个向量，本质上还是token序列。而Text VAE生成的latent是一个可以连续变化、可被概率建模的随机变量。模型处理的对象不再是"下一个token"，而是"整段文本对应的语义状态"。

## 训练策略

训练时Encoder在diffusion阶段基本冻结不动，防止语义表示被diffusion带偏而退化为"穿了马甲的token"。同时加入语义约束（BERT风格mask loss），防止encoder在重建时发生语义坍塌。