---
type: concept
title: Adapter-first RL
created: 2026-05-28
updated: 2026-05-28
tags: [rl, adapter, 系统设计, 参数高效微调]
related: [orbit, rl-post-training, 训推精度对齐, 量化]
sources: ["全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
---
# Adapter-first RL

Adapter-first RL 是一种将 RL 后训练的系统设计围绕 adapter 展开的架构范式，是 [[orbit]] 框架的核心创新。

## 核心思路

1. **冻结低精度 base：** 将 base model 固定在部署时使用的低精度表示（INT4/FP4），不参与训练更新。
2. **仅训练 adapter：** 只更新 MB 级的 adapter 参数，而非 GB 级的完整模型权重。
3. **轻量同步：** 每次训练更新后，只需将 MB 级 adapter 从训练引擎推送到推理引擎，避免频繁重建推理引擎。

## 优势

- **显存压缩：** 将万亿参数模型的 RL 后训练压缩到单节点（8×B200）预算内。
- [[训推精度对齐]]：训练和推理使用同一条低精度 base + adapter 路径，消除精度不一致。
- **降低系统复杂度：** 单节点 RL 显著降低多节点训练时的通信时延与故障率。
- **中小模型受益：** 在相同硬件预算下，中小模型可获得更长 response、更大 batch、更高 rollout throughput。

## 潜在局限

- 对于极强 base model（如 [[deepseek-v4-pro|DeepSeek V4 Pro]] 1.6T），adapter 微调可能不足以释放 RL 的全部潜力——实验中 RL 数据未能带来涨点。
- 长周期 RL 训练中 adapter 的表达能力上限尚待探索。