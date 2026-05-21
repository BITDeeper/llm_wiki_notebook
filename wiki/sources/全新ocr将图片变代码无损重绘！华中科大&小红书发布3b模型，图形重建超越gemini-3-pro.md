---
type: source
title: "全新OCR将图片变代码无损重绘！华中科大&小红书发布3B模型，图形重建超越Gemini 3 Pro"
tags: [ocr, 多模态, 文档解析, 开源模型, 小红书, 华中科技大学]
related: [mocr, dots.mocr, ocr-arena, 图像-代码-文本三元组, gemini]
created: 2026-03-26
updated: 2026-03-26
authors: [量子位, MOCR团队]
year: 2026
url: "https://mp.weixin.qq.com/s/FjNS45SIYsimYLsR20EbEg"
venue: "量子位 (QbitAI)"
sources: ["全新ocr将图片变代码无损重绘！华中科大&小红书发布3b模型，图形重建超越gemini-3-pro.md"]
---

# 全新OCR将图片变代码无损重绘！华中科大&小红书发布3B模型，图形重建超越Gemini 3 Pro

## 摘要
本文报道了由华中科技大学与小红书 hi lab 联合提出的 **MOCR (Multimodal OCR)** 范式及其开源模型 **dots.mocr**。该模型仅用 3B 参数，在文档解析任务上取得开源 SOTA，并在图形重建任务上全面超越闭源的 Gemini 3 Pro。MOCR 的核心创新在于将文档解析从单纯的“文字识别”升级为“全要素结构化重建”，能够将图表、公式、UI 等视觉元素转换为可编辑的 SVG 代码。

## 核心观点

### 范式转变：从 OCR 到 MOCR
传统 OCR 仅提取文字，将图表视为噪声或丢弃为像素图片。MOCR 提出了“解析一切”的新范式，将文档中的图形（图表、公式、UI 等）视为“一等解析目标”，将其转换为结构化代码（如 SVG），从而保留了完整的语义信息。

### 技术突破
1.  **架构设计**：使用从零训练的 1.2B 视觉编码器（适配文档细节）+ 1.5B Qwen2.5 Base 解码器（避免对话先验干扰）。
2.  **数据工程**：构建了包含 PDF、网页渲染、原生 SVG 资产和通用视觉数据的四大引擎，解决了图形监督信号稀缺的问题。
3.  **评估革新**：提出了 **OCR Arena**，利用强 VLM（Gemini 3 Flash）作为裁判进行 Elo 评分，解决了传统字符串匹配指标无法有效评估复杂结构化输出的问题。

### 性能表现
-   **文档解析**：在 olmOCR-Bench 等基准上开源第一，仅次于 Gemini 3 Pro。
-   **图形重建**：在 6 个图形重建基准上**全面超越** Gemini 3 Pro（例如在 UniSVG 上领先 0.167 分）。
-   **通用能力**：在 DocVQA、RefCOCO 等通用视觉任务上未出现性能坍塌，反而因多任务协同有所增益。

## 关键技术细节

### 训练策略
采用三阶段渐进式预训练：
1.  **建立视觉-语言接口**：通用视觉训练。
2.  **广泛预训练**：混合通用视觉数据与纯文本文档解析监督。
3.  **MOCR 专项强化**：重点强化图形转 SVG 的能力，提升输入分辨率。

### 数据处理
针对“同一视觉多种代码”的非唯一性难题，采用了“标准化（normalization）+ 基于渲染的验证（render-based verification）”组合策略。

## 意义与影响
MOCR 不仅是 OCR 技术的改进，更是多模态智能核心数据引擎的升级。它开辟了“图像-代码-文本”三元组作为新的预训练数据源，且具有表示无关性，可扩展至 TikZ、CAD、SMILES 等专业领域。

## 原文链接
-   论文：https://arxiv.org/abs/2603.13032
-   代码：https://github.com/rednote-hilab/dots.mocr