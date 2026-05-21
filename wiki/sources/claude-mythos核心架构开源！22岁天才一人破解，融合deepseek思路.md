---
type: source
title: "Claude Mythos核心架构开源！22岁天才一人破解，融合DeepSeek思路"
tags: [ai-architecture, open-source, anthropic, deepseek, transformer]
related: [kye-gomez, openmythos, claude-mythos, 循环深度-transformer, 多潜变量注意力]
created: 2026-04-20
updated: 2026-04-20
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/gF_j9dvg1hEtTob1W-3GWg"
venue: "新智元"
sources: ["claude-mythos核心架构开源！22岁天才一人破解，融合deepseek思路.md"]
---

# Claude Mythos核心架构开源！22岁天才一人破解，融合DeepSeek思路

## 概述
本文报道了 22 岁开发者 Kye Gomez 通过第一性原理推导并开源了 Anthropic 闭源模型 Claude Mythos 的核心架构复现版本——OpenMythos。该事件被视为闭源实验室“架构护城河”正在消失的标志性信号。

## 核心发现

### 循环深度 Transformer (RDT)
文章指出，Claude Mythos 的核心优势不在于参数量，而在于一种名为“循环深度 Transformer”的架构。
- **机制**：不通过堆叠层数，而是在同一套权重上多次循环（最多 16 次）前向传播来增加模型深度。
- **公式**：$h_{t+1} = A \cdot h_t + B \cdot e + \text{Transformer}(h_t, e)$，其中 $e$ 是原始输入，每一步重新注入以防止跑偏。
- **理念**：用计算步数（时间）换取参数效率（空间），即“原地跑圈”而非“盖高楼”。

### 三段式架构设计
OpenMythos 采用了精密的三段式设计：
1. **Prelude（序曲）**：标准的 Transformer 层，负责初始编码。
2. **Recurrent Block（循环核心）**：核心计算块，执行循环推理，融合了 DeepSeek-MoE 的广度优势。
3. **Coda（终章）**：标准的 Transformer 层，负责输出解码。

### 技术融合
- **DeepSeek-MoE**：在循环核心的 FFN 层使用 MoE，随着隐藏状态演化，路由器在每一步选择不同的专家子集。
- **多潜变量注意力 (MLA)**：借鉴 DeepSeek-V2，将 KV 缓存压缩为低秩潜变量，实现 10-20 倍的显存节省。

## 性能宣称
根据 Parcae 团队的实验数据，一个 770M 参数的循环模型在同等训练数据下，能达到 1.3B 标准 Transformer 的下游任务质量。这意味着参数效率直接翻倍，对消费级硬件运行大模型具有重大意义。

## 行业影响
- **护城河消失**：22 岁年轻人仅凭公开信息即可复现顶级闭源架构，表明架构不再是闭源实验室的绝对壁垒。
- **Scaling Laws 重写**：未来的竞争可能不再是“谁的参数多”，而是“谁想得最多次”（推理深度）。
- **Dario Amodei 回应**：Anthropic CEO 预测中国将在 12 个月内复刻同类能力，并强调“看不到技术放缓的迹象”。

## 关键人物
- **Kye Gomez**：Swarms 和 Agora Labs 创始人，高中毕业后创业，专注于大规模多智能体系统。