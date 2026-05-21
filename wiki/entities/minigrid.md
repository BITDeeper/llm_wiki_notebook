---
type: entity
title: Minigrid
tags: [benchmark, rl-environment, grid-world]
related: [crafter, 环境背景知识]
created: 2026-02-28
updated: 2026-02-28
sources: ["破解rl样本效率难题！让ai一次性提炼环境常识，后续零调用成本.md"]
---

# Minigrid

Minigrid 是一个经典的网格世界导航环境，常用于测试强化学习智能体的基础任务泛化能力。

## 特点
- 提供了一系列从简单到复杂的导航与拾取任务（如 Goto, Pickup）。
- 环境可控性强，适合进行消融实验。
- 在相关研究中，被用于验证 [[环境背景知识]] 在新任务类型（如未见过的目标物体）和更大规模地图（20x20 -> 30x30）上的泛化能力。