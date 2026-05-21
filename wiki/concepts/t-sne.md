---
type: concept
title: t-SNE
created: 2026-01-16
updated: 2026-01-16
tags: [visualization, dimensionality-reduction, algorithm]
related: [geoffrey-hinton, manifold-learning]
sources: ["ai教父geoffrey-hinton，全球第二个百万引用科学家！.md"]
---

# t-SNE (t-分布随机邻域嵌入)

t-SNE (t-distributed Stochastic Neighbor Embedding) 是一种由 [[Geoffrey Hinton]] 和 Laurens van der Maaten 于 2008 年提出的非线性降维技术，主要用于高维数据的可视化。它解决了传统方法（如 PCA）在处理复杂数据结构时的局限性，成为数据科学和机器学习领域的标准工具。

## 核心原理
t-SNE 的核心思想是将高维空间中相似的数据点映射到低维空间（通常是 2D 或 3D）中相近的位置。

- **高维空间**：使用高斯分布来衡量点与点之间的相似度。
- **低维空间**：改用 **Student t-分布**（自由度为 1）来衡量相似度。
- **解决拥挤问题**：t 分布的尾部比高斯分布更“胖”，这意味着在低维映射中，原本距离较远的簇会被强制推得更远，从而使得不同的数据簇在视觉上分界非常明显。

## 应用场景
- **特征可视化**：观察深度神经网络隐藏层提取的特征分布（例如 MNIST 手写数字自动聚成不同的团）。
- **生物信息学**：在单细胞测序数据中识别新的细胞种类。
- **调试模型**：直观地检查模型是否学到了有意义的聚类结构。

## 局限性
- **计算成本高**：处理超大规模数据集时速度较慢（后续出现了 FIt-SNE 等加速版本）。
- **全局结构丢失**：虽然保留了局部结构，但簇与簇之间的远近距离并不一定代表真实的全局差异。
- **参数敏感**：算法对超参数（如困惑度 Perplexity）较为敏感，通常需要多次调试。