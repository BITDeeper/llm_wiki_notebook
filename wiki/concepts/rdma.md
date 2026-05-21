---
type: concept
title: RDMA (远程直接数据存取)
tags: [networking, hardware]
related: [infiniband, roce, scalefabric]
created: 2026-03-12
updated: 2026-03-12
sources: ["全球ai算力大战变天！十万卡算力集群爆表，国产ib真香？.md"]
---
# RDMA (远程直接数据存取)

RDMA (Remote Direct Memory Access) 是一种允许计算机直接访问远程计算机内存的数据传输技术，而无需远程操作系统的介入。

## 核心优势
- **零拷贝**：数据直接在网卡和应用程序内存之间传输，无需经过内核缓冲区，降低了 CPU 开销和内存带宽占用。
- **内核旁路**：数据路径绕过操作系统内核协议栈，大幅降低了网络延迟。

## 在 AI 算力集群中的作用
在大规模 [[智算集群]] 中，成千上万个 GPU 需要频繁交换梯度数据。RDMA 提供的超低延迟和高带宽网络互联能力，是确保训练效率的关键。[[InfiniBand]] 和 [[RoCE]] 是目前实现 RDMA 的两种主要技术路线。