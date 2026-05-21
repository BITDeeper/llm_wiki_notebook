---
type: entity
title: Agent-World-14B
created: 2026-05-05
updated: 2026-05-05
tags: [model, llm, agent]
related: [agent-world, agent-world-8b, deepseek-v4]
sources: ["agent-world：扩展真实世界环境，让智能体与环境协同进化！.md"]
---

# Agent-World-14B

[[agent-world-14b]] 是基于 [[agent-world]] 框架训练得到的 14B 参数规模的大语言模型，代表了该框架下的高性能版本。

## 核心成就

[[agent-world-14b]] 的最显著成就是在 [[bfcl-v4]] 基准测试中取得了 **55.8%** 的分数，**反超了参数量达 685B 的 DeepSeek-V3.2 (54.1%)**。

## 意义

这一结果有力地挑战了“越大越好”的 [[scaling-law]] 叙事，表明：
- 更真实的可执行环境与可验证奖励，在特定复杂交互任务上，比单纯的参数规模更有效。
- 针对性的环境训练可以显著提升模型的工具使用与长程推理能力。

## 其他表现

除了在 BFCL V4 上的突破，该模型在 [[tau-squared-bench]], MCP-Mark, [[arc-agi-2]], ClawEval 等前沿 AI 助手基准上也展现出优异性能，且从 8B 到 14B 的规模提升呈现稳定的性能增长。