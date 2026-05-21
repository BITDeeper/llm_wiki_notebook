---
type: concept
title: Prompt Request
tags: [workflow, code-review, ai-programming, collaboration]
related: [peter-steinberger, moltbot, pull-request, task-execution-paradigm]
created: 2026-01-29
updated: 2026-01-29
sources: ["全球爆红后，clawdbot之父2小时深度专访：退休3年后我杀回江湖.md"]
---

# Prompt Request

## 定义
**[[Prompt Request]]**（Prompt PR）是一种适应 AI 编程时代的代码审查与协作新范式。它主张不再审查 Pull Request 中的代码本身，而是审查生成该代码的 Prompt（指令）。

## 背景与动机
在传统的软件开发流程中，Pull Request (PR) 是代码合并前的标准审查步骤。然而，在 AI 辅助编程（特别是使用 AI Agent）的背景下，代码往往是由 AI 根据人类的指令生成的。

[[Peter Steinberger]] 指出，对于修复小 bug 或简单功能的 PR，人工审查代码细节的时间成本极高（可能是直接让 AI 修复的 10 倍）。因此，他更倾向于审查生成代码的“意图”和“指令”，即 Prompt。

## 工作流程
1. **需求提出**：开发者或产品经理编写详细的 Prompt，描述需要实现的功能或修复的问题。
2. **指令审查**：审查者（如 Tech Lead）检查 Prompt 是否准确描述了需求，而非检查生成的代码逻辑。
3. **Agent 执行**：审查通过的 Prompt 被直接输入给 AI Agent（如 Codex），由 Agent 自动生成代码、测试并合并。

## 优势
- **效率提升**：跳过了对 AI 生成代码的微观审查，专注于高层意图的正确性。
- **利用 AI 能力**：充分发挥 AI Agent 在 [[闭环]]（自我验证）方面的优势，只要测试通过，即可信任代码质量。
- **降低认知负荷**：将关注点从“怎么做”转移到“做什么”，符合 [[任务执行范式]] 的转变。

## 潜在风险
- **意图偏差**：如果 Prompt 编写不准确，AI 可能会生成逻辑正确但功能错误的代码。
- **技术债积累**：缺乏对代码细节的人工审查，可能导致系统架构逐渐腐化，需要依赖定期的架构审查来平衡。