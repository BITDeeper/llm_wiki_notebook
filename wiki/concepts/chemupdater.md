---
type: concept
title: ChemUpdater
created: 2026-03-20
updated: 2026-03-20
tags: [architecture, chemistry, ai-model]
related: [latentchem, 隐空间推理]
sources: ["10倍加速化学推理大模型！haven团队在隐空间思考分子式，碾压显示cot.md"]
---

# ChemUpdater

ChemUpdater 是 [[LatentChem]] 模型中的关键组件，旨在解决推理过程中信息更新的问题。

## 功能
传统的模型通常只在开始时读取一次分子信息，随后便基于初始记忆进行推理。ChemUpdater 允许模型在推理的每一步（每个 latent thought）都重新作用到分子的表示上。

## 作用
这种机制使得模型能够：
-   **动态聚焦**：在推理的不同阶段关注分子的不同关键信息。
-   **状态更新**：根据中间推理结果动态修正对分子的理解，而不是依赖过时的初始印象。

ChemUpdater 是实现“回看分子”能力的核心，保证了隐空间推理的准确性和连贯性。