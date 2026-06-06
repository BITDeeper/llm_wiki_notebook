---
type: entity
title: SAM 3D
created: 2026-06-06
updated: 2026-06-06
tags: [3d重建, 计算机视觉, meta, cvpr最佳论文提名]
related: [d4rt, cvpr-2026, 人机协同数据管线]
sources: ["刚刚，何恺明resnet、yolo获时间检验奖！cvpr-2026奖项出炉.md"]
origin_date: 2025-11-01
---
# SAM 3D

SAM 3D（3Dfy Anything in Images）是CVPR 2026**最佳论文奖提名**工作，由Meta超级智能实验室完成。

## 核心方法

SAM 3D是一个用于视觉基底3D物体重建（Visually Grounded 3D Object Reconstruction）的生成式模型，能够从单张图像中预测物体的几何结构、纹理和布局。研究团队通过[[人机协同数据管线]]实现了规模空前的视觉基底3D重建数据标注，并在多阶段训练框架中将合成数据预训练与真实世界对齐相结合，打破了3D领域的"数据壁垒"。

## 性能

- 在自然真实图像（存在遮挡和凌乱场景）中表现优异
- 在针对真实世界物体和场景的人类偏好测试中，获得至少**5:1的胜率**
- 相较于近期其他工作取得显著提升