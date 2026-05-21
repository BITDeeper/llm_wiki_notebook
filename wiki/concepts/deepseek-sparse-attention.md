---
type: concept
title: DeepSeek Sparse Attention
tags: [algorithm, attention, optimization]
related: [hisa, deepseek-v3-2]
created: 2026-04-06
updated: 2026-04-06
sources: ["北大团队改造deepseek注意力，速度快四倍还不丢精度.md"]
---

# DeepSeek Sparse Attention

**DeepSeek Sparse Attention** (DSA) 是一种 token 级稀疏注意力机制，被用于 [[deepseek-v3-2]] 等模型中以降低计算成本。

## 工作原理

DSA 的核心思想是通过只计算关键 token 的注意力来降低核心计算成本。为了筛选出这些关键 token，DSA 使用了一个“索引器”，该索引器会将每个待查询的 token 与上下文中的所有其他 token 进行打分比较，选出分数最高的 token 进行后续计算。

## 瓶颈问题

虽然 DSA 减少了注意力计算本身的量，但其索引器存在一个“致命隐藏问题”：为了挑选相关字符，索引器需要将每个待查字符与前面所有字符逐一打分。这导致了 $O(L^2)$ 的计算复杂度。当文本长度 $L$ 增加时（例如处理 64K 或更长的上下文），索引器的平方级成本反而成为拖慢整体速度的元凶，甚至比真正的注意力计算还要耗时。

## 改进方案

[[hisa]]（分层索引稀疏注意力）正是为了解决 DSA 的这一索引瓶颈而提出的。HISA 通过分层筛选大幅降低了索引器的计算复杂度，同时保持了与 DSA 相同的筛选结果和精度。