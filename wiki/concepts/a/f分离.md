---
type: concept
title: A/F分离
tags: [architecture, optimization]
related: [p/d分离, 元脑hc1000]
created: 2025-12-26
updated: 2025-12-26
sources: ["推理成本打到1元每百万token，浪潮信息撬动agent规模化的“最后一公里”.md"]
---

# A/F分离

A/F分离（Attention/FFN Decoupling）是指将大模型推理中的**注意力机制**（Attention）层和**前馈网络**（FFN）层分离计算的技术策略。

## 作用

与 [[P/D分离]] 类似，A/F分离旨在打破模型层的耦合，允许系统根据Attention和FFN不同的计算特性（如算力需求、访存模式）进行细粒度的资源调度和硬件配置。

## 应用

这种分离是实现“按需配置计算实例”的重要手段，有助于在复杂的推理流程中进一步提升硬件利用率，是 [[浪潮信息]] 提出的架构重构方向的一部分。