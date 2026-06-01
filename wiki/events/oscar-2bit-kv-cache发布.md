---
type: event
title: OSCAR 真2-bit KV Cache 量化系统发布
created: 2026-05-29
updated: 2026-05-29
tags: [量化, kv-cache, 推理优化, 论文发布, 里程碑]
related: [oscar-kv-quantization, together-ai, kv-cache-量化, turboquant, sglang]
sources: ["超越turboquant，面向长上下文推理的真2-bit-kv-quantization算法问世.md"]
origin_date: 2026-05-01
participants: [together-ai]
causes: []
effects: []
significance: high
---
# OSCAR 真2-bit KV Cache 量化系统发布

2026 年 5 月，[[together-ai]] 发布论文《OSCAR: Offline Spectral Covariance-Aware Rotation for 2-bit KV Cache Quantization》（arxiv.org/abs/2605.17757），首次实现真 2-bit [[kv-cache-量化]] 的可用 serving 系统。

## 背景

长上下文模型普及后，KV Cache 显存和带宽成为推理服务的核心瓶颈。朴素低比特量化会导致推理能力崩溃，此前没有任何方法能在真 2-bit 设置下稳定保持现代推理模型质量。

## 核心突破

- 提出 [[注意力感知旋转]]（Attention-Aware Rotation），将量化误差压到 attention 不敏感的方向
- 在约 2.28 BPE 下，Qwen3-4B-Thinking 距 BF16 仅差 3.78 分，相对 [[turboquant]] 提升 40.1 分
- 128K RULER-NIAH 测试中保持稳定检索性能
- 约 8× KV Cache 显存减少，decode 最高约 3× 加速，job-level throughput 最高约 7×

## 工程意义

OSCAR 已集成至 [[sglang]] 推理框架，实现开箱即用的 2-bit KV serving，兼容 paged KV、radix prefix cache 等生产级机制。这标志着 KV Cache 量化从论文方法走向实际部署的重要里程碑。

## 影响

OSCAR 对长上下文 Agent 场景尤其关键——真实 Agent 往往包含很长的系统提示、工具说明、历史对话和检索内容，且不同请求之间存在大量共享前缀。2-bit KV Cache 使这些场景的显存和带宽压力大幅降低，同时保持推理链条的完整性。