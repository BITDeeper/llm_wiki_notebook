---
type: event
title: ViT³ 发布并获 CVPR 2026 Oral
created: 2026-05-17
updated: 2026-05-17
tags: [cvpr-2026, 视觉模型, ttt, 学术里程碑]
related: [vit-cube, 测试时训练-ttt, 清华大学, 阿里巴巴, 韩东辰, 黄高]
sources: ["cvpr-2026-oral-清华+阿里发布vit³：解锁「视觉ttt」新架构，突破transformer复杂度瓶颈.md"]
origin_date: 2025-12-01
time_span:
  start: 2025-12-01
  end: null
participants: [清华大学, 阿里巴巴, 韩东辰, 黄高]
causes: []
effects: []
significance: high
---
# ViT³ 发布并获 CVPR 2026 Oral

## 事件概述

2025年12月，清华大学博士生 [[韩东辰]] 与 [[黄高]] 副教授联合 [[阿里巴巴]] 在 arXiv 上发表论文（编号 2512.01643），提出 [[vit-cube|ViT³]]（Vision Test-Time Training）模型。该工作获 CVPR 2026 Oral 展示资格，标志着 [[测试时训练-ttt|测试时训练（TTT）]] 范式在视觉领域从概念验证进入系统化设计阶段。

## 核心成果

1. 提出了注意力机制的[[注意力机制的信息压缩视角|信息压缩视角]]，统一理解 Softmax 注意力、线性注意力和 TTT
2. 系统性地探索了视觉 TTT 的设计空间，总结出六条设计原则
3. 构建了纯 TTT 架构 ViT³，在分类、检测、分割、生成等任务上超越现有 [[线性复杂度模型]]

## 时间线

- **2025年12月**：论文在 arXiv 上发布（2512.01643）
- **2026年**：获 CVPR 2026 Oral 接收
- **2026年5月17日**：机器之心发布深度报道

## 意义

ViT³ 是首个系统性的视觉 TTT 架构，为 TTT 范式在视觉领域的后续研究提供了有力的基线和设计准则。其发现的深度优化困境（较深内部模型欠拟合而非过拟合）为 TTT 的理论发展指明了关键方向。