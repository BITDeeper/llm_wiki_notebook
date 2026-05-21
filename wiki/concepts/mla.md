---
type: concept
title: MLA (Multi-head Latent Attention)
tags: [架构, 注意力机制, 推理优化, llm, architecture, attention-mechanism, deepseek, ai-architecture, optimization]
related: [deepseek-v4, kimi-k2-6, kv-缓存压缩, mlra, kv-cache, deepseek-v2, tensor-parallelism, data-parallelism, deepseek-v3, moe-architecture]
created: 2026-04-24
updated: 2026-05-07
sources: ["没想到！deepseek-v4里，竟还藏着一个中国万亿开源模型.md", "超越mla！新架构mlra百万token，解码最高2.8倍速-iclr'26.md", "deepseek-v4爆春节登场！四大杀招突袭全球编程王座，claude危.md"]
---

# MLA (Multi-head Latent Attention)

[[MLA (Multi-head Latent Attention)]]（Multi-head Latent Attention，多头潜在注意力）是一种由 [[DeepSeek]] 首创的 Transformer 注意力机制变体，旨在解决长上下文推理中的内存瓶颈问题。该架构最早在 [[DeepSeek-V2]] 中引入，并延续至 [[DeepSeek V3]] 和 [[DeepSeek V4]]。

## 核心机制

MLA 的核心思想是将原本巨大的 Key (K) 和 Value (V) 矩阵通过低秩投影压缩到一个极低维度的“潜在向量”（Latent Vector）中，以替代传统多头注意力（MHA）中为每个头单独存储 KV 的方式。

1.  **压缩**：
    在推理时，模型不再缓存所有注意力头的完整 Key 和 Value，而是仅缓存压缩后的潜在向量。这解决了随着上下文长度增加，KV 缓存呈线性增长导致的巨大内存开销问题。
2.  **解压**：
    在计算注意力时，通过上投影矩阵（Up-projection Matrix）将潜在向量还原为所需的 Key 和 Value。
3.  **吸收优化**：
    为了进一步减少计算量，MLA 将 Key 的上投影矩阵“吸收”到 Query (Q) 的计算中，从而避免了显式生成完整的 Keys。

## 优势

MLA 在保持模型性能的同时，显著优化了推理效率：

-   **极致的显存节省**：
    相比标准的多头注意力（MHA），MLA 能将 KV Cache 的显存占用降低一个数量级，大幅缩减了推理时的 KV 缓存量，使得在有限显存下处理超长上下文成为可能。
-   **保持模型质量**：
    相比 [[MQA]]（多查询注意力）等激进压缩方法，MLA 通过低秩分解较好地保留了模型的表达能力。研究表明，MLA 在建模性能上优于传统的分组查询注意力（GQA）。
-   **硬件受限突破**：
    这是 [[DeepSeek]] 能够在受限硬件条件下（如芯片出口限制背景）实现高性能的关键技术之一。

## 局限性与工程瓶颈

尽管 MLA 在显存优化上取得了成功，但其架构设计也带来了明显的工程瓶颈，这也是 [[MLRA]] 等后续技术试图解决的主要问题：

1.  **张量并行（TP）受阻**：
    -   由于 MLA 仅使用单一的潜在向量来表示所有头的信息，这个向量无法被切分到多个 GPU 上。
    -   这导致推理框架（如 [[SGLang]]）只能使用数据并行（DP），即模型权重在每张卡上冗余存储，无法利用 TP 来提升单次推理的计算效率。
2.  **扩展性与硬件适配受限**：
    -   在矩阵吸收后，MLA 的解码过程在算子层面等效于一个超大维度（如 576 维）的 [[MQA]]。
    -   这种超大维度的单头计算对 GPU 的片上存储（SRAM）提出了极高要求，导致高性能内核（如 FlashMLA）难以在旧架构或资源受限的设备上部署。

## 应用与影响

-   **DeepSeek 系列**：作为该技术的发明者，DeepSeek 在其后续模型中持续应用并改进 MLA。它是 [[DeepSeek V3]] 高性价比特性的核心支撑，也是 [[DeepSeek V4]] 保持高效推理能力的重要组成部分。
-   **Kimi K2.6**：[[Moonshot AI]] 开发的 [[Kimi K2.6]] 采用了 DeepSeek 的 MLA 机制，并将其扩展到万亿参数的 MoE 模型规模。这是 [[技术互鉴]] 的典型案例之一。

## 演进

MLA 的设计理念在学术界得到了进一步的发展。例如，[[MLRA]] 通过“块分解”和“求和顺序外移”技术，在保持低秩压缩优势的同时，恢复了模型对张量并行的支持能力。

## 参见

-   [[KV 缓存压缩]]：MLA 所致力解决的核心问题。
-   [[MoE-架构]]：常与 MLA 配合使用的高效架构技术。