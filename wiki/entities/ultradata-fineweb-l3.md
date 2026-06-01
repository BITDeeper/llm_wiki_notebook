---
type: entity
title: Ultra-FineWeb-L3
created: 2026-05-29
updated: 2026-05-29
tags: [数据集, 预训练数据, 合成数据, 开源]
related: [面壁智能, ultradata-分级治理体系, minicpm5-1b, ultradata-sft-2605]
sources: ["国内首次！面壁开源千万级sft与最大中文数据，minicpm5-1b底座公开.md"]
origin_date: 2026-05-29
---

# Ultra-FineWeb-L3

Ultra-FineWeb-L3 是 [[面壁智能]] 发布的 600B+ Tokens 中英文网页合成数据集，是当前开源规模最大的中文预训练合成数据集。

## 规模与构成

- **总量**：600B+ Tokens
- **英文**：400B+ Tokens
- **中文**：200B+ Tokens（开源规模最大的中文预训练合成数据）

## 构建方法

基于 [[ultradata-分级治理体系]] 的 L3（合成与增强）层级：

1. 以 L2 精筛高质量网页数据 Ultra-FineWeb 为种子
2. 使用多种模型进行问答对生成与多风格改写
3. 将海量网页文本升级为结构化、高信息密度的训练数据

## 核心理念

**数据可学习性**：核心目标不是增加数据量，而是提升单位数据的可学习性——将"可读"的网页文本转化为"好学"的训练数据。

## 性能表现

在同等训练量下，Ultra-FineWeb-L3 在以下基准上显著超越 FineWeb-edu、FinePhrase 等竞品数据集：

- **英文任务**：ARC-E、HellaSwag、OpenbookQA
- **中文任务**：CMMLU
- 训练后期的领先优势持续扩大

## 应用场景

作为 [[minicpm5-1b]] 退火阶段的核心训练数据，为模型在训练后期实现"最后一公里"能力跃升提供高密度燃料。

## 获取方式

- Hugging Face：https://huggingface.co/datasets/openbmb/Ultra-FineWeb-L3