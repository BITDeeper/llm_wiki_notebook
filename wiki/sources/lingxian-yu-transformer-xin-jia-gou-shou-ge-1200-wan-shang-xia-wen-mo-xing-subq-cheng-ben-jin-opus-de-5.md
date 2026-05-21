---
type: source
title: "领先于Transformer！新架构首个1200万上下文模型SubQ，成本仅Opus的5%"
tags: [llm, architecture, long-context, subquadratic, ssa]
related: [subquadratic, subq, ssa, 亚二次稀疏注意力, 功能上下文, ruler, mr-cr-v2, claude-opus-4-6]
created: 2026-05-06
updated: 2026-05-06
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/aUXWJY1TFrz6stMpmQRHww"
venue: 机器之心
sources: ["领先于transformer！新架构首个1200万上下文模型subq，成本仅opus的5%.md"]
---

# 领先于Transformer！新架构首个1200万上下文模型SubQ，成本仅Opus的5%

## 概述
本文报道了 AI 公司 [[Subquadratic]] 发布的新一代大语言模型 [[SubQ]]。该模型采用了全新的 [[SSA]]（亚二次稀疏注意力）架构，旨在解决传统 Transformer 架构在处理长上下文时面临的计算成本二次方增长问题。SubQ 是首个支持 1200 万 token 上下文窗口的前沿模型，在百万 token 级别处理速度比 [[FlashAttention]] 快 52 倍，成本仅为 [[Claude Opus 4.6]] 的 5%。

## 核心观点

### Transformer 的局限性
现代大模型的核心机制是注意力机制，每个 token 都要与上下文中的所有其他 token 进行两两比较。这种设计虽然强大，但导致计算量随序列长度呈二次方增长（$O(N^2)$）。在处理百万 token 级别的代码库或合同时，这种计算代价极其昂贵且低效，因为其中包含大量无效计算。

### SSA 架构的突破
[[SubQ]] 的核心在于 [[SSA]]（Subquadratic Sparse Attention，亚二次稀疏注意力）。它改变了注意力的分配方式：
- **基于内容的选择**：模型根据语义相似性判断哪些位置值得关注，而非计算所有 token 对。
- **线性扩展**：计算成本取决于被选中的位置数量，而非完整序列长度，实现了 $O(N)$ 的复杂度。
- **稀疏检索**：保留了从序列中任意远位置恢复具体信息的能力，避免了 RAG 系统中的信息丢失。

### 性能与成本优势
- **速度**：在 100 万 token 场景下，预填充速度比 [[FlashAttention]]-2 快 52.2 倍。
- **成本**：处理成本不到 [[Claude Opus 4.6]] 的 5%。
- **吞吐反转**：随着上下文长度增加，SSA 相比稠密注意力的速度优势呈指数级扩大。

### 训练策略
[[SubQ]] 采用了三阶段训练流程：
1. **预训练**：建立基础语言建模能力和长上下文表示。
2. **监督微调 (SFT)**：引导指令遵循、结构化推理和代码生成。
3. **强化学习 (RL)**：专门优化长上下文检索稳定性，防止模型仅依赖局部上下文（即防止“偷懒”）。

### 评估结果
- **[[RULER]]**：在多跳检索、变量跟踪等任务上表现优异。
- **[[MRCR v2]]**：得分 65.9%，处于 [[Claude Opus 4.6]] 的区间内（78分），远超 GPT-5.4（39分）和 Gemini 3.1 Pro（23分）。这揭示了“名义上下文”与“[[功能上下文]]”之间的差异。
- **SWE-Bench Verified**：展示了在真实代码库理解与 Bug 修复上的潜力。

## 意义
[[SubQ]] 的出现表明，通过架构创新（如 [[SSA]]）而非单纯堆砌算力，可以打破长上下文的计算瓶颈。这为企业级 AI 应用（如代码库分析、合同审查）提供了更高效、更低成本的解决方案，可能缓解当前面临的 [[ai-subscription-crisis]]。