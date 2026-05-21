---
type: entity
title: Crafter
tags: [benchmark, rl-environment, sparse-reward]
related: [minigrid, 环境背景知识]
created: 2026-02-28
updated: 2026-02-28
sources: ["破解rl样本效率难题！让ai一次性提炼环境常识，后续零调用成本.md"]
---

# Crafter

Crafter 是一个复杂的生存游戏环境，常用于评估智能体在长链任务和稀疏奖励条件下的表现。

## 特点
- 包含收集资源、合成工具、战斗等复杂机制。
- 许多子任务需要特定顺序的行动序列，属于典型的稀疏奖励问题（Sparse Reward Problem）。
- 在相关研究中，引入背景知识的智能体在该环境下表现出显著的样本效率提升，证明了 LLM 提炼的“常识”能有效引导智能体达成中间目标。