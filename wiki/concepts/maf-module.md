---
type: concept
title: 多模态自适应融合
tags: [architecture, multimodal, fusion]
related: [audiox, dit, 统一音频生成]
created: 2026-03-09
updated: 2026-03-09
sources: ["一个模型，搞定所有音频生成任务！多项基准sota-iclr'26.md"]
---

# 多模态自适应融合

多模态自适应融合（Multimodal Adaptive Fusion, MAF）是 [[AudioX]] 模型中提出的一种轻量级模块，旨在解决统一音频生成中多模态输入的灵活融合问题。

## 功能
MAF 模块允许模型根据任务需求，灵活地处理和组合来自文本、视频、图像等多种模态的输入信息。它是实现 [[统一音频生成]] 的关键技术组件。

## 设计理念
通过在 [[Diffusion Transformer (DiT)]] 架构中嵌入 MAF 模块，模型能够动态适应不同的输入条件模态，无需为每种模态组合重新训练模型，从而实现了真正的“一个模型，多种任务”。