---
type: concept
title: AskUserQuestion
created: 2026-06-10
updated: 2026-06-10
tags: [claude-code, 工具, 需求工程, ai编程]
related: [claude-code, thariq-shihipar, 从监工到产品经理]
sources: ["rss/fable-5一天干完两个月，这类工程师更值钱了.md"]
---
# AskUserQuestion

[[claude-code|Claude Code]]内置工具，由团队成员[[thariq-shihipar|Thariq Shihipar]]开发。功能是让AI在动手写代码前反过来采访用户——先抛一串选择题，把实现细节、边界情况、取舍问清楚，最后落成一份SPEC.md。

## 设计理念

> "模型能自己跑得越久，这种事先问清楚的能力就越重要。"

当模型具备长时间自主工作能力时，需求定义的准确性直接决定产出质量。AskUserQuestion体现了"先问后做"的新协作模式——不是用户给AI下指令，而是AI帮用户想清楚自己到底要什么。

## 工作流程

1. 用户提出任务
2. AI通过AskUserQuestion反采用户
3. 澄清实现细节、边界情况、取舍
4. 落成SPEC.md规格文档
5. 基于明确规格开始执行

## 与最佳实践的关系

官方最佳实践建议"别一上来就让AI写代码，先让它探索、再让它计划、最后才动手"。AskUserQuestion是这一方法论的具体工具实现。