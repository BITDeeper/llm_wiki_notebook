---
type: concept
title: Codex Subagent
created: 2026-05-25
updated: 2026-05-25
tags: [codex, 多agent, 沙盒, 编排]
related: [codex, codex自我蒸馏, 1-n-agent调度]
sources: ["codex自我蒸馏玩法火了！openai员工亲授：复制粘贴就能让ai消灭重复劳动.md"]
origin_date: 2026-03-01
---
# Codex Subagent

2026年3月正式上线的 [[codex|Codex]] 功能，由一个管理Agent协调多个专门编码Agent，每个Agent在独立的云端沙盒中运行。

## 功能特点

- 管理Agent负责任务拆解和协调。
- 多个专门编码Agent各自在独立云端沙盒中运行，互不干扰。
- 在 [[codex自我蒸馏|自我蒸馏]] 中作为四层打包分类之一：需要专门角色去搞定的调查任务，派Subagent处理。

## 与现有概念的关系

Codex Subagent 是 [[1-n-agent调度]] 趋势在OpenAI产品中的具体落地，实现了从1:1对话到1:N调度的范式转换。与 [[agent-view|Claude Code的Agent View]] 形成产品级对标。