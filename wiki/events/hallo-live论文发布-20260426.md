---
type: event
title: Hallo-Live 论文发布
created: 2026-05-24
updated: 2026-05-24
tags: [论文发布, 数字人, 实时生成, 开源]
related: [hallo-live, 复旦大学, 朱思语, 异步双流扩散, 人类偏好引导蒸馏]
sources: ["hallo-live-让文本驱动音视频数字人迈入实时流式生成.md"]
origin_date: 2026-04-26
participants: [复旦大学, 朱思语]
causes: []
effects: [hallo-live]
significance: medium
---
# Hallo-Live 论文发布

2026年4月26日，复旦大学与上海创智学院团队在 arXiv 发布论文《Hallo-Live: Real-Time Streaming Joint Audio-Video Avatar Generation with Asynchronous Dual-Stream and Human-Centric Preference Distillation》，代码同步在 GitHub 开源。

## 背景

文本驱动的音视频数字人生成此前主要停留在离线高质量生成阶段，距离实时交互有明显距离。已有的双流扩散模型（如 Ovi）虽然质量优秀，但无法满足实时部署需求。

## 核心贡献

- 提出 [[异步双流扩散]] 框架，在保持流式因果生成的前提下完成音视频联合生成
- 设计 [[未来扩展注意力]]，通过非对称跨模态注意力解决协同发音问题
- 提出 [[人类偏好引导蒸馏]]，通过奖励加权蒸馏解决加速退化问题
- 在两张 H200 GPU 上实现 20.38 FPS、0.94 秒延迟，吞吐较教师模型提升 16.0 倍

## 影响

该研究标志着文本驱动音视频数字人从"能生成"向"能实时交互"的阶段性突破，为数字人直播、虚拟主持等场景提供了可部署的技术方案。