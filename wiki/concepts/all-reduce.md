---
type: concept
title: All-reduce
tags: [algorithm, distributed-computing, networking]
related: [同步预训练, mrc, 大规模集群网络]
created: 2026-05-07
updated: 2026-05-07
sources: ["openai公开大规模稳定训练的秘密，英伟达amd英特尔都受益.md"]
---

# All-reduce

All-reduce 是分布式计算中常用的一种集合通信原语，广泛应用于大规模 AI 模型的训练过程中。

## 工作原理
在数据并行训练中，不同的 GPU 可能计算出梯度的不同部分。All-reduce 操作确保所有 GPU 最终都能获得完整的、聚合后的梯度总和。

## 性能瓶颈
All-reduce 的完成时间取决于参与节点中**最慢的那一次传输**。这种“木桶效应”使得其对网络拥塞、丢包和长尾延迟极度敏感。

在 [[同步预训练]] 架构下，单次训练迭代可能触发数百万次点对点的 All-reduce 传输。如果网络不稳定，这种通信模式会严重拖慢整体训练吞吐量，甚至导致任务回滚。因此，优化 All-reduce 的网络环境（如使用 [[mrc]] 协议）是提升大规模训练效率的关键。