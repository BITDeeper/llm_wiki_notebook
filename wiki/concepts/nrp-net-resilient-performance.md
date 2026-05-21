---
type: concept
title: NRP (Net Resilient Performance)
tags: [metrics, evaluation, security, performance, agent]
related: [msb-mcp-security-bench, 能力-安全悖论, mcp]
created: 2026-04-15
updated: 2026-04-15
sources: ["openclaw爆火，暴露12类致命隐患！mcp协议安全基准发布-iclr.md"]
---

# NRP (Net Resilient Performance)

**NRP (Net Resilient Performance)** 即净弹性性能，是 [[MSB (MCP Security Bench)]] 提出的用于评估 AI Agent 安全性的新指标。

## 定义与公式
传统的安全评估往往只关注攻击成功率（ASR），但这可能导致 Agent 为了安全而拒绝执行所有任务，从而失去实用价值。NRP 旨在平衡安全性与实用性。

其计算公式为：
$$NRP = PUA \times (1 - ASR)$$

其中：
- **PUA (Performance Under Attack)**：Agent 在对抗环境中完成用户任务的比例（即实用性）。
- **ASR (Attack Success Rate)**：攻击成功率（即风险性）。

## 核心价值
NRP 提供了一个综合性的量化标准，用于衡量 Agent 在抵御攻击的同时保持正常工作的能力。
- **高 ASR**：意味着安全性极差，容易被攻破。
- **低 PUA**：意味着防御过当，Agent 变得“由于害怕而什么都不做”，失去了作为 Agent 的价值。
- **高 NRP**：表示 Agent 既能够有效防御攻击，又能顺利完成用户指令，是理想的目标状态。

## 应用背景
在 [[能力-安全悖论]] 的背景下，NRP 指标尤为重要。它提醒开发者，不能单纯追求模型能力的提升（这可能会提高 ASR），也不能为了降低 ASR 而牺牲模型的核心功能，必须在两者之间找到最佳平衡点。