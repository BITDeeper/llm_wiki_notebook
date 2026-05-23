---
type: event
title: Agentic Coding Token效率研究发布
created: 2026-05-17
updated: 2026-05-17
tags: [ai-agent, token消耗, 学术研究, 里程碑]
related: [token效率悖论, agentic-coding-token消耗分析, openhands-agent, swe-bench-verified, token作为生产资料, ai-subscription-crisis]
sources: ["花了1000倍的token，效果可能却没有更好：ai-agent的“隐性账单”长什么样.md"]
origin_date: 2026-05-17
participants: [密歇根大学, 斯坦福大学, all-hands-ai, google-deepmind]
causes: [coding-agent]
effects: [token效率悖论]
significance: high
---
# Agentic Coding Token效率研究发布

2026 年 5 月，来自 [[密歇根大学]]、[[斯坦福大学]]、[[all-hands-ai]] 和 [[google-deepmind]] 的研究团队发表了论文《How Do AI Agents Spend Your Money? Analyzing and Predicting Token Consumption in Agentic Coding Tasks》（arXiv: 2604.22750），首次对 AI 编程 Agent 的 token 消耗模式进行了系统性量化分析。

## 背景

随着 [[coding-agent]] 产品（[[claude-code]]、Codex、[[cursor]]）在 2025-2026 年快速迭代，[[swe-bench-verified]] 准确率提升至 78%+，但 token 消耗问题日益突出。用户普遍抱怨"为什么解决问题这么啰嗦"和"为什么 credits 这么快又用完了"。

## 核心发现

1. Agentic coding 成本指数级高于传统代码任务，输入输出比高达 154:1
2. 发现 [[token效率悖论]]：更多 token 消耗不保证更高准确率
3. 模型间效率差异是系统性的，GPT-5 效率最优，[[kimi-k2]] 消耗最高
4. 成本预测极其困难，人类专家和 Agent 自预测都只能作为粗粒度信号

## 影响

该研究标志着 AI Agent 经济学从 anecdotical 抱怨进入系统性学术研究的转折点，为 [[ai-subscription-crisis]] 和 [[token作为生产资料]] 等产业议题提供了学术实证基础。紧接 [[openclaw-130万月度账单事件-202605]]（2026.5.17），从学术角度系统解释了该事件背后的技术原因。