---
type: event
title: SaaS-Bench 发布
created: 2026-05-25
updated: 2026-05-25
tags: [benchmark, agent-evaluation, milestone]
related: [saas-bench, unipat-ai, computer-use-agent, claude-opus-4-7]
sources: ["claude-通过率不到-4%，saas-bench-撕碎了-computer-use-的「全自动办公」幻想.md"]
origin_date: 2026-05-25
participants: [unipat-ai]
causes: []
effects: [computer-use-agent]
significance: high
---
# SaaS-Bench 发布

2026 年 5 月 25 日，[[unipat-ai|UniPat AI]] 正式发布 [[saas-bench|SaaS-Bench]] 评测基准（论文编号 arXiv:2605.15777），标志着 Agent 评测从仿真环境转向真实系统的里程碑。

## 背景

过去一年，各家 GUI Agent 争先恐后宣称能替人类干活，Benchmark 成绩一路飙升，"全自动办公"似乎就在眼前。但现有评测使用仿真环境和简单任务，与真实工作完全是两回事。

## 核心事件

SaaS-Bench 包含 23 个真实开源 SaaS 系统、106 个任务，直接在 Docker 中部署真实系统进行评测。评测结果极其残酷：

- 最强模型 [[claude-opus-4-7|Claude Opus 4.7]] 完全通过率仅 3.8%
- [[kimi-k2-5|Kimi K2.5]] 和 [[gemini-3-1-pro|Gemini 3.1 Pro]] 完全通过率为零
- 揭示了四种结构性失败模式：[[长程任务执行衰减]]、[[错误级联传播]]、[[意图-状态断层]]、[[路径依赖不稳定性]]

## 影响

SaaS-Bench 的发布对行业叙事产生了重大修正作用：

1. **撕碎了"全自动办公"幻觉**：证明 Agent 的 Benchmark 成绩与真实工作能力之间存在巨大鸿沟
2. **揭示了当前范式的天花板**：四种结构性失败指向 Agent 缺少对持久状态的推理能力、闭环验证机制和错误恢复能力
3. **引发"软件为 Agent 重设计"的讨论**：提出面向人类的 SaaS 可能都要为 Agent 重做一遍的方向性观点