---
type: source
title: "ICML 2026 | PhysForge框架来了，让3D资产从静态模型变成可交互对象"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/en_3cDxnKZRTDdwnSeVQTQ"
venue: 机器之心
tags: [icml-2026, 3d生成, 物理属性, 具身智能, 腾讯混元, 香港大学]
related: [physforge, physdb, physics-grounded-3d-asset-generation, kinevoxel-injection, icml-2026]
created: 2026-06-09
updated: 2026-06-09
sources: ["rss/icml-2026-physforge框架来了，让3d资产从静态模型变成可交互对象.md"]
---
# ICML 2026 | PhysForge框架来了，让3D资产从静态模型变成可交互对象

**来源**：机器之心 | **日期**：2026-06-09

## 摘要

香港大学与腾讯混元联合提出 PhysForge，一个面向交互式虚拟世界的 physics-grounded 3D 资产生成框架，被 ICML 2026 接收。该框架仅需单张输入图像，即可生成具备部件结构、物理属性、功能语义和精确运动学参数的 3D 资产。

## 核心内容

### 问题定义
现有 3D 生成方法停留在静态几何和纹理层面，缺少支撑真实交互的功能逻辑与层级化物理结构。PhysForge 将 3D 生成的目标从"生成静态外观"推进到"生成可交互资产"。

### 技术方案
- **两阶段"规划-生成"策略**：VLM-based Planning + Diffusion-based Generation 的解耦设计
- **KineVoxel Injection (KVI)**：将关节原点、关节轴和运动限制编码为 kinematic voxel，与几何 voxel 统一进入 diffusion denoising 过程
- **PhysDB 数据集**：15 万 3D 资产的四层物理标注体系（Holistic → Static → Functional → Interactive）

### 下游应用
- 机器人仿真（RoboTwin 环境验证）
- 虚拟世界与游戏引擎（Unity、Unreal Engine）
- 具身智能 Agent 与环境交互

## 关键引用
- 论文链接：https://arxiv.org/abs/2605.05163
- 项目主页：https://hku-mmlab.github.io/PhysForge/