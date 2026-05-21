---
type: entity
title: Cursor Blame
created: 2026-03-14
updated: 2026-03-14
tags: [tool, cursor, analytics]
related: [cursor, cursorbench]
sources: ["拜拜了swe-bench！cursor刚发了个ai-coding评测基准，难哭claude.md"]
---

# Cursor Blame

Cursor Blame 是 [[cursor]] 平台内置的代码追溯工具。它可以追踪代码仓库中的某一段代码是由哪个 AI 请求生成的。

## 作用

该工具是构建 [[cursorbench]] 数据集的基础。通过它，Cursor 能够获取成对的“开发者请求 + 最终提交代码”的真实数据，从而确保评测基准的任务来源于真实的开发场景，而非人工构造的谜题。