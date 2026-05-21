---
type: entity
title: Isaac Sim
tags: [robotics, simulation, nvidia, platform]
related: [nvidia, lyra-2-0, 具身智能数据困境]
created: 2026-04-26
updated: 2026-04-26
sources: ["老黄100%免费开源！老照片炸成可漫游3d宇宙.md"]
---

# Isaac Sim

[[Isaac Sim]] 是 NVIDIA 开发的机器人仿真平台。在 [[Lyra 2.0]] 的工作流中，它扮演着关键的数据消费端角色。

## 与 Lyra 2.0 的协同
- [[Lyra 2.0]] 生成的 3D 高斯泼溅和表面网格模型可以直接导出并导入 Isaac Sim。
- 这使得由 AI 生成的 3D 世界可以直接用于机器人的导航、物理仿真和具身 AI 训练。

## 战略意义
这一连接打通了“生成式 AI”与“物理世界仿真”的壁垒，意味着未来训练机器人可能不再需要昂贵的真实世界数据采集，而是通过 AI 生成的高保真合成环境进行训练，从而缓解 [[具身智能数据困境]]。