---
type: entity
title: Jet-Nemotron 2B
created: 2026-06-05
updated: 2026-06-05
tags: [ai模型, 预训练模型, 测试基准]
related: [记忆巩固机制, gsm-infinite, ouro-1-4b]
sources: ["模型也需要「睡觉」？cmu新论文让llm在梦中「巩固记忆」.md"]
---
# Jet-Nemotron 2B

Jet-Nemotron 2B 是一个约20亿参数的预训练语言模型，在《Language Models Need Sleep》论文中被用作实验测试的基准模型之一。

## 实验表现

在[[gsm-infinite]]评测中，引入6次[[记忆巩固机制|睡眠循环]]后：
- 6步运算题准确率：0.742 → 0.812（提升7.0个百分点）
- 8步运算题准确率：0.351 → 0.388（提升3.7个百分点）