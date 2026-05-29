---
type: entity
title: Qwen3-4B
created: 2026-05-28
updated: 2026-05-28
tags: [大模型, 中小模型, 阿里]
related: [orbit, double-buffered-rollout]
sources: ["全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
---
# Qwen3-4B

Qwen3-4B 是阿里通义千问系列的 4B 参数中小模型。在 [[orbit]] 框架的异步 rollout 性能基准测试中，Qwen3-4B + OFT 在 8×B200、TP=2 设置下用于验证 [[double-buffered-rollout]] 机制的效果。

## 基准测试结果

- 1.42 倍单步时间优化
- 44% rollout 吞吐提升
- eval accuracy 保持不变