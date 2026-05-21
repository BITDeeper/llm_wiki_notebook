---
type: entity
title: REVEL
created: 2026-05-04
updated: 2026-05-04
tags: [video-editing, task-definition, ai]
related: [dragstream, liu-shi-shi-pin-sheng-cheng]
sources: ["拖拽视频编辑进入流式时代！任意时刻、任意内容，实时修改-iclr'26.md"]
---

# REVEL

**REVEL**（全称：stReaming drag-oriEnted interactiVe vidEo manipuLation，流式拖拽导向交互式视频操控）是由 DragStream 团队提出的一项全新技术任务范式。

## 任务目标
REVEL 旨在让用户能够对自回归视频扩散模型（VDMs）生成的任意视频帧，在任意时刻施加拖拽式操作，同时保证后续相邻帧与修改后的画面保持一致。最终实现对视频生成输出的流式、细粒度控制。

## 核心分类
REVEL 首次将拖拽式视频操控统一为两大类型：
1.  **编辑**：直接修改已生成视频帧的画面内容。
2.  **动画**：基于现有帧，按照用户的拖拽指令生成后续视频片段。

这两类操作均支持用户自定义的平移、变形、2D/3D 旋转效果，打破了过往方法“编辑与动画割裂、操作类型受限”的局限。