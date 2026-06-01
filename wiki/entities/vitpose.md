---
type: entity
title: ViTPose
created: 2026-05-31
updated: 2026-05-31
tags: [预训练模型, 姿态估计, 视觉transformer]
related: [pva-net, htd-refine, 3d人体动作恢复]
sources: ["cvpr-2026-oral-最佳论文候选-浙大&蚂蚁提出-htd-refine：对齐高阶动力学，让单目人体动作恢复告别“滑步”与“抖动”.md"]
---
# ViTPose

**ViTPose** 是一个基于 Vision Transformer 的预训练姿态估计模型，在 [[pva-net]] 中作为冻结的空间特征编码器使用。

## 在 PVA-Net 中的角色

[[pva-net]] 使用冻结的 ViTPose 编码器从单目视频帧中提取空间特征（2D 关键点位置信息），随后将这些特征送入带旋转位置编码的 Transformer 进行时间建模。

## 与 PVA-Net 的对比

相比于单帧检测器 ViTPose-L，PVA-Net 输出的 2D 关键点在时间上更加稳定，其加速度误差（ACCEL）显著降低。这说明引入时序建模能够有效提升关键点检测的时间一致性。