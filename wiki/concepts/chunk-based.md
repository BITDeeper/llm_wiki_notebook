---
type: concept
title: Chunk-based
created: 2026-05-06
updated: 2026-05-06
tags: [paradigm, algorithm-strategy, 3d-reconstruction]
related: [scal3r, 长序列3d重建]
sources: ["公里级场景也能稳住了，国产团队把长视频3d重建又往前推了一步.md"]
---

# Chunk-based

**Chunk-based** 是一种处理长序列数据的技术范式，指将长序列切分成多个重叠片段分别处理，再进行对齐或融合。

## 在 3D 重建中的应用
在 [[长序列3d重建]] 中，Chunk-based 路线是一种常见的实用策略，用于解决 Transformer 长序列建模计算昂贵的问题。
- **传统 Chunk-based 的局限**：如果每一块的局部几何预测不够准确，块与块之间的误差会被放大，导致整体重建失败。
- **Scal3R 的改进**：[[Scal3R]] 采用了 Chunk-based 路线，但通过引入 [[全局上下文记忆模块]] (GCM) 和 [[全局上下文同步机制]] (GCS)，解决了块间误差放大的问题，实现了局部几何精度与全局一致性的平衡。