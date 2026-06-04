---
type: entity
title: PhysX-Bench
created: 2026-06-03
updated: 2026-06-03
tags: [评测基准, 3d生成, 物理仿真, benchmark]
related: [physx-omni, physxverse, 大晓机器人, 南洋理工大学-刘子纬团队]
sources: ["大晓机器人x南洋理工physx-omni统一物理3d生成！一个框架搞定刚体软体关节体.md"]
origin_date: 2026-06-03
---
# PhysX-Bench

PhysX-Bench是首个统一的simulation-ready physical 3D generation评测基准，由 [[physx-omni]] 研究团队提出。

## 评测方法

PhysX-Bench基于开源视觉-语言模型Qwen3.5与physics-based simulation，采用 [[ground-truth-free物理评测]] 方法论——不直接输入物理参数，而是通过渲染图像与仿真视频进行评测，更贴近真实人类感知与机器人应用场景。

## 六大评测维度

| 维度 | 评测内容 |
|------|----------|
| **Geometry** | 三维结构一致性与视觉质量，包括CLIP alignment、多视角3D一致性、视觉质量 |
| **Absolute Scale** | 生成结果在真实世界中的尺寸合理性 |
| **Material** | 通过自由落体、水中下落等物理模拟视频间接评测密度、杨氏模量、泊松比 |
| **Affordance** | 基于人类常识评估对象的交互合理性与功能区域 |
| **Kinematics** | 通过运动视频分析关节运动的一致性、合理性及整体运动协调性 |
| **Description** | 对象及部件级别的语义理解能力 |

## 方法论创新

PhysX-Bench不依赖标注真值（ground-truth-free），而是通过渲染图像与仿真视频结合VLM推理进行间接评测。测试图像同时包含真实世界照片与渲染生成图像，覆盖大量复杂类别与challenging in-the-wild cases，更贴近真实感知和机器人应用。