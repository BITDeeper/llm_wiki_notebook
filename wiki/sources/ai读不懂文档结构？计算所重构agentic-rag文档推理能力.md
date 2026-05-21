---
type: source
title: "AI读不懂文档结构？计算所重构Agentic RAG文档推理能力"
tags: [rag, document-understanding, agent, nlp, research-paper]
related: [deepread, ict-cas, agentic-rag, structural-blindness]
created: 2026-03-16
updated: 2026-03-16
authors: ["新智元", "LRST"]
year: 2026
url: "https://mp.weixin.qq.com/s/BhvUQgREp4NOvb6axiWXiQ"
venue: "新智元"
sources: ["ai读不懂文档结构？计算所重构agentic-rag文档推理能力.md"]
---

# AI读不懂文档结构？计算所重构Agentic RAG文档推理能力

## 概述
本文报道了中国科学院计算技术研究所（ICT）提出的 DeepRead 框架。该框架旨在解决现有 Agentic RAG 系统中的“结构盲”问题，通过引入文档结构感知能力，显著提升了长文档和多文档问答的准确率与效率。

## 核心观点
- **痛点**：主流 Agentic Search 框架将长文档视为扁平文本块，忽略了文档的层级组织（如章节、段落）和顺序逻辑，导致检索碎片化、冗余和信息遗漏。
- **解决方案**：DeepRead 利用 OCR 技术提取文档结构，构建层级（父子关系）和顺序（坐标）双维度模型，并配合 Retrieve（扫描）和 ReadSection（精读）两大工具，模拟人类“先定位后精读”的阅读策略。
- **优势**：无需构建复杂知识图谱，仅依靠原生结构先验和轻量级坐标系统，即可实现显著性能提升。

## 关键数据
- **ContextBench**：准确率从 74.5% 提升至 91.5%（+17.0%）。
- **多文档任务**：在 QASPER 和 SyllabusQA 上分别提升 7.7% 和 13.8%。
- **行为模式**：90% 以上的查询自主进化出“先 Retrieve 后 ReadSection”的策略。

## 实体关联
- [[deepread]]：本文介绍的核心技术框架。
- [[ict-cas]]：研发机构。
- [[agentic-rag]]：DeepRead 所基于和改进的技术范式。
- [[structural-blindness]]：DeepRead 旨在解决的核心问题。