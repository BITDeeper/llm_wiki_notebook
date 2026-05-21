---
type: concept
title: Reward Signal
tags: [reinforcement-learning, rlhf]
related: [promptecho, teacher-forcing]
created: 2026-05-06
updated: 2026-05-06
sources: ["阿里开源promptecho：用冻结多模态大模型为文生图训练提供高质量reward.md"]
---

# Reward Signal

[[reward-signal]] 是强化学习中的反馈标量，用于指导智能体（或模型）调整策略以最大化累积奖励。

## 在文生图训练中的挑战

在利用强化学习优化文生图模型时，获取高质量的 [[reward-signal]] 是主要瓶颈。传统的 CLIP Score 粒度过粗，而训练专门的 Reward Model（如 ImageReward）成本高昂且受限于数据规模。

## PromptEcho 的贡献

[[promptecho]] 提出了一种无需训练的新范式，直接利用冻结 VLM 的预训练损失（交叉熵）作为 [[reward-signal]]。这种方法证明了 VLM 内部隐含的图文对齐知识可以被高效提取，转化为确定、连续且细粒度的反馈信号，从而替代传统的离散评分或专门训练的 Reward Model。