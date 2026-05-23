---
type: concept
title: NFE（函数评估次数）
created: 2026-05-15
updated: 2026-05-15
tags: [扩散模型, 推理效率, 评估指标]
related: [1-x-distill, 蒸馏-缓存协同训练]
sources: ["清华&华为提出-1.x-distill：打破整数步限制，1.67-步生成高质量图像！.md"]
---

# NFE（函数评估次数）

**NFE**（Number of Function Evaluations，函数评估次数）是衡量扩散模型推理效率的核心指标，表示模型前向传播（函数评估）的总次数。

## 含义

- NFE 越低，推理速度越快
- 传统扩散模型通常需要 20-50 NFE
- 少步蒸馏方法目标是将 NFE 压缩至 4、2 甚至更低

## 突破

[[1-x-Distill]] 通过[[蒸馏-缓存协同训练]]（DCT）实现了 **1.67 NFE**，首次将 NFE 推进至非整数（分数步）领域，相比28步采样实现33倍加速。