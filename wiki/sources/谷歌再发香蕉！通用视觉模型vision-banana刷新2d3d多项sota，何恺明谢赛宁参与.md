---
type: source
title: "谷歌再发香蕉！通用视觉模型Vision Banana刷新2D/3D多项SOTA，何恺明谢赛宁参与"
authors: [闻乐]
year: 2026
url: "https://mp.weixin.qq.com/s/BbgZdFXqAEX7DOcvUihaHA"
venue: 量子位
tags: [google-deepmind, computer-vision, multimodal, sota]
related: [vision-banana, nano-banana-pro, 生成式统一范式, 何恺明, 谢赛宁]
created: 2026-04-24
updated: 2026-04-24
sources: []
---

# 谷歌再发香蕉！通用视觉模型Vision Banana刷新2D/3D多项SOTA，何恺明谢赛宁参与

## 摘要
谷歌 DeepMind 发布了基于 [[nano-banana-pro]] 的通用多模态视觉大模型 [[vision-banana]]。该模型通过 [[生成式统一范式]]，利用图像生成预训练统一了 2D 和 3D 理解任务。在零样本迁移条件下，其在语义分割、深度估计和法线估计等核心任务上刷新了多项 SOTA，超越了 [[sam-3]] 和 [[depth-anything-3]] 等专用模型。[[何恺明]] 和 [[谢赛宁]] 作为 Leadership Sponsors 参与了该项目。

## 核心观点
- **生成即理解**：图像生成模型在生成像素的过程中已学会理解物体边界、深度关系和几何结构，只需通过 [[指令微调]] 释放这些能力。
- **统一接口**：通过将所有感知任务（分割、深度、法线）转化为生成可解码的 RGB 图像，实现了“一个模型，所有任务”。
- **零样本能力**：在深度估计等任务中，无需相机内参，仅凭视觉先验即可达到 SOTA 性能。

## 关键技术细节
- **RGB 可逆编码**：将深度、法线、掩码等感知结果映射为 RGB 图像，并能无损还原。
- **轻量微调**：仅需在原训练数据中混入少量视觉任务数据，即可完成对齐，且不损失原有的文生图和编辑能力。

## 性能表现
- **2D 理解**：语义分割 mIoU 0.699（超越 SAM 3）；指代分割刷新零样本 SOTA。
- **3D 理解**：深度估计和法线估计刷新 SOTA，且无需相机内参。
- **生成能力保留**：在 GenAI-Bench 和 ImgEdit 上保持了底座模型的生成能力。

## 团队背景
核心作者包括 [[valentin-gabeur]]（SAM 2 共同一作）、[[shangbang-long]]（Gemini Robotics 参与者）和 [[songyou-peng]]（深耕 3D 视觉）。