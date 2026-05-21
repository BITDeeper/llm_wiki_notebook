---
type: source
title: "RL特训出「押题大师」？破解模型微调中的多样性危机与灾难性遗忘"
tags: [reinforcement-learning, llm, diversity, research, rlvr, iclr]
related: [dph-rl, 多样性危机, 灾难性遗忘, reverse-kl, forward-kl]
created: 2026-04-09
updated: 2026-04-09
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/ALXFRxphJA_l6dImyde44A"
venue: "新智元"
sources: ["rl特训出「押题大师」？破解模型微调中的多样性危机与灾难性遗忘.md"]
---

# RL特训出「押题大师」？破解模型微调中的多样性危机与灾难性遗忘

## 概述
本文报道了复旦大学、无限光年、上海科学智能研究院及上海创智学院联合团队的最新研究成果，该成果已被 ICLR 2026 接收。研究深入探讨了大模型在基于可验证奖励的强化学习（RLVR）微调过程中普遍存在的“多样性危机”与“灾难性遗忘”问题，并提出了名为 [[DPH-RL]] 的解决方案。

## 核心问题：多样性危机
研究发现，尽管 RLVR 能显著提升模型在单次作答场景下的成功率（Pass@1），但往往导致模型在允许多次尝试时的总体成功率（Pass@k）下降。这种现象表明模型虽然更擅长“押中一次正确答案”，却丧失了原本丰富的解题路径与候选解空间，退化为“押题大师”。这通常伴随着跨领域泛化能力的下降。

## 关键发现：Divergence 项的选择
研究指出，问题的根源在于长期被忽视的 RL 目标函数中的 divergence（散度）项：
- **Reverse-KL (反向KL散度)**：本质是 mode-seeking（寻求模式），会鼓励策略向少数高概率模式收缩，扼杀多样性。
- **缺失 Divergence 项**：导致模型缺乏对原始知识分布的显式保护机制。

## 解决方案：DPH-RL
团队提出了 [[DPH-RL]] (Diversity-Preserving Hybrid RL) 框架，核心创新包括：
1. **引入 Mass-Covering 散度**：放弃 Reverse-KL，改用具有“质量覆盖”性质的 [[Forward-KL]] 或 [[JS Divergence]]，鼓励新策略覆盖参考策略中的多种解法。
2. **分而治之的训练策略**：
   - **探索集合 ($D_{exp}$)**：针对困难样本，移除 KL penalty，允许激进探索。
   - **近完美集合 ($D_{pef}$)**：针对已掌握样本，使用 f-divergence 约束，强制保持原有行为分布。

## 实验结果
在 Llama3.1-8b 和 BIRD 数据集上的实验表明：
- **In-Domain**：DPH-RL 在 Pass@1 上表现最佳，且 Pass@8/16 显著优于 GRPO 和 DAPO，接近 Base Model 的多样性水平。
- **Cross-Domain/OOD**：DPH-RL 在跨域任务（如数学）上的 Pass@k 显著高于其他 RL 方法，证明了其有效防止了灾难性遗忘。

## 意义
该研究证明了在 RL 后训练时代，保住多样性与提高奖励同等重要。通过解构模型在 Pass@8 上的表现，DPH-RL 实现了保留（Keep）与探索（Exploration）的显式平衡，在获取新知识的同时极少侵蚀旧知识。

## 相关实体
- [[复旦大学]]
- [[无限光年]]
- [[上海科学智能研究院]]
- [[上海创智学院]]
- [[李龙]]
- [[周潪剑]]
- [[屈超]]