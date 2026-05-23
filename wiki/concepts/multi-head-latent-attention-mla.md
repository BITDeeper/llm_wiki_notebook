---
type: concept
title: Multi-head Latent Attention（MLA）
created: 2026-05-19
updated: 2026-05-19
tags: [注意力机制, 压缩, kv-cache, 架构优化]
related: [deepseek-v4, 压缩卷积注意力-cca, 压缩稀疏注意力-csa-hca, grouped-query-attention]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
---
# Multi-head Latent Attention（MLA）

DeepSeek V2/V3中引入的注意力压缩机制，通过latent representation压缩每个token的KV表示，是[[压缩卷积注意力-cca|CCA]]和[[压缩稀疏注意力-csa-hca|CSA/HCA]]的重要对比基准。

## 核心原理

MLA将KV Tensor以压缩形式存储（latent representation），在需要计算Attention时再投影回Attention Head空间。其主要目标是压缩KV Cache的存储开销。

## 与后续技术的关系

- **vs CCA**：MLA仅在存储端压缩KV，Attention计算仍在原始空间进行；CCA同时压缩Q、K、V并直接在latent space中计算
- **vs CSA/HCA**：MLA压缩每个token的KV表示但保留"一token一latent KV"；CSA/HCA进一步压缩Sequence Dimension本身，将一组token汇总成更少Entry

## 历史地位

MLA是DeepSeek系列模型在注意力压缩方面的早期探索，为后续更激进的CSA/HCA设计奠定了基础。在DeepSeek V4中，MLA被CSA/HCA取代。