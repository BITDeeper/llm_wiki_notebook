---
type: concept
title: KME
tags: [mathematics, statistics, embedding]
related: [rkhs, perturbdiff, functional-diffusion]
created: 2026-03-12
updated: 2026-03-12
sources: ["用diffusion构建「ai虚拟细胞」，14项指标霸榜！mila唐建团队破解单细胞「破坏性」测序难题.md"]
---
# KME (核均值嵌入)

KME (Kernel Mean Embedding) 是一种将概率分布映射到 [[RKHS]]（再生核希尔伯特空间）中点的技术。

## 原理
通过核函数，KME 将分布中的所有样本映射到一个高维特征空间，并计算这些映射的均值。这个均值点就代表了原始分布。

## 作用
在 [[PerturbDiff]] 中，KME 是实现 [[泛函扩散]] 的关键。它将“细胞群体的概率分布”转化为一个可以进行数学运算（如加噪、去噪）的实体，从而使得对“分布的分布”进行建模成为可能。