---
type: concept
title: UL2（统一预训练框架）
created: 2026-05-30
updated: 2026-05-30
tags: [预训练, 框架, google-brain, nlp]
related: [yi-tay, palm-2]
sources: ["帮gemini拿下imo金牌的关键先生，差点成了职业钢琴家.md"]
---
# UL2（统一预训练框架）

由 [[yi-tay]] 在 Google Brain 期间开发的统一预训练框架，核心思想是将编码器-解码器（encoder-decoder）和自回归（autoregressive）两种预训练范式统一到同一框架中。

## 影响力

- 被 [[palm-2|PaLM-2]] 内部采用为"UL2-like"训练目标
- 影响扩散至 PaLI-X、CoLT5 等多个后续模型
- 是 Yi Tay 技术贡献谱系（UL2 → PaLM-2 → Gemini → Gemini Deep Think）的起点