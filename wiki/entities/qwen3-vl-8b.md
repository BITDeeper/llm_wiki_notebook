---
type: entity
title: Qwen3-VL-8B
created: 2026-05-21
updated: 2026-05-21
tags: [多模态大模型, 视觉语言模型, 基线模型]
related: [llava-onevision-2, internvl-3-5-8b]
sources: ["llava-onevision-2迈向下一代感知智能的视觉语言大模型.md"]
---
# Qwen3-VL-8B

Qwen3-VL-8B 是通义千问系列的多模态视觉语言模型，在 [[llava-onevision-2]] 技术报告中作为主要对比基线模型。

## 在对比中的表现

- 18 项视频任务上被 LLaVA-OneVision-2-8B 全面超越（平均落后 +4.3 分）
- 在 [[jumpscore]] 基准上以 30.1 mAP 大幅落后于 LLaVA-OneVision-2 的 74.9（差距 44.8 分）
- 作为同体量（8B）级别的代表性模型，用于验证码流原生视觉建模的性能优势