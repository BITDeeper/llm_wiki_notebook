---
type: concept
title: 双网格HSDP
created: 2026-05-19
updated: 2026-05-19
tags: [分布式训练, 并行计算, moe, 工程优化]
related: [composer-2-5, cursor, 分片muon优化器]
sources: ["编程新王composer-2.5来了，逼近opus-4.7！成本仅为110.md"]
---
# 双网格HSDP（Hybrid Sharded Data Parallelism）

一种针对MoE（混合专家）模型的定制化并行布局策略，由 [[cursor]] 在 [[composer-2-5]] 训练中采用。

## 核心思路

对MoE模型内部不同性质的权重，量身定制完全不同的HSDP布局，使并行维度得以完美重叠。

## 效果

例如，CP=2（上下文并行）和EP=8（专家并行）可以直接在8个GPU上高效运行，而无需在单个共享网格中占用16个GPU。这种对硬件资源的极致压榨是 Cursor 将推理和训练成本降至行业极低水平的底层底气。