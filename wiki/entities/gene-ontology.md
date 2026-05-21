---
type: entity
title: Gene Ontology
created: 2026-05-03
updated: 2026-05-03
tags: [bioinformatics, database, knowledge-graph]
related: [scLong, 全基因组建模]
sources: ["当ai第一次读完整本基因之书，十亿参数单细胞大模型能干什么？.md"]
---

# Gene Ontology

[[Gene Ontology]] (GO) 是一个生物信息学领域广泛使用的知识库，旨在对基因和基因产体的功能进行结构化注释。

## 结构
GO 主要从三个方面对基因进行分类：
1. **生物过程** (Biological Process)
2. **分子功能** (Molecular Function)
3. **细胞组分** (Cellular Component)

## 在 AI 模型中的应用
在单细胞基础模型 [[scLong]] 中，[[Gene Ontology]] 被显式融入模型架构。研究团队根据基因共享的 GO 注释构建基因图，并利用图卷积网络（GCN）学习基因表示。这使得模型不仅知道基因的表达量，还能理解其在生物学系统中的功能位置和关联关系，从而提升了模型在扰动预测和药物反应预测等任务上的性能。