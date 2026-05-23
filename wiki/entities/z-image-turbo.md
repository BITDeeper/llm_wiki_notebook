---
type: entity
title: Z-Image-Turbo
created: 2026-04-11
updated: 2026-05-22
tags: [生成模型, 开源, 小模型, 扩散模型, 少步生成, 图像生成, 阿里巴巴]
related: [gems, nano-banana-2, d-opsd, 少步扩散模型, 步数蒸馏]
sources: ["openclaw的风刮到了多模态生成，6b小模型超越nano-banana-2！.md", "d-opsd-将opsd引入扩散模型，让少步扩散模型「边跑边学」，还能学会新概念.md"]
---

# Z-Image-Turbo

Z-Image-Turbo 是阿里巴巴 Z-Image 团队开发的[[少步扩散模型]]，参数量为 6B，经过[[步数蒸馏]]后仅需少量推理步即可生成高质量图像。凭借高效采样和优异质量，已成为图像生成领域的主流方案之一。

## 特点

- 配备 LLM/VLM 编码器，继承了[[上下文学习]]能力
- 支持 LoRA 定制和全量微调

## 在 GEMS 框架中的应用

在 [[gems]] 框架的相关研究中，Z-Image-Turbo 被用作底座模型来验证智能体化策略的有效性。作为相对较小的模型，Z-Image-Turbo 在原生状态下可能无法与更大的商业模型（如 [[nano-banana-2]]）竞争。然而，通过集成 [[gems]] 框架的 [[agent-loop]]、[[agent-memory]] 和 [[agent-skill]]，Z-Image-Turbo 在主流任务上平均提升了 14.22%，并在 GenEval2 任务上超越了 Nano Banana 2。这成为了"系统智能优于单纯模型规模"的典型案例。

## 在 D-OPSD 中的角色

Z-Image-Turbo 作为 [[d-opsd]] 框架的基座模型，验证了[[在线策略自蒸馏]]在少步扩散模型持续微调中的有效性。实验表明，D-OPSD 能够在保持 Z-Image-Turbo 原有少步采样能力的同时，使其学会新概念、新风格和新领域偏好。