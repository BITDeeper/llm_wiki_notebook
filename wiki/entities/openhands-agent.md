---
type: entity
title: OpenHands Agent 框架
created: 2026-05-17
updated: 2026-05-17
tags: [ai-agent, 开源框架, 编程工具]
related: [coding-agent, swe-bench-verified, all-hands-ai, agentic-coding-token消耗分析]
sources: ["花了1000倍的token，效果可能却没有更好：ai-agent的“隐性账单”长什么样.md"]
---
# OpenHands Agent 框架

OpenHands 是一个开源的 AI Agent 框架，由 [[all-hands-ai]] 公司开发维护，是 agentic coding 研究领域广泛使用的实验平台。

## 在研究中的应用

在 2026 年 5 月发表的 agentic coding token 消耗研究中，研究团队使用 OpenHands 框架分析了 8 个前沿模型在 [[swe-bench-verified]] 上的执行轨迹。该框架保留了 Agent 的所有工具和 harness 架构，使研究者能够精确追踪每次运行的 token 消耗、文件读写行为和任务执行轨迹。

## 特点

- 开源，可复现
- 支持多种前沿模型的接入
- 保留完整的工具调用和上下文管理能力
- 适用于系统性 Agent 行为分析