---
type: concept
title: KV Cache复用
created: 2026-05-28
updated: 2026-05-28
tags: [模型优化, 推理加速, 工程技术]
related: [异步推理, automot]
sources: ["icml2026-automot-b2d-&-nuscense双sota-，重新思考vlm和端到端驾驶的结合.md"]
---
# KV Cache复用

KV Cache复用是 [[automot|AutoMoT]] 中 [[异步推理]] 的工程实现基础。

## 核心思想

在Transformer模型推理中，KV Cache（键值缓存）存储了注意力计算中的Key和Value矩阵，避免重复计算。AutoMoT 将这一机制扩展到跨步复用场景：

1. Understanding Expert（UE）完成一次完整前向推理后，保存对应的KV Cache
2. Action Expert（AE）在后续多个动作步中直接复用这些cached states
3. AE 无需每步都重新执行完整的大模型推理，大幅降低计算开销

## 在AutoMoT中的应用

由于高层场景理解具有时间连续性（如前方施工区域不会在几个控制周期内消失），UE的KV Cache在多个动作步中仍然有效。这使得"低频理解、高频行动"的 [[异步推理]] 模式在工程上可行。

## 更广泛的意义

KV Cache跨步复用的思路不仅适用于自动驾驶，也可推广到任何需要"慢推理+快响应"的实时AI系统，是降低大模型实时部署成本的重要工程手段。