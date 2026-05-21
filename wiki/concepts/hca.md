---
type: concept
title: HCA (重度压缩注意力)
tags: [attention, efficiency, deepseek]
related: [deepseek-v4, csa, long-context]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告太详尽了！484天换代之路全公开.md"]
---

# HCA (重度压缩注意力)

[[HCA]] (Heavily Compressed Attention) 是 [[DeepSeek V4]] 混合注意力机制的另一半，旨在处理长距离的全局依赖。

## 工作原理
- **高压缩率**：压缩率 m' 设为 128，即每 128 个 token 直接压缩为一个。
- **非重叠压缩**：与 [[CSA]] 不同，HCA 不使用重叠窗口，而是直接分组压缩。
- **Dense Attention**：对所有压缩后的 KV 执行密集注意力计算。

## 作用
HCA 的设计思路简单粗暴，通过极高的压缩率换取效率，同时保持 dense attention 以捕捉全局信号。它与 CSA 交替叠加，既保证了模型能够关注到长距离的全局信息，又不会因为细节过多而拖慢计算速度。