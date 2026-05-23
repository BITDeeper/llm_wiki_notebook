---
type: concept
title: KL正则化对齐目标
created: 2026-05-17
updated: 2026-05-17
tags: [alignment, optimization, kl-divergence, mathematical-framework]
related: [dpo-direct-preference-optimization, tgo-threshold-guided-optimization, qrpo, 配分函数, 标量反馈对齐]
sources: ["无需构造偏好对：tgo用标量反馈对齐视觉生成模型｜icml'26.md"]
---
# KL正则化对齐目标

一个平衡奖励最大化与接近参考策略的理论框架，是 [[dpo-direct-preference-optimization|DPO]]、[[tgo-threshold-guided-optimization|TGO]] 和 [[qrpo|QRPO]] 共享的数学基础。

## 数学结构

在 KL 正则化的对齐目标下，最优策略可以写成一个 closed-form solution。但这个解中包含 [[配分函数|partition function]]（归一化项），需要对所有可能输出求和，通常不可计算。

## 各方法的处理方式

- **[[dpo-direct-preference-optimization|DPO]]**：通过成对比较让 partition function 在 reward difference 中抵消
- **[[qrpo|QRPO]]**：通过 quantile transformation 让 partition function 具有解析形式
- **[[tgo-threshold-guided-optimization|TGO]]**：用数据驱动的全局阈值近似不可计算的 instance-specific oracle baseline

## 理论意义

对于给定样本，最优策略应该提高还是降低其概率，取决于其 reward 是否超过某个 instance-specific oracle baseline。这个 baseline 与 partition function 相关，是不同方法需要以不同方式绕开的核心数学障碍。