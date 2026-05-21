---
type: entity
title: 长江 SoC
tags: [芯片, 硬件, SoC, 国产芯片]
related: [摩尔线程, mtt-aibook]
created: 2026-01-21
updated: 2026-01-21
sources: ["摩尔线程aibook一周实测：开箱即训的「ai-native」体验.md"]
---

# 长江 SoC

长江 SoC 是 [[摩尔线程]] 自研的智能系统级芯片，是 [[mtt-aibook]] 算力本的核心算力来源。

## 技术特性
- **异构计算**：集成不同类型的处理单元（CPU, GPU, NPU），提供 50TOPS 的异构 AI 算力。
- **混合精度**：支持混合精度计算，有助于在保持模型精度的同时提升计算效率。
- **本地推理能力**：实测表明，该芯片足以支持 [[comfyui]] 和 [[sdxl-lightning]] 等复杂模型的本地流畅运行。

## 应用场景
作为 [[mtt-aibook]] 的心脏，它旨在为个人开发者提供数据中心级别的计算架构体验，使得在本地进行 AI 模型推理和轻量级训练成为可能。