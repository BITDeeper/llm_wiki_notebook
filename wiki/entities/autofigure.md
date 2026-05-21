---
type: entity
title: AutoFigure
tags: [ai-for-science, scientific-visualization, agent, westlake-university]
related: [autofigure-edit, figurebench, 推理式渲染, 智能体闭环迭代, 西湖大学]
created: 2026-02-22
updated: 2026-02-22
sources: ["学术插图新神器！万字材料秒出svg，西湖大学出品-iclr'26.md"]
---

# AutoFigure

AutoFigure 是由 [[西湖大学]] 张岳实验室推出的智能体绘图框架，旨在将长文本材料自动转化为高质量的学术插图。该工作入选 ICLR 2026。

## 核心特性
- **长文本理解**：能够处理上万字的论文、书籍、博客等材料。
- **多智能体协作**：通过 AI Designer 和 AI Critic 的协作优化布局。
- **推理式渲染**：将逻辑布局与美化渲染分离，解决传统 AI 绘图逻辑与审美不可兼得的问题。

## 工作流程
1. **Conceptual Grounding**：提取实体和关系，生成结构正确的布局代码。
2. **Critique-and-Refine**：模拟设计师与甲方的拉锯，反复修改布局直至满意。
3. **Aesthetic Rendering**：将布局渲染为精美图片，并通过“擦除-修正”策略解决文字幻觉问题。

## 评估表现
在自建的 [[figurebench]] 数据集上，教科书类任务胜率高达 97.5%。人类专家盲测显示，66.7% 的专家认为其生成图已达到出版级标准。

## 版本演进
其优化版本 [[autofigure-edit]] 进一步实现了从像素到矢量（SVG）的跨越，支持在 PPT 或浏览器中直接编辑生成图片的细节。