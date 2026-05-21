---
type: entity
title: scaleFabric
tags: [product, networking, rdma, hardware]
related: [中科曙光, infiniband, roce, rdma]
created: 2026-03-12
updated: 2026-03-12
sources: ["全球ai算力大战变天！十万卡算力集群爆表，国产ib真香？.md"]
---
# scaleFabric

scaleFabric 是 [[中科曙光]] 推出的首款国产原生无损 [[RDMA]] 高速网络系统。它对标国际顶尖 [[InfiniBand]] 产品（如 NVIDIA NDR），旨在解决万卡乃至十万卡级 [[智算集群]] 的网络互联瓶颈。

## 核心特性
- **全栈自研**：从 112G SerDes IP、交换芯片、网卡到软件平台实现 100% 自主研发。
- **超大规模扩展**：单子网支持超过 11 万卡互联，较传统方案提升 133%。
- **极致低时延**：端到端时延低于 1 微秒，转发时延仅 260 纳秒。
- **原生无损**：采用基于信用的流控机制，从根源杜绝丢包，无需复杂的拥塞控制调优。

## 技术优势
与 [[RoCE]] 相比，scaleFabric 继承了 IB 架构的稳定性优势，具备毫秒级故障恢复能力，能够有效避免 [[PFC风暴]] 和网络抖动对长周期 AI 训练任务的影响。

## 应用案例
已在国家超算互联网郑州核心节点部署 3 万卡集群，经受了真实业务负载的验证。