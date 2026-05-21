---
type: entity
title: Foldwell
tags: [ai-model, biology, protein-folding, benchmark]
related: [bindwell, alphafold, plapt]
created: 2025-12-04
updated: 2025-12-04
sources: ["奥特曼恩师力挺19岁少年！比alphafold快4倍，只杀害虫不伤人.md"]
---

# Foldwell

Foldwell 是由初创公司 [[bindwell]] 开发的蛋白质折叠预测模型。它是一个受 DeepMind [[alphafold]] 启发的定制扩散模型，专门用于农药靶点的结构分析。

## 核心特性
- **速度优势**：声称比 DeepMind 的 AlphaFold-3 快 4 倍。
- **专用性**：针对农药研发中的蛋白质靶点进行了优化，而非通用的蛋白质结构预测。
- **不确定性量化**：集成了不确定性评估系统，用于标记预测结果的可信度，以减少“幻觉”分子进入湿实验阶段。

## 技术背景
Foldwell 是 Bindwell AI 套件的一部分，与 APPT（蛋白质-蛋白质相互作用模型）和 PLAPT（蛋白质-配体相互作用模型）协同工作。其核心逻辑是利用 [[苦涩的教训]] 哲学，即通过大规模计算资源来替代人类在化学结构设计中的直觉。

## 性能基准
根据报道，Bindwell 的工具在 Affinity Benchmark v5.5 上性能优于现有工具 1.7 倍。然而，关于“快 4 倍”的具体对比条件（如是否在同等精度下）在公开资料中细节较少。