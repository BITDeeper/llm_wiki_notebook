---
type: concept
title: Retrieve 与 ReadSection
tags: [tools, agent-workflow, rag-strategy]
related: [deepread, agentic-rag, document-structure-modeling]
created: 2026-03-16
updated: 2026-03-16
sources: ["ai读不懂文档结构？计算所重构agentic-rag文档推理能力.md"]
---

# Retrieve 与 ReadSection

**Retrieve**（扫描式定位）与 **ReadSection**（聚焦式阅读）是 [[DeepRead]] 框架中的两大核心工具。它们的协同工作模拟了人类“先定位后精读”的阅读行为，解决了 [[agentic-rag]] 中的碎片化问题。

## Retrieve（扫描式定位）
- **功能**：接收语义查询，返回 Top-K 相关段落及其坐标。
- **特性**：支持“扫描窗口”（在召回段落前后各加1段），模拟人类快速浏览上下文的行为。
- **角色**：负责“找方向”，快速锁定相关章节或区域。

## ReadSection（聚焦式阅读）
- **功能**：接收具体的坐标范围（如 `doc_id=1, sec_id=3, start_para=0, end_para=5`）。
- **特性**：返回该范围内连续、保序的完整段落，重构语义上下文。
- **角色**：负责“深挖掘”，获取完整证据，避免关键词检索的局限性。

## 协同效应
两者形成闭环：Retrieve 提供结构锚点，ReadSection 进行深度阅读。实验显示，90% 以上的查询会自主进化出这一范式，证明了该策略的有效性。