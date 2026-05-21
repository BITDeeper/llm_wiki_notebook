---
type: entity
title: Genesis 物理引擎
tags: [tool, simulation, physics-engine]
related: [genesis-ai, gene-26.5, simulation-accelerator, sim2real]
created: 2026-05-07
updated: 2026-05-07
sources: ["蛰伏一年，周衔团队带来首个具身基础模型，烹饪做实验弹琴，效果炸场.md"]
---

# Genesis 物理引擎

Genesis 物理引擎是 [[genesis-ai]] 开发的物理生成引擎，已于去年开源。它允许用户通过一句话生成可交互的物理世界。

## 在 GENE-26.5 中的作用
在 [[gene-26.5]] 的开发过程中，该引擎被用作 [[simulation-accelerator]]（仿真加速器）。它不仅用于展示，而是作为闭环评测的核心，通过构建大量不同光照、背景、物体属性和场景配置的评测任务，将原本需要 2700 小时的实机评测大幅压缩，加速了模型迭代。