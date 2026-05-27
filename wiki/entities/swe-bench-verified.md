---
type: entity
title: SWE-Bench Verified
tags: [benchmark, software-engineering, evaluation, 评测基准, 编程, 代码生成, 代码任务, ai编程, 基准测试]
related: ["terminal-bench", "llm-as-a-verifier", "claude-code", "gemini", "斯坦福年度结论：中美大模型已没差距.md", "coding-agent", "openhands-agent", "agentic-coding-token消耗分析", "gpt-5.5", "grok-v9-medium", "codex"]
created: 2026-04-27
updated: 2026-05-26
sources: ["超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md", "斯坦福年度结论：中美大模型已没差距.md", "花了1000倍的token，效果可能却没有更好：ai-agent的“隐性账单”长什么样.md", "马斯克曝光grok-5！1.5万亿参数，偷师cursor狂练编程.md"]
---

# SWE-Bench Verified

**SWE-Bench Verified** 是目前开发者社区最关注的 AI 编程基准测试，也是衡量 AI 模型软件工程能力（特别是代码生成与修复能力）的核心基准。它用于评估 AI 模型及 [[coding-agent]] 自主编程能力解决真实软件工程问题的能力。

它包含 **500 个**真实 GitHub issue 的代码修复任务，用于评估 AI 智能体解决复杂软件工程任务的能力。

## 特点

与简单的代码生成任务不同，SWE-Bench Verified 涉及长时序的推理、多文件编辑和环境交互。它是测试 **[[LLM-as-a-Verifier]]** 在复杂场景下验证能力的重要基准。

具体特征包括：

- 每个任务来源于真实的开源项目 GitHub issue
- 包含人类专家标注的任务难度（按预期完成时间分为"< 15 min"、"15 min - 1 hr"、"> 1 hr"三档）

## 性能表现

### 总体趋势

根据《2026年AI指数报告》，在该基准测试上，AI模型的性能在短短一年内（约2025年至2026年）从 **60%** 提升至 **接近100%**。截至 2026 年 5 月，当前前沿模型在该基准上的准确率已达 **78%+**。这一数据表明，AI在解决真实世界编程问题（如通过GitHub提交的测试用例）的能力已经达到了极高的水平，接近甚至超越了人类初级开发者的效率。

这一飞跃直接对应了 [[claude-code]] 和 [[gemini]] 等编程模型在2025-2026年的激烈竞争与快速迭代。

### 2026年5月排名

| 模型 | 得分 |
|------|------|
| [[gpt-5.5]] | 88.7% |
| Claude Opus 4.6 | 80.8% |
| Grok 4系列 | 72%-75% |

### SOTA 成绩

在该基准上，应用 [[LLM-as-a-Verifier]] 框架的 Agent 取得了 SOTA 性能，证明了该验证框架在处理长时序任务时的有效性。

## 意义

SWE-Bench Verified 的分数差距直观反映了各前沿实验室在编程能力上的代际差距。例如，Grok 与 OpenAI 和 Anthropic 之间"差了一整个身位"，这也是 [[elon-musk|马斯克]] 急于通过 [[cursor]] 数据和参数规模翻倍来追赶的核心原因。

## 研究发现

在 2026 年 5 月的 token 消耗研究中，基于该基准的实验揭示了 [[agentic-coding-token消耗分析]] 的重要发现：

- 最贵的任务比最便宜的任务多消耗约 **700 万 token**
- 人类专家标注的难度与 Agent 实际 token 消耗仅**弱相关**（Kendall tau = 0.32），说明人类感知的任务难度与 Agent 实际消耗的资源并不一致