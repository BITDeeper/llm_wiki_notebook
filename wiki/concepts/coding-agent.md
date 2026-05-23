---
type: concept
title: Coding Agent
created: 2026-03-23
updated: 2026-05-22
tags: ["编程", "自动化", "生产力", "ai-agent", "coding-agent"]
related: ["claude-code", "codex", "tokenmaxxing", "cursor", "openclaw", "agentic-coding-token消耗分析", "token效率悖论", "openhands-agent", "swe-bench-verified"]
sources: ["黄仁勋要发token当工资！硅谷兴起刷量大赛，一人一周烧掉33个维基百科.md", "花了1000倍的token，效果可能却没有更好：ai-agent的“隐性账单”长什么样.md"]
---

# Coding Agent

**Coding Agent**（编程智能体）是指能够自主审查、编辑代码库并生成程序的 AI 工具。它们能够自主完成代码修复、文件读写、多轮推理，代表产品包括 [[claude-code]]、Codex、[[cursor]] 等。

## 技术特性

与传统的辅助编程工具不同，Coding Agent 可以在无人监督的状态下连续工作数小时。它们不仅能处理单一指令，还能自动派生出子 Agent 来处理不同的子任务，每一步操作都会生成成千上万个 Token。

## 发展现状

过去一年里，coding agent 产品迭代迅速，在 [[swe-bench-verified]] 上的准确率已提升至 78%+。然而，相比简单的代码推理或代码问答，coding agent 的 token 消耗也极为显著。

## 核心挑战

1. **不透明**：coding agent 消耗 token 的习惯不清晰，行为模式以及不同模型之间的差异不透明
2. **不保底**：在任务执行前难以知道任务成功与否，但不论是否成功，都要支付相应开销
3. **不可预测**：人类估计的问题难度与实际 token 消耗不匹配，Agent 自预测准确率也有限

## 对 Token 消耗的影响

Coding Agent 是导致硅谷 [[tokenmaxxing]] 现象的技术驱动力。它们的自动化特性使得 Token 消耗模式发生了根本性改变：

- **过去**：受限于人类打字速度和操作频率。
- **现在**：Agent 24/7 不停运行，消耗量呈指数级增长。

例如，风投人 Tomasz Tunguz 在引入多个 Agent 后，日均推理账单飙升至 92 美元。

## 成本特征

根据 [[agentic-coding-token消耗分析]]，coding agent 的成本结构与传统对话任务根本不同：

- 输入输出比高达 154:1
- 同一任务多次运行消耗差异可达 2 倍
- 更多 token 消耗不保证更高准确率（[[token效率悖论]]）

## 代表产品

- [[claude-code]]：Anthropic 推出的 AI 编程代理工具
- Codex：OpenAI 的编程 Agent 产品
- [[cursor]]：AI 编程赛道明星创业公司产品
- [[openhands-agent]]：开源 Agent 框架，用于学术研究