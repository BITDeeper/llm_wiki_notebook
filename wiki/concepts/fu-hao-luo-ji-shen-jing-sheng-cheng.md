---
type: concept
title: 符号逻辑+神经生成
created: 2026-05-04
updated: 2026-05-04
tags: [methodology, neuro-symbolic, prolog, synthetic-data]
related: [smartypat, luo-ji-miu-wu]
sources: ["首个英文原生「弱智吧」！逻辑谬误数据集与生成框架来了-aaai'26.md"]
---
# 符号逻辑+神经生成

[[符号逻辑+神经生成]]（Symbolic Logic + Neural Generation）是一种混合人工智能范式，旨在结合符号主义（Symbolic AI）的严谨性和联结主义（Neural AI/LLM）的泛化能力。

## 核心思想

纯神经方法（如直接让 LLM 生成文本）虽然流畅度高，但在逻辑一致性上难以保证；纯符号方法虽然逻辑严密，但难以处理自然语言的复杂性。混合方法试图通过以下流程解决这一问题：

1.  **结构化约束**：使用符号逻辑语言（如 Prolog）定义严格的规则和约束条件。
2.  **内容生成**：利用 LLM 的生成能力，在符号逻辑定义的解空间内批量生成候选内容。
3.  **形式化验证**：通过符号推理引擎（如 Prolog 解释器）对生成内容进行自动验证，过滤掉不符合逻辑约束的样本。

## 应用实例

[[SMARTYPAT]] 框架是该方法的典型应用。它通过 Prolog 定义逻辑谬误的触发规则，让 LLM 生成事实组合，再由 Prolog 引擎筛选出真正包含谬误的组合，最后由 LLM 润色成自然语言。实验证明，这种方法生成的合成数据在质量和多样性上均优于纯神经生成方法。