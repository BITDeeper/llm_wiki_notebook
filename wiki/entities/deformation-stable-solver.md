---
type: entity
title: Deformation-Stable Solver
tags: [物理引擎, 仿真, 柔体操作, 算法]
related: [sim1, 柔体操作]
created: 2026-04-15
updated: 2026-04-15
sources: ["柔体操作最缺数据、最怕仿真失真？新研究让布料物理真实再现.md"]
---

# Deformation-Stable Solver

[[Deformation-Stable Solver]]（形变稳定求解器）是 [[SIM1]] 数据引擎中的核心组件，专门用于解决布料等柔体在仿真中的物理失真问题。

## 核心原理
传统物理引擎通常将布料视为“局部粒子系统”，在处理复杂形变时容易出现延迟传播、粒子漂移和过拉伸伪影。Deformation-Stable Solver 将布料模拟升级为**全局响应系统**：当局部拉伸超过阈值时，修正力会在单步内传播到整个网格，从而保持形变的一致性与稳定性。

## 技术意义
这一设计使得仿真环境能够真正“理解”布料的物理特性，消除了仿真数据与真实世界之间的物理错配，是实现 [[Sim-to-Real Gap (仿真到现实的鸿沟)]] 弥合的关键技术之一。