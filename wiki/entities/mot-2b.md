---
type: entity
title: MoT-2B
tags: [model, embodied-ai, edge-computing, tencent]
related: [hy-embodied-0-5, mot-架构, qwen3-vl-4b, robobrain2-5]
created: 2026-04-09
updated: 2026-04-09
sources: ["moe不够看了，腾讯推出mot：2b具身模型22项评测16项最佳.md"]
---

# MoT-2B

MoT-2B 是 [[HY-Embodied-0.5]] 系列模型中的轻量级版本，由 [[腾讯混元团队]] 开发。其核心特点是总参数量为 4B，但激活参数仅为 2B，专为端侧部署和实时响应设计。

## 性能表现
在 22 项涵盖感知、推理、规划的权威评测中，MoT-2B 共取得 16 项最佳成绩。它超越了参数量更大的通用视觉语言模型 [[Qwen3-VL-4B]] 以及专用的具身模型 [[RoboBrain2.5]] 和 [[MiMo-Embodied]]。

## 技术优势
MoT-2B 的成功主要归功于其采用的 [[MoT-架构]]（Mixture-of-Transformers）：
- **模态解耦**：通过为视觉分支赋予非共享参数，解决了小模型在多模态训练中常见的“灾难性遗忘”问题（即视觉能力提升导致语言能力下降）。
- **双向注意力**：针对图像不具备语言单向序列特性的特点，为视觉 Token 解锁了独立的全向（双向）注意力机制。
- **视觉潜在 Token**：引入 Visual Latent Tokens 机制，提升了端侧小模型的感知容量和细粒度理解能力。

## 应用场景
由于其轻量化的特性，MoT-2B 适合部署在资源受限的端侧设备（如机器人本体）上，实现实时的视觉感知与动作控制。