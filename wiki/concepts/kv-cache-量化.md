---
type: concept
title: KV Cache 量化
created: 2026-05-29
updated: 2026-05-29
tags: [量化, kv-cache, 推理优化, 模型压缩]
related: [量化, oscar-kv-quantization, turboquant, 注意力感知旋转, outlier-channel问题]
sources: ["超越turboquant，面向长上下文推理的真2-bit-kv-quantization算法问世.md"]
---
# KV Cache 量化

**KV Cache 量化** 是将 Transformer 推理中缓存的 Key/Value 张量从高精度（如 BF16）压缩到低比特表示的技术。随着长上下文模型的普及，KV Cache 的显存占用和带宽消耗成为推理服务的核心瓶颈。

## 动机

每生成一个 token，都要从显存中读取越来越长的历史 key 和 value。上下文越长、batch 越大，KV Cache 越消耗显存和带宽。将历史 KV 压到 2-bit，理论上可以让历史段显存减少约 8 倍。

## 核心挑战

- **[[outlier-channel问题]]**：KV activation 中少数幅值极大的通道会主导量化尺度，导致大多数正常值被压缩到极少有效等级，注意力分布快速漂移。
- **精度保持**：INT2 只有 4 个量化等级，极端压缩下保持推理能力极其困难。朴素 INT2 和早期旋转方法在困难推理任务上会直接崩溃。
- **系统可用性**：量化方法必须能在真实 serving 框架中运行，兼容 paged KV、prefix cache 等机制。

## 主要方法

| 方法 | 比特数 | 特点 |
|------|--------|------|
| 朴素 INT2 | ~2.25 BPE | 直接崩溃，不可用 |
| QuaRot-INT2 | ~2.25 BPE | 旋转基线，推理任务上大幅掉分 |
| KIVI / Kitty | 2-bit | 缺乏框架支持，无法进行长上下文测试 |
| [[turboquant]] | 3.25 BPE | 通用在线向量量化，小模型上掉分明显 |
| [[oscar-kv-quantization]] | 2.28 BPE | [[注意力感知旋转]]，首个稳定可用的真 2-bit 方法 |

## 关键洞察

传统方法关注"K/V 向量重建误差"，但这不能完全解释模型最终表现。真正影响推理质量的是 attention-score KL 散度、attention-block output MSE 以及后续 hidden-state error。[[oscar-kv-quantization]] 的 [[注意力感知旋转]] 正是基于这一洞察，将量化误差压到 attention 不敏感的方向上。