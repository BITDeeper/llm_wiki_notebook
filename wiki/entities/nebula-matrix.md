---
type: entity
title: Nebula Matrix
tags: [product, ai-cluster, scaling-solution]
related: [中兴通讯, 中兴超节点]
created: 2026-03-27
updated: 2026-03-27
sources: ["不拼gpu！中兴扔出ai超节点，把token价格打下来.md"]
---

# Nebula Matrix

Nebula Matrix 是[[中兴通讯]]推出的集群超节点扩展方案，旨在实现AI算力从百卡到万卡的平滑扩展。

## 技术路线
采用业界主流的“电交换+光互联”技术路线：
- **机柜内**：使用高性能电交换机实现GPU间互联。
- **跨机柜**：采用光纤介质进行互联。

## 扩展能力
- **单体扩展**：基于Nebula X32/X128单体超节点。
- **集群扩展**：可灵活扩展至X256、X800、X8192甚至X16384的超大规模集群。

## 网络融合设计
创新性地融合了Scale-Up与Scale-Out网络：
- **Scale-Up网络**：承载张量并行、专家并行等高带宽需求流量。
- **Scale-Out网络**：承载数据并行、流水并行等常规流量。

这种融合设计在保障高性能互联的同时，显著降低了总拥有成本（TCO）。