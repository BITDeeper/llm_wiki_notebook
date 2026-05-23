---
type: entity
title: MT Lambda-Lab
created: 2026-05-19
updated: 2026-05-19
tags: [具身智能, 策略训练, 强化学习, VLA]
related: [mt-lambda, mt-lambda-sim, 摩尔线程, vla-视觉-语言-动作]
sources: ["国产gpu开始造世界！国内首个全栈具身智能仿真平台来了.md"]
origin_date: 2026-05-19
---
# MT Lambda-Lab

MT Lambda-Lab 是 [[mt-lambda]] 的上层平台之一，定位为具身策略开发与训练平台。

## 功能定位

面向强化学习、模仿学习、[[vla-视觉-语言-动作]] 模型等任务，解决"怎么让智能体学会做事"的核心问题。具体包括：

- 动作策略训练
- 行为迭代优化
- 模型在复杂任务中逐步提升稳定性

## 与 MT Lambda-Sim 的关系

MT Lambda-Lab 偏向"大脑训练"，与偏向"世界构建"的 [[mt-lambda-sim]] 互补，共同构成具身智能开发的主链路：数据合成→策略训练→仿真验证→端侧部署。