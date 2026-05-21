---
type: entity
title: MoTok
tags: [动作生成, 多模态模型, 深度学习, NTU, CUHK]
related: [perception-planning-control-范式, diffusion-based-离散运动-tokenizer, 从粗到细的控制注入, momask, t2m-gpt]
created: 2026-03-31
updated: 2026-03-31
sources: ["可控性与自然度不再「二选一」！token砍到16，ntu+港中文实现动作越控制越自然.md"]
---

# MoTok

[[MoTok]] 是由南洋理工大学（NTU）与香港中文大学（CUHK）联合提出的条件动作生成模型。它旨在解决动作生成中 **可控性**（Control）与 **自然度**（Naturalness）难以兼得的传统难题。

## 核心特性

MoTok 的核心创新在于提出了 [[perception-planning-control-范式]]，将动作生成过程解耦为三个阶段：
1.  **Perception（感知）**：理解输入条件（如文本描述）。
2.  **Planning（规划）**：在离散 Token 空间进行全局语义规划，决定动作的宏观走向。
3.  **Control（控制）**：利用 [[diffusion-based-离散运动-tokenizer]] 进行局部细节重建和精确控制。

## 技术优势

### 1. 极高的 Token 效率
通过利用 Diffusion decoder 强大的细节重建能力，离散 Token 可以专注于保留语义信息。这使得 MoTok 仅需使用 SOTA 方法（如 [[MoMask]]）**1/6** 的 Token 量，即可实现更优的生成效果。

### 2. 越控制越自然
传统方法中，增加控制约束（如关节轨迹）往往会导致动作质量下降。MoTok 通过 [[从粗到细的控制注入]] 策略，将粗粒度约束置于 Planning 阶段，细粒度约束置于 Control 阶段，成功化解了文本与运动控制条件的冲突。实验数据显示，在增强控制的情况下，其 FID 指标（衡量生成质量）反而进一步下降了 58%。

## 性能表现

与现有模型（如 [[MoMask]], [[T2M-GPT]]）相比，MoTok 实现了显著的性能提升：
*   **轨迹误差**：降低 89% (0.72 cm → 0.08 cm)。
*   **FID**：降低 65% (0.083 → 0.029)。

## 应用场景
该技术对于 [[具身智能]] 体至关重要，使得机器人在执行人类指令时，既能精确完成任务（如抓取特定位置），又能保持动作的自然流畅。