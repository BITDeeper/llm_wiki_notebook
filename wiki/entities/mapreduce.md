---
type: entity
title: MapReduce
tags: [google, distributed-systems, big-data, programming-model]
related: [jeff-dean, sanjay-ghemawat, bigtable]
created: 2026-02-01
updated: 2026-02-01
sources: ["图灵奖大佬来听课，竟然只能坐地板！谷歌扫地僧有多离谱？.md"]
---

# MapReduce

**MapReduce** 是一种用于大规模数据集（大于1TB）并行运算的编程模型。由 [[Google]] 的 [[Jeff Dean]] 和 [[Sanjay Ghemawat]] 共同开发。

## 概念
- **Map（映射）**：对一组数据元素进行操作，生成一组中间结果键值对。
- **Reduce（归约）**：对所有具有相同键的中间结果进行合并处理。

## 影响
MapReduce 彻底改变了大数据处理的方式，使得普通程序员也能利用分布式系统的强大算力。它不仅是 Google 搜索引擎的核心支撑技术之一，也启发了 Hadoop 等开源大数据处理框架的诞生。

## 相关条目
- [[BigTable]]：构建在 GFS 和 MapReduce 之上的分布式存储系统。
- [[Jeff Dean]]：主要设计者之一。