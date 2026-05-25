---
type: concept
title: "AGENTS.md / CLAUDE.md"
created: 2026-05-24
updated: 2026-05-24
tags: [ai编程, 智能体配置, 文件规范]
related: [harness-工程, claude-code, codex, cursor]
sources: ["ai成功率从20%飙到100%！只需一个harness文件.md"]
---
# AGENTS.md / CLAUDE.md

AGENTS.md 和 CLAUDE.md 是放置在代码仓库根目录的 Markdown 文件，作为 AI 编程智能体的**"项目宪法"**，在智能体启动时自动读取并注入系统提示词。

## 命名约定

| 阵营 | 文件名 | 适用工具 |
|------|--------|---------|
| OpenAI | `AGENTS.md` | [[codex]]、[[cursor]] |
| Anthropic | `CLAUDE.md` | [[claude-code]] |

## 核心功能

将项目约定从"反复重申"变为"启动时自动注入"，解决智能体不知道项目约定而瞎写代码的问题（风格不一致、用错包管理器、随手执行破坏性命令）。

## 最小内容结构

一个有效的 AGENTS.md / CLAUDE.md 至少包含三块：

1. **项目说明**：技术栈、架构约定、目录结构
2. **禁止操作**：不允许执行的命令和操作
3. **完成定义**：任务完成的判定标准（退出码不为 0 就不算完成）

## 实验验证

[[openai|OpenAI]] [[codex]] 团队的百万行实验表明，仅在仓库根目录添加不到 100 行的 AGENTS.md 文件，即可显著提升智能体编程成功率。

## 在 Harness 工程中的角色

AGENTS.md / CLAUDE.md 是 [[harness-工程|Harness 工程]] **指令子系统**的核心载体，同时也是**状态子系统**约定的承载位置——在其中固化"新会话第一件事读 PROGRESS.md"等规则。

## 与 PROGRESS.md 的配合

- AGENTS.md 定义"做什么、不做什么、怎么算完成"
- PROGRESS.md 记录"做到了哪里、还有什么没做"
- 两者配合解决 [[ai编程三大致命失败模式|跨会话失忆]] 问题