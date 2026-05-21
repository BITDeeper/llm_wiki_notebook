---
type: concept
title: BCG-球囊图
tags: [生理监测, 信号处理, 算法]
related: [applespuhiddevice, olvvier]
created: 2026-02-24
updated: 2026-02-24
sources: ["黑客挖出苹果隐藏硬件！你的macbook里有加速计陀螺仪，摔没摔过售后都知道.md"]
---

# BCG-球囊图

## 定义
BCG（Ballistocardiography，球囊图/心冲击图）是一种通过测量身体心脏跳动引起的微弱机械振动来监测心率的技术。与心电图（ECG）测量电信号不同，BCG 测量的是心脏泵血时产生的反作用力。

## 在 MacBook 上的应用
在 [[AppleSPUHIDDevice]] 的发现过程中，开发者 [[olvvier]] 利用 MacBook 高灵敏度的加速度计演示了 BCG 原理。通过将手腕贴近触控板，传感器能够捕捉到心跳引起的微弱振动。

## 技术实现
演示程序使用了以下信号处理技术：
- **带通滤波**：过滤掉 0.8–3Hz 频段之外的噪声。
- **自相关算法**：估算每分钟心跳数（BPM）。

## 局限性
尽管演示成功，但必须强调这种基于笔记本电脑的测量完全不具备医疗意义，它主要展示了硬件传感器的极高灵敏度。