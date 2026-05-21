---
type: entity
title: LAPO
tags: [algorithm, reinforcement-learning, optimization]
related: [last-r1, latent-cot, 强化学习]
created: 2026-05-11
updated: 2026-05-11
sources: ["机器人模型r1时刻！不只学动作更学会物理推理，libero-99.9%.md"]
---

# LAPO

**LAPO** (Latent-to-Action Policy Optimization) 是 [[LaST-R1]] 框架中提出的一种强化学习策略优化算法。其核心创新在于将隐空间推理纳入强化学习的优化闭环，实现了对机器人“认知过程”和“物理动作”的联合优化。

## 核心机制
传统的具身模型强化学习主要优化 `action space`，即根据动作的成功与否来调整策略。LAPO 则在此基础上增加了对 `latent space`（隐空间）的优化：

1.  **Latent-level Ratio Surrogate**: 引入了隐空间的重要性采样比率，允许算法评估和比较不同隐空间推理序列的质量。
2.  **联合目标函数**: 将隐空间推理的奖励与动作生成的奖励结合在一个统一的 clipped objective 中。这意味着，如果某条轨迹成功，模型不仅会强化产生该动作的参数，也会强化产生该动作之前的“推理过程”。

## 作用与优势
- **塑造物理直觉**: 通过环境反馈直接修正隐空间中的物理表征，使机器人逐渐形成对摩擦、接触等物理现象的内在理解。
- **提升收敛速度**: 实验表明，相比于仅优化动作的基线（如 Action-Only + PPO），LAPO 能提供更稳定的“认知缓冲区”，从而加快收敛速度并提升最终成功率。
- **增强泛化性**: 由于优化了底层的物理推理逻辑，模型在面对未见过的物体或环境变化时，表现出更强的适应性和鲁棒性。