---
type: entity
title: NuInteract
created: 2026-06-14
updated: 2026-06-14
tags: [数据集, 评测基准, 自动驾驶, 场景理解]
related: [gaussiandwm, nuscenes]
sources: ["rss/cvpr-2026-gaussiandwm：用3d高斯表示统一自动驾驶场景理解与多模态生成.md"]
---
# NuInteract

NuInteract 是用于评估自动驾驶模型场景理解能力的评测数据集，侧重于测试模型对驾驶环境的结构化理解能力，包括 2D 和 3D 视觉定位。

在 [[gaussiandwm|GaussianDWM]] 的实验中，该模型在 NuInteract 数据集上的综合指标达到 59.23，大幅超越基线 DriveMonkey 的 52.12，证明了 3D 高斯表示在增强 LLM 对驾驶场景理解方面的有效性。