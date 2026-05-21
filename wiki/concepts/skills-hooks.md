---
type: concept
title: Skills & Hooks (技能与钩子)
tags: [practice, automation, workflow]
related: [claude-code, harness-engineering, boris-cherny]
created: 2026-05-01
updated: 2026-05-01
sources: ["撕开claude-code真相：让它好用的98.4%，是工程不是ai.md"]
---

# Skills & Hooks (技能与钩子)

这是 [[Claude Code]] 及类似 AI 工程系统中用于将“聊天”转变为“自动化系统”的两种关键机制。

## Skills (技能)
**定义**：将重复性工作流固化为可复用的指令或脚本。

**原则**：[[Boris Cherny]] 提出，“如果你每天做某件事超过一次，把它变成 skill 或 command。”

**示例**：
- 自动化 Code Review 流程。
- 生成标准化的 Commit Message。
- 撰写发布说明。

## Hooks (钩子)
**定义**：确定性的代码级护栏，在 AI 犯错前通过强制检查拦截错误。

**特点**：
- 不依赖 AI 自己的判断力。
- 由确定性代码（如 Linter 或脚本）强制执行。
- 是 [[确定性工程基础设施]] 中最有杠杆的部分。

**价值**：
Hooks 使得人类工程师敢于让 AI “无人监督”地运行，因为出错的边界已经被代码卡死了。这体现了将人类判断力翻译成机器可读约束的过程。