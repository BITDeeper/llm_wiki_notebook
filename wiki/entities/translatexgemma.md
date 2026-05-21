---
type: entity
title: TranslateGemma
tags: [model, google, open-source, translation, efficiency]
related: [google-deepmind, gemma-3, gemini, generative-translation, 本地推理]
created: 2026-01-16
updated: 2026-01-16
sources: ["openai偷袭，谷歌掀桌！2026开年第一场ai大战太精彩.md"]
---

# TranslateGemma

[[TranslateGemma]] 是 [[Google DeepMind]] 基于 [[Gemma 3]] 架构开发的开源翻译模型系列，于 2026 年初发布。它旨在通过极致的效率和多模态能力，回应 [[OpenAI]] 在翻译领域的挑战。

## 模型规格与性能
TranslateGemma 提供了三种不同规模的模型，以适应不同的部署场景：
- **4B**：适用于移动设备和边缘设备，性能接近原 12B 基线水平，支持完全在设备端运行。
- **12B**：适用于消费级笔记本电脑，在 WMT24++ 基准测试中超越了 27B 的基线模型，实现了“小参数大能力”。
- **27B**：适用于云端 GPU/TPU，提供最高保真度的翻译质量。

## 技术亮点
- **模型蒸馏**：通过双阶段微调流程（监督式微调 + 强化学习优化），将 [[Gemini]] 模型的能力成功迁移至开放的 [[Gemma 3]] 架构中。
- **多模态迁移**：在 Vistra 图像翻译基准测试中表现出色，即使未经过专门的多模态微调，也能处理图像中的文本翻译。
- **强化学习优化**：引入 MetricX-QE 和 AutoMQM 等奖励模型，引导模型生成更自然、准确的译文。

## 战略意义
谷歌选择开源 [[TranslateGemma]]，强调了“端侧推理”和“效率”的重要性。这与 [[OpenAI]] 依赖云端巨无霸模型的路线形成鲜明对比，旨在通过降低部署门槛和隐私保护来捍卫其在翻译领域的生态地位。