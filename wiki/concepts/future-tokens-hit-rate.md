---
type: concept
title: Future-tokens Hit Rate (FtHR)
created: 2026-05-10
updated: 2026-05-10
tags: [评估指标, 前瞻性, 量化]
related: [next-tobe, next-token-prediction]
sources: ["大模型自信且短视！next-tobe破除next-token预测诅咒-iclr'26.md"]
---

# Future-tokens Hit Rate (FtHR)

**Future-tokens Hit Rate**（未来词命中率）是一个用于量化大模型（LLM）前瞻能力的指标，由华东师范大学与复旦大学团队在提出 **[[next-tobe]]** 的研究中引入。

## 定义

在当前时刻 $t$，取模型输出分布中概率最高的 $L$ 个 token，观察它们是否能够覆盖未来窗口 $[t, t+k]$ 中真实出现的 token。这个覆盖的比例即为 FtHR。

## 意义

FtHR 的提出揭示了两个关键现象：
1.  **前瞻性客观存在**：即使在传统的 [[next-token-prediction]]（NTP）训练下，模型当前的预测分布中已经隐含了对未来若干 token 的预判。
2.  **与质量正相关**：一个未来 token 在当前分布中的排名越靠前（FtHR 越高），它在后续生成中被正确输出的概率也越高。

## 作用

FtHR 证明了模型并非天生短视，而是被 NTP 的 one-hot 目标分布所压制。这一指标为 **[[next-tobe]]** 方法提供了理论依据——即通过优化这一前瞻能力，可以转化为更高的推理准确率。