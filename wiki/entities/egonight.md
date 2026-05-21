---
type: entity
title: EgoNight
tags: [数据集, 基准测试, 夜间视觉, 第一人称视觉]
related: [夜间第一人称视觉, 昼夜对齐视频, insait, oxford-day-and-night]
created: 2026-04-24
updated: 2026-04-24
sources: ["ai在夜晚集体失明！90段视频+12类问题实测模型夜盲程度｜iclr-2026.md"]
---

# EgoNight

**EgoNight** 是首个系统聚焦于 [[夜间第一人称视觉]] 理解的综合基准测试，被 ICLR 2026 收录。它旨在评估和提升 AI 智能体在低光照、高噪声环境下的感知与推理能力。

## 核心构成
EgoNight 基准主要由以下部分组成：
1.  **数据集**：包含 90 段视频，分为三个子集：
    -   **EgoNight-Sofia**：真实采集的夜间第一人称视频。
    -   **EgoNight-Synthetic**：由 Blender/Infinigen 构建的合成数据。
    -   **Oxford Day-and-Night**：来自现有数据集的夜间片段。
2.  **评测任务**：
    -   **EgoNight-VQA**：包含 3658 组问答，覆盖 12 种题型（如物体识别、文字识别、光照识别等）。
    -   **辅助任务**：夜间深度估计、昼夜对应检索。

## 关键技术：昼夜对齐
为了解决夜间数据难以高质量标注的问题，EgoNight 引入了 [[昼夜对齐视频]]。通过在相同场景、动作和时间线上采集白天与夜晚版本的视频，利用白天的清晰信息辅助生成高质量的夜间问答。

## 实验结论
在 EgoNight 上的实测显示，现有 SOTA 模型（如 GPT-4.1, Gemini 2.5 Pro）准确率仅约 30%。实验表明，全量微调和合成数据预训练是提升夜间性能的有效手段。

## 官方资源
-   项目主页：https://dehezhang2.github.io/EgoNight/
-   HuggingFace 数据集：https://huggingface.co/datasets/dehezhang2/EgoNight