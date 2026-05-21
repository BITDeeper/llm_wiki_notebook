---
type: concept
title: Sequence-to-Sequence
tags: [nlp, deep-learning, architecture]
related: [gnmt, smt]
created: 2026-04-29
updated: 2026-04-29
sources: ["20岁了！劈柴哥发帖庆生：谷歌翻译换了4代ai，第一次有了「呼吸感」.md"]
---

# Sequence-to-Sequence

[[Sequence-to-Sequence]] (Seq2Seq) 是一种神经网络架构，用于处理输入序列和输出序列长度可变的映射问题，是 [[GNMT]] 系统的基础架构。

## 工作原理
Seq2Seq 模型通常由一个编码器和一个解码器组成：
1.  **编码器**：将输入序列（如一个中文句子）压缩成一个固定长度的向量表示。
2.  **解码器**：根据这个向量表示，逐步生成输出序列（如对应的英文句子）。

## 在翻译中的意义
在 [[GNMT]] 之前，[[SMT]] 系统需要将句子切分为短语片段进行翻译。Seq2Seq 架构的引入使得机器能够一次性处理整句话，理解句子内部的语法结构和上下文依赖，从而实现了从“逐字对译”到“整句理解”的质变，大幅降低了翻译错误率。