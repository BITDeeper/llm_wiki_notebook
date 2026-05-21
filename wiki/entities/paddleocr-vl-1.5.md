---
type: entity
title: PaddleOCR-VL-1.5
tags: [model, ocr, multimodal, document-parsing, baidu]
related: [paddleocr, paddleocr-vl, 异形框定位, 由粗到细架构]
created: 2026-03-30
updated: 2026-03-30
sources: ["全球ocr新王来自中国开源！github狂揽73300+star.md"]
---

# PaddleOCR-VL-1.5

[[PaddleOCR-VL-1.5]] 是百度发布的 0.9B 参数多模态文档解析模型，是 [[PaddleOCR-VL]] 的升级版。它在全球权威文档解析评测榜单 OmniDocBench V1.5 上达到了 94.5% 的精度，超越 Gemini-3-Pro、DeepSeek-OCR2、GPT-5.2 等模型，获得全球综合性能第一。

## 核心技术突破
### 异形框定位
PaddleOCR-VL-1.5 实现了全球首个“[[异形框定位]]”技术。模型能够精准识别倾斜、弯折、拍照畸变等非规则文档形态，解决了金融票据处理、档案数字化等真实场景中的老大难问题，让“歪文档”实现稳定、可规模化解析。

### 架构优化
继承了 [[PaddleOCR-VL]] 的“[[由粗到细架构]]”，通过有效区域聚焦模块（VRFM）先定位关键区域，再进行精细处理。这使得视觉 Token 数量仅为竞品的 1/3 到 1/2，在大幅降低算力消耗的同时保持了更高的精度。

## 行业影响
该模型的发布进一步巩固了 [[PaddleOCR]] 在多模态文档解析领域的领先地位，展示了小参数模型结合架构创新和数据优化在特定垂直领域的巨大潜力。