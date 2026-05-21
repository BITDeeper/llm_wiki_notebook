---
type: concept
title: Scaling Verification Compute
tags: [scaling-law, optimization, compute]
related: [scaling-law, llm-as-a-verifier, score-granularity]
created: 2026-04-27
updated: 2026-04-27
sources: ["超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md"]
---

# Scaling Verification Compute

**Scaling Verification Compute** 是一种优化策略，指通过增加验证阶段的计算量来提升 AI 智能体的整体性能。

## 核心思想

传统的模型优化往往集中在训练阶段或推理生成阶段。而该概念提出，在“测试时”增加用于验证和筛选结果的计算资源，可以以较低的成本获得显著的性能提升。

## 实现方式

在 **[[LLM-as-a-Verifier]]** 框架中，这一策略具体体现为：
1.  **增加评分粒度**：使用更多的 token 来表达分数（从 1 个增加到 20 个），从而获得更精确的奖励信号。
2.  **重复验证**：对同一条轨迹进行多次评估（K次），以减少噪声。
3.  **标准分解**：将复杂的评估标准拆解为多个子维度进行独立验证。

## 意义

这一策略符合 **[[scaling-law]]** 在推理阶段的延伸趋势，表明通过系统级的优化（如更好的验证器），较小的模型或开源模型有可能在特定任务上击败更大的专有模型。