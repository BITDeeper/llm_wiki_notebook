---
type: entity
title: Ouro 1.4B
created: 2026-06-05
updated: 2026-06-05
tags: [ai模型, 预训练模型, 测试基准]
related: [记忆巩固机制, gsm-infinite, jet-nemotron-2b]
sources: ["模型也需要「睡觉」？cmu新论文让llm在梦中「巩固记忆」.md"]
---
# Ouro 1.4B

Ouro 1.4B 是一个约14亿参数的预训练语言模型，在《Language Models Need Sleep》论文中被用作实验测试的基准模型之一。

## 实验表现

在[[gsm-infinite]]评测中，引入4次[[记忆巩固机制|睡眠循环]]后：
- 6步运算题准确率：0.419 → 0.615（提升19.6个百分点）
- 8步运算题准确率：0.210 → 0.272（提升6.2个百分点）

相比[[jet-nemotron-2b]]，Ouro 1.4B 在6步运算题上的提升幅度更为显著，表明睡眠机制对较小模型可能具有更大的增益空间。