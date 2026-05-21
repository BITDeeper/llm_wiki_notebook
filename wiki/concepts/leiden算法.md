---
type: concept
title: Leiden算法
tags: [algorithms, graph-theory, clustering]
related: [graphify, 知识图谱自动化构建]
created: 2026-04-07
updated: 2026-04-07
sources: ["卡帕西没做完的，开源社区48小时搞定了！完全体知识库，token省70倍.md"]
---

# Leiden算法

[[Leiden算法]]（Leiden Algorithm）是一种用于发现复杂网络中社区结构的算法。它基于边的密度将节点划分为不同的社区，是 Louvain 算法的改进版，能够生成更高质量的分区。

## 在知识图谱中的应用
在 [[Graphify]] 等工具中，Leiden 算法被用于对知识节点进行自动聚类。
- **替代向量数据库**：传统的知识聚类通常依赖计算文本的 Embeddings 向量并进行余弦相似度匹配，这需要部署向量数据库。Leiden 算法则直接基于图拓扑结构（节点间的连接关系）进行聚类，无需向量计算。
- **结果**：算法会将联系紧密的主题归为一类，帮助用户在知识图谱中直观地看到知识的“领域”或“板块”。

## 优势
- **无需 Embeddings**：省去了生成和存储向量的成本。
- **可解释性强**：聚类结果直接基于实体间的显式链接。