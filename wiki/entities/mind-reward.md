---
type: entity
title: Mind-Reward
tags: [algorithm, reinforcement-learning, reward-function, optimization, tom]
related: [mindpower-benchmark, 以机器人为中心的心智推理, bdi-一致性, grpo]
created: 2026-03-15
updated: 2026-03-15
sources: ["cvpr'26-以机器人为中心的tom推理框架，从心智推理到决策行动.md"]
---

# Mind-Reward

**Mind-Reward** 是一种专门为心智推理任务设计的强化学习奖励函数，旨在优化模型在具身智能场景中的推理一致性和决策最优性。它是 MindPower 框架中训练策略的核心组件。

## 设计目标
Mind-Reward 旨在解决两个核心问题：
1. **逻辑一致性**：确保模型生成的感知、信念、欲望、意图、决策和动作之间没有逻辑矛盾。
2. **视角分离**：确保模型能清晰区分“机器人视角”和“人类视角”，并进行二阶信念推理。

## 核心原则

### 1. BDI 一致性
要求从感知到动作的整个推理链条必须符合 **BDI（Belief-Desire-Intention）** 逻辑模型。任何层级之间的跳跃或矛盾都会导致奖励降低。

### 2. 机器人中心优化
强制模型从自身视角出发进行推理。在心智推理阶段，模型不仅要推断环境状态，还要推断“人类认为环境状态是什么”（二阶信念），并基于此生成协助策略。

## 技术实现
- **原子动作序列化**：将每一层推理（从感知到动作）表示为一系列原子动作 `action(agent, object)`，其中 `agent` 指代状态拥有者（机器人或人类），`object` 指代目标实体。
- **LLM 辅助评估**：在 GRPO 训练过程中，利用 LLM（如 Qwen3-Max）将模型输出和真实答案转换为结构化的原子动作序列，并基于此计算奖励。
- **训练流程**：
  1. **SFT 阶段**：使用标注数据训练模型，使其学会输出符合 MindPower 层级结构的推理结果。
  2. **GRPO 阶段**：利用 Mind-Reward 和 Format-Reward 进行强化优化，进一步提升推理质量和动作成功率。

## 效果
实验表明，引入 Mind-Reward 进行优化后，模型在决策生成和动作执行等关键指标上均达到 SOTA 水平，显著优于未使用该奖励函数的基线模型。