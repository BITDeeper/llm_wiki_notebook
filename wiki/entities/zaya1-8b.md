---
type: entity
title: ZAYA1-8B
created: 2026-05-19
updated: 2026-05-19
tags: [zyphra, 开源模型, llm, 注意力机制, amd-gpu]
related: [压缩卷积注意力-cca, multi-head-latent-attention-mla, grouped-query-attention]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
---
# ZAYA1-8B

由 Zyphra 开发的8B参数模型，使用 **AMD GPU** 完成训练（而非更常见的NVIDIA GPU或Google TPU）。核心架构创新为[[压缩卷积注意力-cca|压缩卷积注意力（CCA）]]。

## 架构概览

- **层数**：80个交替出现的layer entry（可简化理解为40个"Attention + MoE" Pair）
- **注意力机制**：CCA + 4:1 GQA
- **MoE结构**：相当激进的稀疏设计，每个token只激活一个routed expert

## 核心创新：CCA

CCA（Compressed Convolutional Attention）与[[multi-head-latent-attention-mla|MLA]]的关键区别在于：

- **MLA**：压缩KV Cache存储，但Attention计算仍在原始空间进行
- **CCA**：同时压缩Q、K、V，并**直接在压缩后的latent space中完成Attention运算**

CCA不仅减少KV Cache大小，还能降低Prefill阶段与训练阶段的Attention FLOPs。

### 卷积混合
在压缩后的latent K与latent Q上额外加入卷积混合（convolutional mixing），为压缩后的表示补充局部上下文信息，缓解压缩带来的表达能力损失。卷积只作用于Q与K（决定Attention Score），不作用于V（被加权聚合的内容）。

## 性能
根据CCA论文实验结果，在相同压缩设置下，CCA的表现优于MLA。

## 技术来源
CCA独立论文《Compressed Convolutional Attention: Efficient Attention in a Compressed Latent Space》最早发表于2025年10月。