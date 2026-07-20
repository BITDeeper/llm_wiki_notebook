---
type: entity
title: Bagel
tags: [model, benchmark, 多模态大模型, 统一模型, 视觉语言模型]
related: [neo-unify-架构, robust-u1, 原生理解生成统一]
created: 2026-03-06
updated: 2026-06-13
sources: ["彻底告别ve与vae！商汤硬核重构多模态：砍掉所有中间编码器.md", "rss/看不清就乱答？多模态大模型的这个毛病终于有解了-icml-2026.md"]
---

# BAGEL

BAGEL 是一种"既会看图、又会画图"的统一多模态大模型。由于具备 [[原生理解生成统一]] 的特性，BAGEL 隐含了关于"干净世界长什么样"的先验知识。

## 作为 Robust-U1 的底座模型

BAGEL 被选为 [[robust-u1|Robust-U1]] 方法的底座模型，用于验证模型利用自身生成先验进行 [[视觉自恢复]] 的能力。

## 作为数据训练效率的对比基准

在 [[neo-unify-架构]] 的研究中，BAGEL 被用作数据训练效率的对比基准。实验表明，[[neo-unify-架构]] 相比 BAGEL 展现出更高的数据训练效率，在使用更少训练 token 的情况下取得了更优的性能。