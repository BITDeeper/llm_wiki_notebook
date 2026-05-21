---
type: concept
title: Reverse-KL
tags: [mathematics, rl, metric]
related: [forward-kl, dph-rl, 多样性危机]
created: 2026-04-09
updated: 2026-04-09
sources: ["rl特训出「押题大师」？破解模型微调中的多样性危机与灾难性遗忘.md"]
---

# Reverse-KL

**Reverse-KL** (反向 KL 散度) 是一种衡量两个概率分布之间差异的指标，常用于强化学习的目标函数中作为约束项。

## 特性
- **Mode-Seeking（寻求模式）**：Reverse-KL 倾向于鼓励策略向少数高概率模式收缩。
- **惩罚机制**：它对当前策略在参考策略概率较低的地方产生高概率的行为进行严厉惩罚。

## 在 RL 中的问题
在 RLVR（基于可验证奖励的强化学习）微调中，使用 Reverse-KL 会导致模型过度集中于少量“熟悉答案”，从而引发 **[[多样性危机]]**。模型虽然可能提升 Pass@1（单次成功率），但会丧失探索其他有效解法的能力，导致 Pass@k（多次尝试成功率）下降。

## 对比
与 **[[Forward-KL]]** 不同，Forward-KL 具有 Mass-Covering（质量覆盖）性质，鼓励新策略覆盖参考策略中的多种解法，更适合用于保护模型的多样性。[[DPH-RL]] 算法正是利用了这一特性来缓解灾难性遗忘。