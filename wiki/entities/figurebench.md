---
type: entity
title: FigureBench
tags: [benchmark, dataset, scientific-visualization]
related: [autofigure, autofigure-edit]
created: 2026-02-22
updated: 2026-02-22
sources: ["学术插图新神器！万字材料秒出svg，西湖大学出品-iclr'26.md"]
---

# FigureBench

FigureBench 是由西湖大学团队构建的全球首个大规模科学插图基准数据集，用于评估 [[AutoFigure]] 等智能体绘图框架的性能。

## 数据集规模
涵盖 **3,300** 个高质量文本-图片对，跨越四种科学文本类型：
- 论文
- 综述
- 技术博客
- 教科书

## 评估结果
在该基准上的测试显示，[[AutoFigure]] 在教科书类任务中的胜率高达 **97.5%**。此外，人类专家盲测表明，66.7% 的专家认为生成图已达到 Camera-ready（出版级）标准。

## 意义
FigureBench 的建立为科学插图自动化领域提供了统一的评估标准，填补了该领域缺乏大规模基准测试的空白。