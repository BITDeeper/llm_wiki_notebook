---
type: concept
title: Privileged Critic
tags: [reinforcement-learning, rl-algorithm, training-strategy]
related: [ace, sim2real, sac]
created: 2026-04-23
updated: 2026-04-23
sources: ["nature封面：机器人乒乓球干翻人类职业选手.md"]
---

# Privileged Critic

[[privileged-critic]] 是一种深度强化学习训练策略，旨在解决 [[Sim2Real]]（仿真到现实）迁移中的鲁棒性问题。

## 核心机制

在训练过程中，系统包含两个角色：
1.  **评判者**：在仿真环境中获取“上帝视角”的真值数据（如完美的物理状态、无噪声的球体位置）。
2.  **决策者**：仅获取带有噪声、不完整的传感器历史数据（模拟真实世界的感知局限）。

## 作用

通过这种不对称的信息访问，迫使决策者学会在没有完美信息的情况下进行准确的传感器融合和轨迹预测。这就像“老师看参考答案，学生看模糊照片解题”，从而训练出适应真实世界不确定性的策略。

## 应用案例

该方法是 [[Sony AI]] 的 [[Ace]] 机器人能够完全在仿真中训练并直接在真机上击败职业选手的关键技术。