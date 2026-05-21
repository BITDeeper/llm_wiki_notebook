---
type: concept
title: Block AttnRes
created: 2026-03-17
updated: 2026-03-17
tags: [optimization, attention-mechanism, engineering]
related: [attention-residuals, kimi-linear-48b]
sources: ["kimi新架构让马斯克叹服！17岁高中生作者一战成名.md"]
---

# Block AttnRes

**Block AttnRes**（分块注意力残差）是 [[Attention Residuals]] 的工程优化版本，旨在解决原始机制在深层网络中计算复杂度过高（$O(L^2)$）的问题。

## 核心思想
将连续的若干层打包成一个 **Block**，对 Block 内部的信息进行压缩，从而减少后续层需要关注的信息量。

## 具体机制
1. **分组**：将 $L$ 层网络分成 $B$ 个 Block，每个 Block 包含若干连续的层。
2. **压缩**：在每个 Block 结束时，将 Block 内所有层的输出压缩成一个单一的“摘要向量”。
3. **聚合**：后续层在进行 Attention Residuals 计算时，只需要关注：
   - 之前各个 Block 的摘要向量。
   - 当前 Block 内的实时层输出。

## 效果
- **复杂度降低**：将 Attention Residuals 的计算复杂度从 $O(L^2)$ 降低至 $O(L \cdot B)$。
- **参数设置**：在实践中，$B$ 可以设置得很小（论文中建议为 8-16），使得计算开销可控。
- **性能保持**：在 [[Kimi Linear 48B]] 上的实验表明，Block AttnRes 在大幅降低计算量的同时，依然保留了 Attention Residuals 带来的训练效率提升（1.25 倍）。

## 相关技术
该技术结合了缓存式流水线通信、序列分片预填充等工程优化，是 [[Attention Residuals]] 能够在实际大规模模型中落地的关键。