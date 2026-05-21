---
type: entity
title: GeoDSL
tags: [编程语言, 表示法, 几何推理, 结构化]
related: [geoperceive, geodpo, 结构化表示]
created: 2026-04-30
updated: 2026-04-30
sources: ["vlm解几何题总翻车？geodpo从「看」入手：用结构化表示+dpo优化，让模型先看懂再推理丨iclr'26.md"]
---

# GeoDSL

**GeoDSL** (Geometry Domain Specific Language) 是一种专为几何问题设计的领域特定语言（DSL）。

## 功能
GeoDSL 用于对几何图形进行结构化表示，能够描述：
- **基本元素**：点、线、圆。
- **结构关系**：共线、垂直、相切。
- **拓扑与依赖约束**。

## 应用
在 [[geoperceive]] 框架中，GeoDSL 用于生成几何图形数据（程序→图像）以及解析模型输出（自然语言→结构化代码）。它将模糊的视觉图像转化为可计算的程序代码，使得机器能够对模型的感知能力进行精确、自动化的评分。