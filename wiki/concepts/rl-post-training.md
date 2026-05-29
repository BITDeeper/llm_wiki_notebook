---
type: concept
title: RL后训练
created: 2026-05-28
updated: 2026-05-28
tags: [强化学习, 后训练, 大模型, rl]
related: [orbit, adapter-first-rl, 训推精度对齐, 量化]
sources: ["全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
---
# RL后训练

RL后训练（RL Post-training）是指在大模型完成预训练之后，通过强化学习进一步提升模型在数学、代码、复杂推理、多轮工具调用等领域能力的技术阶段。

## 核心挑战

当模型规模进入 MoE 万亿参数级别后，RL 后训练不再只是算法问题，更是系统问题：

1. **显存压力：** 训练侧需要容纳庞大的模型权重、梯度和优化器状态。
2. **Rollout 吞吐：** 需要持续生成样本并保持足够高的吞吐。
3. **Reference policy：** 进一步放大显存和调度压力。
4. **精度不一致：** 训练时使用高精度模型，推理/部署时使用低精度模型，精度差异导致 policy log-prob 偏差，直接影响 RL 训练稳定性。

## 解决方案

[[orbit]] 框架通过 [[adapter-first-rl|Adapter-first]] 设计和 [[训推精度对齐]] 提供了一种系统级解决方案，将万亿模型的 RL 后训练压缩到单节点完成。