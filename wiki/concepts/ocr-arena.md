---
type: concept
title: OCR Arena
tags: [评估方法, 基准测试, ocr]
related: [dots.mocr, mocr, gemini]
created: 2026-03-26
updated: 2026-03-26
sources: ["全新ocr将图片变代码无损重绘！华中科大&小红书发布3b模型，图形重建超越gemini-3-pro.md"]
---

# OCR Arena

**OCR Arena** 是一种基于大模型裁判的 OCR 评估框架，由 [[dots.mocr]] 团队提出。它旨在解决传统 OCR 评估指标（如 WER、TEDS）在处理复杂结构化输出（如 Markdown、SVG 代码）时的局限性。

## 核心机制
-   **VLM 裁判**：使用强大的视觉语言模型（如 [[Gemini]] 3 Flash）作为裁判，对两个模型的输出进行两两对比。
-   **双轮对比**：为了消除 LLM 的位置偏好（即倾向于选择先出现的选项），每次对比都进行正反两轮（A vs B 和 B vs A）。只有两轮判断一致才计为有效胜负，否则算平局。
-   **Elo 评分系统**：基于对比结果计算模型的 Elo 分数，并通过 1000 次 bootstrap 重采样来增强统计稳健性。

## 优势
与传统的字符串匹配指标相比，OCR Arena 更能反映真实的端到端解析质量。它不依赖于具体的文本格式细节，而是评估语义层面的等价性和视觉还原度，特别适合评估包含图表、公式和复杂布局的新一代 OCR 系统。