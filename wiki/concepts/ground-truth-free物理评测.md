---
type: concept
title: Ground-truth-free 物理评测
created: 2026-06-03
updated: 2026-06-03
tags: [评测方法, 物理仿真, 3d生成, 概念]
related: [physx-bench, physx-omni, simulation-ready物理3d生成]
sources: ["大晓机器人x南洋理工physx-omni统一物理3d生成！一个框架搞定刚体软体关节体.md"]
---
# Ground-truth-free 物理评测

Ground-truth-free物理评测是一种不依赖标注真值，通过渲染图像与仿真视频结合VLM（视觉-语言模型）推理进行间接评测的方法论。

## 核心理念

传统的3D生成评测依赖ground-truth标注进行直接对比，但物理属性（如材料参数、运动学特性）的真值标注成本极高且难以获取。Ground-truth-free方法转而通过以下方式间接评估：

- **渲染图像对比**：评估视觉质量和几何一致性
- **物理仿真视频**：通过自由落体、水中下落等模拟实验观察物理行为
- **VLM推理**：利用强大的视觉-语言模型对生成结果的物理合理性进行判断

## 优势

1. **更贴近真实感知**：评测方式更接近人类对物理世界的直观判断
2. **更贴近机器人应用**：机器人也是通过视觉和交互来感知物理属性，而非直接读取参数
3. **降低标注成本**：无需为每个资产建立精确的物理参数真值
4. **覆盖复杂场景**：测试图像同时包含真实世界照片与渲染生成图像

## 应用实例

[[physx-bench]] 是这一方法论的代表实现，基于Qwen3.5 VLM与physics-based simulation，从Geometry、Absolute Scale、Material、Affordance、Kinematics、Description六个维度进行综合评估。