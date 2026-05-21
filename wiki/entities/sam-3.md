---
type: entity
title: SAM 3
tags: [segmentation, meta-ai, baseline, computer-vision, meta, 模型, 分割]
related: [vision-banana, valentin-gabeur, zhang-pengchuan, meta-fair, llama-3, zero-shot-generalization]
created: 2026-04-24
updated: 2026-05-08
sources: ["谷歌再发香蕉！通用视觉模型vision-banana刷新2d3d多项sota，何恺明谢赛宁参与.md", "清华数学系大神跳槽openai！曾主导sam与llama开发，sora负责人：欢迎加入.md"]
---

# SAM 3

**SAM 3**（Segment Anything Model 3）是 Meta AI（前身为 Facebook AI Research，现 Meta 超级智能实验室）开发的计算机视觉模型，于 2025 年 11 月发布。[[张鹏川]] 担任该项目的负责人。

## 核心特性
- **统一框架**：SAM 3 提供了一个统一的架构，能够在图像和视频中同时处理目标检测、分割与跟踪任务。
- **零样本泛化**：模型具备强大的泛化能力，可以分割任意物体和场景，即使这些类别未在训练数据中见过。

## 技术意义
SAM 3 的发布标志着分割模型向通用、统一方向的重要演进，为视频理解和多模态交互提供了基础性的视觉感知能力。它是 [[vision-banana]] 在 2D 理解任务中的主要对比基准之一。

## 性能对比
在 [[vision-banana]] 的测试中，SAM 3 在语义分割任务上的表现被超越（Vision Banana mIoU 0.699 > SAM 3）。

## 关联人物
- [[张鹏川]]：SAM 3 项目负责人。
- [[valentin-gabeur]]：[[vision-banana]] 的核心作者，同时也是 SAM 2 的共同一作。