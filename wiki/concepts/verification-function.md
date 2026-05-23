---
type: concept
title: 验证函数
created: 2026-05-18
updated: 2026-05-18
tags: [数学工具, ai-for-science, 组合优化]
related: [gilbert-pollak-conjecture, bottleneck-reflection-mechanism, structured-mathematical-reasoning, wang-liwei-team-pku]
sources: ["llm助力突破尘封60年数学猜想！北大王立威团队大幅刷新斯坦纳比下界.md"]
---
# 验证函数

## 定义

验证函数（Verification Functions）是[[wang-liwei-team-pku|王立威团队]]在研究[[gilbert-pollak-conjecture|Gilbert-Pollak猜想]]时提出的数学工具。每一个验证函数代表了一种对树进行分割（摘除/prune）的方式。

## 核心思想

在归纳法证明框架下，对于一棵大的斯坦纳树，只需考虑一个局部，从中摘除一小部分点并将剩余点重连。只要：
1. 剩余部分满足比例（归纳假设）
2. 摘除过程的变化量满足比例

即可合并得到原问题满足比例。

## Max-Min问题转化

归纳法要求：任意的树形态w，存在一种分割使得比例成立。这本质上是一个**Max-Min问题**：

- **Max**：最大的树形态w（最坏情况）
- **Min**：最小的验证函数F（最优分割）

人类数学家手动尝试了约10种不同的F，得到0.824的下界。通过LLM生成1000+种F，有机会得到更好的下界。

## 与LLM的结合

团队设计了Reward Model自动化求解Max-Min问题，通过证明单调性并配合分治法，为所有树形态w找到验证函数F进行覆盖。LLM的核心任务就是**找到更多的验证函数F**，再与Reward Model交互。