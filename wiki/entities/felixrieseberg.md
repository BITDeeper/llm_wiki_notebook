---
type: entity
title: Felix Rieseberg
tags: [人物, 安全研究, 逆向工程, claude-code]
related: [claude-code, token刺客]
created: 2026-03-31
updated: 2026-03-31
sources: ["claude深夜长出「双手」，接管电脑狂飙代码！额度光速耗尽，全网哀嚎.md"]
---

# Felix Rieseberg

Felix Rieseberg 是一位开发者，因在 [[claude-code]] 额度危机中通过逆向工程揭露底层 Bug 而受到关注。

## 关键发现

### Token 刺客事件
2026年3月，当全球 Claude Code 用户遭遇额度瞬间耗尽的危机时，Felix 通过中间人攻击（MITM）对 Claude 的二进制文件进行了深入分析。他发现了导致成本异常飙升的两个根本原因：

1. **Bun 运行时 Bug**：Claude 独立 CLI 中定制的二进制文件存在字符串替换问题，导致缓存频繁失效。
2. **Resume 缓存崩溃**：使用 `--resume` 命令恢复会话时，缓存机制 100% 会崩溃。

### 技术影响
这两个 Bug 导致 Token 消耗成本暴涨 10-20 倍。Felix 指出，临时解决方案是使用 `npx @anthropic-ai/claude-code` 运行，或者回退到牺牲大量功能的老版本。他的发现迫使 Anthropic 承认并着手修复这些严重的工程缺陷。