---
type: concept
title: HJB方程
created: 2026-03-09
updated: 2026-03-09
tags: [math, physics, optimal-control, ai]
related: [最优控制, 价值梯度, vgg-flow, 贝尔曼方程]
sources: ["可微奖励就该直接微调！用hjb方程颠覆流匹配对齐｜neurips'25.md"]
---

# HJB方程

Hamilton-Jacobi-Bellman 方程（HJB方程）是 [[最优控制]] 理论中的核心偏微分方程。它描述了动态系统在给定代价函数下，价值函数随时间的演化规律。

## 数学定义

HJB 方程是 [[贝尔曼方程]] 在连续时间域上的形式。对于给定的状态 $x$ 和时间 $t$，价值函数 $V(x,t)$ 满足以下偏微分方程：

$$ -\frac{\partial V}{\partial t} = \min_u \left[ \text{Cost}(x, u) + \nabla V \cdot f(x, u) \right] $$

其中 $u$ 是控制输入，$f$ 描述系统动力学。

## 在 AI 中的应用

在 [[VGG-Flow]] 等工作中，HJB 方程被用于求解生成模型微调的最优策略。通过推导 HJB 方程，研究者证明了最优的速度场修正项等价于 [[价值梯度]]。这为利用可微奖励进行模型对齐提供了严格的数学基础，将传统的强化学习问题转化为确定性的梯度匹配问题。