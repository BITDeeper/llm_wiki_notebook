---
type: concept
title: Trajectory-Level Post-training
tags: [reinforcement-learning, training-method, alignment]
related: [simpletes, 评估侧计算, ai-for-science]
created: 2026-04-24
updated: 2026-04-24
sources: ["夯爆了！清北斯坦福联手，simpletes横扫21个科学难题.md"]
---

# Trajectory-Level Post-training

**Trajectory-Level Post-training**（轨迹级后训练）是一种旨在解决 AI 科研中“短视症”的模型训练方法，由 [[SimpleTES]] 团队提出。

## 核心思想
传统的强化学习往往优化单步奖励，导致模型倾向于“短视”，即只关注眼前的分数提升，而不敢进行可能导致短期分数下降但长期有益的探索。这在科学发现等长程任务中是致命的。

Trajectory-Level Post-training 的核心思路是：**不优化单步表现，而是以整条探索轨迹的最终突破作为监督信号。**

## 实现机制
该方法通常包含以下步骤：
1.  **放弃即时奖励**：将一整条探索轨迹视为一个完整的 rollout，只拿该轨迹最终达到的最高分作为监督信号，反向传播给轨迹中的每一个节点。
2.  **精英轨迹筛选**：基于迭代拒绝采样微调（IRFT），只保留总分排名前 R% 的“精英轨迹”用于训练，其余丢弃。
3.  **动态演进**：随着模型能力的提升，动态收紧精英门槛 R，促使模型逐步将长程突破策略内化到参数中。

## 效果
经过这种训练的模型，不仅搜索效率更高，而且能学到一种可迁移的“科研直觉”或“长线思维”。在面对完全没见过的新问题时，它也能找到原始模型找不到的更强解，而不仅仅是死记特定问题的解法。

## 参考来源
- [夯爆了！清北斯坦福联手，SimpleTES横扫21个科学难题](https://mp.weixin.qq.com/s/uLj5Q_CKBUsT180I5yGJew)