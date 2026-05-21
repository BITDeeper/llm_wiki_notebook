---
type: entity
title: sqlite-vec
created: 2026-01-28
updated: 2026-01-28
tags: [library, database, vector-search]
related: [clawdbot, 混合搜索]
sources: ["ai记忆革命爆发！clawdbot如何像大脑般记住一切.md"]
---

# sqlite-vec

sqlite-vec 是一个 SQLite 的扩展，允许在 SQLite 数据库内直接进行向量相似度搜索，而无需外挂独立的向量数据库（如 Pinecone 或 Milvus）。

## 在 Clawdbot 中的应用
[[Clawdbot]] 使用 sqlite-vec 作为其 [[混合搜索]] 架构的核心组件，实现了轻量级的本地语义检索。

## 技术优势
- **零依赖**：不需要运行额外的向量数据库服务，降低了系统复杂度。
- **本地化**：所有向量数据存储在本地 SQLite 文件中，符合 [[本地推理]] 和数据隐私的理念。
- **混合索引**：可以与 SQLite 自带的 FTS5 全文搜索配合，轻松实现“向量+全文”的混合查询。

## 工作流程
1. 文本被分块并转换为向量。
2. 向量存储在 `chunks_vec` 表中。
3. 搜索时，sqlite-vec 计算查询向量与存储向量的余弦相似度，返回最相关的结果。