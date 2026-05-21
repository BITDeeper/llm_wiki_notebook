---
type: concept
title: Agentic RAG
tags: [rag, agent, ai-architecture, retrieval]
related: [deepread, structural-blindness, retrieve-readsection]
created: 2026-03-16
updated: 2026-03-16
sources: ["ai读不懂文档结构？计算所重构agentic-rag文档推理能力.md"]
---

# Agentic RAG

**Agentic RAG**（智能体检索增强生成）是指利用大语言模型的工具使用能力，从静态的一次性检索向自主、多轮的证据获取进化的 RAG 形式。它是解决复杂问答任务的核心方向。

## 演进方向
传统的 RAG 系统通常进行单次检索，而 Agentic RAG 赋予了 AI 智能体自主决策的能力，使其能够根据任务需求动态调用工具（如搜索引擎、数据库查询）。

## 面临挑战
现有的主流 Agentic Search 框架普遍存在 [[structural-blindness]]（结构盲）问题，即在处理长文档时忽略了文档的层级结构，导致检索效率低下和准确率不足。

## 进化形态
[[DeepRead]] 是 Agentic RAG 的一种重构形态。它通过引入文档结构感知能力，配合 [[Retrieve 与 ReadSection]] 工具的协同，实现了从“关键词拼凑”到“章节精读”的范式转变。