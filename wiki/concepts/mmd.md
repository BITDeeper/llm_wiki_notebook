---
type: concept
title: MMD
tags: [statistics, metric, loss-function]
related: [rkhs, perturbdiff, kme]
created: 2026-03-12
updated: 2026-03-12
sources: ["用diffusion构建「ai虚拟细胞」，14项指标霸榜！mila唐建团队破解单细胞「破坏性」测序难题.md"]
---
# MMD (最大均值差异)

MMD (Maximum Mean Discrepancy) 是一种用于衡量两个概率分布之间距离的统计量。

## 在单细胞分析中的角色
- **传统视角**：常被用作外挂的启发式正则化惩罚项，用于拉近组间距离。
- **PerturbDiff 的突破**：在 [[PerturbDiff]] 的框架下，MMD 被证明是内生的损失函数。这是由 RKHS 空间中的反向去噪目标自然导出的。

## 重要性
在单细胞基因表达数据高度稀疏（Zero-inflation 高达 95% 以上）的情况下，传统的 MSE（均方误差）会导致模型预测全 0（崩溃）。而内生于泛函扩散体系的 MMD 迫使模型在总体分布密度、子群权重等高阶统计特征上进行对齐，从而显著提升了预测差异表达基因（[[DEGs]]）的准确性。