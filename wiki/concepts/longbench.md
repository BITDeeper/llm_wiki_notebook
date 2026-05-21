---
type: concept
title: LongBench
tags: [benchmark, evaluation, nlp]
related: [hisa, deepseek-v3-2]
created: 2026-04-06
updated: 2026-04-06
sources: ["北大团队改造deepseek注意力，速度快四倍还不丢精度.md"]
---

# LongBench

**LongBench** 是一个用于评估大语言模型长文本理解能力的基准测试集。

## 在 HISA 研究中的应用

在关于 [[hisa]] 的论文中，研究人员使用 LongBench 来验证替换注意力机制后模型对长文本的理解能力是否受到影响。测试结果表明，使用 HISA 的模型在 LongBench 上的得分与使用原版 [[deepseek-sparse-attention]] (DSA) 的模型基本持平，证明了 HISA 在大幅提升速度的同时，并未牺牲模型的长文本理解性能。