---
type: entity
title: RoboMirage
created: 2026-06-07
updated: 2026-06-07
tags: [仿真平台, 物理引擎, 具身智能, 工具]
related: [roboscience, vloa架构, sim2real]
sources: ["连续入选icra最佳论文，roboscience机器科学如何突破具身智能泛化瓶颈？.md"]
---
# RoboMirage

RoboMirage是[[roboscience|RoboScience机器科学]]自研的高精度通用物理仿真平台。

## 功能定位

作为RoboScience全栈布局的关键组成部分，RoboMirage为[[vloa架构|VLOA]]架构中的下层"通用操作模型"提供大规模仿真数据训练能力。该平台负责模拟物理规律、接触、力、约束和控制等要素，支撑从仿真到现实（[[sim2real]]）的迁移路径。

## 在技术体系中的角色

在VLOA双引擎架构中，RoboMirage支撑下层通用操作模型的训练，使模型能够学习将Object Trajectory转化为具体机器人动作所需的物理交互知识。