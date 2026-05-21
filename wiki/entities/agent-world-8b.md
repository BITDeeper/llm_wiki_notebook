---
type: entity
title: Agent-World-8B
created: 2026-05-05
updated: 2026-05-05
tags: [model, llm, agent]
related: [agent-world, agent-world-14b, deepseek-v4]
sources: ["agent-world：扩展真实世界环境，让智能体与环境协同进化！.md"]
---

# Agent-World-8B

[[agent-world-8b]] 是基于 [[agent-world]] 框架训练得到的 8B 参数规模的大语言模型。

## 性能特点

尽管参数量仅为 8B，但在 [[agent-world]] 框架的训练下，该模型在多项基准测试中表现优异：
- 在核心智能体工具使用基准（如 [[tau-squared-bench]], [[bfcl-v4]]）上稳定超越开源环境扩展基线。
- 在通用推理（MATH500, AIME）、深度搜索与软件工程（GAIA, SWE-Bench）等 17 个跨域基准上保持全面领先。
- 证明了通过真实可执行环境和可验证奖励的训练，小参数模型也能获得强大的长程交互与泛化能力。

## 参见

- [[agent-world-14b]]