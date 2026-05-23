---
type: entity
title: Depth Anything 3
tags: [depth-estimation, baseline, model, 深度估计, 3D重建, 工具, 计算机视觉, 基线模型]
related: [vision-banana, 深度估计, scal3r, vggt, world-r1, 四维复合奖励函数, vggt-omega, 前馈3d重建]
created: 2026-04-24
updated: 2026-05-22
sources: ["谷歌再发香蕉！通用视觉模型vision-banana刷新2d3d多项sota，何恺明谢赛宁参与.md", "公里级场景也能稳住了，国产团队把长视频3d重建又往前推了一步.md", "解决视频生成穿帮问题！浙大&微软3000条纯文本让模型理解3d.md", "cvpr-2026-oral-牛津-&-meta-ai-推出-vggt-ω：前馈-3d-重建迈入-10b-参数时代，动态场景精度升-77%.md"]
---

# Depth Anything 3

**Depth Anything 3** 是此前深度估计领域的标杆模型，在多个计算机视觉任务中被用作对比基准和评估工具。

## 应用与对比

### 在深度估计中
它是 [[vision-banana]] 在 3D 理解任务中的主要对比基准之一。在 [[vision-banana]] 的测试中，Depth Anything 3 在深度估计任务上的表现被超越。

值得注意的是，Depth Anything 3 等传统 SOTA 模型通常依赖相机内参进行训练或推理，而 [[vision-banana]] 实现了无需相机内参的零样本 SOTA。

### 在 3D 重建中
在 [[Scal3R]] 的相关研究中，[[Depth Anything 3]] 的 Streaming 模式被作为对比基准之一，用于评估长视频 3D 重建的性能。

### 与 VGGT-Ω 的对比
在 [[vggt-omega|VGGT-Ω]] 论文中，Depth Anything 3 被作为对比基线：

- 在面对重复纹理（如雪地）或剧烈相机翻转时，Depth Anything 3 可能出现严重的"重影"或轨迹丢失。
- VGGT-Ω 在相同场景下能保持全局几何一致性，显著优于 Depth Anything 3。

### 在视频生成 3D 一致性评估中
在 [[world-r1]] 中，Depth Anything 3 被用作关键评估工具。其作用是将生成的视频"提升"为 3D 高斯溅射（3D Gaussian Splatting）表示，从而支持 [[四维复合奖励函数]] 中的"元视角评分"——从完全不同的角度审视生成视频的几何一致性，暴露正面观看时不可见的 3D 错误。