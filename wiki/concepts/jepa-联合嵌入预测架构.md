---
type: concept
title: JEPA 联合嵌入预测架构
created: 2026-05-21
updated: 2026-05-21
tags: [世界模型, 自监督学习, 表征学习, 非生成式架构]
related: [yann-lecun, objective-driven-ai, 世界模型, ami-advanced-machine-intelligence]
sources: ["lecun炮轰hinton：他认可llm就是想摆烂退休了！.md"]
origin_date: 2020-01-01
---
# JEPA 联合嵌入预测架构

JEPA（Joint Embedding Predictive Architecture）是 [[yann-lecun|LeCun]] 提出的非生成式架构，在抽象表征空间而非像素空间做预测，被认为是通向人类水平智能的核心路径。

## 核心原理

1. 取一张图像（原始观察），创建其损坏版本
2. 两个编码器分别对原始版本和损坏版本编码
3. 用预测器从损坏版本的表征预测原始版本的表征
4. 关键：**不重建像素**，只在抽象表征空间做预测

## 与生成式架构的区别

- **生成式架构**（VAE、自编码器、扩散模型）：试图在像素级别重建输入，容易学到恒等函数，效果不佳
- **JEPA**：非生成式，在表征空间预测，避免像素级重建的陷阱

## 发展时间线

- **约2020年**：核心想法成形——所有成功学到好的图像/视频表征的架构都是非生成式的
- **2022年**：LeCun 发表长篇 vision paper，完整阐述 JEPA 和世界模型愿景
- **2022-2025年**：FAIR 内部团队验证，取得实质性进展
- **2025年底**：LeCun 离开 Meta 创办 [[ami-advanced-machine-intelligence|AMI]]，推进 JEPA 产品化

## LeCun 的预测

- **2027年初**：范式转换将变得"对所有人完全显而易见"
- **五年内（约2031年）**：JEPA 类世界模型"统治 AI 圈"（引用 Linus Torvalds 的"total world domination"名言）

## 关键洞察

LeCun 的"顿悟时刻"：所有成功学到了好的图像和视频表征的架构，都是非生成式的。FAIR 曾投入大量计算资源做 denoising autoencoder（MAE 变体），结果令人失望；而同时期用非生成式架构做表征学习的工作效果显著更好。