---
type: concept
title: SQMMA张量加速引擎
created: 2026-05-14
updated: 2026-05-14
tags: [GPU硬件, 张量计算, 算子加速, 摩尔线程]
related: [musa架构, 摩尔线程, deepseek-v4]
sources: ["国产gpu组了个开源局，把sglang等核心开发者都摇来了！.md"]
---
# SQMMA张量加速引擎

[[摩尔线程]] GPU 中的硬件加速单元，配合 FlagOS/Triton 实现关键推理算子的性能优化。

## 性能数据

在 [[deepseek-v4|DeepSeek V4]] 适配中：
- FP8 矩阵乘算子平均加速8.85倍
- 稀疏注意力算子平均加速6.01倍
- 这两个算子占推理时间80%，优化后端到端首 token 延迟降低56.7%，吞吐量提升23%

## 技术定位

SQMMA 是 [[musa架构|MUSA]] 硬件层面的核心加速单元，与软件层的 FlagOS/Triton 算子优化形成软硬件协同优化闭环。