---
type: concept
title: Mixture-of-Transformer
created: 2026-05-03
updated: 2026-05-03
tags: [architecture, deep-learning, transformer]
related: [neo-unify-架构, sensennova-u1, mixture-of-experts]
sources: ["不卷参数卷架构-这个开源模型把图像理解和生成统一了-20260503.md"]
---

# Mixture-of-Transformer (MoT)

Mixture-of-Transformer (MoT) 是 [[商汤科技]] 在 [[sensenova-u1]] 模型中采用的主干网络架构。它不同于传统的 Mixture-of-Experts (MoE)，旨在通过混合不同的 Transformer 处理路径来统一处理多模态任务。

## 在 SenseNova-U1 中的作用
在 [[neo-unify-架构]] 中，MoT 扮演了核心底层的角色：
- **共享表征**：作为理解和生成任务的共享主干，确保图像理解和图像生成在同一套参数体系下运行。
- **模态融合**：消除了传统架构中视觉编码器（VE）和语言模型（LLM）之间的界限，使得模型能够直接处理像素和文本。

## 与 MoE 的区别
虽然 SenseNova-U1 也有 38B 参数的 MoE 版本，但“Mixture-of-Transformer”更多指代其处理多模态信息的机制设计，而不仅仅是稀疏激活的专家路由。它强调的是不同模态（文本、图像）在 Transformer 层级内的深度融合与统一处理。

## 相关技术
- [[像素流匹配]]：在 MoT 架构中与文本的自回归学习并行的视觉目标函数。