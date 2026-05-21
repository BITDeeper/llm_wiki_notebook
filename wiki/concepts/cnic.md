---
type: concept
title: CNIC
tags: [hardware, networking, infrastructure, compute]
related: [dualpath, snic, rdma, infiniband]
created: 2026-02-27
updated: 2026-02-27
sources: ["deepseek新论文剧透v4新框架！用闲置网卡加速智能体推理性能，打破pd分离瓶颈.md"]
---

# CNIC

**CNIC**（Compute NIC）是指专用于计算节点间通信的网卡。

## 重要性

在 AI 集群中，CNIC 负责节点间的高速数据交换（如梯度同步、推理通信）。其性能和稳定性直接决定了计算集群的线性加速比。

## DualPath 中的流量隔离

在 [[DualPath]] 框架中，为了保证计算性能不受影响，系统强制所有流量通过配对的 CNIC 走 GPUDirect [[RDMA]] 路径。

利用 InfiniBand 或 RoCE 网络的虚拟层（VL/TC）技术，DualPath 将推理通信设为“最高优先级”并预留 99% 带宽。这意味着，即使系统正在利用闲置的 [[SNIC]] 带宽进行 KV-Cache 搬运，这些搬运流量也只能在 CNIC 的间隙中“蹭”带宽，从而确保计算通信绝对优先。