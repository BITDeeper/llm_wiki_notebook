---
type: entity
title: Agent-SafetyBench
created: 2026-05-09
updated: 2026-05-09
tags: [benchmark, ai-safety, agent, evaluation]
related: [arbiteros, AgentDojo, WildClawBench]
sources: ["剥夺大模型执行权！港中文开源agent治理内核，高危拦截率达92.95%.md"]
---

# Agent-SafetyBench

**Agent-SafetyBench** 是一个用于评估 AI 智能体安全性的评测基准。它包含了一系列已验证的攻击示例，用于测试智能体系统在面对恶意指令或诱导性任务时的防御能力。

在 [[arbiteros]] 的验证测试中，Agent-SafetyBench 被用作主要的数据集之一。测试结果显示，对于该基准中已知的可成功攻击的示例，ArbiterOS 实现了超过 **94%** 的实时拦截率，证明了运行时治理机制在防御已知攻击模式方面的有效性。