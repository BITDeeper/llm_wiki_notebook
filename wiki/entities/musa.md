---
type: entity
title: MUSA
tags: [架构, 软件栈, CUDA替代, 软件平台, 摩尔线程]
related: [摩尔线程, mtt-aibook, mt-aios, pytorch, 全栈底座, MDC-2025, 端云一体, comfyui]
created: 2026-01-21
updated: 2026-05-07
sources: ["摩尔线程aibook一周实测：开箱即训的「ai-native」体验.md", "「国产gpu第一股」首秀！新架构下周揭秘，全栈底座不藏了.md"]
---

# MUSA

MUSA (Moore Threads Unified System Architecture，亦称 Meta-computing Unified System Architecture) 是 [[摩尔线程]] 自研的统一系统架构，也是其全栈技术底座的核心软件层。

## 定义与功能
MUSA 旨在连接底层 GPU 硬件与上层应用软件，功能对标 NVIDIA 的 CUDA。它提供了一套完整的编程接口和运行环境，使开发者能够充分利用摩尔线程 GPU 的加速能力。

在 [[摩尔线程]] 的生态战略中，MUSA 扮演着“承上启下”的关键角色：
- **向下**：屏蔽硬件差异，发挥 [[全功能GPU]] 的 AI 计算、图形渲染和科学计算能力。
- **向上**：为 AI 大模型、数字孪生、物理仿真等应用提供高效的算力支持。

## 核心特性
- **兼容性**：支持主流深度学习框架如 PyTorch。实测显示，基于标准 PyTorch 语法编写的代码可以在 MUSA 架构上无缝运行，无需修改。
- **端云一致性**：MUSA 架构保证了本地开发环境与云端训练环境的一致性，支持 [[端云一体]] 的开发流程。
- **底层适配**：摩尔线程提供了针对 MUSA 优化的加速库和算子，使得 [[comfyui]] 等原本深度绑定 CUDA 生态的应用也能在国产 GPU 上运行。

## 战略意义
MUSA 是摩尔线程构建国产 GPU 软件生态的护城河，旨在降低开发者从 CUDA 生态迁移到国产算力平台的成本。

## 相关活动
[[MDC-2025]]（MUSA Developer Conference 2025）即是以此架构命名的开发者大会，旨在围绕 MUSA 构建繁荣的开发者生态。