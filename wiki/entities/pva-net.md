---
type: entity
title: PVA-Net
created: 2026-05-31
updated: 2026-05-31
tags: [神经网络, 人体动作恢复, 时序模型, cvpr-2026]
related: [htd-refine, 高阶动力学对齐, 3d人体动作恢复, vitpose]
sources: ["cvpr-2026-oral-最佳论文候选-浙大&蚂蚁提出-htd-refine：对齐高阶动力学，让单目人体动作恢复告别“滑步”与“抖动”.md"]
origin_date: 2026-05-31
---
# PVA-Net

**PVA-Net**（Position-Velocity-Acceleration Network）是 [[htd-refine]] 框架的核心组件，负责直接从视频序列中预测相机空间下的 3D 关节点速度和加速度。PVA 分别代表位置（Position）、速度（Velocity）和加速度（Acceleration）。

## 架构设计

- **空间特征提取：** 使用冻结的 [[vitpose]] 编码器提取每帧的空间特征
- **时间建模：** 8 层 Transformer，配合旋转位置编码（RoPE），增强对时间偏移的敏感性
- **三路输出：** 三个解码器分别输出 2D 关键点位置、3D 速度和 3D 加速度

## 设计动机

选择预测加速度（二阶差分）作为监督信号的原因：
- 对全局尺度模糊不敏感
- 能有效抵消相机的低频漂移
- 比绝对速度更鲁棒

## 性能表现

- 加速度预测在 10% 误差阈值下的 [[pce]] 达到 **99.6%**（EMDB 数据集）
- 输出的 2D 关键点在时间稳定性上显著优于单帧检测器 ViTPose-L
- 对遮挡具有较强鲁棒性（利用相邻帧的时间约束）

## 在 HTD-Refine 中的角色

PVA-Net 为全局运动优化提供"参考答案"——其预测的速度和加速度作为锚点，约束 [[smpl]] 参数的优化方向，实现 [[高阶动力学对齐]]。