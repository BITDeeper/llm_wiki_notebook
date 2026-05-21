---
type: entity
title: VisualGRPO
tags: [open-source, github, reinforcement-learning, visual-alignment]
related: [e-grpo, dancegrpo, 清华大学]
created: 2026-01-24
updated: 2026-01-24
sources: ["多奖励场景全面领先！清华新作高熵驱动，强化学习效率飙升.md"]
---

# VisualGRPO

**VisualGRPO** 是 [[清华大学]] 团队在 GitHub 上开源的项目名称，包含了 [[E-GRPO]] (Entropy-aware Group Relative Policy Optimization) 算法的具体实现代码。

## 项目内容
该项目提供了将熵感知强化学习应用于视觉生成模型的完整代码库，支持对基于流匹配（如 FLUX.1）或扩散模型的视觉对齐训练。它旨在解决流模型强化学习中的奖励归因模糊问题，通过步骤合并和分组优势估计技术提升训练效率。

## 关联
-   **算法核心**：实现了 [[E-GRPO]] 框架。
-   **对比基线**：项目中通常包含与主流方法（如 [[DanceGRPO]]）的对比代码。
-   **开源地址**：https://github.com/shengjun-zhang/VisualGRPO