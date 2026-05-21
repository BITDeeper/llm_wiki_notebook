---
type: concept
title: RQ-VAE
tags: [模型架构, 量化, 深度学习]
related: [语义id, diger, 码本塌缩]
created: 2026-04-30
updated: 2026-04-30
sources: ["生成式推荐补上关键一环！语义id首次实现可微分联合优化-sigir'26.md"]
---

# RQ-VAE

**RQ-VAE** (Residual Quantized Variational Autoencoder) 是一种用于学习离散表示的变分自编码器变体。它通过残差量化的方式，将高维输入数据编码为一系列离散的 Code 索引。

## 在推荐系统中的角色

在 [[生成式推荐]] 流程中，RQ-VAE 常被用作 **Tokenizer**，负责将物品内容映射为 [[语义id]]。

## 局限性

在传统的两阶段训练流程中，RQ-VAE 往往先于推荐模型训练并随后被冻结。这意味着它学习到的离散表示主要服务于“内容重建”目标，而非“推荐准确性”目标。这种目标错位是 [[diger]] 试图解决的核心问题。