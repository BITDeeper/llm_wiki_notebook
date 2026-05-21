---
type: entity
title: Flat Retriever
tags: [memory-system, retrieval, rag]
related: [clonemem, a-mem, mem0]
created: 2026-01-21
updated: 2026-01-21
sources: ["ai用3年时光，来了解你！首个ai-clone长期记忆基准.md"]
---

# Flat Retriever

[[flat-retriever]] 是一种简单的扁平化检索方法，在 [[clonemem]] 基准测试中表现出人意料地优于复杂的记忆系统（如 [[a-mem]] 和 [[mem0]]）。

## 特点
- **架构简单**：不进行复杂的抽象或多层索引。
- **保留原始信息**：避免了对原始数据的过度压缩和摘要。

## 性能表现
在 CloneMem 的实验中，Flat Retriever 在检索层面表现最好。
- **原因**：复杂的记忆系统倾向于对数据进行抽象和总结以优化搜索，但这会损失细节保真度。
- **结论**：对于 [[ai-clone]] 任务，模型高度依赖时间顺序、原始表述和事件间的细微关联。简单的检索方法能更好地保留这些关键信息，从而支持更准确的推理。

这一发现对工程实践具有重要指导意义，表明在处理需要深度理解用户人生轨迹的任务时，过度优化存储和检索效率可能得不偿失。