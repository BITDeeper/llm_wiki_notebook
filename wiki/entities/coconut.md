---
type: entity
title: Coconut
tags: [推理, 连续隐空间, 强化学习, 预训练]
related: [田渊栋, token-assorted, deepconf, threadweaver]
created: 2026-01-04
updated: 2026-01-04
sources: ["田渊栋：2025年年终总结（一）.md"]
---

# Coconut

## 概述
[[Coconut]] 是 [[田渊栋]] 团队在 2024 年末公开的一项关于 [[连续隐空间推理]]（Continuous Latent Space Reasoning）的研究工作，发表于 COLM'25。该工作在 2025 年引发了关于如何在强化学习和预训练中使用连续隐空间以提高效率的研究热潮。

## 核心思想
传统的推理往往在离散的 token 空间中进行，而 Coconut 提出在连续的隐空间进行推理。这种方法旨在：
1. **提高效率**：利用连续空间的性质，优化强化学习和预训练的计算过程。
2. **增强表达能力**：通过连续隐空间捕捉更复杂的模式和关系。

## 影响与发展
- **研究热潮**：自 2024 年末公开后，该方向在 2025 年吸引了大量关注，研究者们开始探索如何将其应用于强化学习、预训练以及如何进一步提升其训练和计算效率。
- **后续工作**：田渊栋团队随后发表了《Reasoning by Superposition》（NeurIPS'25），从理论层面分析了连续隐空间推理的优势所在。

## 相关条目
- [[田渊栋]], [[token-assorted]], [[deepconf]], [[threadweaver]], [[连续隐空间推理]]