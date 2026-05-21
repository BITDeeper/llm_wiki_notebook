---
type: entity
title: CodeBrain-1
tags: [agent-framework, coding, planning, feeling-ai]
related: [feeling-ai, terminal-bench-2-0, gpt-5-3-codex, useful-context-searching, validation-feedback]
created: 2026-02-11
updated: 2026-02-11
sources: ["硬刚openai！中国团队杀入agentic-ai全球前二，一战封神.md"]
---

# CodeBrain-1

[[CodeBrain-1]] 是由 [[Feeling AI]] 开发的具备动态规划与策略调整能力的智能体框架。它在权威基准测试 [[Terminal-Bench 2.0]] 中以 72.9% 的成绩排名全球第二，仅次于 [[OpenAI]] 的官方 [[Simple Codex]] 框架，超越了基于 [[Claude Opus 4.6]] 的 Droid 框架。

## 核心能力

### 1. 动态规划与策略调整
不同于让 AI 直接“随意发挥”，[[CodeBrain-1]] 负责在约束条件内动态生成可执行程序，并根据实际反馈不断调整策略。
- **个体层面**：角色根据自身目标、记忆和观察结果，持续调整日程和行为。
- **群体层面**：组织形成共享记忆，并基于外部条件变化调整整体规划（如游戏中的战术演化）。

### 2. Useful Context Searching（有效上下文检索）
为了解决 LLM 在复杂任务中的幻觉问题，[[CodeBrain-1]] 利用 [[LSP]] (Language Server Protocol) 进行精准检索。
- **机制**：根据当前任务需求和已有 Code Base 索引，仅检索真正相关的代码签名、文档和使用实例。
- **效果**：减少噪音，提高关联信息检索效率，辅助代码生成过程。

### 3. Validation Feedback（验证反馈机制）
为了提高代码修复效率，[[CodeBrain-1]] 利用 [[LSP Diagnostics]] 进行错误定位。
- **机制**：当出现错误时，不仅获取报错信息，还额外获取调用示例、相关文档及参数使用方式。
- **效果**：有效缩短 Generate -> Validate 的循环过程，实现更快的错误定位和修复。

## 性能表现

### Terminal-Bench 2.0 排名
- **全球排名**：第 2 名
- **成绩**：72.9% (70.3%)
- **对比**：
    - 第 1 名：Simple Codex (GPT-5.3-Codex) — 77.3%
    - 第 3 名：Droid (Claude Opus 4.6) — 69.9%

### 成本效率
在 Python 任务子集中，相比于 [[Claude Code]]，[[CodeBrain-1]] 消耗的总 Token 量减少了超过 15%。这表明其通过精准调度（仅在关键时刻激活深层思考）显著降低了用户成本。

## 应用场景
- **游戏 Bot 实时驱动**：理解自然语言指令（如“建个房子”），规划行动方案（收集资源、清理环境），并生成执行脚本。
- **群体战术演化**：基于群体记忆（如玩家习惯路线）动态调整敌对 AI 的部署策略和行为表达。