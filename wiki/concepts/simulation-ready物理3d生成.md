---
type: concept
title: Simulation-Ready 物理3D生成
created: 2026-06-03
updated: 2026-06-03
tags: [3d生成, 物理仿真, 具身智能, 概念]
related: [physx-omni, physxverse, physx-bench, sim2real, 具身智能数据困境, vla-视觉-语言-动作]
sources: ["大晓机器人x南洋理工physx-omni统一物理3d生成！一个框架搞定刚体软体关节体.md"]
---
# Simulation-Ready 物理3D生成

Simulation-Ready物理3D生成是指生成不仅具备外观和几何，还包含真实尺度、材料属性、运动学参数和交互语义的3D资产，使其可直接用于物理仿真器的技术范式。

## 核心矛盾

现有3D生成方法生成的资产外观和几何质量越来越高，但大多只能"看"不能"用"——没有真实尺度，没有材料属性，更不具备运动能力和交互语义。想直接放进仿真器给机器人训练，差距甚远。

## 三大类别

物理3D资产可分为三大类别，此前的方法各管一摊，缺乏统一框架：

1. **刚体（Rigid Body）** — 形状不可变的物体，如家具、工具
2. **软体/可形变物体（Deformable Object）** — 可发生弹性或塑性形变的物体，如布料、软组织
3. **关节体（Articulated Object）** — 具有关节结构和运动自由度的物体，如门、抽屉、机器人

## 与具身智能的关系

Simulation-ready物理3D生成是 [[sim2real]] 链条的关键上游环节。生成的资产可直接部署到物理模拟器中，用于：

- 机器人交互训练
- 策略学习
- Embodied AI world modeling
- 场景级物理世界生成

这一技术直接回应了 [[具身智能数据困境]] 中关于高质量物理3D数据稀缺的挑战，为 [[vla-视觉-语言-动作]] 模型训练提供了数据基础。

## 代表性工作

- [[physx-omni]] — 首个统一的simulation-ready物理3D生成框架
- [[physxverse]] — 首个通用物理化3D数据集
- [[physx-bench]] — 首个统一评测基准