---
type: source
title: "大晓机器人联合南洋理工打通Physical AI全链路！PhysX-Omni补齐物理AI基建"
created: 2026-06-06
updated: 2026-06-06
tags: [physical-ai, 具身智能, 3d生成, 仿真, 机器人]
related: [physx-omni, 大晓机器人, 南洋理工大学, physical-ai, physxverse, physx-bench]
sources: ["大晓机器人联合南洋理工打通physical-ai全链路！physx-omni补齐物理ai基建.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/5rspbiAQ8YWoVIgI97w8Cw"
venue: 机器之心
---
# 大晓机器人联合南洋理工打通Physical AI全链路！PhysX-Omni补齐物理AI基建

## 摘要

本文报道了 [[大晓机器人]] 联合 [[南洋理工大学]] 刘子纬教授团队提出的 [[physx-omni]]——首个统一的 simulation-ready physical 3D generation framework。该框架首次实现对刚体、可形变物体和关节物体的统一物理建模，能够直接生成具备丰富物理属性、可用于真实仿真环境的高质量 3D 资产。

## 核心内容

### 技术创新
- 提出 [[template-based-rle-representation|Template-based RLE 表征]]，受二维行程编码启发，通过模板层复用跨层结构模式，高效压缩高分辨率 3D 结构为文本 token
- 避免传统 segmentation 带来的误差累积，相比自回归方法更具鲁棒性

### 数据集与评测
- 构建 [[physxverse]] 数据集：包含 8.7K+ 高质量 simulation-ready physical 3D assets，覆盖 2.9K+ 类别
- 提出 [[physx-bench]] 评测基准：首个物理 3D generation benchmark，从六个维度（Geometry、Absolute Scale、Material、Affordance、Kinematics、Description）综合评估

### 实验结果
- 在 Absolute Scale 评估中，误差相比 PhysXGen 和 PhysX-Anything 降低两个数量级
- 在几乎所有几何与物理属性指标上取得最佳性能
- 生成的资产已直接部署到物理模拟器中用于机器人交互与策略学习

### 产业关联
- 与 [[大晓机器人]] 此前提出的 [[ace具身研发范式|ACE 具身研发范式]] 形成战略协同，为打造"物理世界最强大脑"提供核心数据基建

## 关键人物
- 第一作者：[[曹子昂]]（研究方向：3D AIGC、Physical AI、具身智能）
- 通讯作者：[[刘子纬]]（南洋理工大学教授）
- 合作者：李海天、姚润茂、洪方舟、陈昭熹（南洋理工大学）；刘英豪、潘亮（大晓机器人）

## 论文信息
- 标题：PhysX-Omni: Unified Simulation-Ready Physical 3D Generation for Rigid, Deformable, and Articulated Objects
- arXiv：2605.21572
- 项目主页：https://physx-omni.github.io/
- GitHub：https://github.com/physx-omni/PhysX-Omni