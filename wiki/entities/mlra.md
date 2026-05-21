---
type: entity
title: MLRA (Multi-Head Low-Rank Attention)
tags: [llm, architecture, attention-mechanism, inference]
related: [mla, kv-cache, tensor-parallelism, deepseek-v2, flashattention-3]
created: 2026-04-29
updated: 2026-04-29
sources: ["超越mla！新架构mlra百万token，解码最高2.8倍速-iclr'26.md"]
---

# MLRA (Multi-Head Low-Rank Attention)

[[MLRA]]（多头低秩注意力）是一种由宾夕法尼亚州立大学等高校团队提出的大模型注意力架构，旨在解决 [[DeepSeek-V2]] 中 [[MLA]] 架构在张量并行（TP）和扩展性上的缺陷。

## 核心原理

MLRA 的核心创新在于通过代数技巧实现了计算过程的解耦：

1.  **块分解视角**：将原本 4 倍维度的 KV 潜在向量逻辑上划分为四个相等的子块，对应的权重矩阵也进行垂直切割。
2.  **求和顺序外移**：
    -   **MLA 逻辑**：先对子块投影并求和，生成完整的 Key/Value，再做 Softmax 计算。
    -   **MLRA 逻辑**：利用求和的线性性质，先对每个子块独立进行投影和注意力计算，最后再将四个分支的输出结果求和。

## 技术优势

### 1. 完美适配张量并行 (TP)
由于计算在分支末端才聚合，MLRA 允许将不同的子块分配给不同的计算设备（如 4 张 GPU）。这意味着：
-   每张卡只需缓存 1/4 的 KV Cache 数据。
-   显存带宽压力降低至原来的 1/3（相比 MLA）。
-   避免了 MLA 被迫使用低效数据并行（DP）的问题。

### 2. 性能与质量兼得
实验数据显示，[[MLRA-4]]（4 分支版本）在 7 个数据集上的平均困惑度（13.672）优于 MLA（13.727），表明在保持低显存占用的同时，并未牺牲甚至提升了模型质量。

### 3. 推理速度提升
在 [[NVIDIA H100]] 上，基于 [[FlashAttention-3]] 实现的 MLRA-4 在 128K 到 2M 上下文长度下，相比使用 FlashMLA 的 MLA，稳定实现了 **2.8 倍**的解码加速。

## 与 MLA 的对比

| 特性 | MLA | MLRA |
| :--- | :--- | :--- |
| **KV Cache 结构** | 单一潜在向量 | 多个子块（多头低秩） |
| **并行策略** | 仅支持数据并行 (DP) | 支持高效张量并行 (TP) |
| **单卡显存压力** | 高 (需加载完整潜在向量) | 低 (仅加载对应子块) |
| **解码速度** | 基准 | **2.8x** (相比 MLA) |
| **扩展性** | 受限于 SRAM 大小 | 支持更多头数，扩展性强 |

## 应用场景
MLRA 特别适合需要处理超长上下文（百万级 Token）的场景，如：
-   检索增强生成 (RAG)
-   复杂的多步思维链 (CoT) 推理
-   超长对话系统
-   本地化高性能推理（降低显存门槛）

## 资源
-   论文: [arXiv:2603.02188](https://arxiv.org/pdf/2603.02188)
-   代码: [GitHub - SongtaoLiu0823/MLRA](https://github.com/SongtaoLiu0823/MLRA)