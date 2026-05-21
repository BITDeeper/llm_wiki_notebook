---
type: entity
title: Claude Code Harness
tags: [code-generation, experiment-framework, ai-for-science]
related: [claw-ai-lab, experiment-harness, turn-loop, claude-code]
created: 2026-04-05
updated: 2026-04-05
sources: ["claude-code-harness+龙虾科研团来了！金字塔分层架构+多智能体讨论，单人也能跑出「实验室」科研.md"]
---

# Claude Code Harness

[[claude-code-harness]] 是 [[claw-ai-lab]] 系统中的核心组件，负责将研究想法转化为可运行的实验代码。与传统的 AI 编程助手不同，它不仅解决“写一段代码”的问题，更致力于建立从想法到实验结果的可信执行链路。

## 工作机制

### Turn Loop
模型不再一次性吐出代码片段，而是像工程师一样进入 [[turn-loop]] 循环：
1.  读取本地代码库、数据集和模型检查点。
2.  理解任务。
3.  编写 `main.py`。
4.  运行测试。
5.  定位报错。
6.  继续修复。

### Experiment Harness
系统会在运行环境中注入一个不可编辑的 [[experiment-harness]] 层，统一负责：
-   时间预算控制。
-   指标上报。
-   异常值校验。
-   生成标准化的 `results.json`。

## 核心价值

Claude Code Harness 的核心价值在于确保 AI 生成的代码不仅仅是 Demo，而是真正能落地、能复现、能被继续优化的研究代码。它通过标准化的实验执行层，解决了 AI 生成代码在科研环境中难以验证和信任的问题。

## 与 Claude Code 的区别

虽然名称相似，但 [[claude-code-harness]] 不同于通用的 [[claude-code]] 编程工具。前者是专门为科研实验设计的执行框架，强调实验的可信度和复现性；后者是更广泛的 AI 辅助编程工具。