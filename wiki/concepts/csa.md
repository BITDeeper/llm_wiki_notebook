---
type: concept
title: CSA (压缩稀疏注意力)
tags: [attention, efficiency, deepseek]
related: [deepseek-v4, hca, long-context]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告太详尽了！484天换代之路全公开.md"]
---

# CSA (压缩稀疏注意力)

[[CSA]] (Compressed Sparse Attention) 是 [[DeepSeek V4]] 混合注意力机制的一部分，专注于在保持精度的同时提高长文本处理的效率。

## 工作流程
CSA 的处理分为四个步骤：
1. **KV 压缩**：每 m 个 token 的 KV entries 通过一个带学习权重的 attention-like 机制压缩成一个。
2. **稀疏选择**：使用 lightning indexer 计算每个 query token 与压缩 KV 块的相关性分数，并进行 top-k 选择。
3. **核心注意力**：在选中的 top-k 压缩 KV 块上执行 Multi-Query Attention。
4. **分组输出投影**：为了降低计算成本，将 attention heads 分组进行投影。

## 作用
CSA 通过两层压缩（序列长度压缩 + 稀疏选择），将原本需要对 1M token 进行的 attention 计算减少到仅需关注 1024 个压缩块。它主要负责 token-level 的精细检索，与负责全局信号汇总的 [[HCA]] 配合使用。