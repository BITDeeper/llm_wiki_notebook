---
type: entity
title: Graphiti
tags: [ai-memory, graph-rag, benchmark]
related: [m-flow, mem0, rag]
created: 2026-04-03
updated: 2026-04-03
sources: ["19岁，常青藤辍学，这群中国年轻人重构了ai记忆.md"]
---

# Graphiti

**Graphiti** 是一种基于图的记忆方案，旨在利用知识图谱增强 AI 的记忆能力。

## 性能对比
尽管采用了图结构，但在 LongMemEval 测试中，[[m-flow]] 仍领先 Graphiti 16%；在 EvolvingEvents 测试中领先幅度达到 20%。这暗示了 M-FLOW 的 [[图路由bundle-search]] 机制在处理长期事件演变和多跳推理方面具有特定优势。