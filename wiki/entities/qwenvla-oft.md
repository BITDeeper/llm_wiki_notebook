---
type: entity
title: QwenVLA-OFT
created: 2026-03-25
updated: 2026-03-25
tags: [模型, vla, 基座]
related: [deepvision-vla, qwen]
sources: ["vla别再「走神」：即插即用提升视觉泛化，相对pi0.5提升18%.md"]
---
# QwenVLA-OFT

[[QwenVLA-OFT]] 是一个 [[vla-视觉-语言-动作]] 模型，作为 [[DeepVision-VLA]] 框架的基座模型。

## 技术细节
DeepVision-VLA 在 QwenVLA-OFT 的基础上进行了改进，引入了 [[Vision-Language Mixture-of-Transformers]] (VL-MoT) 架构和 [[Action-Guided Visual Pruning]] (AGVP) 策略，以解决深层视觉退化问题。