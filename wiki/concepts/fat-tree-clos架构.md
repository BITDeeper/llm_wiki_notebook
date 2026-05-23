---
type: concept
title: Fat-Tree / Clos 架构
created: 2026-05-21
updated: 2026-05-21
tags: [网络架构, 数据中心, 传统方案]
related: [zcube, pd分离部署]
sources: ["中国团队突破瓶颈！不加gpu，万卡集群算力暴涨15%.md"]
---
# Fat-Tree / Clos 架构

Fat-Tree（胖树）/ Clos 架构是过去二十多年全球数据中心的主流组网方案。

## 核心思路

通过多层交换机（Leaf-Spine）一层一层堆叠扩展规模，规模不够就加层。在互联网流量时代运行良好，AI 训练集群中也基本够用。

## 在 AI 推理场景的局限

大模型推理采用 [[pd分离部署]] 后，数据流向高度动态、不对称。传统 Clos 架构暴露结构性死穴：

- 流量被拓扑关系天然推向同几台交换机和同几条链路。
- 形成热点堆积、队列反压、链路拥塞。
- 网络直径为 3 跳（二层组网），延迟较高。

## ROFT 变体

ROFT（Rail Optimized Fat-Tree）是传统 Fat-Tree 的优化变体，但 Leaf 交换机之间仍容易出现流量负载不均。[[zcube]] 在生产环境中直接替换了 ROFT 架构。