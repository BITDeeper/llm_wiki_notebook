---
type: concept
title: Sentinel String Bug
created: 2026-05-05
updated: 2026-05-05
tags: [billing, bug, anthropic, prompt-cache]
related: [claude-code, anthropic, prompt-cache]
sources: ["5月5日5点55分，gpt-5.5自己选客人开派对！codex反超claude-code.md"]
---

# Sentinel String Bug

**Sentinel String Bug**（哨兵字符串 Bug）是 [[Anthropic]] 的 [[Claude Code]] 在 2026 年 3 月至 4 月期间发生的一起严重技术事故，直接导致了大量用户配额被异常耗尽，引发了社区信任危机。

## 事故原因
- **技术根因**：Claude Code 的二进制文件中包含一个用于追踪计费状态的内部 `sentinel` 字符串。每次 API 请求时，系统会对这个字符串进行替换操作。
- **后果**：这个替换操作破坏了 [[Prompt Cache]]（提示缓存）的前缀完整性。根据 Anthropic 的计费规则，未缓存的 Token 成本是缓存 Token 的 10 到 20 倍。
- **触发条件**：简单的 Hello 消息、单条 Prompt 甚至 `--resume`（恢复会话）操作都会导致整个对话历史被重新计费。

## 用户影响
许多用户报告称，在几分钟内耗尽了数小时的配额。例如，有用户在 3 分钟内用掉了 5 小时 Session 的 60% 配额。这一现象导致 Reddit 和 Hacker News 上出现大量投诉帖。

## 社区反应
由于 Anthropic 官方初期反应迟缓，开发者社区通过反编译二进制文件和抓取 API 流量，自行找出了问题的根因。这一事件被视为 Anthropic 工程稳定性的重大失误，间接促成了用户向 [[Codex]] 的迁移。