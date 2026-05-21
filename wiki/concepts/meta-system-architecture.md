---
type: concept
title: 元系统架构
tags: [system-design, software-architecture, ai-optimization]
related: [poetiq, gpt-5.2, capability-overhang, runtime-agent-os]
created: 2026-01-10
updated: 2026-01-10
sources: ["gpt-5.2考赢人类！openai警告：大模型能力已过剩，agi天花板不是ai.md"]
---

# 元系统架构

**元系统架构**（Meta-System Architecture）是一种不单纯依赖训练更大的模型，而是通过软件层面的系统设计，自动构建“会调用模型的系统”的技术理念。

## 核心逻辑
该架构认为，AI 系统的智能不仅来自于基础模型（如 [[GPT-5.2]]）的参数，更来自于如何设计软件系统来动态调用、编排和优化这些模型的行为。

## 实证案例
[[Poetiq]] 公司是这一理念的典型实践者：
- **无训练提升**：在未对 GPT-5.2 进行任何额外训练的情况下，仅通过元系统架构调用，将其在 [[ARC-AGI-2]] 上的准确率从 60% 提升至 75%。
- **成本效益**：证明了不需要堆算力，通过优秀的系统设计也能大幅提升性能。

## 与现有概念的联系
元系统架构与 Wiki 中的 [[runtime-agent-os]] 概念高度契合，都强调通过系统层（而非模型层）来实现能力的落地和进化。它是解决 [[能力过剩]] 问题、释放模型潜力的关键技术路径。

## 参见
- [[Poetiq]]：该理念的实践者。
- [[能力过剩]]：该架构旨在解决的核心问题。