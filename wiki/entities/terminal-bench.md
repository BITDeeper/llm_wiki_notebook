---
type: entity
title: Terminal Bench
tags: [benchmark, system-administration, evaluation, ai-coding]
related: [laude-研究所, codeclash, bizbench, llm-as-a-verifier, swe-bench-verified, claude-code]
created: 2026-02-04
updated: 2026-05-07
sources: ["谷歌jeff-dean和多位图灵奖得主合著论文，全面剖析了ai.md", "超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md"]
---

# Terminal Bench

**Terminal Bench** 是目前最有影响力的 AI 编程基准测试之一，专门用于评估 AI 智能体在终端环境下的编程与操作能力。该基准由 [[laude-研究所]] 支持开发。

## 概述与特点

Terminal Bench 专注于测试 AI 解决系统级难题的能力，其核心特点包括：

- **真实命令行环境**：让 AI 直接面对真实的计算机终端（CLI）环境。
- **解决系统难题**：专注于测试 AI 解决那些让工程师头疼的系统级难题的能力。

## 应用场景

该基准被广泛用于验证 **[[LLM-as-a-Verifier]]** 等验证框架的有效性。在 Terminal Bench 2.0 的测试中，传统的 **[[LLM-as-a-Judge]]** 方法曾面临高达 27% 的平局率，无法有效区分不同 Agent 轨迹的质量。

## 测试结果

根据斯坦福团队的研究，应用 LLM-as-a-Verifier 框架后，模型在 Terminal Bench 上的表现超越了 Claude Mythos 和 GPT-5.5，取得了 SOTA 性能。

## 相关基准

- **[[SWE-Bench Verified]]**：用于验证框架在复杂软件工程任务中的表现。