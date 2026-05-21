---
type: entity
title: Qwen2.5-Omni
created: 2026-03-11
updated: 2026-03-11
tags: [model, multimodal, llm, benchmark]
related: [omnisift, gemini-2.5-pro, 全模态理解]
sources: ["仅保留35%-token，性能反超原模型！快手可灵等用视觉信息引导音频压缩，推理时间直降42%.md"]
---

# Qwen2.5-Omni

通义千问系列的全模态大模型版本，具备同时理解和处理视频与音频信息的能力。

## 模型规格
- 提供不同参数规模的版本，包括 **7B** 和 **3B**。
- 作为 [[OmniSIFT]] 技术的主要基准模型，用于验证模态非对称压缩策略的有效性。

## 在 OmniSIFT 研究中的角色
- **注意力可视化分析**：研究显示，在 Qwen2.5-Omni-7B 的推理过程中，大部分 Token 获得的注意力权重很低，证实了全模态模型中存在严重的计算冗余。
- **性能基准**：在 WorldSense 基准测试中，使用 OmniSIFT 压缩至 35% Token 后，得分达到 50.0，高于全量 Token 输入的 49.7。

## 行业地位
与 [[Gemini-2.5-Pro]] 一样，代表了当前多模态模型向“全模态”演进的重要方向，即综合处理视觉、听觉等多种感知信息。