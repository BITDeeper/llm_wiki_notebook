---
type: source
title: "Meta蔡志鹏新作VLM³：全面揭示三维视觉的Bitter Lesson"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/Csm2FidnNIPZzhE-k7bMFA"
venue: 机器之心
tags: [三维视觉, VLM, Meta, Bitter-Lesson, 深度估计, 多视角几何]
related: [vlm3, 蔡志鹏, meta, 三维视觉的bitter-lesson, 空间智能, scaling-law]
created: 2026-06-09
updated: 2026-06-09
sources: ["rss/meta蔡志鹏新作vlm³：全面揭示三维视觉的bitter-lesson.md"]
---
# Meta蔡志鹏新作VLM³：全面揭示三维视觉的Bitter Lesson

## 摘要

Meta高级研究员蔡志鹏发布VLM³研究，首次揭示三维视觉学习的Bitter Lesson：标准视觉语言模型+规模化数据即可超越所有人工设计的任务特定架构、损失函数和数据增强方案。VLM³基于Qwen3-vl-4B架构，仅通过相机焦距归一化和像素空间归一化两个预处理步骤，在单目深度估计、目标级三维理解、像素匹配、相机姿态估计四大任务上匹敌或超越专家视觉模型。

## 核心发现

1. **极简设计**：无需修改VLM架构、无需渲染marker、无需回归公式设计，仅靠基于文字的SFT即可学会三维视觉任务
2. **性能突破**：单目深度估计准确率从DepthLM的84提升至90；目标级三维理解超越SpatialRGPT（参数量仅一半4B vs 8B）；像素匹配超越DKM和RoMa；相机姿态估计match DA3、超越VGGT
3. **范式颠覆**：证明三维视觉学习远比想象中容易，fine-grained 3D understanding可以不依赖回归实现

## 关键技术

- 相机焦距归一化
- 像素空间归一化
- 基于文字的SFT训练（非回归）

## 资源

- 论文地址：https://arxiv.org/pdf/2605.30561
- 代码地址：https://github.com/facebookresearch/VLM3

## 意义

VLM³打通了视觉语言模型与三维视觉之间的壁垒，使统一架构能够简洁地学会各类视觉任务并达到专家模型性能。为三维基础模型构建提供了最简路径，并使三维视觉任务可融入VLM大规模预训练框架，实现三维视觉的Scaling Law。