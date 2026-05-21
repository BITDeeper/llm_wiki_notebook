---
type: concept
title: "View-to-View Transformation"
tags: [deep-learning, architecture, ecg]
related: [nef-net-v2, geometric-angular-attention, 心电全景合成]
created: 2026-04-29
updated: 2026-04-29
sources: ["任意视角生成！港科广实现真实场景下的心电全景｜iclr'26.md"]
---

# View-to-View Transformation

**View-to-View Transformation**（视角到视角变换）是一种用于心电信号合成的建模方式，被应用于 [[NEF-NET v2]] 模型中。

## 核心思想
与显式建模心脏电生理场的方法不同，View-to-View Transformation 直接通过几何关系学习输入导联到目标导联的映射。它不试图重建物理场，而是让模型学会哪些输入导联对目标导联最相关。

## 优势
- **保留细节**：解决了 [[Nef-Net v1]] 中特征平均融合导致波形细节被抹平的问题。
- **几何感知**：通过 [[Geometric Angular Attention]] 等机制，模型能够捕捉导联间的空间几何关系，从而更准确地合成目标视角的信号。