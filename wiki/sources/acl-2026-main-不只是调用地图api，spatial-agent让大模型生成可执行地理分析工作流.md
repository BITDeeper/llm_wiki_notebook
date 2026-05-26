---
type: source
title: "ACL 2026 Main | 不只是调用地图API，Spatial-Agent让大模型生成可执行地理分析工作流"
created: 2026-05-26
updated: 2026-05-26
tags: [acl-2026, 地理空间分析, 智能体, giscience, 论文报道]
related: [spatial-agent, geoflow-graph, 地理空间分析工作流, 领域知识中间表示, agentic-engineering, 机器之心]
sources: ["acl-2026-main-不只是调用地图api，spatial-agent让大模型生成可执行地理分析工作流.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/_SXwcjvP8U9Si8wImKR3IQ"
venue: 机器之心
---
# ACL 2026 Main | 不只是调用地图API，Spatial-Agent让大模型生成可执行地理分析工作流

**来源：** 机器之心
**发表日期：** 2026-05-26
**原始论文：** Spatial-Agent: Agentic Geo-spatial Reasoning with Scientific Core Concepts（ACL 2026 Main）
**论文链接：** https://arxiv.org/abs/2601.16965
**代码仓库：** https://github.com/ecerybao/Spatial-Agent

## 摘要

本文报道了 ACL 2026 Main 会议接收论文 Spatial-Agent 的核心内容。该工作由 Emory University、Rutgers University 和 University of Texas at Austin 的研究团队完成，提出了一种基于 GIScience 理论的地理空间分析 Agent 框架。

## 核心要点

- **问题定位：** 复杂地理空间分析问题不能通过单步地图 API 调用解决，需要多步有序的分析工作流。
- **核心方法：** 在自然语言和工具调用之间引入 [[geoflow-graph|GeoFlow Graph]] 中间表示层，将问题拆解为包含空间概念和功能角色的图结构。
- **理论基础：** 借鉴 GIScience 中的空间信息核心概念（Kuhn 2012）和功能角色理论（Scheider 等人）。
- **实验结果：** 在 MapEval-API 上，Spatial-Agent + GPT-4o-mini 达到 45.15% 准确率（baseline 23.00%，相对提升 96.30%）；使用 GPT-5 时进一步提升至 71.88%。
- **关键启发：** 当 Agent 进入有成熟理论的领域时，应将领域理论转化为模型可用的中间表示，而非仅依赖通用规划能力。

## 关联条目

- [[spatial-agent]] — 本文分析的核心系统
- [[geoflow-graph]] — Spatial-Agent 的核心中间表示结构
- [[地理空间分析工作流]] — 本文解决的核心问题类型
- [[领域知识中间表示]] — 本文提出的通用工程原则
- [[agentic-engineering]] — 垂直领域智能体工程的具体实践