---
type: concept
title: "压缩稀疏注意力"
tags: [deepseek, optimization, attention-mechanism, engineering]
related: [deepseek-v4, v4-flash, thinking-with-visual-primitives]
created: 2026-04-30
updated: 2026-04-30
sources: ["刚刚，deepseek多模态技术范式公布，以视觉原语思考.md"]
---

# 压缩稀疏注意力

一种内置在 [[DeepSeek]] [[v4-flash]] 模型中的注意力机制优化技术，用于大幅降低视觉推理的计算成本。

## 工作原理
在处理视觉信息时，CSA 机制对 KV 缓存进行进一步压缩。结合 ViT 的图像块处理和空间合并，该机制实现了极高的压缩比：
1. **ViT 处理**：将 756×756 图片处理为 2916 个图像块 token。
2. **空间合并**：3×3 合并为 324 个 token。
3. **CSA 压缩**：将 KV 缓存再压缩 4 倍，最终仅剩 81 个视觉 KV 条目。

## 性能表现
- **整体压缩比**：7056 倍。
- **对比优势**：对于 800×800 图片，DeepSeek 方案仅需约 90 个 KV 缓存条目，而 Claude Sonnet 4.6 需约 870 个，Gemini-3-Flash 需约 1100 个。

## 意义
CSA 证明了在引入精确空间指代（如 [[thinking-with-visual-primitives]]）的前提下，模型不需要海量的视觉 Token 也能保持甚至提升推理能力。这为低成本、高效能的多模态模型部署提供了工程路径。