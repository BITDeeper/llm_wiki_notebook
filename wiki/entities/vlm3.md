---
type: entity
title: VLM³
created: 2026-06-09
updated: 2026-06-09
tags: [三维视觉, VLM, Meta, 深度估计, 多视角几何, 开源模型]
related: [蔡志鹏, meta, 三维视觉的bitter-lesson, 空间智能, scaling-law, qwen3-vl-4b]
sources: ["rss/meta蔡志鹏新作vlm³：全面揭示三维视觉的bitter-lesson.md"]
origin_date: 2026-06-09
---
# VLM³

VLM³是[[meta|Meta]]发布的研究模型，首次揭示三维视觉学习的[[三维视觉的bitter-lesson|Bitter Lesson]]：标准视觉语言模型+规模化数据即可超越所有人工设计的任务特定架构、损失函数和数据增强方案。

## 核心设计

VLM³采用极简设计理念，基于标准VLM架构（[[qwen3-vl-4b|Qwen3-vl-4B]]），仅通过两个关键预处理步骤即可学会各类三维视觉任务：

1. **相机焦距归一化**：将相机内参归一化到统一空间
2. **像素空间归一化**：将像素坐标归一化处理

训练方式为基于文字的SFT（监督微调），无需回归（regression）公式设计，无需修改VLM架构，无需在图片上渲染marker。

## 性能表现

在四大三维视觉任务上的表现：

| 任务 | 性能 |
|------|------|
| 单目深度估计 | 准确率从DepthLM的84提升至90，match UniDepthV2及MoGe2 |
| 目标级三维理解 | 超越SpatialRGPT，参数量仅一半（4B vs 8B），无需额外encoder |
| 像素匹配 | 超越DKM和RoMa |
| 相机姿态估计 | match DA3，超越VGGT |
| 多视角几何 | 远超Qwen3-vl-32B |

## 核心论点

VLM³证明三维视觉学习远比想象中容易：

- 无需任务特定的架构设计
- 无需任务特定的损失函数
- 无需任务特定的数据增强
- 甚至无需回归（regression）即可实现fine-grained 3D understanding
- 标准VLM + scale数据 = 最优三维视觉学习范式

## 意义

VLM³打通了视觉语言模型与三维视觉之间的壁垒，使三维视觉任务可融入VLM大规模预训练框架，实现三维视觉的[[scaling-law|Scaling Law]]。这极大简化了三维基础模型的构建，并为机器人、自动驾驶、增强现实等场景的落地应用提供了可能。

## 资源

- 论文：https://arxiv.org/pdf/2605.30561
- 代码：https://github.com/facebookresearch/VLM3