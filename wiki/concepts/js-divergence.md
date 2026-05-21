---
type: concept
title: JS Divergence
tags: [mathematics, rl, metric]
related: [forward-kl, reverse-kl, dph-rl]
created: 2026-04-09
updated: 2026-04-09
sources: ["rl特训出「押题大师」？破解模型微调中的多样性危机与灾难性遗忘.md"]
---

# JS Divergence

**JS Divergence** (Jensen-Shannon Divergence) 是一种基于 [[Forward-KL]] 的对称化散度度量。

## 特性
- **对称性与稳定性**：相比单纯的 Forward-KL 或 Reverse-KL，JS Divergence 提供了更平滑、更稳定的分布约束方式。
- **Mass-Covering**：同样具有质量覆盖的性质，鼓励新策略保持参考策略的多样性。

## 在 DPH-RL 中的应用
[[DPH-RL]] 算法采用 JS Divergence 作为 divergence 项的可选方案之一（DPH-JS）。实验表明，DPH-JS 在 Pass@1 上表现最佳，且在 Pass@8/16 上显著优于传统的 [[GRPO]] 和 [[DAPO]] 方法，有效缓解了 **[[多样性危机]]**。