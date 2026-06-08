---
type: entity
title: PhysX-Bench
created: 2026-06-03
updated: 2026-06-06
tags: ["评测基准", "3d生成", "物理仿真", "benchmark", "physical-ai"]
related: ["physx-omni", "physxverse", "大晓机器人", "南洋理工大学-刘子纬团队", "physical-ai", "六维物理评估体系"]
sources: ["大晓机器人x南洋理工physx-omni统一物理3d生成！一个框架搞定刚体软体关节体.md", "大晓机器人联合南洋理工打通physical-ai全链路！physx-omni补齐物理ai基建.md"]
origin_date: 2026-05-01
---
# PhysX-Bench

PhysX-Bench 是首个统一的 simulation-ready physical 3D generation 评测基准（benchmark），由 [[physx-omni]] 研究团队提出，用于全面评估 simulation-ready physical 3D generation 的质量。

## 评测方法

- **底层模型：** 基于开源视觉-语言模型 Qwen3.5 与 physics-based simulation
- **评测方式：** 采用 [[ground-truth-free物理评测]] 方法论——不直接输入物理参数，而是通过渲染图像与仿真视频进行评测，更贴近真实人类感知与机器人应用场景
- **评测类型：** 强调 ground-truth-free evaluation，测试图像同时包含真实世界照片与渲染生成图像，覆盖大量复杂类别与 challenging in-the-wild cases

## 六维评估体系

PhysX-Bench 从六个核心维度对生成结果进行评价：

| 维度 | 评估内容 |
|------|----------|
| **Geometry** | 三维结构一致性与视觉质量（CLIP alignment、multi-view 3D consistency、visual quality） |
| **Absolute Scale** | 生成结果在真实世界中的尺寸合理性 |
| **Material** | 通过自由落体、水中下落等物理模拟视频间接评测密度、杨氏模量、泊松比等 |
| **Affordance** | 基于人类常识评估对象的交互合理性与功能区域 |
| **Kinematics** | 通过运动视频分析关节运动的一致性、合理性及整体运动协调性 |
| **Description** | 对象及部件级别的语义理解能力 |

## 意义

PhysX-Bench 填补了 simulation-ready physical 3D generation 领域缺乏统一评测标准的空白，为 [[physical-ai|Physical AI]] 与具身 AI 研究提供了标准化的评估框架。与 [[physxverse]] 数据集配合，形成了完整的数据-评测闭环。