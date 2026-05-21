---
type: concept
title: DPH-RL
tags: [algorithm, reinforcement-learning, llm, diversity]
related: [多样性危机, 灾难性遗忘, reverse-kl, forward-kl, js-divergence, rlvr]
created: 2026-04-09
updated: 2026-04-09
sources: ["rl特训出「押题大师」？破解模型微调中的多样性危机与灾难性遗忘.md"]
---

# DPH-RL

**DPH-RL** (Diversity-Preserving Hybrid RL，保留多样性混合强化学习) 是由复旦大学、无限光年等机构联合提出的一种强化学习微调框架，旨在解决大模型在 RLVR 训练中出现的 [[多样性危机]] 和 [[灾难性遗忘]] 问题。

## 核心思想
传统的 RLVR 方法（如 [[GRPO]]）虽然能提升模型的单次作答成功率（Pass@1），但往往导致模型在多次尝试时的总体成功率（Pass@k）下降，即模型退化为只会“押题”的单一解题者。DPH-RL 的核心思想是将 RL 目标中的 divergence（散度）项从单纯的“约束项”重塑为主动保护模型多样性的机制。

## 关键机制

### 1. Mass-Covering Divergence
DPH-RL 放弃了传统的 [[Reverse-KL]]（具有 mode-seeking 性质，会导致概率收缩），转而采用具有 **mass-covering**（质量覆盖）性质的散度度量，如 [[Forward-KL]] 或 [[JS Divergence]]。
- **Forward-KL**：鼓励新策略覆盖参考策略中的多种解法，防止将旧有解法的概率压至零。
- **JS Divergence**：一种更稳定、对称的散度，通过生成函数高效计算。

### 2. 分而治之的训练策略
DPH-RL 并非对所有样本“一刀切”，而是将数据划分为两部分：
- **探索集合 ($D_{exp}$)**：针对模型尚未掌握的困难样本，移除 KL penalty，允许模型激进探索（使用 PPO-clip）。
- **近完美集合 ($D_{pef}$)**：针对模型已基本掌握的样本，使用 f-divergence 约束，强制模型保持原有的行为分布，防止退化。

## 实验效果
在 Llama3.1-8b 和 BIRD 数据集上的实验表明：
- **In-Domain**：DPH-RL 在 Pass@1 上表现最佳，且 Pass@8/16 显著优于 GRPO 和 DAPO，接近 Base Model 的多样性水平。
- **Cross-Domain/OOD**：在跨域任务（如数学）上，DPH-RL 的 Pass@k 显著高于其他 RL 方法，证明了其有效防止了灾难性遗忘。

## 意义
DPH-RL 证明了在 RL 后训练中，保住多样性与提高奖励同等重要。它通过解构模型表现，实现了保留（Keep）与探索（Exploration）的显式平衡。