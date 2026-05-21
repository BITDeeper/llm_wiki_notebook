---
type: concept
title: "Geometric Angular Attention"
tags: [deep-learning, attention-mechanism, architecture]
related: [nef-net-v2, view-to-view-transformation]
created: 2026-04-29
updated: 2026-04-29
sources: ["任意视角生成！港科广实现真实场景下的心电全景｜iclr'26.md"]
---

# Geometric Angular Attention

**Geometric Angular Attention**（几何角度注意力）是 [[NEF-NET v2]] 模型架构中的核心组件，也被称为 MGAA (Multi-head Geometric Angular Attention)。

## 功能
该机制利用交叉注意力（Cross-Attention）比较目标导联的角度嵌入与输入导联的角度嵌入，计算出它们之间的几何相似度权重。

## 作用
- **捕捉空间关系**：使模型能够理解不同导联在空间几何上的相对位置关系。
- **特征加权**：根据几何相似度动态调整输入特征的权重，从而更准确地从相关导联中提取信息以合成目标视角的信号。