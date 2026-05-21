---
type: concept
title: Forward-KL
tags: [mathematics, rl, metric]
related: [reverse-kl, dph-rl, 多样性危机]
created: 2026-04-09
updated: 2026-04-09
sources: ["rl特训出「押题大师」？破解模型微调中的多样性危机与灾难性遗忘.md"]
---

# Forward-KL

**Forward-KL** (前向 KL 散度) 是一种衡量两个概率分布之间差异的指标，在 [[DPH-RL]] 算法中被用作保护模型多样性的关键机制。

## 特性
- **Mass-Covering（质量覆盖）**：与 [[Reverse-KL]] 不同，Forward-KL 鼓励新策略覆盖参考策略中的多种解法。
- **保护机制**：只要参考策略曾覆盖过某些合理解法，新策略便不能轻易将其概率压至接近零。

## 在 RL 中的作用
在强化学习微调中，Forward-KL 被用来防止模型过度收缩到少数高奖励模式。它提醒模型：“你可以继续变强，但不要忘记原本掌握的东西。” 这种机制有助于缓解 **[[多样性危机]]** 和 **[[灾难性遗忘]]**，使得模型在提升 Pass@1 的同时，也能保持较高的 Pass@k（多次尝试成功率）。

## 实现
在 [[DPH-RL]] 中，Forward-KL 被归类为 f-divergence 的一种，可以通过生成函数高效计算，无需在训练过程中维护在线参考模型。