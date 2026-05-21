---
type: concept
title: CLAUDE.md (项目记忆)
tags: [practice, context-management, claude-code, ai-programming, knowledge-management, workflow]
related: [claude-code, harness-engineering, skills-hooks, boris-cherny, runtime-agent-os]
created: 2026-05-01
updated: 2026-05-06
sources: ["撕开claude-code真相：让它好用的98.4%，是工程不是ai.md", "claude-code之父首曝：「养蛊式」开发，质量碾压老架构师.md"]
---

# CLAUDE.md (项目记忆)

**CLAUDE.md** 是放置在项目根目录下的特殊 Markdown 文件，充当项目的“外挂大脑”或“施工手册”。它是 [[Claude Code]] 工程范式中的核心组件，也是 [[boris-cherny]] 推荐的将 AI 工具转化为高效队友的关键资产。

## 核心功能

Claude Code 会在每次会话开始时自动读取此文件。它主要解决了 AI 会话的“失忆”问题：由于 AI 对话上下文在会话结束后即清零，`CLAUDE.md` 提供了一种持久化的记忆机制，确保新会话能继承项目特定的知识。

它充当了 AI 的“入职手册”或“项目大脑”，使得 AI 能够像一位熟悉项目历史的老员工一样工作，而不是每次都需要从头解释项目背景。

## 建议内容

一个典型的 CLAUDE.md 通常包含以下维度的信息：

- **架构规则**：项目的目录结构、模块依赖关系。
- **代码风格**：项目遵循的命名规范、格式化标准。
- **常用命令**：构建、测试、部署的快捷命令。
- **测试要求**：运行测试的命令和覆盖率标准。
- **边界限制**：明确哪些文件或模块不应被触碰。
- **历史坑**：过去遇到过的常见错误及其解决方案，防止重蹈覆辙。

## 维护习惯

为了保持文档的有效性，建议遵循以下工作流：

- **即时更新**：一旦在对话中纠正过一次错误，应立即让 AI 将经验补进 `CLAUDE.md`。
- **定期清扫**：每完成一轮开发，可运行“技术债清扫”，让 AI 列出可顺手解决的小问题并更新文档。

## 价值与理论关联

`CLAUDE.md` 是构建 [[Harness Engineering]] 中“上下文管理”环节的低成本、高杠杆解决方案。通过将隐性知识显性化，它解决了 AI 模型“健忘”和“缺乏上下文”的问题。

在 [[runtime-agent-os]] 架构中，`CLAUDE.md` 实际上充当了**记忆层**的具体实现形式，使得 AI 智能体具备了跨越会话的长期记忆能力。