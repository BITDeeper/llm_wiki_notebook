---
type: entity
title: DeepRead
tags: [ai, rag, framework, document-understanding, ict-cas]
related: [agentic-rag, structural-blindness, document-structure-modeling, retrieve-readsection]
created: 2026-03-16
updated: 2026-03-16
sources: ["ai读不懂文档结构？计算所重构agentic-rag文档推理能力.md"]
---

# DeepRead

DeepRead 是由 [[ict-cas]]（中国科学院计算技术研究所）提出的文档理解框架，旨在解决 [[agentic-rag]] 系统中的 [[structural-blindness]]（结构盲）问题。它通过引入文档结构感知能力，使 AI 能够像人类一样“先定位后精读”，从而在长文档和多文档问答任务中显著提升准确率。

## 核心机制

### 文档结构建模
DeepRead 首先通过 OCR 工具将原始文档转化为结构化 Markdown，构建双维度模型：
- **层级维度**：区分标题和内容，记录标题的父子关系（如“2.方法”包含“2.1模型设计”）。
- **顺序维度**：为每个段落分配唯一坐标 `(doc_id, sec_id, para_idx)`，即“文档ID-章节ID-段落索引”。

此外，系统会将轻量化的目录（TOC）注入提示词，让智能体掌握全局结构，而无需加载全量文档。

### 工具协同：Retrieve 与 ReadSection
DeepRead 配备了两个互补的核心工具，模拟人类的阅读行为：

1. **Retrieve（扫描式定位）**：
   - 接收语义查询，返回 Top-K 相关段落及其坐标。
   - 支持“扫描窗口”（召回段落前后各1段），模拟快速浏览。

2. **ReadSection（聚焦式阅读）**：
   - 接收坐标范围（如 `doc_id=1, sec_id=3, start_para=0, end_para=5`）。
   - 返回该范围内连续、保序的段落，重构完整语义上下文，解决碎片化问题。

两者形成闭环：Retrieve 负责“找方向”，ReadSection 负责“深挖掘”。

## 性能表现
- **ContextBench**：准确率从 74.5% 提升至 91.5%（+17.0%）。
- **多文档任务**：在 QASPER（学术论文问答）和 SyllabusQA（课程大纲对比）上分别提升 7.7% 和 13.8%。
- **涌现行为**：90% 以上的查询自主进化出“先 Retrieve 后 ReadSection”的策略。

## 设计理念
DeepRead 强调利用文档的 [[原生结构先验]]，而非依赖外部构建的复杂知识图谱。这种轻量级、高效率的方法使其在工程落地和成本控制上具有优势。

## 案例分析
在亚马逊财报计算任务中，传统方法可能混淆“预估”与“实际”数据，而 DeepRead 先定位到“合并利润表”章节，再读取完整表格，精准计算出 30.8% 的同比增长率。