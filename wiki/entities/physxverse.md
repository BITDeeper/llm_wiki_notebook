---
type: entity
title: PhysXVerse
created: 2026-06-03
updated: 2026-06-03
tags: [数据集, 3d生成, 物理仿真, simulation-ready]
related: [physx-omni, physx-bench, 大晓机器人, 南洋理工大学-刘子纬团队]
sources: ["大晓机器人x南洋理工physx-omni统一物理3d生成！一个框架搞定刚体软体关节体.md"]
origin_date: 2026-06-03
---
# PhysXVerse

PhysXVerse是首个通用物理化3D数据集，由 [[physx-omni]] 研究团队构建，旨在缓解simulation-ready physical 3D数据稀缺的问题。

## 数据集规模

- **资产数量**：超过8.7K个高质量simulation-ready physical 3D assets
- **类别覆盖**：2.9K+类别
- **覆盖范围**：室内家具、无人机、机器人、车辆以及大型场景组件等多种复杂对象

## 构建方法

研究团队基于PartVerse提供的人类验证部件分割结果，结合human-in-the-loop physical annotation pipeline，对物理属性进行精细标注，确保每个资产都具备真实尺度、材料属性、运动学参数和交互语义。

## 意义

相比现有simulation-ready datasets，PhysXVerse在类别多样性与物理属性覆盖范围上都有显著提升，为 [[simulation-ready物理3d生成]] 研究提供了关键的训练数据基础。