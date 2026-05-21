---
type: entity
title: MegaMoE
tags: [architecture, deepseek, optimization, gpu]
related: [deepseek-v4, deepgemm, batch-invariance]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告亮了！v4发布延迟的秘密，终于曝光了.md"]
---

# MegaMoE

MegaMoE 是 DeepSeek 提出的一种通信计算一体化的 MoE（混合专家）架构，旨在解决大规模 MoE 模型训练和推理中的通信瓶颈问题。

## 技术原理

### Wave 调度
MegaMoE 将通信和计算融合进单个 pipeline kernel 中。通过专家按 Wave（波）调度，使得通信延迟能够完全隐藏在计算过程之下。

### 性能提升
这种架构设计带来了显著的性能提升：
- 在通用场景下，加速比达到 **1.5 到 1.73 倍**。
- 在 RL rollout 等对延迟极度敏感的场景下，最高加速可达 **1.96 倍**。

## 工程意义
MegaMoE 展示了 DeepSeek 在底层算子优化上的深厚功力。通过精细的调度策略，它有效缓解了 MoE 架构中常见的通信开销问题，支持了 [[DeepSeek V4]] 在万亿参数规模下的高效训练与推理。