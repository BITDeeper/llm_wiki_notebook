---
type: event
title: GIPO 与 AcceRL 被 ICML 2026 接收
created: 2026-05-16
updated: 2026-05-16
tags: [学术会议, 强化学习, 具身智能, ICML]
related: [gipo, accerrl, 利用率崩溃, 策略滞后, vla-视觉-语言-动作]
sources: ["icml-2026-告别「利用率崩溃」：gipo开启大模型强化学习高效训练新方法.md"]
origin_date: 2026-03-01
participants: [树根科技, 三一集团]
significance: high
causes: [具身智能数据困境]
effects: [gipo, accerrl]
---
# GIPO 与 AcceRL 被 ICML 2026 接收

2026 年 3 月，树根科技与三一集团团队向 arXiv 提交了两篇论文：

1. **GIPO: Gaussian Importance Sampling Policy Optimization**（arXiv: 2603.03955）
2. **AcceRL: A Distributed Asynchronous Reinforcement Learning and World Model Framework for Vision-Language-Action Models**（arXiv: 2603.18464）

两篇论文均被 ICML 2026 接收。

## 背景

具身智能真机场景下，物理采集缓慢导致 [[策略滞后]] 极端严重，[[PPO]] 的硬截断机制引发 [[利用率崩溃]]，成为大规模 VLA 模型训练的关键瓶颈。

## 影响

- 为大规模 [[vla-视觉-语言-动作]] 模型的强化学习训练提供了算法基础
- 在 LIBERO 基准上达到 SOTA 成绩（99.1% 成功率）
- 样本利用效率提升 7.5 倍，验证了工业级可行性