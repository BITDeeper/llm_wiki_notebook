---
type: source
title: "全球首次单机降服万亿巨模DeepSeek-V4！RL后训练框架Orbit开源！"
created: 2026-05-28
updated: 2026-05-28
tags: [rl-post-training, orbit, deepseek-v4, moe, adapter, 单机训练]
related: [orbit, deepseek-v4, sphere-ai-lab, adapter-first-rl, rl-post-training]
sources: ["全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/M3Q4AnhMa2ymj1JHO1W5ag"
venue: 机器之心
---
# 全球首次单机降服万亿巨模DeepSeek-V4！RL后训练框架Orbit开源！

本文报道了 [[sphere-ai-lab|Sphere AI Lab]] 开源的 [[orbit]] RL后训练框架，该框架通过 [[adapter-first-rl|Adapter-first]] 系统设计，首次在单台 8×B200 上完成万亿级 MoE 模型的 RL 后训练。

## 核心内容

- **框架定位：** [[orbit]] 是一个面向万亿参数 MoE 模型的高效 RL 后训练框架，核心创新为冻结低精度 base 模型，仅训练和同步 MB 级 adapter。
- **训推精度对齐：** 训练和推理使用相同的低精度 base + BF16 adapter 路径，消除 policy log-prob 差异导致的 RL 训练不稳定。
- **实验验证：**
  - [[kimi-k2-6|Kimi-K2.6]]（约1T）：约200 step RL，reward/eval accuracy/pass@k 同步上升，log-prob diff 稳定。
  - [[deepseek-v4-flash|DeepSeek V4 Flash]]（1T）：100+ step RL，同样展示稳定上升趋势。
  - [[deepseek-v4-pro|DeepSeek V4 Pro]]（1.6T）：完成单节点验证，系统上限达1.6T级别。
- **异步rollout优化：** 在 Qwen3-4B 上实现 1.42 倍单步加速和 44% rollout 吞吐提升。

## 关键技术

- [[active-expert-chunked-dequantization]]：针对 MoE 的动态专家反量化技术。
- [[double-buffered-rollout]]：Adapter 版本管理的异步流式写入机制。
- 集成 [[DeepGEMM]]、[[deepep-v2|DeepEP V2]] 等算子库。

## 意义

将万亿模型 RL 后训练从多机系统压缩到单节点，降低通信时延与故障率，同时让中小模型也能在更有限的硬件上完成 RL 微调。