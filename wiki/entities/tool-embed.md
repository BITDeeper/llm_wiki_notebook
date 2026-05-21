---
type: entity
title: Tool-Embed
created: 2026-05-03
updated: 2026-05-03
tags: [model, embedding, retrieval]
related: [tool-rex, tool-rank, dense-retrieval]
sources: ["结构化扩展拿下agent工具检索新sota，精准找到api｜iclr'26.md"]
---

# Tool-Embed

Tool-Embed 是由 [[eit-nlp]] 团队开发的面向 [[dense-retrieval]]（密集检索）的专用嵌入模型。

## 功能与定位

Tool-Embed 旨在解决智能体在面临大规模工具库时的**召回**问题。它能够将用户查询和工具文档映射到同一向量空间，通过计算相似度快速筛选出候选工具集合。

## 训练数据

该模型基于 [[tool-rex]] 基准构建的大规模训练语料进行训练，包含 50k embedding 训练样本。这些数据均经过 [[文档结构化扩展]] 处理，确保了查询与工具描述之间的语义对齐。

## 性能表现

在 ToolRet 和 TOOL-REX 等基准测试中，Tool-Embed 结合 [[tool-rank]] 取得了 SOTA 成绩。研究表明，`function` 和 `tags` 等结构化字段对提升其密集检索效果最为显著。