---
type: entity
title: DINOv2
created: 2026-05-30
updated: 2026-05-30
tags: [视觉模型, 自监督学习, Meta]
related: [fd-dinov2, gpic]
sources: ["李飞飞造了imagenet，现在她又带人超越了它.md"]
origin_date: 2023-01-01
---
# DINOv2

Meta 于 2023 年发布的自监督视觉特征模型。其特征表示与人类对图像相似性的判断更为一致，优于基于 Inception-v3 的传统特征提取。

## 在 GPIC 中的应用
DINOv2 是 [[fd-dinov2]] 评估指标的基础。GPIC 研究团队验证发现，即使使用了 DINOv2 特征训练的生成模型，在 FD-DINOv2 上的分数仍高于真实图片，说明该指标具有足够的区分余量。