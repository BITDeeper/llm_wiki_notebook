---
type: entity
title: Qwen3VL
tags: [model, multimodal, vlm, baseline]
related: [egocross, 跨域泛化]
created: 2026-02-25
updated: 2026-02-25
sources: ["cvpr-2026新增赛道！egocross挑战赛：用四大杀手级场景，考验多模态大模型泛化极限.md"]
---

# Qwen3VL

[[qwen3VL]] 是通义千问系列的多模态大语言模型。在 [[egocross]] 挑战赛中，官方基于 Qwen3VL-4B 版本提供了 SFT 微调后的基线模型（SFT-Qwen3VL-4B）。

## 性能表现
作为 [[egocross]] 基准的官方基线，Qwen3VL-4B 在四大跨域场景（外科手术、工业装配、极限运动、动物视角）下的平均准确率仅为 **46.08%**。这一数据表明，尽管该模型在日常场景下表现尚可，但在面对高度专业化、跨领域的真实世界视频理解任务时，其 [[跨域泛化]] 能力仍面临严峻挑战。