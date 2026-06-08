---
type: concept
title: VLOA架构
created: 2026-06-07
updated: 2026-06-07
tags: [具身智能, 架构, VLA, 操作泛化, 世界模型]
related: [vla-视觉-语言-动作, roboscience, 具身智能数据困境, sim2real, bi-adapt, dro-grasp]
sources: ["连续入选icra最佳论文，roboscience机器科学如何突破具身智能泛化瓶颈？.md"]
---
# VLOA架构

VLOA（Vision-Language-Object-Action）是[[roboscience|RoboScience机器科学]]提出的具身大模型新范式，在传统[[vla-视觉-语言-动作|VLA]]架构基础上引入Object层作为中间表示，旨在解决机器人操作中的跨本体、跨类别泛化问题。

## 核心创新

VLOA的关键在于不直接从Vision-Language跳到Action，而是在中间引入了**Object Trajectory**（物体3D连续点云轨迹）作为统一表示：

- 无论是拿起杯子、打开盒盖，还是插入零件，最终都可以被描述为物体在三维空间中的位置、姿态和形态变化
- Object Trajectory是对这种变化的统一表达，使不同来源的数据能被纳入同一体系学习

## 双引擎架构

VLOA采用"具身世界模型+通用操作模型"的双引擎架构：

- **上层具身世界模型**：理解任务语义，预演物体在三维空间中的状态变化（Object Trajectory）。从互联网视频、说明书、多模态数据中学习语义和常识。
- **下层通用操作模型**：将Object Trajectory转化为具体机器人的动作。学习物理规律、接触、力、约束和控制，通过物理引擎和仿真数据大规模训练。
- **灵魂纽带**：Object Trajectory接口连接上下两层，实现数据统一。

## 与VLA的关系

VLOA是对[[vla-视觉-语言-动作|VLA]]路线的进化。标准VLA直接从视觉-语言映射到动作，面临数据格式不统一的核心瓶颈。VLOA通过引入Object中间层，使不同机器人、不同物体、不同任务的操作经验可以在同一框架下复用。

## 验证

2025年5月，基于VLOA大模型在真实环境中"一镜到底"完成了极高复杂度的拼家具任务，验证了模型将分散能力有效整合、在复杂物理环境中完成稳定精细连贯操作的能力。

## 理论基础

[[bi-adapt|Bi-Adapt]]（跨类别双臂操作泛化）和[[dro-grasp|D(R,O) Grasp]]（跨灵巧手抓取泛化）两项顶会成果共同构成了VLOA的底层能力基础——跨类别操作泛化和一个模型适配多种末端执行器。