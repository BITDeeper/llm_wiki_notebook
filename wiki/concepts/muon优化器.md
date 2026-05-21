---
type: concept
title: Muon优化器
tags: [optimizer, training, deepseek]
related: [deepseek-v4, kimi, keller-jordan]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告太详尽了！484天换代之路全公开.md"]
---

# Muon优化器

[[Muon优化器]] 是一种基于矩阵正交化的优化器，最初由 [[Keller Jordan]] 等人提出，并在 [[Kimi K2]] 的大规模训练中首次得到验证。[[DeepSeek V4]] 也采用了该优化器，替代了传统的 AdamW。

## 核心机制
- **适用范围**：仅优化 2D 参数矩阵。其他参数（如 embedding、RMSNorm 权重）仍使用 AdamW。
- **正交化**：使用混合 Newton-Schulz 迭代将参数矩阵的奇异值稳定在 1 附近。
    - **前 8 步**：使用激进系数，快速将奇异值推向 1。
    - **后 2 步**：使用温和系数，精确稳定奇异值。

## 优势
- **稳定性**：通过保持矩阵的正交性，避免了训练过程中的数值爆炸或消失。
- **效率**：在大规模模型训练中表现出优于 AdamW 的稳定性。

## 技术演化
DeepSeek 和 Kimi 都使用了 Muon 优化器，但解决伴随问题（如 attention logits 爆炸）的路径不同：
- **Kimi**：配合 QK-Clip 使用。
- **DeepSeek**：在注意力架构中直接对 query 和 KV 做 RMSNorm，从源头压制爆炸。