---
type: entity
title: SAM3
tags: [computer-vision, meta, segmentation, 图像分割, 计算机视觉]
related: [autofigure-edit, rmbg-2-0, afun, 冻结大模型拼接范式, metaquery]
created: 2026-02-22
updated: 2026-06-05
sources: ["学术插图新神器！万字材料秒出svg，西湖大学出品-iclr'26.md", "11个数据集全拿sota！机器人终于既会“看”又会“动”了.md"]
---

# SAM3

SAM3 是 Meta（Facebook AI Research）开发的 Segment Anything Model 第三代图像分割模型。

## 在 AutoFigure-Edit 中的应用

在 [[AutoFigure-Edit]] 框架中，SAM3 被用于自动识别和分割插图中的图标元素，是实现从像素图到可编辑 SVG 转换的关键技术组件之一。

## 在 AFUN 中的角色

在 [[afun]] 模型中，SAM3 负责图像分割任务，具体表现为：

- 接收来自 [[metaquery]] 的隐层状态作为提示
- 输出交互区域的分割掩码
- 训练过程中**全程冻结**

在 [[afun]] 的三阶段训练中，第一阶段专门在 Visual Genome 数据集上对齐 [[metaquery]] 与 SAM3 的特征空间，确保信息传递的有效性。