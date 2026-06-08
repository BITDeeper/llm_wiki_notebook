---
type: concept
title: D(R,O) Grasp
created: 2026-06-07
updated: 2026-06-07
tags: [具身智能, 灵巧抓取, 泛化, ICRA, 跨本体]
related: [roboscience, shao-lin, bi-adapt, vloa架构]
sources: ["连续入选icra最佳论文，roboscience机器科学如何突破具身智能泛化瓶颈？.md"]
origin_date: 2025-05-01
---
# D(R,O) Grasp

D(R,O) Grasp是[[shao-lin|邵林]]团队提出的通用灵巧抓取框架，荣获ICRA 2025机器人操作与运动方向最佳论文奖（Winner），从四千多篇投稿中脱颖而出，是近五年来亚洲机构首次以第一单位身份获此殊荣。

## 解决的问题

传统灵巧手抓取采用"一机一策"模式，每种灵巧手需要单独训练。D(R,O) Grasp应对的泛化挑战是：**不同灵巧手之间如何复用同一套抓取能力**。

## 核心方法

通过将机器人手和物体都表示成**点云**，学习二者在稳定抓取时应该形成的空间距离关系。基于这一统一表示，一个AI模型即可支持多种不同形态的灵巧手：

- LeapHand
- Shadow Lite
- XHand
- SoftHand

覆盖3/4/5指、软体与硬质等不同形态，完成复杂抓取操作。

## 在VLOA中的定位

D(R,O) Grasp为[[vloa架构|VLOA]]架构补齐了"一个模型适配多种末端执行器"的关键底层能力，与[[bi-adapt|Bi-Adapt]]的跨类别操作泛化共同构成VLOA的技术基石。