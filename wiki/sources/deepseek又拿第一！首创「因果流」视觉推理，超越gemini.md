---
type: source
title: "DeepSeek又拿第一！首创「因果流」视觉推理，超越Gemini"
tags: [deepseek, ocr, 多模态, 视觉推理, 开源]
related: [deepseek-ocr2, deepencoder-v2, 因果流, qwen2, gemini-3-pro, omnidocbench-v1.5]
created: 2026-01-27
updated: 2026-01-27
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/DsTNftJdv5BuDlMKaJvK0A"
venue: "新智元"
sources: ["deepseek又拿第一！首创「因果流」视觉推理，超越gemini.md"]
---

# DeepSeek又拿第一！首创「因果流」视觉推理，超越Gemini

## 概述
本文报道了 DeepSeek 开源的升级版 OCR 模型 [[deepseek-ocr2]]。该模型引入了全新的 [[deepencoder-v2]] 架构，首创了 [[因果流]]（Causal Flow）视觉推理机制，模仿人类阅读逻辑，打破了传统模型按固定顺序（光栅扫描）处理图像的限制。

## 核心创新
- **DeepEncoder V2 架构**：使用轻量级 [[llm作为视觉编码器]]（基于 [[qwen2]]-0.5B），替代了传统的 CLIP 编码器。
- **因果流查询机制**：通过特殊的注意力掩码设计，允许模型根据语义（如先看标题再看正文）灵活调整阅读顺序，而非机械地从左上到右下扫描。
- **两级级联推理**：编码器通过可学习的查询 Token 对视觉 Token 进行语义重排，随后的 LLM 解码器在有序序列上进行自回归推理。

## 性能表现
- **OmniDocBench v1.5**：在使用更少视觉 Token（256-1120个）的情况下，综合得分达到 91.09%，比前代提升 3.73%。
- **阅读顺序逻辑**：编辑距离从 0.085 降至 0.057，显著优于前代及 [[gemini-3-pro]]（0.115）。
- **生产环境**：在线日志图像 OCR 重复率从 6.25% 降至 4.17%；PDF 数据生产重复率从 3.69% 降至 2.88%。

## 意义
DeepSeek-OCR2 不仅提升了 OCR 任务的上限，更验证了“LLM 作为视觉编码器”的可行性，被视为迈向 [[原生多模态]]（Native Multimodality）的重要一步。未来，同一编码器架构有望扩展至音频、视频等更多模态。