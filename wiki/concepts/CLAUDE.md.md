---
type: concept
title: CLAUDE.md
tags: [documentation, knowledge-management, ai-programming]
related: [claude-code, boris-cherny, 100%-ai-编程]
created: 2026-01-03
updated: 2026-01-03
sources: ["30天没写一行代码，他却赚了10亿美金！.md"]
---

# CLAUDE.md

**CLAUDE.md** 是一种专为 AI 编程工具（如 [[Claude Code]]）设计的团队共享上下文文件规范。它被视为 AI 时代的“活文档”，用于记录项目规范、常见错误及其修正方案，并随代码库一同演进。

## 工作机制
- **版本控制**：文件被提交到 Git 仓库，与代码同步更新。
- **动态更新**：每当 AI 犯错或团队成员发现特定模式的问题，就会将修正方案添加到 `CLAUDE.md` 中。
- **自动化集成**：结合 GitHub Action（如 `/install-github-action`），可以在代码审查（PR）阶段自动将经验教训写入文档。

## 核心价值
- **解决“遗忘”问题**：AI 模型在长对话或新会话中可能遗忘之前的指令。`CLAUDE.md` 提供了持久化的项目级记忆。
- **团队知识沉淀**：将个人的隐性知识转化为团队共享的显性规范。
- **持续优化**：通过“错误 -> 记录 -> 避免”的循环，AI 在特定项目上的表现会随时间推移而越来越好。

## 实践案例
[[Boris Cherny]] 的团队每周多次向 `CLAUDE.md` 贡献内容。在审查同事的 PR 时，他们会标记 `@.claude`，将特定修正作为 PR 的一部分记录下来，确保 AI 下次不再重蹈覆辙。