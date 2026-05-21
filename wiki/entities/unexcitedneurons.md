---
type: entity
title: unexcitedneurons
tags: [people, analysts, reverse-engineering]
related: [claude-opus, 参数量, moe-混合专家, 推理成本反推法]
created: 2026-04-10
updated: 2026-04-10
sources: ["马斯克说漏嘴了！claude-opus参数5t，sonnet-1t.md"]
---

# unexcitedneurons

## 概述
unexcitedneurons 是一位 Substack 技术博主，专注于 AI 模型的逆向工程分析。

## 主要贡献
在关于 Claude 模型规模的讨论中，他通过分析 OpenRouter 在 Google Vertex 和 Amazon Bedrock 上的 Token 吞吐数据，对 [[Claude Opus]] 4.5 和 4.6 的参数量提出了基于数据的估算。

### 关键结论
- **Claude Opus 4.6 激活参数量**：在 FP8 精度下约为 93B-105B；若采用混合精度配置，约为 127B-154B。
- **总参数量估算**：Opus 4.5 的总参数量应在 1.5T-2T 之间，而非网传的 10T+。
- **成本验证**：这一估算与 Anthropic 将 Opus 4.5/4.6 的 API 价格降至 4.1 版本 1/3 的做法相吻合，支持了“模型通过蒸馏实现效率提升”的观点。

他的分析挑战了“越大越好”的传统认知，强调了 [[激活参数量 vs 总参数量]] 区别的重要性。