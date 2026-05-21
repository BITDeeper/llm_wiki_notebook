---
type: entity
title: Safety-Gymnasium
tags: [benchmark, safe-rl, evaluation, openai]
related: [racs-算法, 安全性悖论, openai]
created: 2026-02-16
updated: 2026-02-16
sources: ["清华打破强化学习安全性悖论，14项测试基准任务全sota.md"]
---

# Safety-Gymnasium

## 概述
[[Safety-Gymnasium]] 是安全强化学习领域的权威测试基准。它提供了一系列标准化的任务环境，用于评估和比较不同 Safe RL 算法在约束满足和任务性能方面的表现。

## 应用
该基准被广泛用于验证算法在模拟物理环境（如机器人导航、控制）中的安全性。例如，清华大学李升波团队的 [[RACS算法]] 即在此基准的 14 项任务中进行了验证，结果显示其在处理 [[零约束违反]] 和累积回报方面均达到了 SOTA 水平。

## 相关任务
基准包含多种经典控制任务，如：
*   **PointPush**：推箱子导航避障。
*   **HalfCheetahVelocity** / **Walker2dVelocity**：速度控制任务。
*   **HumanoidVelocity**：高维人形机器人控制。
