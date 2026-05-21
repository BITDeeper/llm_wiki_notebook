---
type: entity
title: claw-code
tags: [open-source, ai, agent, python, 开源, 编程工具]
related: [claude-code, sigrid-jin, anthropic, oh-my-codex, openclaw, ai-洗代码, xai]
created: 2026-04-01
updated: 2026-05-08
sources: ["claude-code源码「换壳」反杀，全网疯狂克隆！anthropic封杀失败.md", "封不住！claude-code爆改python版加冕最快10万星，且clone且珍惜.md"]
---

# claw-code

claw-code 是由哥伦比亚大学学生 [[Sigrid Jin]] 创建的开源项目，旨在通过 [[净室设计]] 原则复刻 [[claude-code]] 的核心架构。该项目是 [[Claude Code]] 的 Python 重写版本，诞生于 Claude Code 源码泄露事件之后。

## 项目起源

该项目诞生于 2026 年 3 月 31 日凌晨，是对 Claude Code 源码泄露事件的直接回应。当 [[Anthropic]] 因源码泄露动用 [[DMCA]] 法律武器大规模下架 GitHub 仓库时，Sigrid Jin 采用了“[[金蝉脱壳]]”策略，利用 [[oh-my-codex]] 工作流和 OpenAI Codex，将 Claude Code 的逻辑从原始的 TypeScript 代码完全重写为 Python。

## 技术特征

- **语言**：Python（后续计划推出 Rust 重写版本）。
- **架构复刻**：保留了 Claude Code 的 AI 智能体框架模式，包括任务编排和上下文管理逻辑。逻辑架构与 Claude Code 一致，但代码实现完全不同。
- **合规性**：声称不包含任何一行原始 TypeScript 代码，仅复刻架构逻辑，以规避版权风险。

## 社区反响

- **增长速度**：发布 2 小时内获得 5 万 Stars，24 小时内突破 10 万 Stars，创下 GitHub 历史记录。
- **社区规模**：Discord 群组在一天内涌入 5000 人。
- **法律状态**：截至发稿时，Anthropic 和 GitHub 未联系作者，项目仍保持活跃。

## 外部支持

[[xAI]] 团队（马斯克领导）向该项目提供了 Grok 积分支持，以协助其开发和运行。

## 意义

claw-code 的存在证明了在 AI 辅助下，软件逻辑可以快速在不同语言间迁移并规避基于文本匹配的版权检测。它被视为 [[ai-洗代码]] 现象的极端案例。