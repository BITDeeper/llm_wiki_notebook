---
type: concept
title: 压缩卷积注意力（CCA）
created: 2026-05-19
updated: 2026-05-19
tags: [注意力机制, 压缩, 卷积, 架构优化, 长上下文]
related: [zaya1-8b, multi-head-latent-attention-mla, grouped-query-attention, 长上下文效率优化]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
origin_date: 2025-10-01
---
# 压缩卷积注意力（CCA）

Compressed Convolutional Attention（CCA）是一种直接在压缩后的latent space中完成Attention计算的机制，同时压缩Q、K、V，并通过卷积混合缓解压缩带来的表达能力损失。

## 与MLA的对比

| 维度 | [[multi-head-latent-attention-mla|MLA]] | CCA |
|------|------|-----|
| 压缩对象 | 仅KV | Q、K、V同时压缩 |
| 计算空间 | 压缩存储，但Attention仍在原始空间 | 直接在压缩latent space中计算 |
| 额外补偿 | 无 | 卷积混合（作用于Q和K） |
| 效果 | 减少KV Cache | 减少KV Cache + 降低Prefill/训练FLOPs |

## 卷积混合的作用

压缩会让Q、K、V维度变窄，降低计算量与缓存开销，但可能削弱Attention表达能力。卷积混合直接作用在压缩后的Q Tensor与K Tensor上，在Attention Score计算之前补充局部上下文信息。

- 卷积只作用于Q与K（决定Attention Score），不作用于V（被加权聚合的内容）
- 包含Sequence Mixing和Channel Mixing两个组件

## 性能表现

根据CCA论文实验结果，在相同压缩设置下，CCA的表现优于MLA。

## 应用

[[zaya1-8b|ZAYA1-8B]] 是首个将CCA作为核心架构组件投入使用的模型，结合4:1 GQA结构。

## 技术来源

独立论文《Compressed Convolutional Attention: Efficient Attention in a Compressed Latent Space》最早发表于2025年10月。