---
type: entity
title: "NanoGPT"
tags: [开源项目, 训练框架, llm]
related: [andrej-karpathy, keller-jordan, muon]
created: 2026-02-23
updated: 2026-02-23
sources: ["openai大佬爆料：本科生靠一篇博客杀进openai！没博士，0篇论文.md"]
---

# NanoGPT

NanoGPT 是由 [[andrej-karpathy]] 开源的一个极简的 GPT 训练和微调框架。它以其代码简洁、易于理解和修改而著称，成为许多研究者和开发者学习大语言模型训练原理的入门首选。

## 特点
- **极简设计**：核心代码库非常小，便于快速实验和修改。
- **教育性**：旨在展示 GPT 训练的核心逻辑，去除了复杂工程系统的冗余。
- **可扩展性**：虽然简单，但支持从零开始训练和微调现代 Transformer 架构。

## 社区影响与 Speedrun 挑战
NanoGPT 激发了社区的“Speedrun”文化，即尝试用最少的 token 或最短的时间达到特定的训练损失目标。
- [[keller-jordan]] 在此基础上进行了著名的“NanoGPT Speedrun”项目。
- 他通过优化训练流程，将 token 效率提升了 3.8 倍，并以此作为入职 OpenAI 的关键筹码。

## 相关技术
- [[muon]]：Keller Jordan 在优化 NanoGPT 训练过程中开发的新型优化器。