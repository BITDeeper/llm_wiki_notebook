---
type: concept
title: Flow-Matching动作头
created: 2026-05-26
updated: 2026-05-26
tags: [vla, 动作生成, 连续控制, 机器人]
related: [evo-depth, vla-视觉-语言-动作]
sources: ["0.9b跑出90%真机成功率！上海交大为vla补上空间感.md"]
---
# Flow-Matching动作头

Flow-Matching动作头是 [[vla-视觉-语言-动作|VLA]] 模型中常用的连续动作生成方法。其核心思路是通过学习速度场（velocity field）来生成平滑的连续动作轨迹，使机器人能够执行精细的连续控制操作。

## 技术特点

- 通过拟合从噪声分布到目标动作分布的流（flow），实现连续动作的生成
- 生成的动作轨迹平滑，适合机器人操作中的连续控制场景
- 是当前VLA领域中较为常见的动作输出技术选型

## 在Evo-Depth中的应用

[[evo-depth]] 采用Flow-Matching作为动作输出的技术路线，在 [[渐进式对齐训练]] 的最后阶段（动作学习阶段）进行训练。在约0.9B总参数设置下，配合隐式深度编码和空间增强模块，实现了仿真与真机的良好表现。