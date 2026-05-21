---
type: concept
title: 偏向生成
tags: [generative-ai, failure-mode, image-generation]
related: [跨物体融合, coexistent-generation, vmdiff]
created: 2026-04-02
updated: 2026-04-02
sources: ["跨物体融合新突破！从拼贴到创造：ai学会「生」出新物体.md"]
---

# 偏向生成

**偏向生成** (Bias Generation) 是多概念图像生成中的另一种常见失败模式。

## 定义
指在尝试融合两个概念时，生成结果被其中一个概念主导，导致另一个概念的特征几乎完全消失。例如，在融合“玻璃罐”和“猫头鹰”时，结果可能看起来只是一个普通的玻璃罐，而完全失去了猫头鹰的特征。

## 问题本质
这通常是由于生成模型在训练数据或推理过程中，对某些概念的表征能力强于其他概念，或者在特征融合时权重分配不均导致的。这被称为“偏科”现象。

## 解决方案
为了解决这一问题，[[VMDiff]] 引入了 [[Efficient Adaptive Adjustment]] (EAA) 机制，通过定义包含 **视觉平衡** 和 **语义平衡** 的目标函数，显式地惩罚只偏向一方的生成结果，并自动搜索最佳的融合参数。