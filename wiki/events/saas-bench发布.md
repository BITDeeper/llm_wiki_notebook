---
type: event
title: SaaS-Bench 发布
created: 2026-05-25
updated: 2026-05-25
tags: [agent评测, 评测基准, 全自动办公, 事件]
related: [saas-bench, unipat-ai, computer-use-agent, 产业深水区]
sources: ["claude不到4%，全军覆没！一场大考撕碎agent「全自动办公」幻想.md"]
origin_date: 2026-05-01
participants: [unipat-ai]
causes: [任务执行范式]
effects: [反思闭环缺失, 面向agent的软件重设计]
significance: high
---
# SaaS-Bench 发布

## 概述

2026 年 5 月，[[unipat-ai|UniPat AI]] 发布 [[saas-bench|SaaS-Bench]] 评测基准（论文 arxiv 编号 2605.15777），标志着 Agent 评测从仿真环境转向真实 SaaS 系统的重要节点。

## 背景

过去一年，各家 GUI Agent 的 Benchmark 成绩一路飙升，"全自动办公"叙事甚嚣尘上。但现有评测存在系统性偏差：仿真环境、简单任务、最多几十步操作，与真实办公场景（跨系统、几百步、有干扰项）完全不同。

## 事件经过

UniPat AI 构建了包含 23 个开源 SaaS 系统、106 个真实办公任务的评测基准，对 Claude Opus 4.7、Claude Sonnet 4.6、Kimi K2.5、Gemini 3.1 Pro、DeepSeek V4、GLM5.1 等主流模型进行系统性测试。

## 核心结果

- 最强的 Claude Opus 4.7 端到端完全通过率仅 3.8%
- Kimi K2.5 和 Gemini 3.1 Pro 完全通过率为零
- 揭示四种结构性失败模式：越往后越做不对、一步错步步错、做完不检查、执行极不稳定

## 影响

1. **对"全自动办公"叙事的重大修正**：直接撕碎了 Agent Benchmark 成绩与真实工作能力之间的幻觉
2. **引发"软件为 Agent 重设计"讨论**：揭示当前软件形态的保质期
3. **为 [[产业深水区]] 提供关键实证**：证明应用闭环远未跑通
4. **推动评测方法论升级**：从仿真环境转向真实系统的评测范式