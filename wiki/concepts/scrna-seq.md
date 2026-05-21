---
type: concept
title: scRNA-seq
tags: [biology, genomics, sequencing]
related: [destructive-sequencing, perturbdiff]
created: 2026-03-12
updated: 2026-03-12
sources: ["用diffusion构建「ai虚拟细胞」，14项指标霸榜！mila唐建团队破解单细胞「破坏性」测序难题.md"]
---
# scRNA-seq (单细胞转录组测序)

scRNA-seq (Single-cell RNA sequencing) 是一种用于分析单个细胞内基因表达水平的高通量测序技术。

## 特点
- **高分辨率**：能够揭示细胞间的异质性，识别稀有细胞类型。
- **破坏性**：该技术是 [[破坏性测序]]，意味着测量过程会破坏细胞，无法对同一细胞进行时间序列的连续观测。

## 在 AI 中的应用
scRNA-seq 产生的大规模数据是训练 [[虚拟细胞]] 模型（如 [[PerturbDiff]]）的基础。AI 模型试图从这些静态的、破坏性的快照中推断出细胞对药物或基因编辑的动态响应。