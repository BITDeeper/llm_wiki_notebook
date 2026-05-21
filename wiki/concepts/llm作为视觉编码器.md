---
type: concept
title: LLM作为视觉编码器
tags: [架构, 多模态, 深度学习]
related: [deepencoder-v2, deepseek-ocr2, qwen2, 原生多模态]
created: 2026-01-27
updated: 2026-01-27
sources: ["deepseek又拿第一！首创「因果流」视觉推理，超越gemini.md"]
---

# LLM作为视觉编码器

一种新兴的多模态模型架构设计范式，指使用轻量级大语言模型（LLM）替代传统的专用视觉编码器（如 CLIP、ViT）来处理视觉信息。

## 技术原理
将图像转换为视觉 Token 后，输入到一个预训练好的轻量级 LLM（例如 [[qwen2]]-0.5B）中。利用 LLM 强大的序列建模和推理能力，对视觉 Token 进行语义理解和重排。

## 优势
- **推理能力增强**：LLM 的逻辑推理能力可以迁移至视觉理解任务，处理复杂版面或场景。
- **架构统一**：为 [[原生多模态]] 铺平道路，未来可能用同一个 LLM 编码器处理文本、图像、音频等多种模态。

## 实例
DeepSeek 在 [[deepencoder-v2]] 中首次成功实践了这一概念，证明了其在 OCR 任务中的有效性。