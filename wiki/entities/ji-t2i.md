---
type: entity
title: JiT-T2I
created: 2026-06-02
updated: 2026-06-02
tags: [模型, 文生图, 基准模型, 流匹配]
related: [gpic, fd-dino-v2]
sources: ["百万规模数据集已经不够用了！斯坦福开源-gpic：28-万亿像素、1-亿张合规图像，视觉生成步入"大语料"时代.md"]
---
# JiT-T2I

**JiT-T2I** 是一个基于像素空间流匹配（Flow Matching）的文生图 Transformer 模型，作为验证 [[gpic]] 数据集有效性的基准模型（Baseline）。

## 技术规格

- **架构**：像素空间流匹配 Transformer
- **参数量**：约 11 亿
- **文本编码器**：Qwen3-1.7B
- **训练分辨率**：256×256
- **训练数据**：[[gpic]]-Full，1 个 epoch
- **全局 Batch Size**：256
- **优化器**：AdamW

## 性能表现

在 CFG=6.25 时达到 FD 分数 76.25（基于 [[fd-dino-v2]] 评测）。生成结果表明模型已能理解复杂文本指令，生成涵盖动物、车辆、建筑等多种类别的图像。

## 定位

JiT-T2I 并非追求 SOTA 的模型，而是作为 GPIC 数据集的"打样"基准，证明该数据集作为大规模训练集的有效性。