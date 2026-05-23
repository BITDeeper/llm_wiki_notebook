---
type: event
title: GaussianPile 发表于 CVPR 2026
created: 2026-05-21
updated: 2026-05-21
tags: [学术发表, cvpr, 3dgs, 医学影像, ai-for-science]
related: [gaussianpile, 3d-gaussian-splatting, 切片式容积成像, 中关村学院, 清华大学]
sources: ["cvpr-2026-让3dgs看见内部结构，中关村学院gaussianpile实现切片式容积影像快速重建.md"]
origin_date: 2026-03-01
participants: [中关村学院, 清华大学, 孔迪, 马骋, 陈誉文]
causes: []
effects: []
significance: medium
---
# GaussianPile 发表于 CVPR 2026

[[中关村学院]]与[[清华大学]]联合提出的 [[gaussianpile|GaussianPile]] 框架被计算机视觉顶会 CVPR 2026 接收，arXiv 预印本编号 2603.20611（2026年3月提交）。

## 事件概述

该工作提出了面向[[切片式容积成像]]的稀疏高斯表示与重建框架，通过引入 focus-aware physical model 和 additive rasterization，首次系统性地将 [[3d-gaussian-splatting|3DGS]] 从自然场景扩展到具有明确物理约束的医学/科学成像领域。

## 核心贡献

- 将成像系统的有限切片厚度和焦深效应纳入高斯前向投影过程
- 相对 voxel grid 实现约 16 倍稳定压缩，部分数据集达 20-26 倍
- 平均收敛时间约 8 分钟，相比 INR/NeRF 类方法最高约 11 倍加速
- 在 ABUS、LSM、细胞显微、电子显微等多组数据上验证

## 意义

该工作代表了 3DGS 应用边界从自然场景向科学/医学成像领域拓展的重要节点，属于 [[ai-for-science|AI for Science]] 方向的典型案例。