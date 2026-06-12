---
type: entity
title: PhysDB
created: 2026-06-09
updated: 2026-06-09
tags: [数据集, 3d资产, 物理标注, 具身智能]
related: [physforge, physics-grounded-3d-asset-generation, 具身智能数据困境]
sources: ["rss/icml-2026-physforge框架来了，让3d资产从静态模型变成可交互对象.md"]
---
# PhysDB

PhysDB 是由香港大学与腾讯混元联合构建的大规模 3D 资产物理标注数据集，为 [[physforge|PhysForge]] 框架提供数据基座。

## 基本信息

- **规模**：15 万 3D 资产
- **数据来源**：[[objaverse|Objaverse]]
- **覆盖类别**：七大类别——household、industrial、weapons、personal、vehicles、tech & electronics、cultural items

## 四层物理标注体系

PhysDB 采用递进式标注架构，从整体到细节逐层深入：

1. **Holistic properties（整体属性）**：描述物体整体尺度、类别和使用场景（如 kitchen、bedroom）
2. **Static properties（静态属性）**：描述部件级语义、材质和质量（如 metal、wood）
3. **Functional properties（功能属性）**：描述部件的内在功能和状态机（如 "to contain"、按钮的 pressed/released 状态）
4. **Interactive properties（交互属性）**：描述可交互属性和运动学定义，包括 pushable、graspable、joint type、parent part、axis origin、axis direction 和 joint limits

## 核心价值

PhysDB 让模型学习的不只是"部件在哪里"，更是"部件是什么、能做什么、应该如何被操作"。它为从静态视觉生成走向 physics-grounded 3D asset generation 提供了关键数据基础。

## 开放问题

- PhysDB 是否计划开源尚不明确
- 数据标注的自动化程度未在报道中说明