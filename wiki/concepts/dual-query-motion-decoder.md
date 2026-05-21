---
type: concept
title: Dual-Query Motion Decoder
tags: [architecture, decoder, motion-reasoning]
related: [monoart, 渐进式结构推理]
created: 2026-04-22
updated: 2026-04-22
sources: ["无需多视角，单图重建可交互3d模型！南洋理工开源结构推理框架.md"]
---

# Dual-Query Motion Decoder

**Dual-Query Motion Decoder** (双查询运动解码器) 是 [[monoart]] 框架中用于推断物体运动的核心组件。

## 设计理念
该解码器旨在解决运动推理中的两个不同性质的问题：
1.  **语义问题**：这个部件是什么？（例如：这是一扇门）
2.  **空间问题**：运动发生在哪里？（例如：旋转轴在左侧边缘）

## 工作机制
为了防止这两类信息在同一个表征中相互干扰导致不稳定，解码器采用了**解耦设计**：
- **Content Query**：负责编码部件的语义信息（是什么）。
- **Position Query**：负责编码空间运动锚点（在哪里）。

通过 6 层迭代细化，这两个查询通过自注意力建模部件间关系，并通过交叉注意力从 3D 点特征中提取证据。这种“一边搞清楚是什么，一边搞清楚在哪里”的并行迭代方式，显著提升了运动推理的稳定性。