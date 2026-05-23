---
type: concept
title: Retrieve-then-Steer（检索-引导机制）
created: 2026-05-21
updated: 2026-05-21
tags: [具身智能, 强化学习, 持续进化, 记忆检索]
related: [onemodel-1.7, 世界动作模型, 具身智能数据困境]
sources: ["libero-99%，实测第一：卧安-onemodel-1.7用一条隐式通路打通「看懂」到「做对」.md"]
---
# Retrieve-then-Steer（检索-引导机制）

Retrieve-then-Steer 是[[onemodel-1.7|OneModel 1.7]]的部署适应机制，使模型在不重新训练参数的情况下，利用历史成功记忆实现"越用越好"的持续进化。

## 核心观察

现有评测把每次测试视为独立的零样本试验，但真实机器人往往在同一个或缓慢变化的环境中反复操作——昨天成功洗过的碗，今天大概率还是用类似的方式洗。成功执行本身就是"经过环境验证的可靠行为模式"。

## 工作流程

1. **存储**：部署过程中，将经过进度校准的成功观测-动作片段存入长期记忆（Success Memory）
2. **检索**：推理时，检索与当前状态相关的动作块
3. **过滤**：通过轨迹级一致性过滤不一致的候选
4. **引导**：聚合为精英动作先验，通过Confidence-Adaptive Prior Guidance注入flow-matching动作采样器的中间状态，根据检索置信度自适应调整引导强度

## 关键特性

- **非参数**：不需要更新模型参数
- **轻量级**：存储和检索开销小
- **自适应**：根据检索置信度调整引导强度

## 实测效果

在SimplerEnv测试中，Retrieve-then-Steer将CogACT的平均成功率从75.8%提升至79.5%，提升3.7个百分点。

## 与RL闭环的关系

RL闭环和Retrieve-then-Steer是互补的：RL解决能力上限问题（突破模仿学习天花板），Retrieve-then-Steer解决部署适应问题（无需重训即可自适应）。两条路径共同让[[predictive-policy-latent|Predictive Policy Latent]]传导通路从"一次性连通"变成"持续增强"。

## 对具身智能数据困境的意义

为[[具身智能数据困境]]提供了一种新解法：不依赖海量参数重训，而是通过"成功记忆"检索实现轻量级自适应。