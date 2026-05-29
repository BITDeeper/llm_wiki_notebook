---
type: concept
title: KV-Cache连续性
created: 2026-05-28
updated: 2026-05-28
tags: [推理优化, 缓存, 性能, agent]
related: [子agent级智能路由, pilotdeck]
sources: ["小龙虾彻底凉了？清华团队连夜开源agent神器，token成本狂降70%！.md"]
---
# KV-Cache连续性

KV-Cache连续性是指在模型推理过程中，Key-Value缓存保持连续不间断的状态。当在同一个推理会话中切换不同模型时，KV-cache会被打断，相当于每次换模型都要重新"读档"，导致推理效率下降。

## 在智能路由中的应用

[[子agent级智能路由]] 的核心设计决策就是保持KV-cache连续性。通过在子Agent层面（而非request层面）做模型路由，确保同一子Agent内部始终使用同一模型，上下文缓存不被打断。这不仅节省了Token成本，还避免了频繁切换模型带来的性能损耗。

## 技术意义

KV-cache连续性是大模型工程化中常被忽视但影响显著的细节。在Agent系统中，一个复杂任务可能需要数十次模型调用，如果在request级别频繁切换模型，缓存失效带来的累积性能损耗可能抵消使用便宜模型节省的成本。