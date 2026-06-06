---
type: entity
title: Alpaca
created: 2026-06-05
updated: 2026-06-05
tags: [模型, 微调, 斯坦福]
related: [yann-dubois]
sources: ["anthropic全球警告！openai已跨「可靠性阈值」：ai自我加速启动.md"]
---
# Alpaca

[[yann-dubois]] 在斯坦福大学期间主导的早期大语言模型微调项目。

## 背景

Alpaca 项目的核心假设是：监督微调（SFT）足以让模型达到良好效果，无需使用复杂的强化学习（RL）。这一假设源于 Dubois 对 ChatGPT 使用 RL 的第一反应——"太复杂了，用 SFT 就够了"。

## 后续影响

虽然 Alpaca 验证了 SFT 在小规模上的有效性，但后来的实践表明，一旦模型规模跨过某个水平，RL 会"突然开始好用"，只是代价不低——需要大量采样、判断对错，算力和系统工程成本都很高。

Alpaca 是理解 AI 训练方法论从 SFT 向 RL 演进的重要里程碑。