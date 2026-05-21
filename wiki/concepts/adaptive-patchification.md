---
type: concept
title: Adaptive Patchification
created: 2026-04-10
updated: 2026-04-10
tags: [compression, efficiency, video-generation]
related: [onestory, adaptive-memory-modeling]
sources: ["视频生成不再「断片」：onestory给模型装上「选择性记忆」，跨镜头讲故事人物场景始终如一丨cvpr'26.md"]
---
# Adaptive Patchification

**Adaptive Patchification**（自适应分块）是一种根据内容重要性动态调整数据表示粒度的技术。

## 原理
在处理历史视觉信息时，模型不再机械地按时间顺序分配固定的 token 数量（patchifier），而是根据 [[frame-selection]] 模块预测的重要性进行动态分配：
- **高优先级信息**：保留更细粒度的表示（高分辨率），保留丰富的细节。
- **低优先级信息**：进行更强程度的压缩，减少计算开销。

## 目的
这种机制旨在将庞大的历史上下文转化为紧凑而有效的条件信号，直接注入生成过程。它使得模型在计算成本可控的前提下，能够利用全局信息，从而支持分钟级长视频的生成。