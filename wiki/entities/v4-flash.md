---
type: entity
title: "DeepSeek V4-Flash"
tags: [deepseek, model, llm, multimodal, moe]
related: [deepseek, deepseek-v4, thinking-with-visual-primitives, ya-suo-xi-shu-zhu-yi-li]
created: 2026-04-30
updated: 2026-04-30
sources: ["刚刚，deepseek多模态技术范式公布，以视觉原语思考.md"]
---

# DeepSeek V4-Flash

[[DeepSeek]] 发布的混合专家模型，作为 [[thinking-with-visual-primitives]] 技术范式的语言主干。

## 模型规格
- **总参数**：284B
- **激活参数**：13B
- **架构**：MoE (Mixture of Experts)

## 关键特性
- **多模态支持**：配合 DeepSeek 自研的 ViT（视觉 Transformer），支持任意分辨率输入。
- **内置压缩机制**：集成了 [[ya-suo-xi-shu-zhu-yi-li]] (Compressed Sparse Attention, CSA)，能够将 KV 缓存进一步压缩 4 倍。
- **高压缩比**：在处理 800x800 图像时，仅需约 90 个 KV 缓存条目，大幅降低了推理成本。

## 应用
在 DeepSeek 的多模态技术报告中，V4-Flash 展示了在计数和 [[tuo-pui-tui-li]] 任务上超越 GPT-5.4 和 Claude Sonnet 4.6 的能力，特别是在迷宫导航等需要精确空间指代的场景中表现优异。