---
type: entity
title: π0 (Pi-Zero)
created: 2026-06-12
updated: 2026-06-12
tags: [VLA, 具身智能, 基座模型]
related: [vla-视觉-语言-动作, guidedvla]
sources: ["rss/rss-2026-别再让机器人看错重点，guidedvla给动作解码器装上可控可解释的注意力专家.md"]
---
# π0 (Pi-Zero)

**π0** 是一种主流的端到端 [[vla-视觉-语言-动作|VLA]]（视觉-语言-动作）基座模型。它接收图像观测和语言指令，直接输出机器人动作。

在 [[guidedvla|GuidedVLA]] 的研究中，π0 被用作实验的基线模型。由于其原始动作解码器存在 [[动作解码器伪相关]] 问题（物体注意力正确率仅为 26.5%），GuidedVLA 在其基础上通过 [[controlnet式残差适配器]] 添加了可控的注意力专家分支。