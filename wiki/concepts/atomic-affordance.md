---
type: concept
title: Atomic Affordance
created: 2026-06-09
updated: 2026-06-09
tags: [功能语义, 交互, 3d资产]
related: [physforge, 层级化物理蓝图, physics-grounded-3d-asset-generation]
sources: ["rss/icml-2026-physforge框架来了，让3d资产从静态模型变成可交互对象.md"]
---
# Atomic Affordance

Atomic Affordance 描述 3D 资产中部件可被操作的基本方式，是 [[层级化物理蓝图]] 中的关键标注维度。

## 定义

Atomic Affordance 是对部件交互能力的原子化描述，例如：
- **pushable**（可推动）
- **graspable**（可抓取）
- **rotatable**（可旋转）
- **slidable**（可滑动）

## 在 PhysForge 中的作用

[[physforge|PhysForge]] 的 VLM 规划阶段会为每个部件生成 atomic affordance 标注，使生成的 3D 资产不仅具备几何和纹理信息，还明确表达了"这个部件可以被怎样操作"。这为机器人仿真和具身智能 Agent 提供了直接可用的交互语义。

## 与 Affordance 理论的关系

Atomic Affordance 源自生态心理学中的 Affordance 概念（Gibson, 1977），将其细化为可计算、可标注的原子化操作描述，使其能够被集成到 3D 资产的自动化生成流程中。