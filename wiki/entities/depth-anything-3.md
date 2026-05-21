---
type: entity
title: Depth Anything 3
tags: [depth-estimation, baseline, model]
related: [vision-banana, 深度估计, scal3r, vggt]
created: 2026-04-24
updated: 2026-05-08
sources: ["谷歌再发香蕉！通用视觉模型vision-banana刷新2d3d多项sota，何恺明谢赛宁参与.md", "公里级场景也能稳住了，国产团队把长视频3d重建又往前推了一步.md"]
---

# Depth Anything 3

**Depth Anything 3** 是一种单目深度估计模型，在多个计算机视觉任务中被用作对比基准。

## 应用与对比

### 在 3D 重建中
在 [[Scal3R]] 的相关研究中，[[Depth Anything 3]] 的 Streaming 模式被作为对比基准之一，用于评估长视频 3D 重建的性能。

### 在深度估计中
它是 [[vision-banana]] 在 3D 理解任务中的主要对比基准之一。在 [[vision-banana]] 的测试中，Depth Anything 3 在深度估计任务上的表现被超越。

值得注意的是，Depth Anything 3 等传统 SOTA 模型通常依赖相机内参进行训练或推理，而 [[vision-banana]] 实现了无需相机内参的零样本 SOTA。