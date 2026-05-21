---
type: entity
title: Vero
tags: [视觉推理, 强化学习, 框架, 开源, 多模态]
related: [liu-zhuang, chen-danqi, task-routed-rewards, single-stage-reinforcement-learning, general-visual-reasoning]
created: 2026-04-11
updated: 2026-04-11
sources: ["刘壮陈丹琦新作：开源通用视觉推理rl框架，0思考数据刷新sota.md"]
---

# Vero

**Vero** 是由普林斯顿大学 [[liu-zhuang]] 团队与 [[chen-danqi]] 合作开发的通用视觉推理强化学习（RL）框架。它是首个适用于通用视觉推理的开源 RL 方案，旨在解决开源视觉语言模型（VLM）通常只能擅长单一任务（如数学或图表）而缺乏泛化能力的问题。

## 核心特性

### 1. 零思考数据训练
Vero 证明了在不依赖任何私有“思考”或“思维链”数据的情况下，通过 [[single-stage-reinforcement-learning]]（单阶段强化学习）也能达到 SOTA 性能。这挑战了业界普遍认为必须依赖昂贵私有推理数据的观点。

### 2. 任务路由奖励机制
为了解决视觉推理中答案格式差异大（如选择题 vs 开放描述）的难题，Vero 引入了 [[task-routed-rewards]]。该机制能根据任务类型自动将输出路由给相应的验证器（规则校验、数学校验或 LLM 裁判）进行精确奖励计算。

### 3. 广泛且均衡的数据
Vero 的成功主要归功于其构建的 **Vero-600K** 数据集。该数据集包含 60 万高质量样本，覆盖 6 大类任务。研究表明，广泛且均衡的数据覆盖是视觉推理强化学习 Scaling 的主要驱动力，能有效避免多任务训练中的能力退化。

## 性能表现

基于 Vero 训练的模型在 30 个基准测试中的 23 项上超越了经过专门微调的 [[qwen3-vl-8b-thinking]]，达到了 8B 视觉语言模型的 SOTA 水平。

## 开源情况

Vero 遵循开源精神，已公开其所有数据、代码和模型，为学术界和工业界提供了宝贵的研究资源。