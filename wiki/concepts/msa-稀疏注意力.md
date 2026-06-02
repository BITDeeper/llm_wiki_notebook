---
type: concept
title: MSA 稀疏注意力
created: 2026-06-01
updated: 2026-06-01
tags: [注意力机制, 稀疏注意力, 长上下文, 算子优化]
related: [minimax-m3, minimax, 长上下文扩展, scaling-law, 稀疏注意力]
sources: ["minimax新旗舰m3发布！自己干了12小时复现获奖论文，三条科技树同时点满.md", "minimax-m3来了！.md"]
---
# MSA 稀疏注意力

MSA（MiniMax Sparse Attention）是 [[minimax]] 自研的稀疏注意力机制，属于 Blockwise Sparse Attention 的一种，是 [[minimax-m3]] 实现1M超长上下文窗口的核心底层技术。

## 问题背景

标准 Transformer 的全注意力机制要求每个 token 与序列中所有其他 token 做交互计算，复杂度随上下文长度平方级增长——上下文从 32K 扩展到 1M 时计算量膨胀近 1000 倍。业内通常靠增加初筛阶段缓解，但精度和效率难以兼顾。

## 两步法机制

MSA 通过选择性计算 token 交互来降低复杂度，核心流程为两步：

### 第一步：Index Attention
- 将长序列的 KV cache 切成若干块
- 用轻量的索引 query 对 KV 块做 Block Max Pool
- 选出 Top-k 的高相关块

### 第二步：Sparse Attention
- 对选中的块做完整的稀疏注意力计算
- 对 KV 的分块粒度更精确，能按段落级别精准定位，实现更高的有效上下文覆盖

## 算子级优化：KV Outer Gather

- 以 KV 块为外层聚合命中 query
- 每块只读一次、访存连续
- 在 M3 的 head 配比下，计算访存比显著优于通行方法
- 比开源的 Flash-Sparse-Attention、FlashMoBA 快 4 倍以上

## 性能表现

在 1M 上下文下：
- 每 token 计算量降至前代模型 1/20
- Prefilling 阶段提速超过 9 倍
- Decoding 阶段提速超过 15 倍
- 训练全程无 loss spike
- 多组对照实验中绝大部分能力与全注意力持平

## 业界对比

与 DeepSeek DSA、Kimi MoBA 同属稀疏注意力方案，共同思路是分块 + 打分选择，但 MSA 在分块粒度和算子优化上做了更精细的设计。