---
type: event
title: SIGGRAPH 2026 3D生成论文发表
created: 2026-05-21
updated: 2026-05-21
tags: [siggraph, 3d生成, 学术会议, 计算机图形学]
related: [density-sampled-gaussians-deg, vast, 清华大学, 空间智能密度控制]
sources: ["vast+清华提出3d生成新范式，空间智能密度控制「把算力花在刀刃上」-siggraph-2026.md"]
origin_date: 2026-05-01
time_span:
  start: 2026-05-01
  end: null
participants: [vast, 清华大学]
causes: []
effects: [density-sampled-gaussians-deg]
significance: medium
---
# SIGGRAPH 2026 3D生成论文发表

## 概述

在 SIGGRAPH 2026 上，[[vast]] 与 [[清华大学]] 合作发表了论文《Generative 3D Gaussians with Learned Density Control》，提出了 [[density-sampled-gaussians-deg|Density-Sampled Gaussians（DeG）]]，一种全新的 3D 高斯表示方式。

## 核心贡献

该论文首次将 3D 高斯的空间密度控制实现为端到端可优化问题，解决了 3D 生成领域长期存在的"资源分配不灵活"矛盾。

## 技术亮点

- 提出 [[渲染损失贡献梯度]]，基于强化学习策略梯度实现可学习的密度控制
- 实现任意数量采样和非均匀采样两大核心能力
- 在相近预算下视觉质量优于 TRELLIS、UniLat3D 等基线方法
- 达到相近质量时所需高斯数量可不到基线方法的一半

## 意义

该工作代表了 3D 生成从"固定输出"向"自适应资源分配"的范式转变，提示了 3D 内容从"静态答案"向"活表示"演进的方向。论文预印本于 2026 年 5 月发布（arXiv: 2605.16355），2026 年 5 月 21 日由 [[机器之心]] 报道。