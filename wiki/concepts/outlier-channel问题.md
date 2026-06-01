---
type: concept
title: Outlier Channel 问题
created: 2026-05-29
updated: 2026-05-29
tags: [量化, kv-cache, 神经网络, 异常值]
related: [kv-cache-量化, 注意力感知旋转, oscar-kv-quantization, 量化]
sources: ["超越turboquant，面向长上下文推理的真2-bit-kv-quantization算法问世.md"]
---
# Outlier Channel 问题

**Outlier Channel 问题** 是低比特量化中的核心难点。在 KV activation 中，常常有少数幅值极大的通道（outlier channel），这些通道会主导量化尺度，导致大多数正常值被压缩到极少的有效量化等级中。

## 对 KV Cache 量化的影响

在 [[kv-cache-量化]] 场景中，outlier channel 问题尤为严重：

- INT2 只有 4 个量化等级，outlier 主导尺度后，正常值几乎无法区分
- 注意力分布快速漂移，推理能力崩溃
- 朴素量化方法（如 naive INT2）在困难推理任务上直接失效

## 解决方案

[[oscar-kv-quantization]] 通过 [[注意力感知旋转]] 解决这一问题：

- **Hadamard 旋转**：将 outlier 摊平到多个通道
- **Attention-aware U 矩阵**：对准 attention 相关方向，确保摊平后的误差落在 attention 不敏感的方向
- **Bit-reversal**：平衡 INT2 分组，避免某个 group 被少数通道支配
- **Clipping 阈值**：在离线校准阶段为每层、每个 head 生成最优 clipping 参数