---
type: entity
title: ARC-AGI-2
tags: [数据集, 基准测试, 人工智能, benchmark, agi, reasoning, evaluation, agi-evaluation, abstraction, fluid-intelligence, ai-evaluation]
related: ["arc-prize", "gemini", "deep-think", "francois-chollet", "gpt-5.2", "poetiq", "gemini-3-deep-think", "performance-paradox", "arc-agi", "抽象推理", "流体智力", "agi", "gemini-3-1-pro", "reasoning-performance"]
created: 2026-04-08
updated: 2026-05-08
sources: ["谷歌deep-think八语奥赛屠榜！自主攻克4大未解难题，科研壁垒崩塌.md", "gpt-5.2考赢人类！openai警告：大模型能力已过剩，agi天花板不是ai.md", "6位前deepmind老将打造「ai指挥官」，一半成本刷新sota.md", "谷歌deep-think八语奥赛屠榜！自主攻克4大难题，科研壁垒崩塌.md", "gpt-5.2来了！首个「专家级」ai复仇成功，牛马打工人终于得救了.md", "谷歌突发gemini-3.1-pro！首次采用「.1」版本号，推理性能×2的那种.md"]
---

# ARC-AGI-2

**ARC-AGI-2**（Abstraction and Reasoning Corpus for Artificial General Intelligence-Version 2）是由 [[François Chollet]]（Keras 之父、前 Google Brain 研究员）及其团队推出的通用人工智能基准测试数据集。该基准由 [[ARC Prize]] 基金会验证，是 ARC-AGI 系列中更具挑战性的版本，被视为检验 AI 泛化能力、通用推理能力与[[流体智力]]的重要标准（“试金石”）。

## 设计理念

ARC-AGI-2 的设计初衷是测试 AI 是否具备 AGI 所必需的**抽象、归纳与迁移推理能力**，即推理新颖、抽象问题的能力，而非仅仅依赖已有知识或统计模式匹配。

### 核心特点
- **反刷题机制**：该基准没有大规模训练集，每道题目都是从未见过的新任务。这意味着 AI 无法通过“刷数据”或过拟合训练集来获得高分。
- **真实推理测试**：它要求 AI 像人类一样具备真正的推理和举一反三的能力，旨在区分“真正的推理能力”与“刷题型能力”。

### 测试内容
该基准测试主要评估模型的以下能力：
- 抽象推理
- 归纳逻辑
- 策略生成
- 从少量样本中学习规律并应用于新情境

## 测试结果与意义

### 人类基线
人类在 ARC-AGI-2 上的平均准确率约为 **60%**。

### AI 模型表现
不同模型在该基准上的表现差异显著，反映了其在通用推理能力上的不同水平：

- **[[Gemini 3 Deep Think]]**：[[Google DeepMind]] 的 [[Gemini]] [[Deep Think]] 模型在该基准上经官方验证的分数为 **84.6%**。这一成绩被视为模型具备强泛化推理能力的重要指标。
- **[[Gemini-3-1-Pro]]**：在 [[Google DeepMind]] 发布的 [[Gemini-3-1-Pro]] 中，该模型在 ARC-AGI-2 基准测试中获得了 **77.1%** 的验证分数。这一成绩被用来证明 3.1 Pro 相比前代产品在核心推理能力上实现了 2 倍的性能提升。
- **[[GPT-5.2]] 系列**：
    - **[[GPT-5.2]] Thinking**：在 ARC-AGI-2 (Verified) 上得分 **52.9%**。
    - **[[GPT-5.2]] Pro**：在 ARC-AGI-2 (Verified) 上得分 **54.2%**，创下了思维链模型的新纪录。
    - **历史对比**：GPT-5.2 X-High 的初始成绩约为 60%（与人类平均水平持平）。[[Poetiq]] 系统调用 GPT-5.2 X-High 后，成绩提升至 **75%**，显著超越人类平均水平。
    - **成本效率**：[[GPT-5.2]] Pro 在 ARC-AGI-1 (Verified) 上得分超过 90%，且实现这一性能的成本比去年的 o3-preview 降低了约 390 倍。
- **[[Poetiq]] 团队记录**：2025年12月，Poetiq 团队利用其元系统优化 [[Gemini]] 3 Pro，在 ARC-AGI-2 上取得了 **54%** 的准确率，刷新了当时的 SOTA（此前为 45%），同时将推理成本降低了一半。

### 经济性指标
除了作为能力评估标准，ARC-AGI-2 任务也被用作衡量模型经济性的指标。例如，[[Gemini-3-1-Pro]] 完成一次 ARC-AGI-2 任务的成本约为 0.96 美元，这一数据被用来展示其在 [[pareto-front]] 上的优势。

## 行业影响

ARC-AGI-2 的出现解决了 [[性能悖论]] 带来的评估难题，为衡量 AI 的通用智能提供了一个更严格、更接近真实世界泛化能力的标准。它直击大模型的“软肋”，推动了行业从关注参数规模转向关注真正的推理泛化能力。

ARC-AGI 的主办方感叹，推理 AI 已展示出真正的“流体智力”，即推理新颖、抽象问题的能力，而不仅仅是依赖已有知识。生物医学工程师 Derya 教授甚至惊呼“这就是 AGI”。

## 参见
- [[François Chollet]]：该基准的设计者。
- [[性能悖论]]：关于基准测试强但实际应用弱的现象。