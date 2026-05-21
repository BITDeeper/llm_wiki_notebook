---
type: concept
title: TRA策略
tags: [video-understanding, optimization, token-compression]
related: [penguin-vl, 长视频理解]
created: 2026-03-19
updated: 2026-03-19
sources: ["腾讯纯文本llm训视觉encoder，拿捏图表长视频，达到开源小模型sota！.md"]
---

# TRA策略

[[tra策略]]（Temporal Redundancy-Aware token compression，时序冗余感知 Token 压缩）是一种用于处理长视频的计算优化策略。

## 核心思想

在视频理解任务中，连续的视频帧往往包含大量冗余信息。如果为每一帧分配相同的 Token 预算，会导致上下文窗口迅速耗尽，且计算资源浪费在重复的背景或静态场景上。

TRA 策略通过识别视频中的“关键帧”和“冗余帧”，动态分配 Token 资源：
- **关键帧**：分配更多的 Token，保留丰富的细节。
- **冗余帧**：分配较少的 Token，仅保留基本时序信息。

## 效果

这种策略使得 [[penguin-vl]] 能够在有限的上下文长度内处理更长的视频，同时保留对时序定位和事件理解至关重要的关键信息，从而在长视频理解基准上取得优异表现。