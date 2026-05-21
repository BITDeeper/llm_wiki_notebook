---
type: source
title: "任意条件，「可控」文生图扩散模型综述 | TPAMI'25"
created: 2026-01-18
updated: 2026-01-18
tags: [ai, diffusion-models, survey, controllable-generation, tpami]
related: [beijing-university-of-posts-and-telecommunications, ieee-tpami, controllable-generation, controlnet, dreambooth, conditional-score-prediction, condition-guided-score-estimation]
authors: [北京邮电大学团队]
year: 2026
url: "https://ieeexplore.ieee.org/document/11304732"
venue: "IEEE TPAMI"
sources: ["任意条件，「可控」文生图扩散模型综述-tpami'25.md"]
---

# 任意条件，「可控」文生图扩散模型综述

本文是北京邮电大学团队发表于 IEEE TPAMI 2025 的综述文章，系统梳理了文生图扩散模型的可控生成技术。

## 核心问题

综述将核心问题概括为：如何将超越文本的新型条件信号注入预训练的文生图扩散模型，并在尽量保持生成质量的前提下实现稳定控制。

## 主要内容

文章从任务和方法两个层面构建了可控生成的技术谱系：

1.  **任务维度**：涵盖了空间控制、图像个性化、视角/几何条件、上下文学习、增强文本条件、脑信号/声音引导以及图中文字渲染等多个方向。
2.  **方法维度**：将技术路线归纳为两大主线：
    *   [[conditional-score-prediction]]（条件分数预测）：通过微调、适配器或免训练策略，让模型在内部直接“看见”并利用新条件。
    *   [[condition-guided-score-estimation]]（条件引导分数估计）：保持模型参数不变，在推理阶段利用外部评价函数计算偏差，通过梯度“牵引”采样轨迹。

## 关键技术点

*   **Tuning-based**：如 [[dreambooth]]，通过更新参数内化特定主体或风格。
*   **Adapter-based**：如 [[controlnet]]，引入额外编码器注入条件特征。
*   **Training-free**：利用注意力机制进行推理时的轻量干预。
*   **多条件融合**：解决多条件输入时的冲突与协同问题。

## 未来趋势

*   **通用可控生成**：构建条件无关、接口统一的框架，支持任意条件形式的接入。
*   **世界模型与视频生成**：将可控生成应用于视频，支持相机可控、时空一致的动态环境建模，连接生成式 AI 与具身智能。

## 与现有 Wiki 的联系

*   本综述提到的“可控生成”是 [[pi-presentation-intelligence]] 构建“下一代内容 OS”的基础技术支撑。
*   文中提到的“世界模型”方向与 [[vla-视觉-语言-动作]] 及 [[具身智能数据困境]] 密切相关，旨在解决仿真环境与现实世界的鸿沟。