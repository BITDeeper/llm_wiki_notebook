---
type: entity
title: "MIRAS 框架"
tags: [google, deepmind, theory, memory, sequence-modeling]
related: [titans-架构, 保留门, 神经长期记忆, babiling]
created: 2025-12-07
updated: 2025-12-07
sources: ["谷歌祭出transformer杀手，8年首次大突破！掌门人划出agi死线.md"]
---

# MIRAS 框架

MIRAS（Memory Integration for Recurrent Architectures and Systems）是 Google DeepMind 提出的一个统一视角的序列建模理论框架。它旨在泛化各种序列模型中的记忆机制，为设计下一代 AI 模型提供理论蓝图。

## 核心思想
MIRAS 认为，序列建模的每一次重大突破本质上都在使用同一种底层机制：高度复杂的联想记忆模块。它将各种架构（如 Transformer、RNN、SSM）视为解决同一个核心问题的“不同手段”——**如何在融合新信息与旧记忆的同时，不让关键概念被遗忘**。

## 四个设计维度
MIRAS 通过以下四个维度来定义和设计序列模型：

1.  **记忆架构**：承担信息存储的结构，例如向量、矩阵，或像 [[titans-架构]] 中的深层多层感知机（MLP）。
2.  **注意偏置**：模型内部优化的学习目标，决定模型优先关注哪些信息。
3.  **保留门**：一种记忆正则化机制。MIRAS 将传统的“遗忘机制”重新解释为正则化形式，用于在学习新知识与保留旧知识之间取得平衡，防止灾难性遗忘。
4.  **记忆算法**：用于更新记忆状态的优化算法。

## 突破与成果
基于 MIRAS 框架，谷歌构建了三款独特的无注意力模型：
- **YAAD**
- **MONETA**
- **MEMORA**

这些模型在语言建模和常识推理任务中表现优异，验证了探索稳健的非 MSE（均方误差）优化机制的优势。

## 参见
- [[titans-架构]]：基于 MIRAS 框架构建的具体模型架构。
- [[保留门]]：MIRAS 框架中的关键机制。