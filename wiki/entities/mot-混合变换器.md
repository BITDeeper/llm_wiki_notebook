---
type: entity
title: MoT (混合变换器)
tags: [architecture, deep-learning, transformer]
related: [neo-unify-架构, 无编码器设计]
created: 2026-03-06
updated: 2026-03-06
sources: ["彻底告别ve与vae！商汤硬核重构多模态：砍掉所有中间编码器.md"]
---

# MoT (混合变换器)

Mixture-of-Transformer (MoT) 是一种用于多模态模型的架构组件，由 [[商汤科技]] 和 [[南洋理工大学]] 在 [[neo-unify-架构]] 中提出。

## 核心功能
MoT 架构旨在统一实现视觉与语言的深度融合。它允许视觉理解与图像生成能力在同一体系内协同工作，从而避免了传统架构中不同组件间的冲突。

## 技术特点
- **协同性**：即使在较低的数据比例和损失权重下，理解能力依然保持稳定，而生成能力收敛很快。
- **统一性**：作为 [[neo-unify-架构]] 的主干，支撑了无编码器设计下的端到端训练。