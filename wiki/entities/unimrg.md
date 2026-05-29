---
type: entity
title: UniMRG
created: 2026-05-28
updated: 2026-05-28
tags: [多模态, 后训练, icml-2026, 开源, 统一多模态模型]
related: [以生成促理解, 多表示生成, 原生理解生成统一, 清华大学, 高德地图]
origin_date: 2026-01-01
sources: ["icml-2026-清华&高德开源unimrg：低成本"统一多表示生成"能显著增强umm理解力.md"]
---

# UniMRG

**UniMRG**（Unified Multi-Representation Generation，统一多表示生成）是由 [[清华大学]]、阿里巴巴 [[高德地图]]、[[上海交通大学]] 和 [[南方科技大学]] 联合提出的后训练方法，已被 ICML 2026 录用。

## 核心思想

受费曼名言"凡我不能创造的，我皆不理解"启发，UniMRG 的核心洞见是：通过训练统一多模态模型生成图像的内在表示（深度图和分割图），迫使模型在内部表征中内化几何结构和物体边界信息，从而显著提升视觉理解能力。这体现了 [[以生成促理解]] 的逆向研究思路。

## 方法设计

UniMRG 不修改模型架构，而是通过后训练策略让模型同时挑战四项任务：

1. **图像重构**（Pixel Reconstruction）：保证模型对外观、颜色和纹理的建模能力
2. **深度图生成**（Image-to-Depth）：由 Depth Anything V2 预标注，迫使模型学习空间关系
3. **分割图生成**（Image-to-Segmentation）：由 SAM 预标注，提供以物体为中心的结构先验
4. **视觉理解**（Image Understanding）：标准VQA任务，确保生成能力转化为理解性能

总损失函数为四种损失函数的加权和，在同一个表征空间内同时处理语义、几何和结构信息。

## 跨架构通用性

在三种主流UMM架构上均验证有效：

| 范式 | 代表模型 | 训练时间（8×H20） |
|------|---------|-------------------|
| 自回归（AR） | Show-o | — |
| 掩码自回归（MAR） | Harmon | ~5小时 |
| 扩散模型（Diffusion） | OpenUni | ~3小时 |

## 关键实验结果

- **空间理解**：VSR基准提升 **7.21%**（OpenUni-3.6B）
- **幻觉抑制**：HallusionBench提升 **3.68%**
- **细粒度感知**：MMVP从71.67提升至 **74.67**
- **OOD泛化**：在MidjourneyV6合成数据集上显著提升深度图生成能力

## 资源

- 论文：arxiv:2601.21406
- 代码：https://github.com/Sugewud/UniMRG
- 项目主页：https://sugewud.github.io/UniMRG-Project/

## 局限与开放问题

- 方法依赖 Depth Anything V2 和 SAM 的预标注质量，存在"模型教模型"的递归依赖
- 缺乏在更大参数量模型（7B+）上的验证
- 与 [[neo-unify-架构]] 的"原生统一"路线相比，后训练路线的长期潜力尚待观察