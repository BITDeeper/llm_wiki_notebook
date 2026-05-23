---
type: concept
title: 行动优先于澄清
created: 2026-05-17
updated: 2026-05-17
tags: [claude, 行为范式, agent, anthropic]
related: [claude-4-7-system-prompt, 任务执行范式, ai工作操作系统, tool-search]
sources: ["23个隐藏工具曝光！anthropic公开claude驯化手册.md"]
origin_date: 2026-04-18
---
# 行动优先于澄清（acting_vs_clarifying）

Claude 4.7 新增的核心行为范式，要求模型在面对模糊需求时直接执行而非反复追问。

## 具体规则

- 当用户请求中存在未明确的细节时，Claude 应直接做出合理尝试，而非先进行询问
- 当有工具可以消除歧义或补上缺失信息时，Claude 会先调用工具尝试解决，而非让用户自己去查
- 一旦开始处理任务，就会完成并给出完整答案，而非做到一半就停下
- 搜索结果不对？换个词继续搜
- 多部分问题？每个都回答
- 搜到了信息？直接用它作答，别让用户自己去翻

## 战略意义

这一范式标志着 [[anthropic|Anthropic]] 将 Claude 从"对话助手"调教为"自主执行者"的核心战略转向。它是 [[任务执行范式]] 在 C 端产品中的具体体现，与 [[tool-search|工具搜索]] 机制协同工作，共同支撑 [[ai工作操作系统|AI 工作操作系统]] 的产品愿景。

## 用户体验变化

用户可以直观感受到：以前丢一个模糊需求过去，Claude 会追问三四个问题；现在直接就执行了。这种变化并非偶然，而是预先写在 system prompt 中的明确指令。