---
type: concept
title: Gated DeltaNet
tags: [模型架构, 注意力机制]
related: [qwen3-6-27b, 混合注意力架构]
created: 2026-04-23
updated: 2026-04-23
sources: ["27b秒了自家397b旗舰，qwen3.6-27b开源，智能体编程全面超越前代.md"]
---

# Gated DeltaNet

[[Gated DeltaNet]] 是一种混合注意力架构技术，被应用于 [[qwen3-6-27B]] 模型中。

## 技术特点

该架构的主要目的是在降低显存占用的同时，保障模型的代码理解与生成能力。通过结合不同的注意力机制或线性变体，Gated DeltaNet 试图在计算效率（内存和速度）与模型性能（特别是在长上下文和复杂逻辑任务中）之间找到最佳平衡点。

在 Qwen3.6-27B 中，它与多 Token 预测技术配合，进一步优化了推理效率。