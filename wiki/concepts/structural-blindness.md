---
type: concept
title: 结构盲
tags: [rag, nlp, limitations, document-processing]
related: [agentic-rag, deepread, document-structure-modeling]
created: 2026-03-16
updated: 2026-03-16
sources: ["ai读不懂文档结构？计算所重构agentic-rag文档推理能力.md"]
---

# 结构盲

**结构盲**（Structural Blindness）是指现有的 AI 框架（特别是 [[agentic-rag]] 系统）在处理长文档时，将文档视为无差别的扁平文本块，而忽略了文档原生的层级组织（如章节、段落）和顺序逻辑的现象。

## 主要问题
结构盲会导致以下三大核心问题：
1. **证据碎片化**：将文档拆分为固定大小的文本块，破坏了语义连贯性，迫使智能体去拼接零散的片段。
2. **检索冗余**：缺乏全局结构认知，导致智能体反复检索同类信息，浪费计算资源。
3. **信息遗漏**：过度依赖关键词匹配，无法捕获章节内隐含的相关信息。

## 解决方案
[[DeepRead]] 框架通过引入 [[文档结构建模]] 和 [[原生结构先验]]，利用 OCR 提取的层级和坐标信息，有效解决了结构盲问题，使 AI 能够像人类一样进行结构化阅读。