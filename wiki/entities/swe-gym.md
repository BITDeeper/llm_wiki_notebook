---
type: entity
title: SWE-Gym
tags: [dataset, reinforcement-learning, software-engineering, benchmark]
related: [jiayi-pan, tinyzero, swe-bench, xai]
created: 2026-02-27
updated: 2026-02-27
sources: ["华人天才出走xai：算力竞赛已死，30美元解锁ai自进化！.md"]
---

# SWE-Gym

SWE-Gym 是一个由 [[jiayi-pan]] 在加州大学伯克利分校期间开发的开源项目。它旨在将软件工程问题转化为强化学习（RL）环境，以训练 AI 解决真实的编程任务。

## 项目背景

SWE-Gym 基于 SWE-bench 数据集构建，该数据集包含 2294 个真实的 GitHub Issue。传统的基准测试主要评估模型生成代码的能力，而 SWE-Gym 则更进一步，要求 AI 生成的 Patch 必须能够通过测试用例。

## 功能与目标

- **环境转化**：将静态的代码问题转化为动态的 RL 环境，使得模型可以通过交互反馈（测试通过与否）来优化其策略。
- **能力训练**：训练 AI 不仅读懂代码，还能学会修正代码中的错误。
- **自我进化拼图**：作为 AI “自我进化”技术拼图的关键一环（负责“改代码”），它与 [[tinyzero]]（负责“自我纠错”）和推理模型（负责“逻辑推理”）共同构成了 AI 优化自身代码的潜在路径。

## 相关链接
- [GitHub - SWE-Gym](https://github.com/SWE-Gym/SWE-Gym)