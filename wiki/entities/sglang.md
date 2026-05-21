---
type: entity
title: SGLang
tags: [inference-engine, open-source, llm, system-optimization]
related: [radixark, miles, deepseek-v4, day-0-兼容性, shadowradix-前缀缓存]
created: 2026-05-09
updated: 2026-05-09
sources: ["1亿美金！英伟达amd英特尔破天荒联手，投给了这支团队.md"]
---

# SGLang

[[SGLang]] 是一个高性能的开源大语言模型推理引擎，由 [[RadixArk]] 团队核心成员开发。自2023年诞生以来，它已迅速成长为事实上的行业标准。

## 核心特性
- **[[Day-0 兼容性]]**：能够在新模型架构（如MoE、长上下文、多模态）发布的当天提供无缝支持与优化。
- **极致性能**：每天处理数万亿token的生产流量，性能逼近硬件物理极限。
- **大规模部署**：全球部署规模超过40万张GPU。

## 技术支撑
为了支持复杂模型的高效运行，SGLang 包含多项底层系统优化技术：
- **[[ShadowRadix 前缀缓存]]**：提升推理效率的关键缓存技术。
- **Flash Compressor**
- **Lightning TopK**

## 行业应用
SGLang 被全球对推理性能要求最苛刻的团队所采用，包括但不限于：
- Google, Microsoft, xAI
- [[英伟达]], [[AMD]], Oracle
- LinkedIn, Thinking Machines Lab

## 里程碑
在 [[DeepSeek V4]] 发布当天，SGLang 与 [[Miles]] 共同成为全球首个支持该模型推理与RL训练的开源技术栈。