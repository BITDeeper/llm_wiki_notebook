---
type: entity
title: "Titans 架构"
tags: [google, deepmind, architecture, rnn, transformer, memory]
related: [transformer, miras-框架, 神经长期记忆, 惊奇度, gemini, google-deepmind]
created: 2025-12-07
updated: 2025-12-07
sources: ["谷歌祭出transformer杀手，8年首次大突破！掌门人划出agi死线.md"]
---

# Titans 架构

Titans 是 Google DeepMind 在 NeurIPS 2025 上提出的新一代序列建模架构，被视为 Transformer 的“最强继任者”。它旨在解决 Transformer 在处理超长上下文时计算成本高昂以及缺乏持续学习能力的问题。

## 核心特性

### 混合架构
Titans 结合了两种主流架构的优势：
- **RNN 的速度**：推理速度呈线性增长，适合处理流式数据。
- **Transformer 的性能**：保留了强大的并行训练能力和特征提取能力。

### 神经长期记忆模块
与传统的 KV Cache 或上下文窗口不同，Titans 引入了一个基于深层神经网络（MLP）的 [[神经长期记忆]] 模块。
- **功能**：作为独立于主模型的“记忆体”，用于压缩历史数据并保留关键信息。
- **机制**：模型在运行时主动学习并即时更新记忆状态，而非被动存储。

### 惊奇度
为了决定哪些信息值得被长期记忆，Titans 引入了 [[惊奇度]] 指标。
- **高惊奇度**：遇到罕见或重要信息时，优先写入长期记忆。
- **遗忘机制**：随着学习深入，自适应管理权重，主动遗忘不再重要的信息。

## 性能表现

- **超长上下文**：在 BABILong 基准测试中，Titans 展示了处理超过 200 万 token 上下文窗口的能力。
- **效率**：在参数量远小于 GPT-4 等巨型模型的情况下，在召回率和准确率上表现更优。
- **基准测试**：优于 Mamba-2、Gated DeltaNet 等线性循环模型及 Transformer++。

## 应用与影响
- 有传闻称未来的 [[gemini]] 4 可能采用 Titans 架构。
- 该架构补齐了 LLM 在“记忆与持续学习”上的短板，被视为通往 AGI 的潜在关键技术突破之一。

## 参见
- [[miras-框架]]：指导 Titans 设计的理论框架。
- [[google-deepmind]]：开发机构。