---
type: entity
title: WAN2.1
tags: [tool, model, video-generation, world-model, 视频生成, 扩散模型, 骨干网络]
related: [世界模型, 前瞻, anyflow, 视频扩散模型, far-模型, vbench]
created: 2026-05-04
updated: 2026-05-22
sources: ["acl-2026｜世界模型能让智能体「预知未来」？这篇新范式研究给了一个反直觉的答案.md", "4-步生成高质量视频，还能越采样越好！nvidia、nus-show-lab、mit-提出-anyflow：迈向“步数自由”的视频扩散生成.md"]
---

# WAN2.1

WAN2.1（Wan2.1）是一个开源的14B参数视频扩散骨干模型，涵盖文生视频（T2V）和图生视频（I2V）两个版本，可用作世界模型和视频生成模型。

## 关键数据

- **参数规模**：14B
- **版本**：Wan2.1-T2V-14B（文生视频）、Wan2.1-I2V-14B（图生视频）
- **基准性能**：Wan2.1-I2V-14B 在50×2 NFEs下 [[vbench]]-I2V 达87.71

## 应用场景

### 视觉推理与前瞻预测

在相关研究中，WAN2.1 被用作模拟器，通过 Rollout 方式模拟智能体指定动作的前瞻预测，并将生成的视频信息返回给智能体，以辅助其进行空间感知和视觉推理 [[前瞻]]。

### 在 AnyFlow 中的应用

在 [[anyflow]] 的实验中，Wan2.1 被用作主要的骨干网络：

- **AnyFlow-Wan2.1-T2V-14B**：双向视频生成配置
- **AnyFlow-FAR-Wan2.1-14B**：结合 [[far-模型]] 的因果视频生成配置，在4 NFEs下 I2V 达87.87