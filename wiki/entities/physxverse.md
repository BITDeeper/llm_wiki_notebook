---
type: entity
title: PhysXVerse
created: 2026-06-03
updated: 2026-06-06
tags: ["数据集", "3d生成", "物理仿真", "simulation-ready", "physical-ai", "仿真"]
related: ["physx-omni", "physx-bench", "大晓机器人", "南洋理工大学-刘子纬团队", "physical-ai"]
sources: ["大晓机器人x南洋理工physx-omni统一物理3d生成！一个框架搞定刚体软体关节体.md", "大晓机器人联合南洋理工打通physical-ai全链路！physx-omni补齐物理ai基建.md"]
origin_date: 2026-05-01
---
# PhysXVerse

PhysXVerse 是首个通用 simulation-ready physical 3D 数据集，由 [[physx-omni]] 研究团队构建，旨在解决 simulation-ready physical 3D 数据稀缺的问题。

## 数据集规模

- **资产数量：** 8.7K+ 高质量 simulation-ready physical 3D assets
- **类别数量：** 2.9K+ 类别
- **覆盖范围：** 室内家具、无人机、机器人、车辆以及大型场景组件等多种复杂对象

## 构建流程

1. 基于 PartVerse 提供的人类验证部件分割结果
2. 结合 human-in-the-loop physical annotation pipeline 对物理属性进行精细标注
3. 确保每个资产具备完整的物理属性（真实尺度、材料属性、运动学参数、交互语义等）

## 意义

PhysXVerse 在类别多样性与物理属性覆盖范围上相比现有 simulation-ready datasets 都有显著提升，为 [[simulation-ready物理3d生成]]、[[physical-ai|Physical AI]] 和具身智能研究提供了关键的数据基建。与 [[physx-bench]] 评测基准配合使用，形成了数据驱动的完整研究闭环。