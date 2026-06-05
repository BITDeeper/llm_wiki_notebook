---
type: concept
title: MSA 稀疏注意力
created: 2026-06-01
updated: 2026-06-04
tags: ["注意力机制", "稀疏注意力", "长上下文", "算子优化", "minimax", "架构"]
related: ["minimax-m3", "minimax", "长上下文扩展", "scaling-law", "稀疏注意力", "原生理解生成统一", "批次不变性"]
sources: ["minimax新旗舰m3发布！自己干了12小时复现获奖论文，三条科技树同时点满.md", "minimax-m3来了！.md", "硅谷ceo深夜站台！minimax-m3冲上开源第一，中文社区却吵翻了？.md"]
origin_date: 2026-06-01
---

# MSA 稀疏注意力

MSA（MiniMax Sparse Attention）是 [[minimax]] 自研的稀疏注意力机制，属于 Blockwise Sparse Attention 的一种，是 [[minimax-m3]] 实现 1M 超长上下文窗口的核心底层技术。MSA 与 [[原生理解生成统一|原生多模态训练]] 共同构成 M3 的三大技术基石。

## 问题背景

标准 Transformer 的全注意力机制要求每个 token 与序列中所有其他 token 做交互计算，复杂度随上下文长度平方级增长——上下文从 32K 扩展到 1M 时计算量膨胀近 1000 倍。传统注意力机制处理百万级上下文时，计算量呈指数级爆炸，GPU 显存和算力会被榨干。业内通常靠增加初筛阶段缓解，但精度和效率难以兼顾。

## 两步法机制

MSA 通过选择性计算 token 交互来降低复杂度，以块为单位进行注意力计算，跳过不相关的块。核心流程为两步：

### 第一步：Index Attention
- 将长序列的 KV cache 切成若干块
- 用轻量的索引 query 对 KV 块做 Block Max Pool
- 选出 Top-k 的高相关块

### 第二步：Sparse Attention
- 对选中的块做完整的稀疏注意力计算
- 对 KV 的分块粒度更精确，能按段落级别精准定位，实现更高的有效上下文覆盖

## 算子级优化：KV Outer Gather

- 以 KV 块为外层聚合命中 query
- 每块只读一次、访存连续，不做任何重复搬运
- 在 M3 的 head 配比下，计算访存比显著优于通行方法
- 比开源的 Flash-Sparse-Attention、FlashMoBA 快 4 倍以上

## 性能表现

在 1M 上下文下：

| 指标 | 数据 |
|------|------|
| 每 token 计算量 | 前代模型的 1/20 |
| Prefilling 阶段提速 | 超过 9 倍 |
| Decoding 阶段提速 | 超过 15 倍 |
| 训练稳定性 | 全程无 loss spike |
| 能力保持 | 多组对照实验中绝大部分能力与全注意力持平 |

## 技术定位与设计理念

MSA 的设计理念与 [[批次不变性]] 所代表的工程确定性追求形成对照——MSA 追求的是极致的计算效率而非数值确定性。

## 业界对比

与 DeepSeek DSA、Kimi MoBA 同属稀疏注意力方案，共同思路是分块 + 打分选择，但 MSA 在分块粒度和算子优化上做了更精细的设计。