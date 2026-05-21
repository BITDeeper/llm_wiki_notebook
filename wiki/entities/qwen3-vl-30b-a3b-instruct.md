---
type: entity
title: Qwen3-VL-30B-A3B-Instruct
tags: [model, multimodal, moe, vlm]
related: [mixkv, kv缓存压缩]
created: 2026-03-31
updated: 2026-03-31
sources: ["2倍提速！kv缓存压缩不只看重要性，上交大团队让模型推理「又快又稳」-iclr'26.md"]
---

# Qwen3-VL-30B-A3B-Instruct

[[Qwen3-VL-30B-A3B-Instruct]] 是一个采用 MoE（混合专家）架构的大规模视觉-语言模型。

## 在 MixKV 研究中的角色

该模型被用于验证 [[MixKV]] 算法在 MoE 架构上的通用性。实验结果显示，MixKV 在该模型上同样能保持一致的增益，进一步证实了其不依赖于特定模型架构（如 Dense 或 MoE）的鲁棒性。