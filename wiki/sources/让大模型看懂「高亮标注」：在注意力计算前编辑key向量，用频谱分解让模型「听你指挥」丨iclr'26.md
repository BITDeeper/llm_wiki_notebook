---
type: source
title: "让大模型看懂「高亮标注」：在注意力计算前编辑Key向量，用频谱分解让模型「听你指挥」丨ICLR'26"
tags: [ai-research, attention-mechanism, llm, iclr-2026]
related: [seka, adaseka, 注意力引导, qwen3, gemma3]
created: 2026-03-31
updated: 2026-03-31
authors: ["Weixian (Waylon Li)", "华为英国研究所", "伦敦玛丽女王大学", "RayNeo"]
year: 2026
url: "https://mp.weixin.qq.com/s/K-K_jxDraZYMDuJj07UUXg"
venue: "ICLR 2026"
sources: ["让大模型看懂「高亮标注」：在注意力计算前编辑key向量，用频谱分解让模型「听你指挥」丨iclr'26.md"]
---

# 让大模型看懂「高亮标注」：在注意力计算前编辑Key向量，用频谱分解让模型「听你指挥」

## 概述

本文介绍了被 ICLR 2026 接收的 SEKA (Spectral Editing Key Amplification) 及其自适应变体 AdaSEKA。这是一种针对大语言模型（LLM）的注意力引导技术，旨在解决现有方法（如 PASTA）无法兼容 FlashAttention 导致的延迟和显存瓶颈问题。

## 核心方法

SEKA 的核心创新在于将干预时机从“注意力计算后”提前到“计算前”，通过频谱分解学习到的“相关性子空间”直接编辑 Key 向量。

### 关键公式
$$k' = k + g \cdot P \cdot k$$
其中 $P$ 是投影矩阵，$g$ 是增益系数。这一操作在数学上等价于为注意力分数添加低秩偏置，但完全作用于 Key 嵌入层面，因此天然兼容 FlashAttention。

### 选择性引导
研究发现，并非所有注意力头都适合引导。SEKA 仅对中后层的特定“检索头”施加引导，这些头对相关性最敏感。

### AdaSEKA
引入多专家路由机制，根据 Query 向量与各专家子空间的对齐程度，动态组合引导算子，适应不同任务需求。

## 实验结果

- **效果**：在 CounterFact 基准上，将准确率从 30-50% 提升至接近 99%。
- **效率**：每个样本仅增加 0.03 秒延迟和 0.03 GB 显存，效率优于 PASTA 数十倍。
- **兼容性**：完全兼容 FlashAttention，无需修改底层算子。

## 意义

该研究揭示了 Transformer 的 Key 嵌入中存在结构化的“相关性子空间”，为理解和控制模型注意力机制提供了新视角。

## 相关实体

- [[seka]] — 核心算法。
- [[adaseka]] — 自适应变体。
- [[注意力引导]] — 所属技术领域。
- [[qwen3]] — 实验所用模型。
- [[相关性子空间]] — 核心数学概念。