---
type: entity
title: HiAR
tags: [video-generation, framework, hierarchical-denoising, autoregressive]
related: [时序漂移, 共享噪声水平, 自回归扩散模型, 前向-kl-正则化, 腾讯混元]
created: 2026-03-17
updated: 2026-03-17
sources: ["视频生成一长就漂移竟是前序帧「太干净」惹的祸！研究揭示共享噪声水平才是长视频稳定关键.md"]
---

# HiAR

**HiAR** (Hierarchical Autoregressive) 是一个由**中国科技大学**、**香港中文大学**、**同济大学**及**腾讯混元**联合提出的层次化去噪自回归视频生成框架。它旨在解决长视频生成中的**时序漂移**问题。

## 核心原理
HiAR 的核心创新在于提出了 [[共享噪声水平]] 的去噪机制。传统的自回归方法通常等待前序帧完全去噪（变得“干净”）后再生成后续帧，这会导致误差累积。HiAR 借鉴了双向扩散模型的思路，让上下文帧和当前生成块在去噪过程中始终处于相同的噪声水平，从而打破了“干净上下文”的陷阱。

## 关键技术
- **层次化去噪**：不再串行等待前序块完全生成，而是在每个去噪步中对所有视频块进行因果生成。
- **流水线并行推理**：由于打破了逐块串行的限制，HiAR 支持流水线并行，显著提升了推理效率。
- **前向 KL 正则化**：为了防止模型在蒸馏训练中倾向于生成静止画面（低运动幅度），引入了 [[前向-kl-正则化]] 来保持视频的动态表现力。

## 性能表现
- **长时序稳定性**：在 VBench 长视频基准测试中，Drift Score 降至 0.257。
- **生成长度**：在仅用 5 秒视频训练的情况下，成功生成了 3 小时的高质量连续视频。
- **推理效率**：吞吐量达到 30 fps，相比传统方法加速约 1.8 倍。

## 局限性
由于未引入外部记忆模块，且基于较小的 Wan1.3B 模型进行蒸馏，HiAR 在极长时序（如3小时）下的语义连续性和指令遵从度仍有提升空间。

## 开源资源
- 论文：[HiAR: Efficient Autoregressive Long Video Generation via Hierarchical Denoising](https://arxiv.org/abs/2603.08703)
- 代码：[GitHub - Jacky-hate/HiAR](https://github.com/Jacky-hate/HiAR)
- 项目主页：[jacky-hate.github.io/HiAR](https://jacky-hate.github.io/HiAR/)