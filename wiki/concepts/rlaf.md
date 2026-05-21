---
type: concept
title: RLAF
tags: [reinforcement-learning, training-framework, ai-agents]
related: [dspo, uv, deepseek, grpo]
created: 2026-04-01
updated: 2026-04-01
sources: ["斯坦福mit天团出手！1美元养龙虾，图文视频全包，打工人神外挂.md"]
---

# RLAF

RLAF（Reinforcement Learning with Agentic Feedback，带智能反馈的强化学习）是 [[Agnes]] 提出的一种新型强化学习框架。该框架旨在减少对人工标注的依赖，通过“AI 训练 AI”的方式提升模型迭代效率并降低训练成本。

## 核心组件
RLAF 框架包含两个自研核心组件：

### 1. DSPO (Dynamic-filter Sequence-level Policy Optimization)
动态过滤序列级策略优化算法。官方数据显示，在同规模模型对比中，使用 DSPO 的模型相比 [[DeepSeek]] Search-R1 (GRPO, 7B) 实现了 34.1% 的性能提升。

### 2. UV (Universal Verifier)
通用验证器。它使用智能评估器来替代传统的人工标注数据和人工定义的奖励机制。在 RLAF 框架中，多个 AI Agent 会对模型输出进行自动评估，从逻辑一致性、事实准确性和任务完成度等多个维度生成反馈信号。

## 应用意义
RLAF 框架不仅应用于模型层的训练，还扩展到了 Agent 层。在 [[AgnesClaw]] 体系中，Agent 不仅调用 Skills，还可以在任务执行过程中通过反馈不断优化自身策略，实现智能体与 Skills 的协同自进化。