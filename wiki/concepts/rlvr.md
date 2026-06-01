---
type: concept
title: RLVR（可验证奖励强化学习）
created: 2026-05-30
updated: 2026-05-30
tags: [强化学习, 大模型训练, 数学推理]
related: [pion-优化器, 谱保持]
sources: ["adamw和muon的失稳根源有解了，港中文新优化器pion：在等谱流形上更新大模型.md"]
---
# RLVR（可验证奖励强化学习）

RLVR（Reinforcement Learning with Verifiable Reward）是一种带有可验证奖励的强化学习方法，常用于大模型数学推理训练。与传统的基于人类偏好（RLHF）的强化学习不同，RLVR 的奖励信号来自对输出结果的可验证判定（如数学答案的正确性）。

## 训练特点

RL 往往是大模型训练中最不稳定的阶段之一：
- Reward variance 大
- Optimization noise 强
- 容易出现模式崩塌与训练震荡

## 与谱保持的联系

研究发现，RL 阶段的参数更新往往天然倾向于保留预训练权重的谱结构，即强化学习可能本身就更偏向"结构保持型更新"。这与 [[pion-优化器]] 的[[谱保持]]更新几何几乎天然一致。

在 GRPO 训练框架下的实验验证了这一契合：Pion 在所有 RL 设置下都取得了最佳平均表现，收敛更快、训练更稳定、后期性能波动更小。