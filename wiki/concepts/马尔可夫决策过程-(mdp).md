---
type: concept
title: 马尔可夫决策过程 (MDP)
tags: [reinforcement-learning, math, framework]
related: [ibisagent, grpo, 强化学习]
created: 2026-04-21
updated: 2026-04-21
sources: ["国产多模态agent拿下医学分割sota！不用改模型、不加token-浙大&上海ai-lab.md"]
---

# 马尔可夫决策过程 (MDP)

[[马尔可夫决策过程 (MDP)]]（Markov Decision Process）是强化学习中的数学框架，用于描述在不确定环境下，智能体如何通过决策来最大化累积奖励。

## 核心要素
一个 MDP 通常由以下元组 $(S, A, P, R, \gamma)$ 定义：
-   **$S$ (State)**：状态空间，描述环境的当前情况。
-   **$A$ (Action)**：动作空间，智能体可以采取的操作。
-   **$P$ (Transition)**：状态转移概率，执行动作后环境状态变化的概率。
-   **$R$ (Reward)**：奖励函数，衡量动作的好坏。
-   **$\gamma$ (Discount)**：折扣因子，平衡当前奖励与未来奖励。

## 在 IBISAgent 中的应用
[[IBISAgent]] 创新性地将医学图像分割任务建模为 MDP：
-   **状态 ($S$)**：当前的医学图像 + 已生成的 Mask。
-   **动作 ($A$)**：在图像上点击的坐标及属性（正/负样本）。
-   **奖励 ($R$)**：基于分割质量（IoU、DSC）和动作有效性设计的细粒度奖励。

这种建模方式使得分割过程变成了一个序列决策问题，允许模型通过[[强化学习]]（如使用[[GRPO]]算法）学习到最优的点击策略序列，从而实现比单次推理更优的结果。