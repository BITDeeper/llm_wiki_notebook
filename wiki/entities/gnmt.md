---
type: entity
title: GNMT
tags: [google, nlp, translation, deep-learning]
related: [google-translate, smt, sequence-to-sequence, tpu, 零样本翻译]
created: 2026-04-29
updated: 2026-04-29
sources: ["20岁了！劈柴哥发帖庆生：谷歌翻译换了4代ai，第一次有了「呼吸感」.md"]
---

# GNMT

[[GNMT]] (Google Neural Machine Translation，谷歌神经机器翻译系统) 是 Google 于 2016 年 9 月发布的机器翻译系统，标志着翻译技术从统计方法向深度学习的全面转型。

## 技术突破
GNMT 引入了 [[sequence-to-sequence]] (Seq2Seq) 神经网络架构，将整句话作为一个单位进行编码和解码，而非像 [[SMT]] 那样拆解短语再拼接。这一变革使得机器翻译首次具备了“整句理解”的能力。

## 性能表现
*   **错误率降低**：在中英、英法等主要语种对上，GNMT 将翻译错误率降低了 55%-85%。
*   **硬件加速**：利用 Google 自研的 [[TPU]] (张量处理器)，将昂贵的神经网络计算压缩到了产品级响应速度。

## 零样本翻译
GNMT 在训练过程中意外展现出了 [[零样本翻译]] 能力：即使模型没有见过特定语言对（如日语到韩语）的直接对照数据，也能利用学到的语言间表征进行可读的翻译。这一现象为后来大语言模型的泛化能力奠定了基础。