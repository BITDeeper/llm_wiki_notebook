---
type: entity
title: ReCAP
tags: [ai-agents, reasoning-frameworks, recursion, planning]
related: [react, goal-drift, context-loss, alfworld, swe-bench, jiaxin-pei, alex-pentland]
created: 2025-12-02
updated: 2025-12-02
sources: ["全面战胜react！斯坦福全新智能体推理框架，性能提升112.5%.md"]
---

# ReCAP

**ReCAP**（递归上下文感知推理与规划，Recursive Context-Aware Reasoning and Planning）是由斯坦福大学与 MIT 团队提出的全新 AI 智能体推理框架。它旨在解决大语言模型在执行长上下文复杂任务时常见的 [[goal-drift]]（目标漂移）、[[context-loss]]（上下文断层）和成本爆炸问题。

## 核心机制

ReCAP 的核心在于将一个有记忆、有反馈的递归树结构作为模型的工作记忆区，通过以下三大机制统一了序列推理和层级推理：

1.  **计划前瞻分解 (Recursive Task Decomposition with Plan-Ahead)**
    模型首先生成一个完整的子任务列表，但只执行第一个子任务。完成后再根据执行结果动态优化后续计划。这有助于防止模型在执行过程中迷失方向。

2.  **结构化父任务再注入 (Consistent Multi-level Context and Structured Injection)**
    整个执行流程只有一个上下文，由所有任务共享。每次子任务递归返回时，父任务会将自身的思考和计划再次注入上下文。这使得父任务在重新计划时可以参考上次的思维和执行结果，从而规划出能真正达成任务目标的底层操作。

3.  **滑动窗口记忆 (Sliding Window and Scalable Memory Efficiency)**
    通过滑动窗口机制，在统一上下文中只保留最新关键历史。这实现了内存占用可控的深度递归，从根本上杜绝了成本爆炸。

## 性能表现

在严格遵循 [[pass-1]]（一次通过，不使用重试或投票）的评测原则下，ReCAP 在多项基准测试中全面超越了 [[react]] 框架：

-   **Robotouille (同步)**：成功率 70% vs ReAct 38%（提升 84.2%）。
-   **Robotouille (异步)**：成功率 53% vs ReAct 24%（提升 112.5%）。
-   **ALFWorld**：成功率 91% vs ReAct 84%。
-   **SWE-bench Verified**：成功率 44.8% vs ReAct 39.58%。

## 代价与权衡

ReCAP 的主要缺点是计算成本较高，其总计算成本约为 [[react]] 的三倍。这主要来自于其核心的“计划前瞻分解”机制所额外需要的 LLM 调用。然而，考虑到其在关键任务上带来的性能巨幅提升与目标一致性，在对准确性要求高的实际应用中，这种成本通常被认为是可接受的。

## 应用前景

ReCAP 的递归规划能力使其适用于任何依赖复杂决策回路与长期上下文记忆的大型任务，例如：
-   深度研究中自主遍历文献、整合多源信息。
-   复杂软件工程中管理庞大代码库与依赖关系。
-   与空间智能结合，为具身智能机器人规划复杂的长期任务序列。

## 相关人物
-   [[Jiaxin Pei]]：斯坦福大学博士后研究员，论文主要作者。
-   [[Alex Pentland]]：MIT 教授，论文作者之一。