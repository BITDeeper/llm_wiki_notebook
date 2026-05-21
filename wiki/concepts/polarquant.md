---
type: concept
title: PolarQuant
tags: [algorithm, quantization, math]
related: [turboquant, qjl, kv-cache]
created: 2026-03-26
updated: 2026-03-26
sources: ["谷歌新论文把内存股价干崩了！kv-cache压缩6倍，“谷歌的deepseek时刻”.md"]
---

# PolarQuant

**PolarQuant**（极坐标量化）是 [[turboquant]] 算法的核心组件之一，旨在消除传统量化方法中存储归一化常数的开销。

## 核心思想
传统的数据量化通常基于笛卡尔坐标系（X, Y, Z 坐标），需要存储额外的缩放因子或归一化常数来还原数据。PolarQuant 转换思路，使用**极坐标**（距离+角度）来描述数据。

谷歌团队发现，在转换到极坐标后，角度的分布非常集中且可预测。这意味着不需要为每个数据点单独存储角度信息或归一化常数，从而实现了“零开销”的压缩。

## 类比
这类似于将导航指令从“往东走 3 个路口，往北走 4 个路口”压缩为“朝 37 度方向走 5 个路口”。信息量保持不变，但描述更加紧凑，且省去了坐标系本身的开销。

## 作用
在 [[turboquant]] 框架中，PolarQuant 负责捕捉数据的主要信息，将大部分 bit 容量用于存储距离和关键特征，为后续的 [[qjl]] 残差修正打下基础。