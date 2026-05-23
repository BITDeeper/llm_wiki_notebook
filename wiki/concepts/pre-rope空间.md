---
type: concept
title: Pre-RoPE空间
created: 2026-05-14
updated: 2026-05-14
tags: [注意力机制, 位置编码, rope]
related: [triattention, kv-cache压缩]
sources: ["英伟达mit出手！华人团队重磅开源，大模型推理内存暴降10倍.md"]
---
# Pre-RoPE空间

Pre-RoPE 空间是指旋转位置编码（Rotary Position Embedding, RoPE）应用之前的注意力空间。[[triattention]] 选择在此空间中评估 token 重要性，利用 Q/K 的三角集中度来判断每个 KV token 的价值。这一设计选择是 TriAttention 方法的核心创新点之一。