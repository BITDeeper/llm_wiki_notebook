---
type: concept
title: "Green Context"
tags: [nvidia, cuda, gpu, resource-management, isolation]
related: [cuda-13-1, 英伟达, sm, mps]
created: 2025-12-06
updated: 2025-12-06
sources: ["英伟达周末双炸！cuda二十年最大更新，顺手屠榜agi比赛.md"]
---

# Green Context

Green Context 是英伟达在 CUDA 13.1 中引入的一种轻量级 GPU 上下文管理机制，旨在提供比传统 CUDA Context 更细粒度的资源控制。

## 功能特性
- **细粒度分区**：允许开发者定义和管理 GPU 资源（主要是流多处理器，即 SM）的独特分区。
- **资源预置**：可以将一组特定的 SM 专用于某个特定的 Context，并仅在该 Context 预置的资源内启动 CUDA Kernel 和管理流。
- **确定性分配**：提供确定性的资源分配，改善不同工作负载之间的隔离性。

## 应用场景
- **多租户环境**：在多个进程或应用共享 GPU 时，确保关键任务获得独占的计算资源。
- **高利用率场景**：通过减少虚假依赖和优化工作队列提交，提高 GPU 的整体利用率。
- **MPS (Multi-Process Service)**：与 CUDA 多进程服务配合，支持静态 SM 分区，进一步强化资源隔离。

## 意义
Green Context 解决了传统 CUDA Context 在资源管理上的粗粒度问题，为需要严格性能隔离和资源预置的高性能计算场景提供了关键支持。