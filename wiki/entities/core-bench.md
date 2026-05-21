---
type: entity
title: CORE-Bench
created: 2026-05-05
updated: 2026-05-05
tags: [benchmark, scientific-research, reproducibility]
related: [自动化-ai-研发, opus-4-5, gpt-4o]
sources: ["anthropic联创定下deadline：2028年ai实现自我进化，没有人类了.md"]
---

# CORE-Bench

全称 Computational Reproducibility Agent Benchmark（计算复现性智能体基准）。它测试 AI 系统阅读科学论文并复现其中实验结果的能力。

## 任务定义

给定一篇论文及其代码仓库，AI Agent 需要完成以下步骤：
1. 安装相关库、软件包和依赖。
2. 运行代码。
3. 搜索并分析输出结果，回答任务中的问题。

## 性能演进

- **2024 年 9 月 (GPT-4o)**：得分约 **21.5%**
- **2025 年 12 月 (Opus 4.5)**：得分 **95.5%**（该基准被宣布已基本解决）

## 意义

复现论文是 AI 研究中至关重要的一环。CORE-Bench 的高分表明 AI 正在掌握科研流程中的核心技能，能够独立验证和实现他人的研究成果，这是实现 [[自动化-ai-研发]] 的关键一步。