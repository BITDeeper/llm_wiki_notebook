---
type: entity
title: PatchTST
tags: [深度学习模型, 时间序列预测, Transformer]
related: [itransformer, mlow, 前置分解范式]
created: 2026-04-02
updated: 2026-04-02
sources: ["别再用黑盒预测了！即插即用模块通过前置分解让itransformerpatchtst既准又可解释.md"]
---

# PatchTST

**PatchTST** (Patch Time Series Transformer) 是一种将时间序列数据切分为 Patch（补丁）并输入 Transformer 进行处理的深度学习模型。该设计借鉴了计算机视觉中 Vision Transformer (ViT) 的思想。

## 特点

- **通道独立**：通常对每个变量独立建模。
- **Patch 机制**：通过将时间序列分段为 Patch，能够更有效地提取局部特征并减少计算复杂度。

## 与 MLOW 的结合

作为先进的深度时序基座模型，PatchTST 同样面临可解释性不足的挑战。通过引入 [[MLOW]] 这一 [[前置分解范式]] 模块，PatchTST 能够在保持原有架构优势的同时，获得对趋势和周期成分的显式建模能力，从而实现更高的预测精度和更好的可解释性。
