---
type: event
title: PhysForge 发布
created: 2026-06-09
updated: 2026-06-09
tags: [icml-2026, 3d生成, 物理属性, 具身智能]
related: [physforge, physdb, 香港大学, 腾讯混元, icml-2026, sim2real, 具身智能数据困境]
participants: [香港大学, 腾讯混元]
causes: [具身智能数据困境]
effects: [physforge]
significance: high
origin_date: 2026-06-09
sources: ["rss/icml-2026-physforge框架来了，让3d资产从静态模型变成可交互对象.md"]
---
# PhysForge 发布

## 时间
2026 年 6 月 9 日，机器之心发布 PhysForge 深度报道。论文被 ICML 2026 接收。

## 事件概述
香港大学与腾讯混元联合提出 PhysForge，一个面向交互式虚拟世界的 physics-grounded 3D 资产生成框架。该框架仅需单张输入图像，即可生成具备部件结构、物理属性、功能语义和精确运动学参数的 3D 资产。

## 核心贡献
1. 首次实现从单张图像到具备完整物理属性的可交互 3D 资产的生成
2. 提出 KineVoxel Injection（KVI）机制，实现几何与运动学的联合生成
3. 构建 PhysDB 数据集，包含 15 万 3D 资产的四层物理标注

## 影响
- 将 3D 生成从"视觉逼真"推进到"功能可交互"的新阶段
- 为机器人仿真提供低成本可交互资产生成能力，直接服务于 [[sim2real]]
- 为 [[具身智能数据困境]] 提供新的数据引擎思路
- 在 RoboTwin 机器人仿真环境中验证了机械臂对生成资产功能部件的操作能力