---
type: event
title: PhysX-Omni 统一物理3D生成框架发布
created: 2026-06-06
updated: 2026-06-06
tags: [3d生成, physical-ai, 论文发布, 具身智能]
related: [physx-omni, physxverse, physx-bench, 大晓机器人, 南洋理工大学, physical-ai]
sources: ["大晓机器人联合南洋理工打通physical-ai全链路！physx-omni补齐物理ai基建.md"]
origin_date: 2026-05-01
participants: [大晓机器人, 南洋理工大学, 曹子昂, 刘子纬]
causes: [具身智能数据困境]
effects: [physical-ai]
significance: high
time_span:
  start: 2026-05-01
  end: null
---
# PhysX-Omni 统一物理3D生成框架发布

2026年5月，[[大晓机器人]] 联合 [[南洋理工大学]] 刘子纬教授团队发布了 [[physx-omni]]——首个统一的 simulation-ready physical 3D generation framework。论文第一作者为 [[曹子昂]]，arXiv 编号为 2605.21572。

## 事件背景
随着大语言模型、视觉语言模型和具身智能的快速发展，AI 正从"感知世界"迈向"理解并交互世界"。然而现有 3D 生成方法主要关注外观与几何，缺乏物理属性，无法直接用于机器人与物理仿真。同时该领域长期面临数据稀缺与缺乏统一评测标准的问题。

## 核心成果
1. **[[physx-omni]] 框架** — 首次实现对刚体、可形变物体和关节物体的统一物理建模
2. **[[physxverse]] 数据集** — 首个通用 simulation-ready physical 3D 数据集（8.7K+ 资产，2.9K+ 类别）
3. **[[physx-bench]] 评测基准** — 首个物理 3D generation benchmark，提出[[六维物理评估体系]]

## 影响
- 直接回应了[[具身智能数据困境]]中仿真数据匮乏的问题
- 为 [[sim2real|Sim2Real]] 链路提供了关键的数据基建
- 生成的资产已验证可直接部署到物理模拟器中用于机器人策略学习
- 与大晓机器人 [[ace具身研发范式|ACE 范式]] 形成战略协同，推动 Physical AI 产业化