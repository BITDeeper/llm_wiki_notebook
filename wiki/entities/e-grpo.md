---
type: entity
title: E-GRPO
tags: [algorithm, reinforcement-learning, rlhf, flow-matching, tsinghua-university]
related: [熵感知优化, 奖励归因模糊, flux-1-dev, visualgrpo, dancegrpo]
created: 2026-01-24
updated: 2026-01-24
sources: ["多奖励场景全面领先！清华新作高熵驱动，强化学习效率飙升.md"]
---

# E-GRPO

**E-GRPO** (Entropy-aware Group Relative Policy Optimization，熵感知分组相对策略优化) 是由 [[清华大学]] 团队提出的一种用于流模型强化学习的新框架。它旨在解决传统 GRPO 方法在多步去噪过程中面临的奖励信号稀疏与归因模糊问题。

## 核心机制

E-GRPO 的核心创新在于引入了“熵”作为判断去噪步骤价值的指标，并据此调整优化策略：

1.  **熵驱动步骤合并**：
    -   **原理**：高熵步骤具有较大的探索空间和奖励差异，是优化的重点；低熵步骤接近确定性，探索价值低且会引入噪声。
    -   **操作**：设定自适应熵阈值，将连续的低熵随机微分方程（SDE）步骤合并为一个高熵有效步骤，其余步骤采用确定性常微分方程（ODE）采样。
    -   **目的**：集中计算资源于高价值步骤，消除累积随机性导致的奖励归因模糊。

2.  **多步分组归一化优势估计**：
    -   在合并后的高熵步骤对应的样本组内，直接计算组内相对优势。
    -   确保奖励信号能够一致归因到合并步骤，避免跨步骤的信号混淆。

## 性能表现

在以 [[FLUX.1-dev]] 为骨干模型的 HPD 数据集评测中，E-GRPO 相比主流方法（如 DanceGRPO）取得了显著提升：

-   **单奖励场景**：HPS 指标提升 10.8%。
-   **多奖励场景**：ImageReward 指标最高提升 32.4%，PickScore 提升 4.4%。
-   **训练效率**：展现出更快的早期增长速度和更平滑的收敛曲线。

## 实现与开源
该算法通过项目 [[VisualGRPO]] 在 GitHub 上开源，模型权重也在 HuggingFace 上发布。

## 参见
-   [[熵感知优化]]：E-GRPO 背后的理论基础。
-   [[奖励归因模糊]]：E-GRPO 致力于解决的核心技术难题。