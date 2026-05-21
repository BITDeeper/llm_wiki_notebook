---
type: source
title: "学术插图新神器！万字材料秒出SVG，西湖大学出品 | ICLR'26"
authors: [AutoFigure团队, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/qHpTVkXMq_Z7lYDXr3xEuw"
venue: 量子位
tags: [ai-for-science, scientific-visualization, agent, westlake-university]
related: [autofigure, autofigure-edit, figurebench, 推理式渲染, 智能体闭环迭代]
created: 2026-02-22
updated: 2026-02-22
sources: ["学术插图新神器！万字材料秒出svg，西湖大学出品-iclr'26.md"]
---

# 学术插图新神器！万字材料秒出SVG，西湖大学出品 | ICLR'26

## 概述
本文报道了西湖大学张岳实验室推出的 [[autofigure]] 智能体绘图框架及其优化版本 [[autofigure-edit]]。该工作入选 ICLR 2026，旨在解决学术绘图中“审美与逻辑不可兼得、生成与编辑彻底断层”的痛点。

## 核心技术
AutoFigure 提出了 [[推理式渲染]] 范式，将逻辑布局与美化渲染分离。其工作流分为三步：
1. **Conceptual Grounding**：构建逻辑骨架。
2. **Critique-and-Refine**：通过 [[智能体闭环迭代]]（AI Designer 与 AI Critic 协作）优化布局。
3. **Aesthetic Rendering & Erase-and-Correct**：渲染精美图片，并使用 OCR 和矢量文本覆盖修正文字幻觉。

AutoFigure-Edit 进一步实现了从像素到矢量的跨越，利用 [[SAM3]] 和 RMBG-2.0 技术生成可编辑的 SVG 文件。

## 评估与数据集
团队构建了全球首个大规模科学插图基准 [[figurebench]]，包含 3,300 个高质量文本-图片对。
- **基准测试**：在教科书类任务中胜率达 97.5%。
- **专家盲测**：66.7% 的论文一作专家认为生成图已达到 Camera-ready（出版级）标准。

## 项目价值
被视为 [[ai-for-science]] 的“最后一块拼图”，赋能 AI 科学家实现从文本到绘图的全流程自主研究。项目代码、数据集及 Web 界面已全面开源。