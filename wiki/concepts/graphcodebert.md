---
type: concept
title: GraphCodeBert
tags: [代码理解, 预训练, 数据流]
related: [guo-daya, codebert]
created: 2026-03-22
updated: 2026-03-22
sources: ["大厂抢郭达雅进行时！deepseek核心成员还是个“综艺巨佬”.md"]
---

# GraphCodeBert

GraphCodeBert 是一种针对代码理解的预训练模型，由 [[郭达雅]] 在 [[微软亚洲研究院 (MSRA)]] 实习期间完成，研究成果发表于 ICLR 2021。

## 核心创新
GraphCodeBert 在 [[CodeBert]] 的基础上，首次将代码的数据流结构纳入预训练过程。这使得模型能够更深入地理解代码的内部逻辑和数据依赖关系，而不仅仅是表面文本。