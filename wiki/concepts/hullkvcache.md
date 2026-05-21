---
type: concept
title: HullKVCache
tags: [inference-optimization, kv-cache, computational-geometry]
related: [transformer-内置计算机, 2维注意力头, 凸包极值查询]
created: 2026-03-17
updated: 2026-03-17
sources: ["卡帕西点赞transformer内置计算机！每秒3万token吞吐，拿下世界最难数独.md"]
---

# HullKVCache

**HullKVCache** 是一种基于计算几何原理的新型 KV 缓存机制，由 [[Percepta]] 团队提出。它利用凸包数据结构来优化 Transformer 的注意力计算，从而实现极速推理。

## 工作原理
HullKVCache 依赖于 [[2维注意力头]] 的设计。在这种设计中，历史 Token 的 Key 向量被映射为二维平面上的点。注意力查询（寻找与 Query 最匹配的 Key）被转化为计算几何中的 [[凸包极值查询]] 问题——即在二维平面的凸包上，找到沿 Query 方向最远的点。

通过动态维护历史 Key 的凸包，HullKVCache 将每一步注意力查询的计算复杂度从传统的 O(n) 降低至 O(log n)。

## 性能表现
*   **吞吐量**：在普通 CPU 上实现了 **31,037 Token/秒** 的吞吐量。
*   **对比**：效率较传统 KV Cache 提升了近 200 倍。
*   **兼容性**：完全基于标准 PyTorch Transformer，无需定制内核或稀疏掩码。

## 意义
HullKVCache 证明了通过改变注意力机制的数学基础（从线性扫描转向几何查询），可以在不依赖专用硬件（如 GPU）的情况下实现指数级的效率提升，对 [[本地推理]] 的发展具有重要推动作用。