---
type: entity
title: LX2处理器
created: 2026-05-28
updated: 2026-05-28
tags: [cpu, 国产算力, armv9]
related: [灵晟超级计算机, sme]
sources: ["国产超算生成式压缩模型训练性能突破2.16-eflops，支撑全球遥感数据万倍级压缩.md"]
---
# LX2处理器

LX2 是国产 Armv9 架构 CPU 处理器，支持 SME（可缩放矩阵扩展）指令集，是 [[灵晟超级计算机]] 的计算核心。

## 性能对比

在 [[d2ar]] 研究的单节点实验中：

- **LX2 + SME** 的训练效率已达到与单张 NVIDIA A100 GPU（支持 Tensor Core）相当的水平
- 显著优于支持 AMX 的 Intel Xeon 8558P 平台

这一结果验证了国产 CPU 架构在大模型训练中的性能潜力，为国产算力生态建设提供了重要参考。

## 关键特性

- Armv9 架构
- 支持 [[sme|SME（可缩放矩阵扩展）]] 矩阵运算加速指令集
- 面向层次化内存和 NUMA 架构优化