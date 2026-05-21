---
type: concept
title: 扩展有效交互
tags: [ai-paradigm, reasoning, efficiency]
related: [heavy-duty-reasoning, mirothinker-1-7, local-verification]
created: 2026-03-16
updated: 2026-03-16
sources: ["不卷速度卷验证，陈天桥miromind精准预测15天后黄金价格.md"]
---

# 扩展有效交互

[[扩展有效交互]]（Extended Effective Interaction）是 [[MiroMind]] 提出的核心理念，用于指导 [[重型推理]] 模型的优化方向。该理念主张不追求交互步数的数量，而是追求每一步的有效性和逻辑质量。

## 原理

在引入 [[局部验证]] 和 [[全局验证]] 机制后，MiroMind 观察到一个反直觉现象：模型的交互步骤数量反而减少了。这是因为验证器充当了过滤器，剔除了没有信息增益的无效步骤，将算力集中分配到真正推动问题求解的环节上。

## 意义

这一理念挑战了“步数越多性能越强”的传统认知，强调通过提升单步决策的质量和验证机制，来实现更高效、更精准的推理。它是对 [[scaling-law]] 的一种补充，即在扩大参数和数据的同时，必须优化交互的质量。