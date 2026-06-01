---
type: entity
title: OSCAR
created: 2026-05-29
updated: 2026-05-29
tags: [量化, kv-cache, 推理优化, 算法, 系统]
related: [together-ai, kv-cache-量化, turboquant, sglang, 量化, 注意力感知旋转]
sources: ["超越turboquant，面向长上下文推理的真2-bit-kv-quantization算法问世.md"]
origin_date: 2026-05-01
---
# OSCAR

**OSCAR**（Offline Spectral Covariance-Aware Rotation）是由 [[together-ai]] 提出的面向长上下文推理的真 2-bit [[kv-cache-量化]] 系统。它是首个能在约 2.28 BPE（bits per element）设置下稳定保持现代推理模型质量的 KV Cache 量化方法。

## 核心设计

OSCAR 的核心创新是 [[注意力感知旋转]]（Attention-Aware Rotation），其关键思想是将旋转目标从"重建原始 K/V 向量"改为"保留 attention 消费 KV 的方式"：

- **Key 旋转**：利用 query covariance（QᵀQ）构造 key 的旋转目标，因为量化误差会进入 attention logits（QKᵀ）。
- **Value 旋转**：使用 score-weighted value covariance（VᵀSᵀSV），因为误差经过注意力权重进入输出。
- **旋转矩阵**：R = U・Hadamard・bit-reversal，其中 U 对准 attention 相关方向，Hadamard 分散 outlier，bit-reversal 平衡 INT2 分组。

## Token 池策略

OSCAR 维护混合精度缓存布局：

- **BF16 Sink**（64 tokens）：保护 attention sink
- **INT2 History**（约 2.28 BPE）：中间最长的历史段
- **BF16 Recent**（256 tokens）：保护短期局部上下文

新 token 先写入 recent window，随着解码推进，最老的 recent token 由融合 Triton kernel 执行 rotate/clip/quantize/pack，降级到 INT2 history。

## 评估结果

| 模型 | OSCAR Mean | BF16 Mean | 差距 |
|------|-----------|-----------|------|
| Qwen3-4B-Thinking | 71.86 | 75.64 | -3.78 |
| Qwen3-8B | 69.42 | 70.84 | -1.42 |
| Qwen3-32B | ≈ BF16 | — | 基本持平 |
| GLM-4.7-FP8 | ≈ BF16 | — | 基本持平 |

相对 [[turboquant]]（全层 3-bit K/V，无 mixed-precision 保护），OSCAR 在 Qwen3-4B-Thinking 上提升 40.1 分。128K RULER-NIAH 测试中保持稳定检索性能。

## 系统收益

- 约 **8×** KV Cache 显存减少
- Decode 最高约 **3×** 加速（100k context, batch-size-1, full prefix-cache hit）
- Job-level throughput 最高约 **7×**（大 batch、同显存预算）
- 完全兼容 paged KV、radix prefix cache 和 [[sglang]] 的 fused kernel pipeline

## 工程集成

OSCAR 已接入 [[sglang]] 推理框架，实现开箱即用的 2-bit KV serving。最新代码库已引入 Lloyd Max Codebook 进一步提升压缩效果。

## 与 TurboQuant 的关系

[[turboquant]] 是通用在线向量量化方法，OSCAR 针对的是 attention-aware 2-bit KV serving。二者不是简单替代关系，而是互补定位。