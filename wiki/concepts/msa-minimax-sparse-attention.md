---
type: concept
title: MSA（MiniMax Sparse Attention）
created: 2026-06-02
updated: 2026-06-02
tags: [稀疏注意力, 注意力机制, 大模型架构, gpu优化]
related: [minimax-m3, minimax, 批次不变性]
sources: ["minimax-m3一手实测：老黄ppt上74个logo，我以为能难住它.md"]
origin_date: 2026-06-01
---
# MSA（MiniMax Sparse Attention）

[[minimax]] 自研的新型稀疏注意力机制，用于支撑 [[minimax-m3]] 的1M长上下文能力。

## 核心设计

MSA通过以KV块为外层循环汇聚命中它的query，让每块只读一次、访存连续，获得了极高的硬件利用率。设计思路清晰明了，用最简单的架构实现高效Scaling。

## 技术路线对比

稀疏注意力领域多家公司都在探索，但赌的方向完全不同：

| 方案 | 来源 | 特点 |
|------|------|------|
| **MoBA** | 清华+浙大+月之暗面（arXiv:2502.13189） | 思路最干净，序列切块+轻量路由器选top-k相关块，复杂度从O(n²)压到近线性 |
| **FlashMoBA** | MIT+英伟达（arXiv:2511.11571） | 用fused CUDA kernel重写MoBA，解决GPU效率问题 |
| **NSA** | DeepSeek研究层面（arXiv:2502.11089） | 论文数字好看但结构复杂，质量提升主要来自门控机制 |
| **DSA** | DeepSeek工程落地 | NSA在工程侧的落地演进版 |
| **CSA+HCA** | [[DeepSeek V4]] | DSA的进一步发展，设计极为复杂，行业玩家自行使用难度大 |
| **MSA** | [[minimax]] | 架构最简洁，同样实现高效Scaling |

## 核心优势

相比DeepSeek的CSA+HCA混合架构，MSA的设计思路清晰，实现高效Scaling的同时保持最简架构，降低了行业玩家采用门槛。