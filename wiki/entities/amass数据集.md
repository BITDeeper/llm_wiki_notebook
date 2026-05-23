---
type: entity
title: AMASS 数据集
created: 2026-05-16
updated: 2026-05-16
tags: [数据集, 人体运动, 基准测试]
related: [motionmar, 稀疏观测人体运动重建]
sources: ["只靠头显和手柄，搞定全身动作高精度重建-icml'26.md"]
---
# AMASS 数据集

AMASS（Archive of Motion Capture as Surface Meshes）是人体运动捕捉领域的标准化数据集，将多个运动捕捉数据集统一为 SMPL 身体模型参数表示。

在 [[motionmar|MotionMAR]] 研究中，AMASS 被用于模型训练和评估，涵盖三种测试设置：S1（三点追踪）、S2（四追踪器）和 S3（大规模数据组合），评价指标包括 MPJRE、MPJPE、MPJVE、部位级误差和 Jitter。