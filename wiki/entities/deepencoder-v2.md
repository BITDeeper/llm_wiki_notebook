---
type: entity
title: DeepEncoder V2
tags: ["deepseek", "architecture", "vision-encoder", "架构", "视觉编码器", "多模态"]
related: [deepseek-ocr2, 因果流, llm作为视觉编码器, qwen2]
created: 2026-01-28
updated: 2026-05-06
sources: ["gemini-3「开眼」像素级操控！谷歌回应deepseek-ocr2.md", "deepseek又拿第一！首创「因果流」视觉推理，超越gemini.md"]
---

# DeepEncoder V2

DeepSeek 为 [[deepseek-ocr2]] 设计的全新视觉编码器架构，旨在解决传统视觉语言模型（VLM）在处理复杂文档时的逻辑混乱问题。它负责模拟人类的视觉注意力机制，是 DeepSeek 走“内功流”技术路线的关键支撑。

## 架构组成
DeepEncoder V2 采用了“LLM 作为视觉编码器”的技术路线，主要由以下两部分组成：
1.  **视觉分词器**：沿用 SAM-base（80M 参数）加卷积层设计，负责将图像转换为视觉 Token。
2.  **LLM 编码器**：使用轻量级 [[qwen2]]-0.5B 模型替代传统的 CLIP 编码器，处理视觉 Token 并引入可学习的“查询 Token”（Query Tokens）。

## 技术创新：因果流查询
通过精心设计的 **注意力掩码** 机制实现两级推理，从而对视觉信息进行语义重排：
- **视觉 Token 间**：采用双向注意力，保持全局感知能力。
- **查询 Token 间**：采用因果注意力，每个 Token 只能看见之前的序列。

这种设计使得编码器能够为后续的 LLM 解码器提供逻辑通顺的输入序列。

## 功能特点
-   **逻辑化阅读**：不同于传统的从左到右或从上到下的机械扫描，DeepEncoder V2 能够根据内容逻辑动态重组视觉信息。
-   **高压缩比**：能够以极低的 Token 消耗（几百个）处理复杂的排版和图表，显著提高了处理效率。

## 意义
DeepEncoder V2 是 [[llm作为视觉编码器]] 路线的成功实践，也是迈向 [[原生多模态]] 的重要验证。它证明了通过优化模型内部架构，小参数模型也能在视觉理解任务上取得卓越效果。