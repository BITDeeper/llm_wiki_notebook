---
type: entity
title: SonicMoE
created: 2026-05-04
updated: 2026-05-04
tags: [moe, training-kernel, gpu, optimization]
related: [tri-dao, ion-stoica, deepgemm, mega-moe, 细粒度-moe, quack]
sources: ["deepseek做大→mega-moe，tri-dao，tri-dao团队加快→sonicmoe.md"]
---
# SonicMoE

[[SonicMoE]] 是由普林斯顿大学 [[Tri Dao]] 和加州大学伯克利分校 [[Ion Stoica]] 团队开发的高性能混合专家模型训练内核。它旨在解决 [[细粒度 MoE]] 训练中的 [[显存墙]] 和 [[内存墙]] 问题，在英伟达 Blackwell 架构（B200/B300）上实现了峰值吞吐量。

## 核心技术

### 激活内存与专家粒度解耦
SonicMoE 重新设计了计算顺序，完全避免了在反向传播中缓存与专家规模成比例的中间张量。这使得每层的激活内存占用在专家粒度增加时保持恒定，打破了传统方案中显存占用随粒度线性增长的规律。

### IO 感知的算子融合
通过 [[Gather 融合]] 技术，将数据搬运操作融入矩阵乘法计算核中，利用 GPU L2 缓存并减少 HBM 访问。此外，它还利用异步执行特性将数据搬运等待时间与矩阵运算重叠，从而隐藏 IO 延迟。

### QuACK 抽象层
引入了统一的软件抽象层 [[QuACK]]，将所有 MoE 矩阵乘法核函数统一为“主循环 + 可定制尾声”的结构。这使得优化代码能快速从 H100 迁移至 Blackwell GPU。

## 性能表现

在英伟达 B300 GPU 上的测试表明：
- 相比 [[DeepGEMM]]：前向传播快 54%，反向传播快 35%。
- 相比 Triton 官方示例：前向传播快 21%。
- 相比 ScatterMoE/MoMoE：速度提升接近 2 倍。

## 开源与生态
SonicMoE 已在 GitHub 和 PyPI 开源，支持 H100 和 B200/B300 GPU，未来计划扩展至专家并行、MXFP8/FP4 精度支持及下一代 Rubin GPU。