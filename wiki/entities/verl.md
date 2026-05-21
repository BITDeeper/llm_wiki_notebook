---
type: entity
title: veRL
tags: [tool, rl, framework]
related: [twinkle, grpo]
created: 2026-03-11
updated: 2026-03-11
sources: ["训练即服务！让模型训练回归算法语义，150行代码跑通rl.md"]
---

# veRL

[[veRL]] (推测为 Volcengine RL) 是一个用于强化学习训练的基准框架。

## 性能对比
在 [[Twinkle]] 的技术评估中，veRL 被用作性能对比的基准线。
- 在标准 GPU 上，Twinkle 与 veRL 的收敛曲线一致，训练速度相近。
- 在 [[昇腾]] 硬件上，Twinkle 的单步耗时（20s）优于 veRL（30s）。