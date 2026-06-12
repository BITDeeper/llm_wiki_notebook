---
type: entity
title: GDN（Gated DeltaNet）
created: 2026-06-09
updated: 2026-06-09
tags: [线性注意力, 序列模型, NeurIPS-2024]
related: [prism, ttt-test-time-training, 线性注意力]
sources: ["rss/当线性注意力学会「写入前思考」：并行化的多步记忆写入.md"]
origin_date: 2024-01-01
---
# GDN（Gated DeltaNet）

**GDN**（Gated DeltaNet）是由 Yang 等人提出的线性注意力模型（NeurIPS 2024），是[[prism|PRISM]]的直接基础架构。PRISM 在 L=1 时精确退化为 GDN。

## 核心特性

- 使用固定大小状态矩阵 S 压缩存储历史信息，复杂度 O(N)
- 每个 token 对 S 做 rank-1 外积更新：遗忘（选择性遗忘）+ 写入（rank-1 外积）
- 遗忘项和写入项都只依赖当前输入，不依赖历史状态 S
- 满足 parallel scan 的数学前提，可并行训练

## Rank-1 写入瓶颈

GDN 的核心局限在于每次只能往 S 里写入一个 rank-1 的外积（两个向量的乘积），相当于在整个 d×d 的记忆矩阵上只改动了"一行"。如果一个 token 携带的语义是多维度的，rank-1 写入无法同时在这些维度上做精细调整。

## 在技术谱系中的位置

- **前身：** Linear Attention（ICML 2020）
- **后继：** [[prism|PRISM]]（ICML 2026）——GDN + 非线性旁路，L=1 时退化为 GDN

## 参考文献

- Yang et al. "Gated Delta Networks with Pairwise Tokenized Graphs." NeurIPS 2024.
- Katharopoulos et al. "Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention." ICML 2020.