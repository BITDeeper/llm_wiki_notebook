---
type: concept
title: RS-RoPE（相对语义旋转位置编码）
created: 2026-06-11
updated: 2026-06-11
tags: [位置编码, 跨模态对齐, RoPE, 扩散模型]
related: [baton, 语义蓝图, 双语义对齐塔]
sources: ["rss/指令遵循媲美seedance-2.0！复旦腾讯联合提出baton，多说话人场景m-wer暴降76%.md"]
---
# RS-RoPE（相对语义旋转位置编码）

Relative Semantic RoPE（RS-RoPE）是[[baton|Baton]]框架提出的位置编码机制，用于统一planned tokens与diffusion latents之间的位置编码空间。

## 解决的问题

Planned tokens与扩散模型中的latents分布在不同的时空网格上，天然存在位置对应不一致的问题。RS-RoPE通过构建统一的相对位置编码空间，实现planned tokens与diffusion latents之间的精确语义对齐。

## 与其他RoPE设计的关系

Baton在不同阶段采用两种不同的RoPE设计：

1. **时间戳RoPE（Timestamp-based RoPE）**：用于[[双语义对齐塔]]中的跨模态注意力，负责规划阶段的跨模态token对齐
2. **RS-RoPE（Relative Semantic RoPE）**：用于DiT中的跨模态注意力，负责在扩散去噪阶段对齐planned tokens与扩散潜变量