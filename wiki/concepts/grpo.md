---
type: concept
title: GRPO
tags: [reinforcement-learning, algorithm, 强化学习, 算法, deepseek, rl, optimization]
related: [mobilevla-r1, chain-of-thought, deepseek-math, deepseek-r1, guo-daya, twinkle, rlhf]
created: 2025-12-05
updated: 2026-05-08
sources: ["四足机器人首次同时「思考+走路」，北大提出链式推理mobilevla-r1.md", "大厂抢郭达雅进行时！deepseek核心成员还是个“综艺巨佬”.md", "训练即服务！让模型训练回归算法语义，150行代码跑通rl.md"]
---

# GRPO

[[GRPO]] (Group Relative Policy Optimization) 是一种强化学习算法范式，全称为 Group Relative Policy Optimization。该算法由 [[DeepSeek]] 团队在 [[DeepSeek-Math]] 模型的论文中首次提出，主要提出者包括 [[DeepSeek]] 核心工程师 [[郭达雅]]。

## 技术意义

GRPO 是 [[DeepSeek-R1]] 推理能力涌现的关键技术。它证明了在不依赖人工标注的推理轨迹的情况下，仅通过纯强化学习也能有效激发大模型的推理能力，并使其自然涌现出自反思、验证和动态策略调整等行为模式。

## 应用机制

### 语言与物理控制

在 [[mobilevla-r1]] 的训练中，研究团队采用了类似 GRPO 的流水线来优化模型行为。该过程针对同一条指令生成多条 CoT + 动作方案，并结合三类奖励进行更新：

1.  **Movement Reward**：评估连续控制（速度、转向）与专家轨迹的接近程度。
2.  **Action Reward**：评估离散动作选择的正确性。
3.  **Format Reward**：确保输出严格遵守 [[链式推理]] 的结构格式。

通过这种方式，GRPO 将模型在语言层面的“想得清楚”成功转化为物理层面的“走得漂亮”。

### 训练框架实现

在 [[Twinkle]] 框架的介绍中，GRPO 被用作展示框架处理复杂 RL 训练循环能力的示例算法。通过 Twinkle 的组件化设计，开发者可以用约 150 行代码清晰实现 GRPO 的 rollout、reward 计算和更新过程，而无需显式处理底层的分布式调度细节。