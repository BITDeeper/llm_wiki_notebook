---
type: entity
title: PhysForge
created: 2026-06-09
updated: 2026-06-09
tags: [3d生成, 物理属性, 具身智能, icml-2026, 框架]
related: [physdb, kinevoxel-injection, physics-grounded-3d-asset-generation, 香港大学, 腾讯混元, sim2real, 3d原生生成, 单图3d重建, 空间智能]
sources: ["rss/icml-2026-physforge框架来了，让3d资产从静态模型变成可交互对象.md"]
---
# PhysForge

PhysForge 是由香港大学与腾讯混元联合提出的面向交互式虚拟世界的 physics-grounded 3D 资产生成框架，论文被 ICML 2026 接收。

## 核心定位

PhysForge 将 3D 生成的目标从"生成静态外观"推进到"生成可交互资产"。仅需单张输入图像，即可生成具备部件结构、物理属性、功能语义和精确运动学参数的 3D 资产，使其不再只是可观看的模型，而是可以被打开、按压、抓取或放入交互式虚拟世界中的资产。

## 两阶段"规划-生成"架构

### 第一阶段：VLM-based Planning
将 VLM 训练为"物理架构师"，接收单张图像、可选 2D mask 以及由 TRELLIS 生成的 3D voxel 表示，自回归生成 [[层级化物理蓝图]]。该蓝图定义了每个部件的：
- 3D bounding box
- 父子层级关系
- 关节类型
- 材质、质量
- 部件功能、状态机
- [[atomic-affordance|Atomic Affordance]]

### 第二阶段：Diffusion-based Generation
VLM 擅长结构和语义规划，但关节轴方向、关节原点、运动范围等连续 3D 参数需要更精细的生成机制。通过 [[kinevoxel-injection|KVI 机制]]，将运动学参数编码为 kinematic voxel，与几何 voxel 统一进入 diffusion denoising 过程，实现"部件长什么样"和"部件应该怎么动"的协同生成。

## 数据基座

[[physdb|PhysDB]] 是支撑该任务的大规模数据集，包含 15 万 3D 资产的层级化物理标注，覆盖七大类别。

## 下游应用

1. **机器人仿真**：生成资产可作为可操作环境对象扩充仿真场景，减少手工建模和物理参数配置成本，已在 RoboTwin 环境中验证机械臂操作能力
2. **虚拟世界与游戏引擎**：资产已具备材质、质量、功能和关节信息，可直接导入 Unity、Unreal Engine
3. **具身智能 Agent**：物理蓝图支持自然语言查询资产结构和功能信息，帮助 Agent 形成任务计划

## 与 Wiki 其他条目的关系

- 与 [[sam-3d]] 互补：SAM 3D 解决单图→3D 几何重建，PhysForge 在此基础上进一步赋予物理属性和运动学参数
- 与 [[abot-earth-0-5|ABot-Earth0.5]] 互补：ABot-Earth0.5 侧重城市级 3D 场景生成，PhysForge 侧重物体级物理属性生成
- 直接服务于 [[sim2real]]：生成的可交互资产可大幅降低机器人仿真场景的建模成本
- 为 [[具身智能数据困境]] 提供新的数据引擎思路

## 局限性

- 依赖 TRELLIS 生成初始 3D voxel 表示，生成质量上限受限于上游 3D 重建模型精度
- VLM 规划阶段的离散语义判断与 Diffusion 阶段的连续参数生成之间存在信息传递的精度损失风险
- 报道中未提供定量实验数据，具体性能指标需查阅原论文