---
type: concept
title: "KV 缓存压缩"
tags: [技术, 推理优化, 内存管理]
related: [deepseek-v4, kimi-k2-6, mla]
created: 2026-04-24
updated: 2026-04-24
sources: ["没想到！deepseek-v4里，竟还藏着一个中国万亿开源模型.md"]
---

# KV 缓存压缩

## 概述
[[KV 缓存压缩]] 是指在 Transformer 模型推理过程中，通过算法或架构优化减少 Key-Value (KV) 缓存占用的技术。这是解决长上下文模型高延迟、高内存成本问题的关键路径。

## 背景与挑战
- **问题根源**：在生成式推理中，模型需要缓存历史 token 的 Key 和 Value 向量以计算注意力。随着上下文长度增加，KV 缓存呈线性增长，导致内存溢出或推理速度急剧下降。
- **成本困境**：长上下文不仅“读得长”，还面临“账单难看、延迟难控”的产品化门槛。

## 主要技术路径

### 1. 架构级压缩
- **[[MLA (Multi-head Latent Attention)]]**：由 [[DeepSeek]] 首创。通过将 Q/K/V 压缩到低秩潜在向量，推理时只需缓存压缩向量。被 [[Kimi K2.6]] 采用。

### 2. 稀疏与选择性注意力
- **CSA (Compressed Sparse Attention)**：[[DeepSeek V4]] 采用的技术。每 4 个 token 的 KV 合并后再进行 top-k 选择，丢弃不重要的条目。
- **NSA (Native Sparse Attention)**：DeepSeek 的原生稀疏注意力方案，假设长序列中大部分 KV 条目对当前 query 贡献极小，可安全跳过。

### 3. 重压缩与线性注意力
- **HCA (Heavy Recompressed Attention)**：[[DeepSeek V4]] 采用的技术。实现 128 倍压缩率但保持全局稠密计算。
- **线性注意力**：[[Moonshot AI]] 探索的方向。将注意力计算重表述为线性形式，将复杂度从序列长度的平方降到线性。

### 4. 系统级调度
- **Mooncake**：[[Moonshot AI]] 提出的分离式存储和调度方案，将 KV 缓存从计算节点中剥离，进行独立管理。

## 成果对比
- [[DeepSeek V4]]：通过 CSA 和 HCA 交替堆叠，将推理算力降至 V3.2 的 27%，KV 缓存仅为前代的十分之一。
- [[Kimi K2.6]]：通过 MLA 和 Mooncake 体系，在万亿参数规模下实现了长上下文的可行推理。

## 参见
- [[批次不变性]]：DeepSeek 追求的另一工程确定性指标。
- [[DeepSeek V4]]：KV 缓存压缩技术的集大成者。