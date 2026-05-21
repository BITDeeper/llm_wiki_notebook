---
type: source
title: "梁文锋署名新论文，DeepSeek V4架构首曝？直击Transformer致命缺陷"
tags: [deepseek, architecture, transformer, research-paper, engram, scaling-law]
related: [deepseek-v4, engram, 条件记忆, u型-scaling-law, 混合专家模型]
created: 2026-01-13
updated: 2026-01-13
authors: ["新智元", "梁文锋", "北京大学"]
year: 2026
url: "https://mp.weixin.qq.com/s/ZdZzksl3iJyUHn9W-6nv5Q"
venue: "新智元"
sources: ["梁文锋署名新论文，deepseek-v4架构首曝？直击transformer致命缺陷.md"]
---

# 梁文锋署名新论文，DeepSeek V4架构首曝？直击Transformer致命缺陷

## 概述
本文报道了 DeepSeek 联合北京大学发布的一篇新论文，该论文由梁文锋署名。研究提出了名为 [[engram]] 的全新条件记忆模块，旨在解决 Transformer 架构中“原生知识查找缺失”的致命缺陷。实验表明，在严格等参数、等 FLOPs 条件下，集成 Engram 的模型在知识、推理、代码和数学任务上全面优于传统 [[混合专家模型]]。

## 核心发现

### Transformer 的致命缺陷
论文指出，当前主流的 Transformer 架构缺乏原生的“知识查找”机制。这导致模型被迫使用大量的计算资源（注意力和 FFN）去模拟本应通过 O(1) 复杂度检索完成的静态模式识别（如实体名、固定搭配）。

### Engram 架构
Engram 是一种受神经学启发的“记忆痕迹”模块，作为插件插入 Transformer 中间层。
- **功能**：将语言建模中的“固定、局部、刻板”模式（静态记忆）与“组合与推理”任务（动态计算）分离开来。
- **机制**：基于哈希 N-gram 的稀疏检索，结合上下文感知门控机制。
- **优势**：提供近似 O(1) 的确定性知识查找，释放 Transformer 主干的注意力容量用于处理全局上下文和复杂推理。

### U型 Scaling Law
研究发现了 MoE（计算）与 Engram（记忆）之间存在资源分配的 U 型关系：
- **纯 MoE (ρ=1)**：缺乏专用内存，效率低下。
- **纯 Engram (ρ=0)**：失去条件计算能力，损害推理任务。
- **最优解**：两者需按特定比例权衡，而非单纯堆砌 MoE。

## 实验结果
在 27B 参数规模的对比测试中：
- **知识密集型任务**：MMLU (+3.0), CMMLU (+4.0)。
- **推理与代码**：BBH (+5.0), HumanEval (+3.0), GSM8K (+2.2)。
- **长上下文**：在 32k 任务中表现优于 MoE，证明其有效释放了注意力资源。

## 对 DeepSeek V4 的影响
文章推测，DeepSeek V4 极有可能集成 Engram 架构。这将标志着 DeepSeek 从 V2 的 MLA（推理效率）、V3 的 MoE 优化，迈向“计算+记忆”双轴驱动的新架构范式。

## 相关条目
- [[engram]]：关于该条件记忆模块的技术细节。
- [[u型-scaling-law]]：关于计算与记忆资源分配规律的总结。
- [[deepseek-v4]]：关于下一代模型的预测与架构分析。