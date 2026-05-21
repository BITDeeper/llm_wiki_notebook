---
type: concept
title: MLA (Multi-Head Latent Attention)
tags: [注意力机制, 架构, deepseek, 优化, architecture, attention-mechanism]
related: ["deepseek-v4", "flashattention", "kv-cache", "flashmla", "deepseek-v2", "deepseek-r1", "kv-缓存", "deepseek-r2"]
created: 2026-05-03
updated: 2026-05-07
sources: ["vllm-v0-20-发布-2-bit-压缩默认开启-你的推理成本要打折了-20260503.md", "deepseek-r2要来了？.md"]
---

# MLA (Multi-Head Latent Attention)

MLA (Multi-Head Latent Attention，多头潜在注意力) 是一种注意力机制架构，旨在通过压缩键值对来降低大模型推理时的显存开销，同时保持模型性能。它是 [[DeepSeek]] 系列模型（如 V2, V3, R1）的核心技术特征之一，也是 [[DeepSeek V4]] 系列模型采用的关键技术。

## 技术原理

传统的 Multi-Head Attention (MHA) 为每个注意力头维护独立的 Key 和 Value 矩阵，导致 KV Cache 的大小随头数线性增长。随着上下文长度增加，显存占用呈线性增长，成为推理瓶颈。

MLA 引入了低秩的“潜在向量”，将原本庞大的 KV 矩阵压缩到一个极小的潜在空间进行存储和计算。这种“矩阵吸收”技术大幅压缩了推理过程中 KV Cache 的维度，从而降低显存占用。

## 工程实现与优化

虽然 MLA 在理论上极大地节省了显存，但其非标准的计算图给工程实现带来了挑战。DeepSeek 通过自研的 [[FlashMLA]] 库及推理框架（如 [[vLLM]]）的深度优化，解决了这些难题：

-   **计算图优化**：
    -   **早期挑战**：许多推理框架（包括早期的 vLLM）无法直接处理压缩的 KV，不得不将其“反压缩”或展开成标准的 MQA 形式。这不仅浪费了计算资源，也抵消了 MLA 的显存优势。
    -   **正确实现**：在 [[vLLM]] v0.20 中，通过 [[FlashAttention]] 4 和专用的 MLA Kernel，推理过程可以直接在压缩后的潜在空间中进行。这种实现方式使得 KV Cache 的有效容量相比早期处理方式提升了 10×。

-   **硬件与算子优化**：
    -   **硬件适配**：专门针对 [[Hopper-架构]] GPU（如 H800）进行内核优化。
    -   **FP8 支持**：支持稀疏 FP8 解码，进一步降低显存带宽压力。
    -   **大步幅支持**：代码更新显示其对 576B 步幅的支持，表明该架构具有极强的扩展性，能够支撑超大参数模型的推理。

## 在模型演进中的角色

MLA 架构是 DeepSeek 能够在有限算力下训练和运行大规模模型的关键。它是大模型架构轻量化的重要里程碑，证明了通过改变底层注意力结构，可以在不牺牲模型性能的前提下，显著降低推理的硬件门槛。

爆料代码显示，[[DeepSeek-R2]]（代号 MODEL1）将继续沿用或改进这一架构，证明其在处理长链路推理任务时的持续有效性。