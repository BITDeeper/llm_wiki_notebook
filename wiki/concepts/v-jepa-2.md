---
type: concept
title: V-JEPA 2 动作条件视频预测
created: 2026-05-15
updated: 2026-05-15
tags: [jepa, 视频, 动作条件, 世界模型]
related: [v-jepa, jepa, leworldmodel, vla-视觉-语言-动作]
sources: ["160行代码读懂lecun的jepa世界模型.md"]
---
# V-JEPA 2 动作条件视频预测

V-JEPA 2 是 [[v-jepa]] 的扩展版本，在视频表征学习的基础上引入了动作条件预测能力，向真正的世界模型迈进一步。

## 核心机制

- **两阶段训练：**
  1. **预训练阶段：** 像 [[v-jepa]] 一样进行视频表征学习
  2. **动作条件阶段：** 在冻结的 encoder latent 上训练 action-conditioned predictor
- **动作条件预测：** 给定当前状态表征和动作，预测下一状态的表征

## 极简实现

在 [[keon-jepa]] 教学项目中，V-JEPA 2 用 278 行代码实现，是五个变体中代码量最多的。

## 局限性

在玩具数据上 conditioning gap 太小，信号不够明显，与原版论文存在差距。

## 与 VLA 的关联

V-JEPA 2 的动作条件预测与 [[vla-视觉-语言-动作]] 理念有技术关联，但 JEPA 更侧重表征学习而非动作生成。