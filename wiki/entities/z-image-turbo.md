---
type: entity
title: Z-Image-Turbo
created: 2026-04-11
updated: 2026-04-11
tags: [生成模型, 开源, 小模型]
related: [gems, nano-banana-2]
sources: ["openclaw的风刮到了多模态生成，6b小模型超越nano-banana-2！.md"]
---

# Z-Image-Turbo

Z-Image-Turbo 是一个参数量为 6B 的图像生成模型。在 [[gems]] 框架的相关研究中，它被用作底座模型来验证智能体化策略的有效性。

## 性能提升

作为相对较小的模型，Z-Image-Turbo 在原生状态下可能无法与更大的商业模型（如 [[nano-banana-2]]）竞争。然而，通过集成 [[gems]] 框架的 [[agent-loop]]、[[agent-memory]] 和 [[agent-skill]]，Z-Image-Turbo 在主流任务上平均提升了 14.22%，并在 GenEval2 任务上超越了 Nano Banana 2。这成为了“系统智能优于单纯模型规模”的典型案例。