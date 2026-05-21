---
type: entity
title: Hexagon NPU
tags: [hardware, npu, architecture]
related: [snapdragon-wear-elite, qualcomm]
created: 2026-03-04
updated: 2026-03-04
sources: ["把20亿参数装进胸针？高通补齐了个人ai生态的最后一块拼图.md"]
---

# Hexagon NPU

Hexagon NPU 是 [[高通]] 骁龙平台中的 AI 处理单元架构，专门用于处理高负载的 AI 运算任务。

## 在可穿戴平台中的应用
在 [[骁龙可穿戴平台至尊版]] 中，Hexagon NPU 与低功耗 eNPU 组成了“双脑协同”架构：
- **Hexagon NPU**：负责高性能计算，提供运行 20 亿参数大模型所需的算力。
- **低功耗 eNPU**：负责常驻后台的轻量级感知任务（如音频传感器监听）。

这种分工协作使得可穿戴设备在拥有强大 AI 能力的同时，依然能保持合理的续航水平。