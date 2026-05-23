---
type: concept
title: Agentic Coding Token消耗分析
created: 2026-05-17
updated: 2026-05-17
tags: [ai-agent, token消耗, coding-agent, 成本分析]
related: [token效率悖论, openhands-agent, swe-bench-verified, token作为生产资料, coding-agent]
sources: ["花了1000倍的token，效果可能却没有更好：ai-agent的“隐性账单”长什么样.md"]
---
# Agentic Coding Token消耗分析

对 AI 编程 Agent 在执行任务时的 token 消耗模式、成本结构与效率进行系统性量化分析的研究方法。

## 核心发现

### 成本结构
- Agentic coding 的平均总 token 消耗、金钱消耗和输入输出比均指数级高于代码推理和代码问答任务
- 输入输出 token 比高达 **154:1**，源于多轮交互中历史上下文和工具输出的反复注入
- 最贵的任务比最便宜的任务多消耗约 **700 万 token**

### 随机性
- 同一任务多次运行的 token 消耗差异可达 **2 倍**
- 不同任务间最贵与最便宜可差 700 万 token
- 越贵的任务 token 消耗标准差越大

### 人类-AI 复杂度认知差异
- 人类专家标注的任务难度与 Agent 实际 token 消耗仅弱相关（Kendall tau = 0.32）
- 6.7% 的"简单"任务比平均"困难"任务更贵
- 11.1% 的"困难"任务比平均"简单"任务更便宜

### Agent 自预测
- 让 Agent 在执行任务前预估自身 token 消耗，最高相关性仅 0.39
- 所有模型普遍低估实际消耗，尤其严重低估 input token
- 大部分模型预测成本小于实际执行成本的一半

## 模型效率排名

| 效率层级 | 模型 | 特征 |
|---------|------|------|
| 最优 | GPT-5 / GPT-5.2 | 低 token 成本达到高准确率 |
| 中等 | Claude Sonnet-4.5 / Gemini-3-Pro | 成本与准确率均衡 |
| 较低 | [[kimi-k2]] | 消耗最高但准确率不突出 |

## 关联概念

- [[token效率悖论]]：更多消耗不保证更好结果
- [[token作为生产资料]]：token 消耗的不可预测性使其作为生产要素的管理极为复杂
- [[ai-subscription-crisis]]：agentic 任务的成本结构使订阅制从根本上不可持续