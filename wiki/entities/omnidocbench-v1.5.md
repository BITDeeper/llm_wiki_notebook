---
type: entity
title: OmniDocBench v1.5
tags: [数据集, 基准测试, ocr]
related: [deepseek-ocr2, gemini-3-pro]
created: 2026-01-27
updated: 2026-01-27
sources: ["deepseek又拿第一！首创「因果流」视觉推理，超越gemini.md"]
---

# OmniDocBench v1.5

用于评估光学字符识别（OCR）和文档理解能力的综合基准测试数据集。

## 用途
该数据集被用于验证 [[deepseek-ocr2]] 的性能。测试结果显示，DeepSeek-OCR2 在该基准上取得了 91.09% 的得分，相比前代模型提升了 3.73%。

## 关键指标
- **综合得分**：衡量模型在文档解析上的整体准确性。
- **阅读顺序（R-order）编辑距离**：衡量模型输出文本的阅读逻辑是否符合人类习惯。DeepSeek-OCR2 在此指标上表现优异（0.057），优于 [[gemini-3-pro]]（0.115）。