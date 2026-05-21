---
type: entity
title: libuipc
tags: [physics-engine, simulation, differentiable-simulation]
related: [pat3d, 可微刚体仿真]
created: 2026-05-01
updated: 2026-05-01
sources: ["iclr-2026｜cmu等团队让ai生成的3d场景真正「站得住」：pat3d把文生3d从能看推进到能模拟、能交互.md"]
---

# libuipc

**libuipc** 是一个用于可微刚体仿真的物理引擎库。在 [[PAT3D]] 框架中，libuipc 扮演了关键角色，支持布局优化阶段的静力平衡演化。

## 功能与作用
libuipc 允许梯度反向传播，使得物理仿真过程可以被集成到生成式模型的优化循环中。在 PAT3D 的工作流里，它负责：
- 计算物体在重力和接触力作用下的运动状态。
- 帮助系统找到满足物理定律（如支撑关系、无穿插）的静力平衡状态。
- 配合语义损失函数，实现物理稳定性与语义忠实度的协同优化。

## 技术意义
通过使用 libuipc，PAT3D 能够将传统的物理仿真转化为可优化的过程，这是实现“物理增强生成”的技术基础。