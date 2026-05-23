---
type: concept
title: 压缩稀疏注意力（CSA/HCA）
created: 2026-05-19
updated: 2026-05-19
tags: [注意力机制, 压缩, 稀疏注意力, 长上下文, 架构优化]
related: [deepseek-v4, multi-head-latent-attention-mla, 流形约束超连接-mhc, 长上下文效率优化]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
---
# 压缩稀疏注意力（CSA/HCA）

DeepSeek V4引入的两种压缩Attention机制的混合设计，压缩对象是Sequence Dimension本身（而非单个token的KV表示），旨在大幅降低超长上下文场景下的Attention成本。

## 与MLA的本质区别

| 维度 | [[multi-head-latent-attention-mla|MLA]] | CSA/HCA |
|------|------|---------|
| 压缩对象 | 每个token的KV表示 | Sequence Dimension本身 |
| 保留粒度 | 一token对应一个latent KV | 一组token汇总成更少压缩KV Entry |
| Cache长度 | 不变 | 变短 |

## CSA：压缩稀疏注意力

- 使用较轻的压缩率
- 结合类似DSA（DeepSeek Sparse Attention）的Sparse Selector
- 保留更多细节，但采用Sparse Selection

## HCA：重度压缩注意力

- 更激进的压缩：每 **128个token** 压缩成一个KV Entry
- 在高度压缩后的KV上执行Dense Attention
- 保留更少Entry，但能负担Dense Attention

## 互补设计

DeepSeek V4交替使用CSA与HCA，两者都保留一个Local Sliding-Window Branch处理最近的未压缩token。

## 效率数据

在1M Token Context下，相比采用MLA与DSA的DeepSeek V3.2：

| 指标 | DeepSeek V4-Pro | DeepSeek V4-Flash |
|------|----------------|-------------------|
| 推理FLOPs | 27% | 10% |
| KV Cache大小 | 10% | 7% |

## 重要说明

不应简单将CSA/HCA定义为"比MLA更好"。它是一种更激进、更复杂、更偏向长上下文效率的设计。DeepSeek V4的强结果来自完整训练体系（更好数据、Muon优化、mHC、精度优化等），而非单一架构改动。目前缺乏完整消融实验。