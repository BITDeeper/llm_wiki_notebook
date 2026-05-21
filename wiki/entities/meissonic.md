---
type: entity
title: Meissonic
created: 2026-05-03
updated: 2026-05-03
tags: [文生图模型, 扩散模型, Muddit-基础]
related: [muddit, mm-dit, 视觉先验]
sources: ["从视觉出发统一多模态！颜水成团队最新研究：不再把图像编解码器塞进llm｜iclr'2026.md"]
---

# Meissonic

**Meissonic** 是一个高质量的文生图模型，作为 [[Muddit]] 的基础模型（Base Model）被用于初始化其共享骨干。

## 在 Muddit 中的角色

- **先验来源**：Meissonic 提供了高质量的文本到图像建模先验，包括空间结构、语义对应和视觉细节能力。
- **初始化骨干**：[[Muddit]] 的核心骨干 [[mm-diT]] 直接由预训练的 Meissonic 初始化，这使得统一模型能够继承强大的视觉生成能力，而非从零开始学习。
- **对比基准**：在 GenEval 基准测试中，Meissonic 的得分为 0.54，低于 Muddit 的 0.61，证明了在统一框架下进行多任务联合训练可以进一步提升性能。