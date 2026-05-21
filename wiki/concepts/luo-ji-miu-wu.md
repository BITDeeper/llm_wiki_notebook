---
type: concept
title: 逻辑谬误
created: 2026-05-04
updated: 2026-05-04
tags: [logic, reasoning, fallacy, argumentation]
related: [smartypat-bench, false-premise, equivocation, false-analogy]
sources: ["首个英文原生「弱智吧」！逻辑谬误数据集与生成框架来了-aaai'26.md"]
---
# 逻辑谬误

[[逻辑谬误]]（Logical Fallacy）指推理中的错误，无论是形式上的还是实质上的，导致论证无效。在自然语言处理和人工智能研究中，评估模型识别和分类逻辑谬误的能力是衡量其逻辑推理水平的重要指标。

## 常见类型

根据 [[SMARTYPAT-BENCH]] 的标注体系，常见的逻辑谬误包括：

-   **[[False Premise]]（错误前提）**：论证基于不正确的前提假设。
-   **[[Equivocation]]（偷换概念 / 一词多义）**：在论证过程中使用一个词的多种含义，导致逻辑断裂。
-   **[[False Analogy]]（错误类比）**：将两种本质上不同的事物进行不恰当的类比。
-   **[[Contextomy]]（断章取义）**：剥离上下文，扭曲原意。
-   **[[Improper Transposition]]（换质不换位）**：逻辑推演过程中的形式错误。

## 分布特征

在真实世界的语料（如 Reddit 或“弱智吧”）中，逻辑谬误的类型呈现高度长尾分布。少数几种谬误（如错误前提、偷换概念）占据了绝大多数，而许多复杂的谬误类型极少出现。这给训练能够识别罕见谬误的 AI 模型带来了挑战。