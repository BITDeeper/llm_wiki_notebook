---
type: concept
title: Active-expert-chunked dequantization
created: 2026-05-28
updated: 2026-05-28
tags: [moe, 反量化, 显存优化, gpu]
related: [orbit, 量化, deepseek-v4]
sources: ["全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
---
# Active-expert-chunked dequantization

Active-expert-chunked dequantization（激活专家分块反量化）是 [[orbit]] 框架中针对 MoE 模型设计的动态专家反量化技术。

## 技术原理

在 MoE 模型中，每个词元只会激活部分 experts。该技术的核心流程：

1. 动态识别 router 选中的激活 experts。
2. 将激活 experts 分组成固定大小的 batch。
3. 临时反量化后执行 grouped GEMM。
4. 计算结束后立即释放高精度权重。

## 优势

- 利用 grouped matrix multiplication 的吞吐优势。
- 将临时显存峰值限制在较小 chunk 内。
- 避免大规模低精度 MoE 训练中的 OOM（显存溢出）问题。