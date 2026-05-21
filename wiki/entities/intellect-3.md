---
type: entity
title: INTELLECT-3
tags: [llm, moe, open-source-model]
related: [prime-intellect, prime-rl, glm-4-5-air, scaling-law]
created: 2025-12-10
updated: 2025-12-10
sources: ["只用512张h200！106b模型靠分布式rl杀出重围，全网开源.md"]
---

# INTELLECT-3

INTELLECT-3 是由 [[Prime Intellect]] 发布的 106B 参数 [[混合专家模型]]。该模型基于 [[GLM 4.5 Air]] 进行了监督微调（SFT）和大规模强化学习（RL）训练，在多项基准测试中取得了同规模模型中的最强表现。

## 模型特点
- **参数规模**：106B（MoE 架构）。
- **基座模型**：智谱 AI 的 GLM 4.5 Air。
- **训练方法**：结合了 SFT 和基于 [[PRIME-RL]] 框架的分布式强化学习。
- **开源程度**：完全开源模型权重、训练框架、数据集及评测体系。

## 性能表现
在数学、代码、科学和推理类 Benchmark 上，INTELLECT-3 达成了同体量中的最强成绩，甚至超越了一些参数规模更大的前沿模型。

## 训练基础设施
- **硬件**：512 张 NVIDIA H200 GPU（64 个互联节点）。
- **存储**：Lustre（高吞吐） + NVMe NFS。
- **调度**：Slurm + cgroup v2。

## 意义
INTELLECT-3 的发布证明了通过优化算法（如分布式 RL）和工程系统，非顶级实验室也能训练出具有竞争力的 SOTA 模型。它被视为 [[scaling-law]] 在工程约束下的一次成功实践。