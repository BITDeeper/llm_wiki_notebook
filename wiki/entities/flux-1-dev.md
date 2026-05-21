---
type: entity
title: FLUX.1-dev
tags: [model, text-to-image, flow-matching, black-forest-labs]
related: [e-grpo, visualgrpo, 流模型强化学习]
created: 2026-01-24
updated: 2026-01-24
sources: ["多奖励场景全面领先！清华新作高熵驱动，强化学习效率飙升.md"]
---

# FLUX.1-dev

**FLUX.1-dev** 是 Black Forest Labs 开发的一系列基于流匹配（Flow Matching）技术的文本生成图像模型。在 [[清华大学]] 团队提出的 [[E-GRPO]] 框架的相关研究中，FLUX.1-dev 被用作骨干模型来验证强化学习算法在视觉生成对齐中的有效性。

## 在 E-GRPO 中的角色
在 E-GRPO 的实验中，FLUX.1-dev 作为基础生成模型，通过引入熵感知的强化学习策略进行微调。实验结果表明，经过 E-GRPO 优化的 FLUX.1-dev 在 HPS、ImageReward 等指标上均超越了基线方法，证明了该框架在提升流模型人类偏好对齐方面的能力。

## 技术背景
FLUX 系列模型代表了从扩散模型向流匹配模型演进的趋势，通常具有更快的推理速度和独特的生成特性。E-GRPO 的成功应用也表明，流模型的去噪过程具有明确的熵特性，可以被利用来优化训练效率。