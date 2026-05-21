---
type: concept
title: 混合采样过程
tags: [algorithm, diffusion-model, methodology]
related: [vmdiff, spherical-interpolation, Efficient Adaptive Adjustment]
created: 2026-04-02
updated: 2026-04-02
sources: ["跨物体融合新突破！从拼贴到创造：ai学会「生」出新物体.md"]
---

# 混合采样过程

**混合采样过程** (Hybrid Sampling Process, HSP) 是 [[VMDiff]] 模型中用于处理跨物体融合的核心生成流程。

## 核心思想
HSP 采用了分阶段策略，针对生成过程不同阶段的目标，采用了截然不同的操作方式，以解决“信息保留”与“视觉统一”之间的矛盾。

## 两个阶段

### 1. BNoise (Blending Noise)
*   **目标**：尽可能完整地保留两个输入物体的特征信息。
*   **操作**：**拼接** (Concatenation)。
*   **逻辑**：在噪声构造和反演初期，如果过早使用插值，两个物体中不对齐的局部细节很容易在平均化过程中被抹平。通过拼接，模型能先将双方的重要特征都“锁”进语义噪声中，为后续步骤提供丰富的素材。

### 2. MDeNoise (Mixing Denoise)
*   **目标**：将保留的信息融合成一个结构连贯、视觉统一的新实体。
*   **操作**：**[[spherical-interpolation]] (球面插值)**。
*   **逻辑**：在最终生成阶段，如果继续拼接，结果往往是两个物体挤在一起。通过球面插值，模型可以在潜空间中找到一条更自然的过渡路径，让两个概念真正“长”在一起。

## 意义
HSP 的价值在于它打破了“全程统一融合策略”的惯性，证明了在生成流程的不同阶段动态调整策略（先拼接保信息，后插值成整体）比单一方法更有效。