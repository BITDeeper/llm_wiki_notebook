---
type: entity
title: AutoFigure-Edit
tags: [ai-for-science, svg, vectorization, image-editing]
related: [autofigure, figurebench, sam3, 推理式渲染]
created: 2026-02-22
updated: 2026-02-22
sources: ["学术插图新神器！万字材料秒出svg，西湖大学出品-iclr'26.md"]
---

# AutoFigure-Edit

AutoFigure-Edit 是 [[AutoFigure]] 的优化版本，实现了从“像素”到“矢量”的跨越，能够生成细节可编辑的 SVG 文件。

## 核心技术
为了实现高质量的矢量化输出，AutoFigure-Edit 引入了以下技术：
- **[[SAM3]]**：利用 Meta 的图像分割模型自动识别图中的图标。
- **RMBG-2.0**：自动去除背景，提取干净的图标元素。
- **矢量重组**：将提取的元素重新塞进生成的 SVG 模板中。

## 功能特点
生成的 SVG 文件不再是死板的图片，用户可以在浏览器内置编辑器里直接进行拖拽、改字、换色等操作。这使得 AI 生成的学术插图能够无缝集成到 PPT 或论文排版流程中。

## 应用场景
适用于需要高度定制化和后期调整的学术插图场景，如论文配图、教科书示意图及技术博客插图。