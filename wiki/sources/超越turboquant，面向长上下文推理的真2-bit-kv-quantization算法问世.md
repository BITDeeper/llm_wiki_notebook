---
type: source
title: "超越TurboQuant，面向长上下文推理的真2-bit KV Quantization算法问世"
created: 2026-05-29
updated: 2026-05-29
tags: [量化, kv-cache, 推理优化, 长上下文, 论文报道]
related: [oscar-kv-quantization, together-ai, kv-cache-量化, 量化, turboquant]
sources: ["超越turboquant，面向长上下文推理的真2-bit-kv-quantization算法问世.md"]
authors: [机器之心, Zhongzhu Zhou]
year: 2026
url: "https://mp.weixin.qq.com/s/DKiYunmj_YlvPpMjVgpK9Q"
venue: 机器之心
---
# 超越TurboQuant，面向长上下文推理的真2-bit KV Quantization算法问世

本文由 [[机器之心]] 发布，作者 Zhongzhu Zhou 为 [[together-ai]] 高级研究科学家。报道介绍了 Together AI 提出的 [[oscar-kv-quantization]]（Offline Spectral Covariance-Aware Rotation）算法——首个能在真 2-bit（约 2.28 BPE）设置下稳定保持现代推理模型质量的 [[kv-cache-量化]] 系统。

## 核心内容

- **问题背景**：长上下文模型服务时，KV Cache 显存和带宽成为瓶颈。朴素 INT2 量化会导致推理能力崩溃。
- **核心创新**：[[注意力感知旋转]]（Attention-Aware Rotation），将旋转目标从"重建原始 K/V 向量"改为"保留 attention 消费 KV 的方式"。
- **评估结果**：在 Qwen3-4B-Thinking 上距 BF16 仅差 3.78 分（相对 [[turboquant]] 提升 40.1 分）；Qwen3-8B 仅差 1.42 分；大模型基本持平。128K RULER-NIAH 测试中保持稳定检索性能。
- **系统收益**：约 8× KV Cache 显存减少；decode 最高约 3× 加速；job-level throughput 最高约 7×。
- **工程集成**：已接入 [[sglang]] 推理框架，实现开箱即用的 2-bit KV serving。

## 论文信息

- 论文链接：https://arxiv.org/abs/2605.17757
- 项目主页：https://oscar-quantize.github.io/
- 代码：https://github.com/FutureMLS-Lab/OSCAR