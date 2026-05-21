---
type: concept
title: Multi-Token Prediction (MTP)
created: 2026-05-10
updated: 2026-05-10
tags: [推理加速, 训练范式, 对比方法]
related: [next-tobe, next-token-prediction]
sources: ["大模型自信且短视！next-tobe破除next-token预测诅咒-iclr'26.md"]
---

# Multi-Token Prediction (MTP)

**Multi-Token Prediction**（多词预测）是一种通过增加多个预测头来并行预测多个未来 token 的技术，典型代表包括 Medusa 架构。

## 工作原理

MTP 通过在模型上添加额外的预测头，使得模型在推理时能够一次生成多个未来的 token，从而加速推理过程。

## 局限性

尽管 MTP 能够提升推理速度，但在 **[[next-tobe]]** 的研究背景下，它被认为存在以下局限：
1.  **本质未变**：MTP 仍然是在并行地拟合多个 one-hot 分布，并没有真正改变刚性的目标分布。
2.  **单步最优逻辑**：它依然遵循“单步最优”的训练逻辑，未解决长程规划的问题。
3.  **推理开销**：增加预测头会带来额外的显存和计算开销。

## 与 Next-ToBE 的对比

与 MTP 不同，**[[next-tobe]]** 不改变模型结构，不增加预测头，而是通过修改损失函数（引入软目标分布）来激活模型的前瞻能力。Next-ToBE 被认为是更优雅且开销更低的解决方案。