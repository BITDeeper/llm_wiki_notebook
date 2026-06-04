---
type: entity
title: OSCAR
created: 2026-06-04
updated: 2026-06-04
tags: [kv-cache, 量化, 推理优化, 2-bit, 注意力机制]
related: [together-ai, kv-cache-量化, 注意力感知旋转, 三段式token-pool, sglang]
sources: ["超越turboquant：together-ai把2-bit-kv-cache推向真实服务.md"]
origin_date: 2026-06-04
---
# OSCAR

OSCAR（**O**ptimized **S**erving with **C**ontext-**A**ware **R**otation）是一种面向真实serving的2-bit KV Cache量化方案，由 [[together-ai]]、[[悉尼大学]] 和 [[uiuc]] 联合提出。

## 核心创新

### 注意力感知旋转

OSCAR 的核心突破在于将KV Cache压缩的优化目标从"向量重建精度"转向"保护注意力机制质量"。具体机制：

- **Key旋转**：使用query covariance（QᵀQ）决定Key的旋转方向，因为量化误差通过QKᵀ进入attention logits
- **Value旋转**：使用score-weighted value covariance（VᵀSᵀSV）决定Value的旋转方向，因为误差被attention score加权后进入输出

### 旋转矩阵设计

旋转矩阵由三部分组成：**R = U · Hadamard · bit-reversal**

- **U**：负责对齐attention相关方向
- **Hadamard**：摊平outlier能量
- **bit-reversal**：让INT2分组更均衡，避免某个group被少数异常通道主导

### 三段式Token Pool

运行时维护混合存储策略：

1. **BF16 sink**（64 tokens）— 保护attention sink
2. **INT2 history** — 历史KV的极致压缩主体
3. **BF16 recent**（256 tokens）— 保护最近上下文

新token先写入recent window，随着解码推进，最老的recent token通过融合Triton kernel完成rotate、clip、quantize和pack，降级进入INT2 history。

## 系统集成

OSCAR 已接入 [[sglang]] 服务路径，兼容：

- Paged KV
- Radix prefix cache
- SGLang的fused kernel pipeline

## 评测表现

| 模型 | OSCAR | BF16 | TurboQuant |
|------|-------|------|------------|
| Qwen3-4B-Thinking | 71.86 | 75.64 | 31.74 |
| Qwen3-8B | 69.42 | 70.84 | 56.88 |
| Qwen3-32B | ≈BF16 | — | — |
| GLM-4.7-FP8 | ≈BF16 | — | — |

在约2.28 effective bits per KV element预算下，OSCAR精度接近BF16。

## 系统级收益

- KV Cache显存降低约 **8倍**
- Decode最高约 **3倍** 加速（100k context, batch-size-1, full prefix-cache hit）
- Job-level throughput最高约 **7倍** 提升（大batch, 显存预算固定）

## 局限与展望

- 真实线上workload（多租户、尾延迟等）更为复杂，仍需进一步验证
- 离线校准的旋转矩阵在面对分布外（OOD）极端长文本时的鲁棒性待验证
- 未来可结合更强的动态窗口策略、更多硬件后端和统一serving框架

## 资源链接

- 论文：https://arxiv.org/abs/2605.17757
- 项目主页：https://oscar-quantize.github.io/
- 代码：https://github.com/FutureMLS-Lab/OSCAR
- ModelScope：https://modelscope.cn/models/togethercomputer/OSCAR-RotationZoo
- HuggingFace：https://huggingface.co/Zhongzhu/OSCAR-RotationZoo