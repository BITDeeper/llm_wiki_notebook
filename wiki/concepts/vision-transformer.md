---
type: concept
title: Vision Transformer (ViT)
created: 2026-05-14
updated: 2026-05-14
tags: [计算机视觉, transformer, 架构创新]
related: [alexey-dosovitskiy, recursive-superintelligence-rsi]
sources: ["田渊栋ai创业估值315亿，老黄苏妈都投了，姚班施天麟也是合伙人.md"]
origin_date: 2020-01-01
---
# Vision Transformer (ViT)

2020年由[[alexey-dosovitskiy|Alexey Dosovitskiy]]等人提出的视觉架构，率先将Transformer直接用于图像patch序列。

## 核心贡献

证明了视觉任务不一定非要依赖卷积网络做底座。ViT将图像切分为固定大小的patch，将其视为序列输入Transformer，从根本上改变了计算机视觉的研究方向。

## 影响

ViT的成功打破了"视觉=卷积"的固有认知，为多模态统一架构奠定了基础，也间接影响了后续[[原生理解生成统一]]等技术的发展。