---
type: entity
title: KAN
created: 2026-01-02
updated: 2026-01-02
tags: [neural-network, structuralism-ai, kolmogorov-arnold]
related: [structuralism-ai, ziming-liu, mlp]
sources: ["继ilya之后，kan一作再发檄文：scaling终将撞铁壁！.md"]
---

# KAN

KAN（Kolmogorov-Arnold Networks）是一种基于柯尔莫哥洛夫-阿诺德表示定理的神经网络架构，由 [[刘子鸣]] 等人提出。

## 架构特点
KAN 被定义为 [[结构主义 AI]] 的代表性技术实例。与传统的多层感知机（MLP）不同，KAN 旨在通过数学结构更紧凑地捕捉函数的组合结构。

## 在 AI 范式中的位置
根据刘子鸣的分类：
- **符号主义**：擅长类物理任务（高度可压缩），但在类化学/生物任务上失败。
- **联结主义**：通用性强但缺乏结构，在类物理/化学问题上低效。
- **KAN（结构主义）**：旨在捕捉中间状态（类化学任务），既不像 MLP 那样无结构，也不像线性模型那样过度约束。

## 理论意义
KAN 的提出是为了解决现有模型在“抽象”和“结构发现”上的不足，试图在不依赖无限算力扩展的前提下，通过引入显式或隐式的数学结构来提升模型的智能水平。