---
type: entity
title: oh-my-codex
tags: ["tool", "ai-workflow", "automation", "工具", "工作流", "自动化"]
related: [sigrid-jin, claw-code, ai-洗代码, openai-codex]
created: 2026-04-01
updated: 2026-05-08
sources: ["claude-code源码「换壳」反杀，全网疯狂克隆！anthropic封杀失败.md", "封不住！claude-code爆改python版加冕最快10万星，且clone且珍惜.md"]
---

# oh-my-codex (OmX)

oh-my-codex 是一个基于 [[OpenAI Codex]] 的自动化代码生成工作流，由 [[Sigrid Jin]] 在 [[Claude Code]] 源码泄露事件中使用，用于驱动大规模代码重写。

## 功能与模式

该工作流利用 Codex 模型的能力，支持多种运行模式以实现端到端的代码编排：

- **$team 模式**：进行并行的代码审查。
- **$ralph 模式**：运行带有架构师级别验证的持续执行循环。

## 应用案例

在 2026 年 3 月 31 日凌晨，Sigrid Jin 使用 OmX 在数小时内将 51.2 万行 TypeScript 代码重写为可运行的 Python 代码树（包括测试用例）。这一过程完全由 AI 驱动，从读取框架结构到生成代码，实现了高度的自动化。

## 技术角色与意义

oh-my-codex 充当了“[[金蝉脱壳]]”策略中的核心技术引擎。它使得开发者能够在极短时间（一夜之间）完成大规模代码库的逻辑复刻，而无需手动逐行编写。

- **降低门槛**：极大地降低了 [[AI 洗代码]] 的门槛，使得规避版权检测变得高效且可行。
- **协作能力**：展示了 AI 智能体在复杂软件工程任务中的协作能力，是 [[Harness Engineering]] 的具体实践案例。