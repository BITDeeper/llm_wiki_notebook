---
type: entity
title: Genesis World
tags: [tool, simulator, physics-engine]
related: [genesis-ai, gene-26.5, 闭环评估]
created: 2026-05-07
updated: 2026-05-07
sources: ["一年磨一剑，今年最炸机器人demo来了！1亿美元种子轮团队出手，单个模型解锁单手打蛋解魔方弹钢琴.md"]
---

# Genesis World

[[genesis-world]] 是由 [[genesis-ai]] 团队（最初由 [[周衔]] 牵头）开发的高性能物理仿真引擎。

## 技术特点

- **高性能**：纯 Python 编写，速度比英伟达 Isaac Gym 快 10 到 80 倍。
- **高保真**：提供了足够真实的物理环境，使得在仿真中训练的模型可以直接在真实世界中评估，无需额外的 co-training。
- **开源生态**：在 GitHub 上拥有超过 28k Star，吸引了 20 多个研究机构参与，是具身智能领域最大的开源项目之一。

## 在 GENE-26.5 中的作用

在 [[gene-26.5]] 的研发中，[[genesis-world]] 被用于大规模 [[闭环评估]]。它允许团队在无需消耗大量真实世界时间的情况下，验证模型的泛化能力和控制性能，从而加速了模型的迭代周期。