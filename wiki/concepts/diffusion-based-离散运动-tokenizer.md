---
type: concept
title: Diffusion-based 离散运动 Tokenizer
tags: [神经网络, 动作生成, Tokenization, Diffusion Model]
related: [motok, perception-planning-control-范式]
created: 2026-03-31
updated: 2026-03-31
sources: ["可控性与自然度不再「二选一」！token砍到16，ntu+港中文实现动作越控制越自然.md"]
---

# Diffusion-based 离散运动 Tokenizer

[[Diffusion-based 离散运动 Tokenizer]] 是 [[MoTok]] 模型中的核心编码组件，旨在结合离散表示和连续 Diffusion 模型的双重优势。

## 设计原理

传统的运动 Tokenizer 通常面临两难选择：
*   **离散 Token**：利于语义理解和自回归生成，但难以保留高频细节，导致重建模糊。
*   **连续 Diffusion**：生成质量高、细节丰富，但计算成本高，且难以进行高效的语义规划。

MoTok 的 Tokenizer 采用了一种混合策略：
1.  **Encoder**：将连续的运动数据映射为离散的语义 Token。
2.  **Decoder**：使用 **Diffusion 模型** 而非传统的反卷积网络来重建运动。

## 优势

### 1. 语义与细节的分离
由于 Decoder 具有强大的从噪声中重建细节的能力（Diffusion 的特性），Encoder 生成的离散 Token 不需要承载所有的低层细节信息。它们可以专注于捕捉 **高层语义**（如动作类型、风格）。

### 2. 极致的压缩率
因为 Token 只需保留语义信息，MoTok 能够将所需的 Token 数量压缩至 SOTA 方法（如 [[MoMask]]）的 **1/6**，同时保持甚至提升重建质量。

### 3. 生成质量提升
实验表明，即使冻结 Encoder 和 Codebook，仅将 Decoder 替换为 Diffusion-based，也能显著改善重建效果。这种架构使得 [[perception-planning-control-范式]] 中的 Control 阶段能够输出非常自然和精确的动作。