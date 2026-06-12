---
type: entity
title: SA-3DAO
created: 2026-06-08
updated: 2026-06-08
tags: [dataset, benchmark, 3d-reconstruction, cvpr-2026]
related: [sam-3d, meta]
sources: ["rss/永远可以期待的meta！cvpr-2026-最佳论文提名奖作品“sam-3d”解读.md"]
---
# SA-3DAO

SA-3DAO（SAM 3D Artist Objects）是Meta为评估真实场景3D重建能力而推出的评测基准数据集。

## 数据集特征
- 包含**1000个**由专业3D艺术家根据真实图像精心制作并对齐的3D网格
- 代表人类专家级重建的上限
- 用于客观评估模型在真实场景下的重建能力

## 用途
作为[[sam-3d|SAM 3D]]论文中的核心评测基准，SA-3DAO上的关键指标包括：
- F1@0.01：SAM 3D达到0.2344
- 场景级3D IoU：SAM 3D达到0.4254

## 开源状态
随SAM 3D项目完全开源。