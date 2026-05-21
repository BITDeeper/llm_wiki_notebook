---
type: entity
title: MeshSpace
created: 2026-01-16
updated: 2026-01-16
tags: [object-storage, global-namespace, data-management]
related: [aimesh, xsky星辰天合, 重力墙]
sources: ["minimax都在用！5500pb幕后功臣首次亮相，国产黑马祭出杀招.md"]
---

# MeshSpace

MeshSpace 是 [[XSKY星辰天合]] [[AIMesh]] 架构中的第二张网——**全局对象网**。其核心目标是推倒 [[重力墙]]，解决海量数据在跨地域、跨集群流动时面临的成本和延迟难题。

## 核心技术：Global Namespace
MeshSpace 通过创新的 **Global Namespace（全局命名空间）** 技术，将分散在不同地域、不同云环境上的物理存储集群，抽象为一个统一的“逻辑存储池”。

## 功能特性
*   **透明访问**：业务层访问数据时无需感知其物理位置，真正实现“一个入口，联通全域”。
*   **EB 级扩展**：旨在构建 EB 级别的全局非结构化数据平台。

## 性能表现
*   **引擎能力**：底层引擎已进入“单桶百万 OPS 时代”。
*   **吞吐优化**：大块数据写入性能提升近 50%。
*   **延迟降低**：延迟降低 30%。

## 应用场景
MeshSpace 特别适合拥有混合云架构的企业，例如 [[MiniMax]] 利用此类方案解决了混合云架构下的“数据孤岛”难题，极大简化了数据使用流程。