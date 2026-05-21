---
type: entity
title: Geneformer
created: 2026-05-03
updated: 2026-05-03
tags: [foundation-model, bioinformatics, single-cell]
related: [scLong, scgpt]
sources: ["当ai第一次读完整本基因之书，十亿参数单细胞大模型能干什么？.md"]
---

# Geneformer

[[Geneformer]] 是一个现有的单细胞基础模型，常被用作基准对比。

在 [[scLong]] 的研究中，[[Geneformer]] 被列为主要的对比模型之一。测试结果显示，在遗传扰动预测、化学扰动预测和癌症药物反应预测等任务上，[[scLong]] 的性能指标（如 Pearson 相关系数、MSE 等）普遍优于 [[Geneformer]]。这主要归因于 [[scLong]] 纳入了全基因组建模并融合了生物学先验知识，而 [[Geneformer]] 等传统方法通常只关注高表达基因。