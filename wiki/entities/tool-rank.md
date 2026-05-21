---
type: entity
title: Tool-Rank
created: 2026-05-03
updated: 2026-05-03
tags: [model, reranker, llm]
related: [tool-rex, tool-embed, reranking]
sources: ["结构化扩展拿下agent工具检索新sota，精准找到api｜iclr'26.md"]
---

# Tool-Rank

Tool-Rank 是由 [[eit-nlp]] 团队开发的基于大语言模型（LLM）的重排序模型。

## 功能与定位

Tool-Rank 用于工具检索流程的**精排**阶段。在 [[tool-embed]] 完成初步召回后，Tool-Rank 负责对候选工具集合进行更精细的排序，以确定最终调用的工具。

## 技术特点

该模型利用 [[tool-rex]] 中结构化文档的 `when_to_use`（适用场景）字段，能够更准确地判断工具是否符合具体的任务需求。实验表明，场景描述信息在重排序阶段发挥着比功能描述更关键的作用。

## 训练数据

Tool-Rank 基于 200k reranker 训练样本构建，这些数据同样得益于 [[文档结构化扩展]] 带来的高质量语义对齐。