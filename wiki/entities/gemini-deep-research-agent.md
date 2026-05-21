---
type: entity
title: Gemini Deep Research Agent
tags: [google, agent, research, gemini]
related: [gemini-3-pro, deepsearchqa, interactions-api, 深度研究]
created: 2025-12-12
updated: 2025-12-12
sources: ["谷歌最新版「深度研究」反击gpt-5.2.md"]
---

# Gemini Deep Research Agent

[[Gemini Deep Research Agent]] 是谷歌发布的一款基于 [[Gemini 3 Pro]] 构建的智能体，专为长时程、复杂研究任务设计。它代表了谷歌对标 OpenAI o1/GPT-5 系列的核心产品，旨在通过复杂的智能体工作流提供高质量的研究报告。

## 核心特性

### 迭代式研究规划
不同于传统的线性搜索，Deep Research Agent 采用动态规划树机制：
1.  **规划**：基于「后退一步提示」技术，将宏观问题拆解为多个子维度。
2.  **执行**：执行初步搜索并阅读结果。
3.  **推理**：识别知识缺口，实时修改研究计划。
4.  **报告**：综合信息生成引用来源详尽的报告。

### 性能表现
根据谷歌发布的基准测试数据：
-   **DeepSearchQA**：得分 **66.1%**
-   **BrowseComp**：得分 **59.2%**（与 GPT-5 Pro 相当）
-   **HLE (Humanity's Last Exam)**：得分 **46.4%**

### 成本优势
据 DeepMind 产品经理透露，其运行成本比竞品低一个数量级。这得益于其优化的架构和对海量上下文的高效处理能力。

## 技术基础
该智能体依赖于 [[Gemini 3 Pro]] 模型，该模型通过多步强化学习训练，被谷歌称为「最具事实准确性」的模型，专门用于在复杂任务中减少幻觉生成。

## 应用场景
Deep Research Agent 被设计用于处理「非即时性」的复杂任务，如市场分析、技术综述和学术研究。它通过 [[Interactions API]] 向开发者开放，允许将其集成到第三方应用中。