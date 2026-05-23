---
type: entity
title: FAR
created: 2026-05-18
updated: 2026-05-18
tags: [视频生成, 扩散模型, 因果生成]
related: [anyflow, wan2.1, 视频扩散模型]
sources: ["4-步生成高质量视频，还能越采样越好！nvidia、nus-show-lab、mit-提出-anyflow：迈向“步数自由”的视频扩散生成.md"]
---
# FAR

FAR 是一个因果视频生成骨干模型。在 [[anyFlow]] 的实验中，AnyFlow 结合 FAR 形成 AnyFlow-FAR，实现了统一的文生视频（T2V）、图生视频（I2V）和视频到视频（V2V）生成能力。

## 核心特点

- **因果架构**：采用因果（causal）生成方式，支持自回归轨迹展开。
- **统一生成**：同一个 AnyFlow-FAR 模型可统一支持 T2V、I2V、V2V，无需为不同任务维护独立框架。
- **与Wan2.1结合**：AnyFlow-FAR-Wan2.1-14B 在4 NFEs下即可生成高质量视频。