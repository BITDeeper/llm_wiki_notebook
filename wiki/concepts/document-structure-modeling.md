---
type: concept
title: 文档结构建模
tags: [nlp, ocr, data-processing, parsing]
related: [deepread, structural-blindness, native-structure-priors]
created: 2026-03-16
updated: 2026-03-16
sources: ["ai读不懂文档结构？计算所重构agentic-rag文档推理能力.md"]
---

# 文档结构建模

**文档结构建模**是指通过技术手段（如 OCR）将非结构化或半结构化的文档转化为机器可理解的层级化数据模型的过程。它是 [[DeepRead]] 框架实现结构感知的基础。

## 双维度模型
DeepRead 采用的双维度模型包含：
1. **层级维度**：区分标题（如章节）和内容段落，并记录标题之间的父子关系（例如“第2章”包含“2.1节”）。
2. **顺序维度**：为每个段落分配唯一坐标 `(doc_id, sec_id, para_idx)`，确保文本片段具有明确的位置标识。

## 作用
通过结构建模，AI 智能体不再面对一堆杂乱的文本块，而是获得了一张清晰的“地图”。这使得智能体能够：
- 理解内容的逻辑归属。
- 进行基于范围的连续阅读（而非碎片化检索）。
- 利用目录（TOC）进行全局规划。

## 技术依赖
现代 OCR 技术的发展使得精准提取文档的层级结构和阅读顺序成为可能，这为解决 [[structural-blindness]] 提供了技术基础。