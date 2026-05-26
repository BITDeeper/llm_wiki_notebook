---
type: concept
title: Chunk-based LOD Tree
created: 2026-05-25
updated: 2026-05-25
tags: [3d, 渲染, 数据结构, lod]
related: [aholo-viewer, splat-based-lod-tree, 3d高斯泼溅]
sources: ["性能超越李飞飞，他们把10亿高斯点的3d世界装进浏览器.md"]
---
# Chunk-based LOD Tree

Chunk-based LOD Tree 是一种用于大规模 3DGS 场景渲染的数据组织和层级细节管理技术，由 [[aholo-viewer]] 采用。

## 核心思路
将原始 3DGS 数据先切成 N 个 chunk（数据块），再分别为每个 chunk 生成不同层级的 LOD，运行时以 chunk 为单位做层级切换。

## 优势（对比 [[splat-based-lod-tree]]）

### 1. 内存与显存开销更可控
系统只需为整个 chunk 选层级，无需为成千上万个 splat 各自决策。内存调度的颗粒度更粗、缓存命中更好，与常规加载方案相比基本不引入额外开销。

### 2. 可扩展性更强
chunk 是一个清晰的数据边界，未来扩展到城市级、街区级的超大场景时，按区块拼接、按区块单独更新比 splat 粒度的方案更容易。

## 潜在局限
- 层级切换以 chunk 为单位，理论上不如 splat 粒度的方案平滑
- 文章未充分讨论 chunk 边界处可能出现的视觉跳变问题