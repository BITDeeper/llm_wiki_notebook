---
type: concept
title: RKHS
tags: [mathematics, kernel-method, functional-analysis]
related: [kme, perturbdiff, functional-diffusion]
created: 2026-03-12
updated: 2026-03-12
sources: ["用diffusion构建「ai虚拟细胞」，14项指标霸榜！mila唐建团队破解单细胞「破坏性」测序难题.md"]
---
# RKHS (再生核希尔伯特空间)

RKHS (Reproducing Kernel Hilbert Space) 是一种特殊的希尔伯特空间，广泛应用于核方法和机器学习中。在 [[PerturbDiff]] 模型中，RKHS 被用作数学基础，将复杂的概率分布映射为高维空间中的点。

## 在 PerturbDiff 中的应用
- 结合 [[KME]]（核均值嵌入），RKHS 允许将包含数万个单细胞的复杂种群压缩为一个高维点。
- 这种压缩使得模型能够对“分布”进行操作（如加噪、去噪），就像传统扩散模型对像素进行操作一样。
- RKHS 的几何性质使得 [[MMD]]（最大均值差异）成为模型内生的损失函数，而非仅仅是启发式的正则项。