---
type: concept
title: Experiment Harness
tags: [mlops, reproducibility, ai-for-science]
related: [claude-code-harness, turn-loop, claw-ai-lab]
created: 2026-04-05
updated: 2026-04-05
sources: ["claude-code-harness+龙虾科研团来了！金字塔分层架构+多智能体讨论，单人也能跑出「实验室」科研.md"]
---

# Experiment Harness

[[experiment-harness]] 是 [[claude-code-harness]] 中注入在运行环境里的不可编辑标准化层。

## 功能

它统一负责实验生命周期的关键环节：
-   **时间预算控制**：防止实验无限期运行或资源耗尽。
-   **指标上报**：自动收集并标准化实验数据。
-   **异常值校验**：检测实验过程中的异常情况。
-   **结果标准化**：生成统一的 `results.json`，便于后续分析。

## 意义

在 AI 辅助科研中，模型生成的代码往往缺乏工程规范。Experiment Harness 的存在，强制建立了一条从想法到实验结果的信任链路，确保 AI 生成的不是 Demo，而是真正能落地、能复现的研究代码。这是解决 AI 生成代码“不可信”问题的关键工程约束。