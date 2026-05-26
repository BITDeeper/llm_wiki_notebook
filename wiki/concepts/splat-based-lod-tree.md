---
type: concept
title: Splat-based LOD Tree
created: 2026-05-25
updated: 2026-05-25
tags: [3d, 渲染, 数据结构, lod]
related: [spark-2.0, chunk-based-lod-tree, 3d高斯泼溅]
sources: ["性能超越李飞飞，他们把10亿高斯点的3d世界装进浏览器.md"]
---
# Splat-based LOD Tree

Splat-based LOD Tree 是一种用于 3DGS 场景渲染的 LOD 数据组织技术，由 [[spark-2.0]] 采用。

## 核心思路
从单个高斯点（splat）粒度自下而上做合并，构造连续的细节层级。

## 优势
- 逐层加载细节，理论上能让层级切换感不突兀
- 细节过渡更连续

## 劣势（与 [[chunk-based-lod-tree]] 对比）
- 实际体验中细节切换感仍然比较明显（理论优势未完全兑现）
- 内存和显存开销较大
- 后期扩展性偏弱，难以灵活结合其他优化手段
- 面对超大规模场景（城市级）时扩展困难

## 适用场景
适合中小规模、对细节过渡平滑度要求较高的 3DGS 场景渲染。