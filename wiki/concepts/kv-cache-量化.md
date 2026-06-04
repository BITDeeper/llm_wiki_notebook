---
type: concept
title: KV Cache 量化
created: 2026-05-29
tags: [量化, kv-cache, 推理优化, 模型压缩, 显存优化, 长上下文]
related: [量化, oscar-kv-quantization, turboquant, 注意力感知旋转, outlier-channel问题, oscar, 长上下文serving, tokenmaxxing, ai-subscription-crisis]
sources: ["超越turboquant，面向长上下文推理的真2-bit-kv-quantization算法问世.md", "超越turboquant：together-ai把2-bit-kv-cache推向真实服务.md"]
updated: 2026-06-04
---
# KV Cache 量化

**KV Cache 量化**是大模型推理优化中的核心技术，旨在将 Transformer 推理中缓存的 Key/Value 张量从高精度（如 BF16）压缩到低比特表示，以减少显存容量和显存带宽的消耗。随着长上下文模型的普及，KV Cache 的显存占用和带宽消耗已成为推理服务的核心瓶颈。

## 动机与背景

每生成一个新 token，模型都要回读越来越长的历史 Key 和 Value。上下文越长、batch 越大，KV Cache 对显存容量和显存带宽的消耗就越明显。将历史 KV 压到 2-bit，理论上可以让历史段显存减少约 8 倍。这使得 KV Cache 量化成为长上下文 serving 的核心问题：压得不够，显存撑不住；压得太狠，推理质量又容易崩。

## 核心挑战

- **[[outlier-channel问题]]**：KV activation 中常存在少数幅值极大的通道（outlier channel），如果量化尺度被这些极端通道主导，大部分正常值会被挤到很窄的区间，导致注意力分布快速漂移。
- **误差传播**：K/V 重建误差看起来不大，并不代表 attention logits、attention block output 和后续 hidden state 不会被放大偏移。传统方法关注"K/V 向量重建误差"，但这不能完全解释模型最终表现。
- **低比特极限**：INT2 只有 4 个离散量化等级，在如此有限的表示能力下保持推理质量极具挑战。朴素 INT2 和早期旋转方法在困难推理任务上会直接崩溃。
- **系统可用性**：量化方法必须能在真实 serving 框架中运行，兼容 paged KV、prefix cache 等机制。

## 发展脉络

### 传统方法

传统方法关注如何更好地还原 K/V 向量本身，使用 Hadamard 旋转打散 outlier，但不感知 attention 方向。

### 注意力感知方法

[[oscar]] 提出的 [[注意力感知旋转]]，将优化目标从"向量重建精度"转向"保护注意力机制质量"。其核心洞察是：真正影响推理质量的是 attention-score KL 散度、attention-block output MSE 以及后续 hidden-state error。该方法使用 query covariance 和 score-weighted value covariance 决定旋转方向，将量化误差压到 attention 不敏感的方向上。

## 代表性方法对比

| 方法 | 比特数 | 特点 | 局限 |
|------|--------|------|------|
| 朴素 INT2 | ~2.25 BPE | 直接量化 | 精度严重崩塌，不可用 |
| QuaRot-INT2 | ~2.25 BPE | 通用向量量化旋转基线 | 低比特下表现不佳，推理任务上大幅掉分 |
| [[turboquant]] | 3.25 BPE | 通用在线向量量化 | 小模型上掉分明显，2-bit 极限下仍有差距 |
| KIVI / Kitty | 2-bit | KV Cache 专用量化 | 缺乏长上下文框架支持，无法进行长上下文测试 |
| [[oscar]] / [[oscar-kv-quantization]] | 2.28 BPE | [[注意力感知旋转]] + 系统协同设计 | 离线校准，OOD 鲁棒性待验证；首个稳定可用的真 2-bit 方法 |

## 核心洞见

KV Cache 压缩的核心瓶颈不是"能不能压"，而是**压缩误差会不会破坏 attention 的关键路径**。这要求量化方案必须与真实 serving 系统协同设计，而非仅追求离线准确率。

## 与其他维基主题的关联

KV Cache 量化是缓解 AI 推理算力焦虑的关键技术路径，与 [[tokenmaxxing]]（Token 吞吐量最大化竞赛）、[[ai-subscription-crisis]]（AI 订阅制危机）等涉及算力消耗与成本的主题在底层逻辑上呼应——提升推理效率是降低 Token 成本、支撑更大规模 AI 部署的基础。