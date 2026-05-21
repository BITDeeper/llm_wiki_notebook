---
type: entity
title: GEOPERCEIVE
tags: [评测框架, 数据集, 几何推理, 多模态]
related: [geodsl, geodpo, mathvista, 几何感知错误]
created: 2026-04-30
updated: 2026-04-30
sources: ["vlm解几何题总翻车？geodpo从「看」入手：用结构化表示+dpo优化，让模型先看懂再推理丨iclr'26.md"]
---

# GEOPERCEIVE

**GEOPERCEIVE** 是首个面向几何感知能力的独立评测框架，由光明实验室与清华大学提出。

## 设计理念
传统的几何评测采用端到端方式（图像+问题→答案），混淆了感知错误与推理错误。GEOPERCEIVE 的核心在于将“是否答对”拆解为“是否看对”，专注于评估模型对图形结构的识别能力。

## 评测机制
1. **结构化表示**：利用 [[geodsl]] 语言描述几何元素（点、线、圆）及其拓扑关系。
2. **精确匹配**：通过 Hungarian Matching 算法将模型预测的结构与标准答案进行对齐。
3. **细粒度评分**：采用 element-level F1 scoring，对每一个几何元素和结构关系进行精确评分。

## 作用
该框架能够精确定位模型在结构识别层面的瓶颈（如漏检、幻觉），为 [[geodpo]] 等优化方法提供了明确的诊断基准和优化目标。