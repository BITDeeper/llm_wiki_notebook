---
type: entity
title: PerturbDiff
tags: [ai-model, bioinformatics, diffusion-model, generative-biology]
related: [mila, tang-jian, tahoe100m, functional-diffusion, rkhs, mmd, virtual-cells]
created: 2026-03-12
updated: 2026-03-12
sources: ["用diffusion构建「ai虚拟细胞」，14项指标霸榜！mila唐建团队破解单细胞「破坏性」测序难题.md"]
---
# PerturbDiff

PerturbDiff 是由 [[Mila]] 唐建团队开发的基于 [[泛函扩散]] 的单细胞微扰响应预测模型。它旨在解决单细胞测序中因“破坏性”导致的无法获取配对数据的难题，是构建高保真 [[虚拟细胞]] 的关键技术突破。

## 核心特性
- **分布的分布建模**：不同于传统模型假设微扰结果是静态分布，PerturbDiff 将微扰后的细胞种群视为一个在分布空间中取值的随机变量，从而捕捉生物系统的混沌性和隐变量影响。
- **泛函扩散**：利用 [[RKHS]] 和 [[KME]] 将细胞种群映射为高维点，并在函数空间进行加噪和去噪。
- **内生 MMD**：证明了 [[MMD]] 是其框架下内生的损失函数，解决了高度稀疏单细胞数据中 MSE 导致的模型崩溃问题。

## 性能表现
在包含超1亿单细胞和1100种药物的 [[Tahoe100M]] 基准测试中，PerturbDiff 在14项评估指标上全面霸榜（SOTA）。特别是在预测差异表达基因（[[DEGs]]）的核心生物学指标上表现远超以往模型。

## 训练策略
采用 [[边缘分布预训练]] 策略，利用大量无干预数据（如 [[CellxGene]]）学习自然界的细胞状态流形，从而赋予模型显著的零样本预测能力。