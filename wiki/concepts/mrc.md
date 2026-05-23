---
type: concept
title: MRC（多路径可靠连接）
created: 2026-05-21
updated: 2026-05-21
tags: [网络协议, AI基础设施, 以太网, OpenAI]
related: [zcube, openai, 以太网替代infiniband]
sources: ["中国团队突破瓶颈！不加gpu，万卡集群算力暴涨15%.md"]
origin_date: 2026-05-01
---
# MRC（多路径可靠连接）

MRC（Multipath Reliable Connection）是由 [[openai]] 联合 NVIDIA、AMD、Intel、Microsoft、Broadcom 五大巨头于 2026 年 5 月发布的网络协议。

## 核心特点

- **多路径并发传输**：允许多条网络路径同时传输数据，提升带宽利用率。
- **智能调度**：遇到链路故障或拥塞时能瞬间绕行，类似"更聪明的交通规则"。
- **开放标准**：通过 OCP（Open Compute Project）发布，NVIDIA、AMD、Broadcom 等厂商的 800Gb/s 网卡均已原生支持。

## 部署状态

- 已部署在 OpenAI 最大规模的 GB200 超算集群上。
- 正在成为行业基础标准，推动以太网生态从封闭走向开放。

## 与 ZCube 的对比

MRC 和 [[zcube]] 在 2026 年 5 月同期发力，但技术路线不同：

- **MRC** 在协议层发力，解决"已经出现拥塞后怎么办"（治病）。
- **ZCube** 在架构层动刀，解决"为什么会出现拥塞"（防病）。

两者存在融合可能——协议层的智能调度与架构层的拓扑优化或可组合使用。