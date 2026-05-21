---
type: concept
title: 全栈机器人学
tags: [concept, robotics, methodology]
related: [genesis-ai, gene-26.5, control-middleware]
created: 2026-05-07
updated: 2026-05-07
sources: ["蛰伏一年，周衔团队带来首个具身基础模型，烹饪做实验弹琴，效果炸场.md"]
---

# 全栈机器人学

全栈机器人学是一种不仅关注模型算法，而是同步优化硬件（如灵巧手）、数据采集、仿真评测、控制系统和模型本身的研发范式。

## 核心逻辑
[[genesis-ai]] 认为，机器人不是纯数字 AI。任何一层（模型、传感器、执行器、控制系统、数据采集、评测体系）不够强，都会拖累整体表现。例如，即使模型再强，如果控制中间件延迟高或误差大，机器人也无法执行精细操作。

## 实践案例
- **硬件层**: 自研 [[genesis-hand-1.0]] 以缩小 [[embodiment-gap]]。
- **控制层**: 重写 [[control-middleware]]，将端到端延迟降至 3ms，跟踪误差从 20mm 降至 2mm。
- **数据层**: 开发 [[tactile-glove-data]] 采集系统。
- **评测层**: 利用 [[genesis-physics-engine]] 实现 [[simulation-accelerator]]。

这一路线与当前流行的“软件吞噬世界”或仅关注模型参数的叙事形成对比，强调在具身智能领域工程系统协同的重要性。