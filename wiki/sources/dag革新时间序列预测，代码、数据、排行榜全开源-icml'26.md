---
type: source
title: "DAG革新时间序列预测，代码、数据、排行榜全开源 | ICML'26"
created: 2026-05-17
updated: 2026-05-17
tags: [时间序列预测, 外生变量, DAG, ICML, 开源, 华东师范大学]
related: [dag-framework, 邱翔飞, 华东师范大学决策智能实验室, 外生变量时间序列预测]
sources: ["dag革新时间序列预测，代码、数据、排行榜全开源-icml'26.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/nHSB6P_WyS7ZYH_-uALBew"
venue: 新智元
---
# DAG革新时间序列预测，代码、数据、排行榜全开源 | ICML'26

新智元关于华东师范大学决策智能实验室提出的 DAG 框架的深度报道。DAG 框架通过时间与通道双重相关网络，有效整合历史与未来外生变量信息，提升时间序列预测准确性。

## 核心内容

- **问题背景：** 现有外生变量时间序列预测（TSFX）方法未能充分利用未来外生变量，且忽略内外生变量间的相关关系。
- **核心创新：** DAG 框架通过双重相关网络在时间维度和通道维度上同时建模变量间相关关系，采用"发现-注入"机制传递可学习参数而非注意力分数，增强鲁棒性。
- **实验验证：** 在12个真实世界 TSFX 数据集上与9个基线方法对比，DAG 取得最优性能。
- **开源生态：** 代码、自建 TSF-X 数据集、OpenTS 排行榜全面开源。

## 关键链接

- 论文：https://arxiv.org/pdf/2509.14933
- 代码：https://github.com/decisionintelligence/DAG
- 数据集：https://drive.google.com/file/d/1K2AvogpOpSz1PiQ53dPchzGv_PqlCWAK/view
- 排行榜：https://decisionintelligence.github.io/OpenTS/leaderboards/

## 关联条目

- [[dag-framework]] — DAG 框架详情
- [[邱翔飞]] — 论文第一作者
- [[华东师范大学决策智能实验室]] — 研发机构
- [[外生变量时间序列预测]] — 核心概念