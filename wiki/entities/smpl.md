---
type: entity
title: SMPL
created: 2026-05-31
updated: 2026-05-31
tags: [人体参数化模型, 3D重建, 计算机图形学]
related: [htd-refine, 3d人体动作恢复, 高阶动力学对齐]
sources: ["cvpr-2026-oral-最佳论文候选-浙大&蚂蚁提出-htd-refine：对齐高阶动力学，让单目人体动作恢复告别“滑步”与“抖动”.md"]
---
# SMPL

**SMPL**（Skinned Multi-Person Linear model）是一种广泛使用的人体参数化模型，通过形状参数和姿态参数定义人体网格。

## 在 HTD-Refine 中的角色

[[htd-refine]] 的全局运动优化阶段通过调整 SMPL 参数，使得生成的 3D 轨迹在投影到相机空间后，其速度和加速度能与 [[pva-net]] 的预测值对齐。SMPL 参数空间是 HTD-Refine 优化的目标参数空间。

## 参数结构

- **形状参数（Shape Parameters）：** 控制人体体型
- **姿态参数（Pose Parameters）：** 控制关节角度和全局旋转

优化过程中通过参数正则项防止优化后的 SMPL 参数偏离初始估计太远。