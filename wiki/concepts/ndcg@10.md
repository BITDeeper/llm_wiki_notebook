---
type: concept
title: "nDCG@10"
tags: [metrics, evaluation, search]
related: [aion-search, 自然语言检索]
created: 2026-05-08
updated: 2026-05-08
sources: ["18岁高中生用ai挖出150万未知天体，首批chatgpt原住民毕业.md"]
---

# nDCG@10

[[nDCG@10]]（Normalized Discounted Cumulative Gain at 10）是信息检索领域中用于衡量搜索结果排序质量的一个重要指标。

## 定义
- **DCG（折损累计增益）**：考虑了结果在列表中的位置，位置越靠前，权重越高（通常使用对数衰减）。
- **nDCG（归一化DCG）**：将 DCG 值除以理想情况下（完美排序）的 DCG 值，使得得分在 0 到 1 之间。
- **@10**：仅关注搜索结果列表前10项的相关性。

## 意义
在 [[AION-Search]] 的案例中，nDCG@10 被用来量化证明新方法的有效性：
- **传统方法**：0.015（前10个结果几乎全错）。
- **AION-Search**：0.180（前10个结果中有相当部分正确）。
这一指标的提升（10倍）直接证明了 AI 驱动的自然语言检索在处理稀有、复杂目标时的巨大优势。