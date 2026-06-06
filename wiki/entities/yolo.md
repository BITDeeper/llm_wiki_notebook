---
type: entity
title: YOLO
created: 2026-06-06
updated: 2026-06-06
tags: [目标检测, 计算机视觉, 实时检测, 时间检验奖]
related: [resnet, cvpr-2026, longuet-higgins-prize, 端到端目标检测]
sources: ["刚刚，何恺明resnet、yolo获时间检验奖！cvpr-2026奖项出炉.md"]
origin_date: 2016-05-01
---
# YOLO

YOLO（You Only Look Once）是由Joseph Redmon等人于2016年发表于CVPR的单阶段目标检测算法。该论文在CVPR 2026上荣获[[longuet-higgins-prize|Longuet-Higgins时间检验奖]]。

## 核心创新

在YOLO之前，目标检测的主流方法是R-CNN系列——先找候选框（Region Proposal），再对每个框分类，速度慢且流程复杂。YOLO将检测重新定义为**端到端的回归问题**：输入图像，直接输出边界框坐标和类别概率。整张图只看一次，极大简化了检测流程。

## 性能

- YOLO v1在Titan X GPU上达到**45 FPS**
- Fast YOLO版本达到**155 FPS**
- 首次让"实时检测"真正可用

## 影响力

- 被引量接近**8万次**
- 直接催生了SSD、RetinaNet及后续整个YOLO家族（YOLOv2-v8等）
- 至今仍是工业界部署的主流目标检测路线
- 开创了[[端到端目标检测]]范式

## 作者

- Joseph Redmon 等