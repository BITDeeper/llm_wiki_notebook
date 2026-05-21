---
type: entity
title: STEM 架构
created: 2026-03-30
updated: 2026-03-30
tags: [模型架构, iclr, 效率优化, 查表]
related: [查表式记忆, infiniai-lab, deepseek-engram, transformer]
sources: ["早于deepseek-engram！用「查表」重置transformer记忆-iclr.md"]
---

# STEM 架构

**STEM** (Scaling Transformers with Embedding Modules) 是一种入选 ICLR 的大模型架构，由 [[infiniai-lab]]（CMU）和 Meta AI 联合提出。它通过引入 [[查表式记忆]] 机制，重构了 Transformer 的记忆访问路径。

## 核心机制

STEM 的核心创新在于将 Transformer FFN 中的 **up-projection** 替换为基于 token ID 的静态查表操作：
1.  **移除**：传统的 $O(d \cdot d_{ff})$ 级别的 up-projection 矩阵乘法。
2.  **替换为**：每一层维护一个按 token 索引的 Embedding 表。
3.  **结果**：前向传播时直接“查表”获取向量，而非动态计算。

## 关键特性

### 记忆与计算解耦
传统模型的记忆容量受限于单 token 的计算量。STEM 通过查表机制，使得扩展模型知识密度不再必然增加推理延迟。

### 知识可编辑性
由于 token 与 Embedding 向量强绑定，STEM 支持无需重新训练的“知识编辑”。例如，直接互换“Spain”和“Germany”的向量即可改变模型对首都的认知。

### 静态稀疏性
与 [[MoE]] 的动态路由不同，STEM 的访问路径是静态确定的。这带来了以下好处：
-   **训练稳定**：无负载倾斜，无 loss spike。
-   **通信优化**：无需 all-to-all 通信。

## 性能表现

-   **通用性能**：在 350M 和 1B 参数规模上，平均比 Dense 架构提升 **3–4%**。
-   **知识密集型任务**：提升可达 **9–10%**。
-   **长上下文**：在 Needle-in-a-Haystack 等评测中，上下文越长优势越明显。

## 工程落地

-   **存储优化**：庞大的 Embedding 表可 offload 到 CPU 内存，结合异步预取降低显存压力。
-   **避坑指南**：必须替换 up-projection，若替换 gate-projection 会破坏上下文调制能力。

## 历史地位

STEM 的发布时间早于 [[deepseek-engram]] 约三个月，是学术界较早系统探索“查表式记忆”的工作之一。