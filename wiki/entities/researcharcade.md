---
type: entity
title: ResearchArcade
tags: [dataset, knowledge-graph, research-tool, ai-for-science]
related: [uiuc, jiaxuan-you, arxiv, openreview, 科研数据统一接口, 异构图, 科研演化建模, 两步范式]
created: 2026-03-24
updated: 2026-03-24
sources: ["科研数据不再碎片化！一张可计算图，连起整个科研世界.md"]
---

# ResearchArcade

[[ResearchArcade]] 是由 [[UIUC]] [[Jiaxuan You]] 教授团队发布的一个基于图结构的统一科研数据接口。其核心目标是解决科研数据在 [[ArXiv]]、[[OpenReview]] 等多源平台间的碎片化问题，通过构建动态、多模态的 [[异构图]]，为 [[科研智能体]] 和机器学习模型提供高质量的结构化数据基础。

## 核心特征

ResearchArcade 将科研世界模拟成一张动态图，具备以下四大特征：

1.  **Multi-source（多源）**：整合了 [[ArXiv]] 的学术语料库和 [[OpenReview]] 的同行评审数据，建立了跨平台的连接。
2.  **Multimodality（多模态）**：不仅处理文本，还精细处理论文中的图片和表格，保留其语义信息。
3.  **Heterogeneity（异构性）**：使用图结构存储多种类型的节点（论文、作者、段落、图表、评审）和边（引用、作者关系、审稿关系）。
4.  **Dynamic（动态性）**：记录论文的时间戳和版本变化（如 Rebuttal、Revision），支持对科研演化过程的建模。

## 数据架构

数据以多表格形式组织，分为节点表（如 paper, author, paragraph）和边表（如 citation, review-to-revision）。这种设计既便于作为结构化数据库使用（支持 SQL/CSV/JSON），也能无缝转换为 [[异构图]] 用于训练图神经网络（GNN）。

## 统一任务范式：两步法

ResearchArcade 提出了 [[两步范式]] 来统一定义各类学术任务：
1.  **Identify Target Entity**：确定任务目标对应的图节点或边。
2.  **Retrieve Neighborhood**：检索目标实体的多跳邻域子图作为模型输入。

这一机制极大地简化了新任务的开发流程，无需为每个任务重写数据管线。

## 数据规模

-   **ArXiv 数据**：包含 66,918 篇论文，拆解出 800 万+ 个段落、80 万+ 张图表。
-   **OpenReview 数据**：涵盖 57,278 篇投稿及 88 万+ 条评审记录。
-   **对齐情况**：约 45% 的 OpenReview 投稿成功与 ArXiv 论文匹配。

## 应用与验证

在引用预测、段落生成、修改定位、录用预测等 6 个任务上进行了验证。实验表明，利用该接口训练的小参数模型（如 [[Qwen3-0.6B]]）在特定任务上能逼近大模型性能，证明了高质量结构化数据的有效性。