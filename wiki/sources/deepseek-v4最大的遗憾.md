---
type: source
title: "DeepSeek V4最大的遗憾"
tags: [deepseek, engram, architecture, memory, sparse-models]
related: [engram, deepseek-v4, cheng-xin, liang-wenfeng, tao-lin, autoark, 条件记忆, cxl-内存池化, 无冲突热层, tiny-engram]
created: 2026-05-03
updated: 2026-05-03
authors: ["Henry (量子位)"]
year: 2026
url: "https://mp.weixin.qq.com/s/syAcA5b-avFnbzxgxwY0hA"
venue: "量子位"
sources: ["deepseek-v4最大的遗憾.md"]
---

# DeepSeek V4最大的遗憾

本文探讨了 DeepSeek V4 技术报告中缺席的关键组件——[[engram]]。Engram 是由 DeepSeek 与北大联合提出的原生知识查表模块，旨在通过解耦静态知识检索与动态推理来提升模型效率。尽管被广泛视为 V4 的架构地基，但最终并未集成其中。文章还梳理了 Engram 发布后社区在工程实现（CXL 内存池化）、理论验证（无冲突热层实验）及跨模态应用（Tiny Engram）方面的后续进展。

## 核心观点

- **缺席的遗憾**：DeepSeek V4 技术报告包含了 mHC、CSA 等技术，但唯独缺少了 Engram。鉴于其设计初衷是解决 Transformer 混合检索与推理的低效问题，这一缺席被视为 V4 最大的遗憾。
- **架构价值**：Engram 通过引入 O(1) 复杂度的哈希查表机制，将“伦敦是英国首都”这类静态知识的检索从昂贵的深度计算中剥离出来，释放深层网络容量用于高阶推理。
- **实验证据**：实验表明，Engram-27B 在知识密集型任务（MMLU +3.4）和推理/代码任务（BBH +5.0）上均有显著提升。LogitLens 分析显示，Engram 使第 5 层的表征水平达到基线第 12 层。
- **工程可行性**：利用确定性索引实现 CPU 异步预取，可将 1000 亿参数的嵌入表卸载到 Host DRAM，在 H800 上推理吞吐损失仅为 2.8%。
- **社区演进**：尽管官方仓库停止更新，但社区通过 CXL 内存池化解决了多机部署问题，通过实验证伪了“无冲突热层”的直觉优化，并将其扩展至视觉模态（Tiny Engram）。

## 关键实体

- [[cheng-xin]]：Engram 论文第一作者，北大博士生，曾署名 DeepSeek V3。
- [[liang-wenfeng]]：DeepSeek 创始人，Engram 论文最后一位作者。
- [[tao-lin]]：独立研究者，发布了关于 Engram 无冲突热层实验的论文。
- [[autoark]]：开源团队，开发了视觉模态的 Tiny Engram。

## 关键概念

- [[条件记忆]]：通过可扩展查找技术解耦静态知识与动态推理的机制。
- [[稀疏模型]]：Engram 代表了存储稀疏化路径，与 MoE 的计算稀疏化互补。
- [[cxl-内存池化]]：解决 Engram 大容量嵌入表存储工程难题的方案。
- [[无冲突热层]]：被 Tao Lin 的实验证伪的直觉式优化方案。
- [[tiny-engram]]：Engram 在视觉模态（Stable Diffusion）的应用变体。