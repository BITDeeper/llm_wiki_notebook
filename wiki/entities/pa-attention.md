---
type: entity
title: Pa-Attention（路径感知注意力）
created: 2026-05-24
updated: 2026-05-24
tags: [注意力机制, 并行思考, 视觉语言模型]
related: [visual-para-thinker, lprope, 并行思考范式]
sources: ["icml-2026｜首个视觉语言模型并行思考框架，一文解析内在机制.md"]
origin_date: 2026-02-01
---

# Pa-Attention（路径感知注意力）

**Pa-Attention**（Path-aware Attention，路径感知注意力）是 [[visual-para-thinker]] 框架中的核心注意力机制，用于实现不同并行推理路径之间的**隔离性**。

## 机制原理

与传统因果注意力（Causal Attention）不同，Pa-Attention 通过引入特殊 token `<think_i>`（其中 i 为路径编号）来实现不同推理路径的上下文隔离范式。每条推理路径拥有独立的注意力上下文，避免不同路径之间的信息干扰。

## 设计目标

在 [[并行思考范式|并行思考]] 框架中，不同推理路径需要独立探索各自的推理方向。如果路径之间存在信息泄露，会导致路径趋同，丧失多样性。Pa-Attention 正是为了解决这一问题而设计。

## 在框架中的角色

Pa-Attention 是 [[visual-para-thinker]] 保证路径"三性"中**隔离性**的关键组件，与保证无偏性的统一 position id 设计和保证可区分性的 [[lprope]] 机制共同构成框架的理论基础。