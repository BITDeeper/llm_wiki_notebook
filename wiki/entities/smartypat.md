---
type: entity
title: SMARTYPAT
created: 2026-05-04
updated: 2026-05-04
tags: [framework, prolog, synthetic-data, neuro-symbolic, generation]
related: [smartypat-bench, luo-ji-miu-wu, fu-hao-luo-ji-shen-jing-sheng-cheng]
sources: ["首个英文原生「弱智吧」！逻辑谬误数据集与生成框架来了-aaai'26.md"]
---
# SMARTYPAT

[[SMARTYPAT]] 是一个基于 Prolog 的逻辑谬误自动生成框架，旨在解决数据集规模受限和标签不平衡的问题。它采用了一种“符号逻辑+神经生成”的混合方法。

## 工作流程

SMARTYPAT 的生成过程结合了符号逻辑的严谨性和大语言模型（LLM）的生成能力：

1.  **逻辑形式转化**：将原始数据转化为一阶逻辑形式，例如“Since A and B, therefore C”的结构化表达。
2.  **元层面建模**：在元层面对逻辑谬误进行建模，设计可复用的 Prolog 谓词（如 `has_effect/3`, `valid_accumulate/3`），为每种谬误类型构建形式化规则。
3.  **批量生成与校验**：让 LLM 在谓词空间中批量生成“事件-条件-结果”的事实组合，由 Prolog 引擎执行查询，仅保留真正触发逻辑谬误规则的组合。
4.  **自然语言转化**：将通过逻辑验证的事实组合交还给 LLM，转化为流畅自然的语言表达。

## 优势与验证

与基线方法（如直接让 LLM 生成谬误语句，或让 LLM 同时生成 Prolog 代码和自然语句）相比，SMARTYPAT 的“人工规则+LLM 生成+Prolog 校验”组合在大多数谬误类型上都能产生更高质量的样本。

评估结果显示，增广数据与原始 Reddit 数据之间的平均余弦相似度仅为 0.16 左右，证明该方法引入了具有高多样性的新数据，而非简单的重复。