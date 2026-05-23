---
type: concept
title: Prompt瘦身与模型进化
created: 2026-05-17
updated: 2026-05-17
tags: [system-prompt, 模型进化, anthropic, 训练方法]
related: [claude-4-7-system-prompt, anthropic]
sources: ["23个隐藏工具曝光！anthropic公开claude驯化手册.md"]
---
# Prompt瘦身与模型进化

通过分析 system prompt 中被删除的规则来追踪模型行为改进的分析方法论。

## 核心逻辑

每删一条规则意味着 [[anthropic|Anthropic]] 已确信新模型在训练层面解决了某个行为问题，不再需要外部规则来矫正。被删除的规则是模型从"需要外部管控"到"内在已修复"的进化证据。

## Claude 4.7 中的典型案例

- **删除禁止星号动作表达**：早期 Claude 会在对话中突然来一句"若有所思地点头"或"饶有兴趣地凑上前"，像在演舞台剧。此行为已通过训练修复。
- **删除禁止口头禅规则**：早期 Claude 几乎每隔几句就来一个"说真的，我觉得……"，此问题已通过训练修复。
- **"developer platform"更名为"Claude Platform"**：去掉"developer"定语，意味着平台定位不再只面向开发者。

## 方法论价值

这些 prompt 的"瘦身记录"构成了一部模型被"驯服"的过程记录。对用户而言，这意味着正在用的 AI 比上一个版本更"原生地"懂得如何做一个正常的对话者。这一分析方法为理解 AI 模型的隐性进步提供了独特的窗口。