---
type: concept
title: C-JEPA 物体轨迹联合嵌入预测
created: 2026-05-15
updated: 2026-05-15
tags: [jepa, 物体轨迹, 自监督学习]
related: [jepa, i-jepa, v-jepa]
sources: ["160行代码读懂lecun的jepa世界模型.md"]
---
# C-JEPA 物体轨迹联合嵌入预测

C-JEPA 是 [[jepa]] 联合嵌入预测架构聚焦物体级轨迹预测的变体，从 patch 级掩码转向物体级建模。

## 核心机制

- **物体级轨迹掩码：** 不做 patch masking，改为物体级轨迹掩码
- **身份锚点：** t=0 保留物体身份锚点，后续时间步全部遮掉
- **双向 Transformer：** 在物体 slot token 上做双向预测
- **3-digit 弹跳视频：** 使用合成弹跳数字视频作为训练数据

## 极简实现

在 [[keon-jepa]] 教学项目中，C-JEPA 用 174 行代码实现。

## 与原版的差距

教学版跳过了 VideoSAUR 的物体发现预训练，用 frozen lookup 做占位。