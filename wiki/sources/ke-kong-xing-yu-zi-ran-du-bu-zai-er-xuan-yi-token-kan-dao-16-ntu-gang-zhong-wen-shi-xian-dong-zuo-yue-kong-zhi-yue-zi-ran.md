---
type: source
title: "可控性与自然度不再「二选一」！token砍到1/6，NTU+港中文实现动作越控制越自然"
tags: [动作生成, 具身智能, 深度学习, 南洋理工大学, 香港中文大学]
related: [motok, perception-planning-control-范式, diffusion-based-离散运动-tokenizer, 从粗到细的控制注入]
created: 2026-03-31
updated: 2026-03-31
authors: [MoTok团队]
year: 2026
url: "https://mp.weixin.qq.com/s/j5dr9kzeBS4JCbHqUJs2rw"
venue: "量子位"
sources: ["可控性与自然度不再「二选一」！token砍到16，ntu+港中文实现动作越控制越自然.md"]
---

# 概述

本文报道了南洋理工大学（NTU）与香港中文大学（CUHK）联合提出的 [[motok]] 模型。该模型通过引入 [[perception-planning-control-范式]] 和 [[diffusion-based-离散运动-tokenizer]]，成功解决了条件动作生成中长期存在的“可控性与自然度”二选一的难题。

# 核心内容

## 问题背景
现有的动作生成方法面临一个核心矛盾：**高层语义规划**（决定动作“要做什么”）与 **低层细节重建/控制**（决定动作“怎么精确做到”）被混杂在同一个生成阶段。这导致两者相互拉扯——控制增强时动作变僵，自然度高时容易跑偏。

## 解决方案：MoTok
MoTok 提出了 **Perception–Planning–Control (PPC)** 三阶段通用新范式：
1.  **Perception（感知）**：理解输入条件。
2.  **Planning（规划）**：在离散 Token 空间进行全局语义规划。
3.  **Control（控制）**：通过 Diffusion-based decoder 进行局部细节重建和细粒度控制。

## 关键技术突破

### 1. Diffusion-based 离散运动 Tokenizer
结合了离散 Token（利于语义规划）和连续 Diffusion（利于细节重建）的优势。
*   **效率提升**：利用强大的 decoder 重建能力，使离散 Token 专注于语义信息，将 Token 量压缩至 SOTA 方法（MoMask）的 **1/6**。
*   **质量提升**：在 Token 数量大幅减少的情况下，重建质量和生成精度反而提升。

### 2. 从粗到细的控制注入
解决了文本条件与运动控制条件相互冲突的问题：
*   **Planning 阶段**：引入粗粒度约束（Coarse Constraints），如关节轨迹。
*   **Control 阶段**：引入细粒度约束（Fine-grained Constraints），通过连续特征的 Diffusion 迭代优化。

## 实验结果
*   **轨迹误差**：降低 **89%** (0.72 cm → 0.08 cm)。
*   **FID**：降低 **65%** (0.083 → 0.029)。
*   **控制悖论解决**：在增强关节轨迹控制的情况下，FID 反而进一步下降 **58%** (0.033 → 0.014)，实现了“越控制越自然”。

# 意义
MoTok 的范式不仅提升了动作生成的性能，也为 [[具身智能]] 和数字人等场景提供了新的技术方向，使得智能体在执行复杂指令时能同时保持高精度和高自然度。