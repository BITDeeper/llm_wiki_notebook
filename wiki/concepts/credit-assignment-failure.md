---
type: concept
title: Credit Assignment Failure (功劳归因失败)
tags: [reinforcement-learning, agent, training-stability]
related: [eigendata, surface-level-policy, user-model-stabilization]
created: 2026-02-17
updated: 2026-02-17
sources: ["多轮agent训练拐点！清华首创可执行数据闭环，开源超越gpt-5.md"]
---

# Credit Assignment Failure (功劳归因失败)

[[credit-assignment-failure]] 是强化学习（尤其是多轮 Agent 交互）中的一种现象，指系统无法准确判断失败的具体原因，导致训练信号失真。

## 在多轮 Agent 中的表现

在长链路交互中，Agent 的最终 Reward 通常取决于整段 Trajectory 的结果。如果任务失败，Reward 往往被归零。然而，失败可能并非由 Agent 的策略错误导致，而是源于：
-   **用户模拟器的不稳定**：用户模型偏离指令、误调用工具或提前结束对话。
-   **环境噪声**：工具 API 的随机故障或不可用状态。

在这种情况下，Agent 即使做出了局部最优决策，也会因为环境或用户的异常行为而受到惩罚（Reward = 0）。强化学习算法无法区分“Agent 做错了”和“环境搞砸了”，从而将噪声反向传播，导致策略向错误方向收敛。

## 解决方案

清华 [[eigendata]] 系统提出了“用户模型稳定化”方案：在训练 Agent 之前，先使用高质量数据微调用户模拟器，确保其行为稳定可控。这消除了 Reward 中的混杂来源，使得强化学习能够正确归因失败，从而稳定提升 Agent 性能。