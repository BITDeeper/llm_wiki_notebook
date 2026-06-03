---
type: concept
title: 原生多模态（Early Fusion）
created: 2026-06-02
updated: 2026-06-02
tags: [多模态, 预训练, 架构设计, early-fusion]
related: [minimax-m3, 原生理解生成统一, neo-unify-架构]
sources: ["minimax-m3一手实测：老黄ppt上74个logo，我以为能难住它.md"]
---
# 原生多模态（Early Fusion）

指从预训练第一步即进行图文混合训练的技术范式，文本与视觉的语义空间从一开始融在同一套框架下。

## 技术路线

与"后期融合"（Late Fusion，先分别训练视觉编码器和语言模型再拼接）不同，Early Fusion从模型设计之初就将多模态数据统一处理。[[minimax-m3]] 采用此路线，与Google Gemini一致。

## 学术支撑

ICCV 2025论文（arXiv:2504.07951）专门研究native multimodal model的scaling law，核心结论：
- **Early fusion在低算力预算下表现更强**，训练效率更高、部署更简单
- **没有发现late fusion有任何结构性优势**
- **Interleaved data比image-caption数据更能从更大模型中受益**

## 与相关概念的关系

- 与 [[原生理解生成统一]] 目标一致（消除模态间信息断层），但实现路径不同
- [[商汤科技]] 的 [[neo-unify-架构]] 侧重架构层面的统一设计，MiniMax的Early Fusion侧重预训练数据策略
- 两者共同代表了多模态模型从"拼接式"向"原生统一"演进的趋势

## 数据策略

[[minimax]] 基于这一路线重建了整套数据管线，预训练数据规模提升到100万亿token量级，并发现interleaved data对模型性能的提升比通常认为的更关键。